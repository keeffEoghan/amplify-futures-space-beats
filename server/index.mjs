process.title = process.env.npm_package_config_server_name;

import { totalmem } from 'os';
import { basename, dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createServerHTTP } from 'http';
import { Server as IO } from 'socket.io';
import '@tensorflow/tfjs-node';
import musicVAE from '@magenta/music/node/music_vae.js';
import ntp from 'socket-ntp';

const { stringify } = JSON;

const json = (v) => stringify(v, null, 0);

console.log('Total RAM in GB', totalmem()/(1024**3));

const { MusicVAE } = musicVAE;
const cache = { scores: [] };
const idle = { id: null, wait: 1e4 };
const port = process.env.npm_package_config_socket_port || 8080;
const root = basename(dirname(fileURLToPath(import.meta.url)));
const app = express();
const serverHTTP = createServerHTTP(app);

app.use(express.static('dist'));
app.get('/', (req, res) => res.sendFile(root+'/dist/index.html'));

const io = new IO(serverHTTP, {
  serveClient: false,
  cors: { origin: true, methods: ['GET', 'POST'] }
});

/**
 * Get a pre-trained model from the index:
 * - `trio_16bar`: A 16-bar, 'trio' model for melody, bass, and drums, with a
 *   4-step conductor level. This is a very large model that should be good for
 *   both accurate reconstruction and good sampling. Because of its size, we
 *   recommend only using this checkpoint locally (i.e. on a Node server), and
 *   not on the client size.
 * - `trio_4bar`: A 4-bar, 'trio' model for melody, bass, and drums, with a
 *   4-step conductor level. Trained with a strong prior (low KL divergence),
 *   which is better for sampling. Less accurate, but smaller in size than full
 *   model. Quantized to 1-byte weights.
 * - `trio_2bar`: Not listed in the index but appears in [the demo](https://github.com/magenta/magenta-js/blob/a97624c7f30b928dd4dd7f15b5545047de6bdbb9/music/demos/music_vae.ts#L35).
 *
 * @see [JSON index](https://goo.gl/magenta/js-checkpoints-json)
 * @see [Markdown index](https://github.com/magenta/magenta-js/tree/master/music/checkpoints#table)
 */
// const musicVAETrio = new MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/trio_16bar');
// const stepsPerQuarter = 16;
const musicVAETrio = new MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/trio_4bar');
const stepsPerQuarter = 4;
// const musicVAETrio = new MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/trio_2bar');
// const stepsPerQuarter = 2;
const qpm = 120;

/**
 * An arena defined by 0-4 `tips`, each with a `position` and `score`:
 * - With 0/1/3 `tips`: model's idle as it's unclear how to interpolate.
 * - With 2 `tips`: the model can be linearly interpolated.
 * - With 4 `tips`: the model can be bi-linearly interpolated.
 */
const arena = { tips: [], splits: 5, grid: null };

function clean() {
  console.warn('Cleaning up');

  try {
    musicVAETrio.dispose();
    console.log('Cleaned up');
  }
  catch(e) {
    console.warn('Error cleaning up', json(e), json(e?.stack));
  }
}

async function toArena() {
  const { tips, splits } = arena;
  const { scores } = cache;
  let l = 0;

  tips.every((tip, t) => {
    const score = tip?.score;

    score && (scores[l++] = score);

    return (t < 3);
  });

  if((scores.length = l) === 4) {
    /**
     * Convert the corners from clockwise order, to row-major order in the
     * expected layout for the model:
     *
     * @example Clockwise order; `s0, s1, s3, s2`:
     *   s0 . . s1
     *    . . . .
     *    . . . .
     *   s3 . . s2
     *
     * @example Row-major order in the expected layout; `s0, s2, s1, s3`:
     *   s0 . . s2
     *    . . . .
     *    . . . .
     *   s1 . . s3
     *
     * @see [BeatBlender Github](https://github.com/googlecreativelab/beat-blender/blob/af42ce5ce4fdcfc981b3dc7f84cc70ee7d9302b3/js/index.js#L321)
     */
    const [s0, s1, s3, s2] = scores;

    // scores[0] = s0;
    scores[1] = s2;
    scores[2] = s1;
    scores[3] = s3;
  }
  else if(l !== 2) { return (arena.grid = null); }

  const grid = arena.grid = await musicVAETrio.interpolate(scores, splits);

  /**
   * Refer any tip melody reconstructions to the given tip melodies.
   * Tip cell indexes are `[0, splits-1, (splits*splits)-1, splits*(splits-1)]`.
   *
   * @example
   *   3 splits: [0, 2, 8, 6]
   *   4 splits: [0, 3, 15, 12]
   *   5 splits: [0, 4, 24, 20]
   *   6 splits: [0, 5, 35, 30]
   */
  grid[0] = 0;
  grid[splits-1] = 1;

  if(l === 4) {
    grid[(splits*splits)-1] = 2;
    grid[splits*(splits-1)] = 3;
  }

  return grid;
}

io.on('connect', async (socket) => {
  const { id, nsp: { sockets: { size } } } = socket;

  console.log('connected', id, size);
  ntp.sync(socket);
  idle.id = clearTimeout(idle.id);

  if(!musicVAETrio.isInitialized()) {
    console.log('MusicVAE initialising');
    await musicVAETrio.initialize();
    console.log('MusicVAE initialised');
  }

  io.emit('connected', id, size);
  socket.emit('arena', arena);

  /**
   * Update the `arena` when an artist requests or changes the `score` of a
   * `tip` placed `at` the artist's current position:
   * - If `score` is `null`ish, the `tip` uses a score sampled from the model.
   * - If `score` is another `false`y, the `tip` is removed from the `arena`.
   * - If `score` is given, the `tip` uses the given `score`.
   */
  socket.on('tip', async (tip, at, score) => {
    console.log('tip', tip, at, json(score));

    try {
      score ??= (await musicVAETrio.sample(1))[0];

      const { tips } = arena;

      if(score && at && (0 <= tip) && (tip < 4)) {
        const to = tips[tip] ??= {};

        to.at = at;
        to.score = score;
      }
      else { tips[tip] = null; }

      await toArena();
      io.emit('arena', arena);
    }
    catch(e) { console.warn(json(e), json(e?.stack)); }
  });

  socket.on('splits', async (splits) => {
    try {
      console.log('splits', splits);
      arena.splits = splits;
      await toArena();
      io.emit('arena', arena);
    }
    catch(e) { console.warn(json(e), json(e?.stack)); }
  });

  socket.on('position', (at) => {
    try {
      const { coords, timestamp: t } = at;
      const { longitude: ln, latitude: lt, heading: h, accuracy: a } = coords;

      console.log('position', id, ln, lt, h, a, t, coords);

      // @todo Average positions into a heatmap and broadcast.
      // io.emit('proximity', );
    }
    catch(e) { console.warn(json(e), json(e?.stack)); }
  });

  socket.on('disconnect', (why) => {
    try {
      const { size } = socket.nsp.sockets;

      console.log('disconnected', id, size, why);
      io.emit('disconnected', id, size, why);
      size || (idle.id ??= setTimeout(clean, idle.wait));
    }
    catch(e) { console.warn(json(e), json(e?.stack)); }
  });
});

// Periodically broadcast seek.
((tl, t0) => setInterval(() => io.emit('seek', (Date.now()-t0)%tl, tl), tl*0.2))
  ((1e3*stepsPerQuarter*qpm)/60, Date.now());

io.engine.on('connection_error',
  (e) => console.warn('connection_error', json(e), json(e?.stack)));

const listener = serverHTTP.listen(port, () =>
  console.log(`Socket.io HTTP serving on port ${listener.address().port}`));
