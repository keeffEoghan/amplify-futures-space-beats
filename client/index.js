import { PianoRollSVGVisualizer as VisualSVG }
// import { StaffSVGVisualizer as VisualSVG }
  from '@magenta/music/esm/core/visualizer';

import { io } from 'socket.io-client';
import { dot2 } from '@thi.ng/vectors/dot';
import { cross2 } from '@thi.ng/vectors/cross';
import { sub2 } from '@thi.ng/vectors/sub';
import { add2 } from '@thi.ng/vectors/add';
import { setC2 } from '@thi.ng/vectors/setc';
import { magSq2 } from '@thi.ng/vectors/magsq';
import { clamp01_2 } from '@thi.ng/vectors/clamp';
import { mulN2 } from '@thi.ng/vectors/muln';
import { roundN2 } from '@thi.ng/vectors/round';
import { clamp, clamp01 } from '@thi.ng/math/interval';
import { wrap } from '@thi.ng/math/interval';
import equal from 'fast-deep-equal';
/** @todo AMD assigns `ntp` to `window`, work out how parcel can patch it. */
import 'socket-ntp/client/ntp';

import { scores } from './scores';

console.log('Preset scores', scores);

const { round, sqrt, min, max, abs } = Math;
const { isInteger } = Number;
const { map, forEach, indexOf, fill } = Array.prototype;
const { stringify } = JSON;

const cache = {
  at: [],
  positions: [[], [], [], []],
  lerp: [[], [], [], []],
  sounds: {}
};

const arena = {};
const $body = document.body;
const $join = document.querySelector('.join');
const $arena = document.querySelector('.arena');
const $footer = document.querySelector('footer');
const $edges = $arena.querySelector('.edges');
const $tips = $edges.querySelectorAll('.tip');
const $scores = map.call($tips, ($tip) => $tip.querySelector('.score'));
const $presets = map.call($tips, ($tip) => $tip.querySelector('.presets'));
const $tipGeos = map.call($tips, ($tip) => $tip.querySelector('.tip-geo'));
const $position = $arena.querySelector('.position');
const $geo = $position.querySelector('.geo');
const $player = $arena.querySelector('.player .score');
const $roles = $footer.querySelector('.roles');
const $instruments = $footer.querySelector('.instruments');
const $splits = $footer.querySelector('.splits');
const $socket = document.querySelector('.socket');
const $cell = document.querySelector('.cell');
const $seek = document.querySelector('.seek');
const $sync = document.querySelector('.sync');

// const socket = io(((location.protocol === 'https:')? ':443' : ':80'),
const socket = io(((location.port === '1234')? ':8080' : ''),
  { autoConnect: false });

$presets.reduce((html, $ps) => $ps.innerHTML = html,
  scores.reduceRight((h, s, i) => `<option>${s.sourceInfo.name}</option>`+h,
    '<option selected></option>'));

const soundsURL = 'https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus';
let t0 = Date.now();
let seek = 0;
let sync = 0;
let draft, player, play, instruments, soundsWait;

const visuals = {
  tips: map.call($scores, () => null),
  player: undefined,
  options: {
    noteHeight: 12, noteSpacing: 2, pixelsPerTimeStep: 60,
    noteRGB: '', activeNoteRGB: ''
  }
};

const geo = {
  at: null,
  api: navigator.geolocation, watchID: null,
  options: { enableHighAccuracy: true },
  edges: { t: 0, r: 0, b: 0, l: 0 }
};

/**
 * Inverse linear interpolation between 2 numbers.
 * Given a number `n` and 2 others (`n0`, `n1`); return the linear
 * ratio of `n` in the range (or outside `[0, 1]` if the range is `open`).
 */
function unlerp(n, n0, n1, open = false) {
  const l = n1-n0;
  const to = ((l)? (n-n0)/l : 0.5);

  return ((open)? to : clamp01(to));
}

/**
 * Inverse linear interpolation between 2 points.
 * Given a point `p` and a line of 2 points (`v0`, `v1`); return the linear
 * ratio of `p` in the line (or outside `[0, 1]` if the range is `open`).
 *
 * Let `v0p = p-v0` and `v0v1 = v1-v0`.
 * Projected axis of `v0p` in direction `v0v1`: `a = (v0p.v0v1)/|v0v1|`
 * Ratio of `a` relative to `|v0v1|`: `r = a/|v0v1|`
 * Thus: `r = (v0p.v0v1)/|v0v1|/|v0v1| = (v0p.v0v1)/(|v0v1|^2)`
 */
function unlerp2(p, v0, v1, open = false) {
  const [v0v1, v0p] = cache.lerp;

  sub2(v0v1, v1, v0);

  const v0v1l2 = magSq2(v0v1);
  const to = ((v0v1l2)? dot2(v0v1, sub2(v0p, p, v0))/v0v1l2 : 0.5);

  return ((open)? to : clamp01(to));
}

/**
 * Inverse bilinear interpolation between 4 points.
 * Given a point `p` and a quad of 4 clockwise points (`v0`, `v1`, `v2`, `v3`);
 * return the bilinear ratio of `p` in the quad (or `[null, null]` if the point
 * lies outside of the quad; or outside `[0, 1]` if the range is `open`).
 *
 * @see https://www.shadertoy.com/view/lsBSDm
 * @see http://www.iquilezles.org/www/articles/ibilinear/ibilinear.htm
 */
function unbilerp2(p, v0, v1, v2, v3, to = [-1, -1], open = false) {
  const [v0v1, v0v3, v0p, g] = cache.lerp;
  const [v0v1x] = sub2(v0v1, v1, v0);
  const [v0v3x] = sub2(v0v3, v3, v0);
  const [v0px] = sub2(v0p, p, v0);
  const [gx] = sub2(null, add2(null, sub2(g, v0, v1), v2), v3);
  const k2 = cross2(g, v0v3);
  const k1 = cross2(v0v1, v0v3)+cross2(v0p, g);
  const k0 = cross2(v0p, v0v1);

  // If edges are parallel, it's a linear equation; otherwise, it's quadratic.
  if(abs(k2) < 1e-3) {
    return setC2(to, ((v0px*k1)+(v0v3x*k0))/((v0v1x*k1)-(gx*k0)), -k0/k1);
  }

  let w = (k1*k1)-(4*k0*k2);

  if(!open && (w < 0)) { return fill.call(to, null); }
  else { w = sqrt(abs(w)); }

  const ik2 = 0.5/k2;
  let v = (-k1-w)*ik2;
  let u = (v0px-(v0v3x*v))/(v0v1x+(gx*v));

  if((u < 0) || (1 < u) || (v < 0) || (1 < v)) {
    v = (-k1+w)*ik2;
    u = (v0px-(v0v3x*v))/(v0v1x+(gx*v));
  }

  return setC2(to, ((!u && (u !== 0))? 0.5 : u), ((!v && (v !== 0))? 0.5 : v));
}

function loadAllSounds(program) {
  if(!player) { return; }

  return (cache.sounds[v] ??= Promise.all([
    player.loadAllSamples(program),
    player.loadAllSamples(program, true)
  ]));
}

async function loadArenaSounds() {
  if(!player) { return; }

  const { grid } = arena;
  const l = grid?.length;

  if(!l) { return; }

  soundsWait = await grid.reduce((async (o, v, i) => {
      console.log('Player samples loading', i, l, v);

      for(let tries = 2; tries > 0; tries--) {
        try { return (await player.loadSamples(v)); }
        catch(e) { console.warn('Problem loading samples', tries, e); }
      }
    }),
    null);

  console.log('Player samples loaded', l, grid);

  return soundsWait;
}

/** Get a score by index reference among original tips, or the given value. */
const toScore = (s) =>
  ((isInteger(s))? arena.tips.find((tip) => tip && !(s--)).score : s);

/**
 * Based on tests, the roles in the `MusicVAE` trio model inferences, defined in
 * the `instrument` property of each note, are:
 * - `0`: lead (always with `{ "instrument": 0, "program": 0 }`)
 * - `1`: bass (always with `{ "instrument": 1, "program": 32 }`)
 * - `2`: drums (always with `{ "instrument": 2, "isDrum": true }`)
 *
 * Thus, a particular role can be isolated by changing the `program` to the one
 * specified wherever the `instrument` matches, and removing non-matching notes.
 *
 * @see [Example sampled arena data](../example/arena.json)
 */
function soundsToArena() {
  const role = $roles.selectedIndex;
  const { value: v, selectedIndex: i } = $instruments;
  const program = ((v === 'drums')? v : i);
  const { roles } = arena;
  const full = roles?.[3];

  console.log('Sounds update', role, program, i, roles, full);

  $instruments.classList.toggle('ignore', role > 1);

  if((role < 0) || (i < 0) || !full?.length) { return; }

  arena.grid = ((role > 2)? roles[role]
    : (roles[role] = full.map((s) => {
        const score = toScore(s);

        return {
          ...score,
          notes: score.notes.reduce((notes, note) => {
              (role === note.instrument) && notes.push({ ...note, program });

              return notes;
            },
            [])
        };
      })));
}

function clearPlayer() {
  console.log('Clear arena and stop');

  const { style } = $player;

  style.width = style.height = '';
  visuals.player = void(visuals.player?.clear?.());
  player?.stop?.();
}

async function playSeek() {
  if(!player || !play) { return; }

  console.log('Playing and seeking', play, seek);
  player.isPlaying() && player.stop();
  await soundsWait;
  player.start(play);

  return await new Promise((y, n) => setTimeout(() => {
    try {
      player.seekTo(seek*1e-3);
      console.log('Played and seeked', play, seek);
      y();
    }
    catch(e) { console.warn('Play and seek error', e); }
  }));
}

function playPlayer() {
  const visual = new VisualSVG(play, $player, visuals.options);
  const { width, height } = visuals.player = visual;

  console.log('Player visual interpolation', play);
  $player.setAttribute('viewBox', `0 0 ${max(0, width)} ${max(0, height)}`);

  !player && (play = null);
  console.log('Player audio interpolation', play, player);

  return playSeek();
}

function scoreToPlayer(score, deep) {
  console.log('Score to player', score, play, deep);

  if(score === play) { return; }
  else if(deep && equal(score, play)) { return (play = score); }

  console.log('Score updating player', score, play, deep);

  return ((play = score)? playPlayer : clearPlayer)();
}

function geoArenaToScore() {
  const { at, edges } = geo;
  const { tips, grid, splits } = arena;
  const gl = grid?.length;
  const { positions, at: to } = cache;
  let pl = 0, cell;

  edges.t = edges.l = Infinity;
  edges.r = edges.b = -Infinity;

  tips?.forEach?.((tip, i) => {
    const c = tip?.at?.coords;

    if(!c) { return; }

    const { longitude: ln, latitude: lt } = c;
    const p = setC2(positions[pl++], ln, lt);
    const { t, r, b, l } = edges;

    edges.t = min(t, lt);
    edges.r = max(r, ln);
    edges.b = max(b, lt);
    edges.l = min(l, ln);
  });

  const { t, r, b, l } = edges;
  const coords = at?.coords;
  const ln = coords?.longitude;
  const lt = coords?.latitude;
  const { style: ps } = $position;

  if(!coords || !tips?.length) { ps.left = ps.top = ''; }
  else {
    ps.left = `${unlerp(ln, l, r)*100}%`;
    ps.top = `${unlerp(lt, t, b)*100}%`;
  }

  tips?.forEach?.((tip, i) => {
    const c = tip?.at?.coords;
    const s = $tips[i]?.style;

    if(!s) { return; }
    else if(!c) { return (s.left = s.top = ''); }

    const { longitude: ln, latitude: lt } = c;

    s.left = `${unlerp(ln, l, r)*100}%`;
    s.top = `${unlerp(lt, t, b)*100}%`;
  });

  $edges.style.aspectRatio = ((r-l)/(b-t) || '');
  $cell.textContent = 'not playing';

  if(!coords || !gl) { return; }
  else if(pl === 2) {
    const [p0, p1] = positions;

    cell = unlerp2(setC2(to, ln, lt), p0, p1);
    console.log('Geo between 2 tips', ln, lt, '\n', p0, p1, '\n', cell);
    cell = round(cell*(gl-1));
  }
  else if(pl === 4) {
    unbilerp2(setC2(to, ln, lt), ...positions, to);
    console.log('Geo between 4 tips', ln, lt, '\n', ...positions, '\n', ...to);

    if(to.some((v) => (v == null))) { return; }

    const [u, v] = roundN2(to, mulN2(to, clamp01_2(to, to), splits-1));

    cell = u+(v*splits);
  }
  else { return; }

  const got = grid[cell];
  const score = toScore(got);

  console.log('Geo to score', ln, lt, '\n', cell, gl, pl, '\n', got, score);

  $cell.textContent = `playing ${(score === got)? 'generated' : 'original'
    } ${cell+1} of ${gl} between ${pl} tips`;

  /** If using the source, use the tip at the given number of populated tips. */
  return score;
}

/** Can't seem to serialise Geolocation objects, need to set explicitly. */
function toGeo(g) {
  console.log('position', g);

  const { timestamp, coords: { longitude, latitude, heading, accuracy } } = g;
  const at = geo.at ??= {};
  const coords = at.coords ??= {};
  const ln = coords.longitude = longitude;
  const lt = coords.latitude = latitude;

  coords.heading = heading;
  coords.accuracy = accuracy;
  at.timestamp = timestamp;

  $geo.textContent = $geo.title =
    `${lt.toFixed(8)}\u00a0lt ${ln.toFixed(8)}\u00a0ln`;

  // socket.connected && socket.emit('position', at);

  return scoreToPlayer(geoArenaToScore());
}

async function update(deep) {
  soundsToArena();
  await loadArenaSounds();

  return scoreToPlayer(geoArenaToScore(), deep);
}

function toSync() {
  const to = ntp.offset();

  // console.log('sync', to, sync);
  (to || (to === 0)) && ($sync.textContent = `${round(sync = to)}ms sync`);
}

$roles.addEventListener('change', () => update());
$instruments.addEventListener('change', () => update());

$splits.addEventListener('change', () => {
  const splits = parseInt($splits.value, 10);

  ((!Number.isNaN(splits) && socket.connected)? socket.emit('splits', splits)
    : ($splits.value = arena.splits));
});

$join.addEventListener('click', async () => {
  $body.classList.add('wait');

  try {
    /**
     * Dynamic import within this `click` handler, due to `SoundFontPlayer`
     * using `tone` and starting an `AudioContext` without awaiting a
     * user-interaction.
     */
    const { SoundFontPlayer } = await import('@magenta/music/esm/core/player');
    const data = (await (await fetch(soundsURL+'/soundfont.json')).json());
    const map = data?.instruments;
    const keys = instruments = ((map)? Object.keys(map) : null);

    const html = $instruments.innerHTML = ((!keys)? ''
      : keys.reduce((h, k, i) =>
            h+`<option value="${k}" title="${i}: ${k}">${map[k]}</option>`,
          ''));

    if(!html) { throw "No instruments found"; }

    player = new SoundFontPlayer(soundsURL, undefined, undefined, undefined, {
        run: (note, t) => visuals.player?.redraw?.(note, true),
        stop: async () => {
          const t = Date.now();

          console.log('Player '+((play)? 'looping' : 'stopped'), play, t-t0);
          t0 = t;
          visuals.player?.clearActiveNotes?.();
          (play && player?.start?.(play));
          // playSeek();
        }
      });

    const { api, options } = geo;

    geo.watchID = api.watchPosition(toGeo, (e) => console.warn(e), options);
    socket.connect();
    ntp.init(socket);
    setInterval(toSync, 1e3);
    await update();
    $join.classList.add('hide');
    $arena.classList.remove('hide');
    $footer.classList.remove('hide');
  }
  catch(e) {
    alert("Couldn't join, try reloading the page.");
    $body.classList.remove('wait');
    console.error(e);
  }
});

function toTip($tip, score) {
  const t = indexOf.call($tips, $tip);

  if((t < 0) || (4 <= t)) { return console.warn('Invalid tip', t, $tip); }
  else if(score === undefined) { score = arena.tips?.[t]?.score; }

  const { at } = geo;

  if(!at) { alert('No location found'); }
  else if(!socket.connected) { alert('No connection'); }

  socket.emit('tip', t, at, score);

  return $tip;
}

$arena.addEventListener('click', ({ target: $t }) => {
  if($t.matches('.tip .edit')) {
    const $tip = $t.closest('.tip');

    if($tip.matches('.open')) {
      $tip.classList.remove('open');
      // Force the tip to un-hover.
      $tip.blur();
      $t.blur();
    }
    else {
      forEach.call($tips, ($t) => $t.classList.toggle('open', ($t === $tip)));
      draft = undefined;
    }
  }
  else if($t.matches('.tip.open .score')) {
    console.log('Edit or clear draft score', draft, $t);
  }
  else if($t.matches('.tip.open .clear')) {
    const $tip = toTip($t.closest('.tip'), false);

    $tip?.classList?.remove?.('open');
    // Force the tip to un-hover.
    $tip?.blur?.();
    $t.blur();
    // Clear any selected preset.
    $presets.selectedIndex = -1;
  }
  else if($t.matches('.tip.open .random')) { toTip($t.closest('.tip'), null); }
  else if($t.matches('.tip.open .save')) {
    const $tip = toTip($t.closest('.tip'), draft);

    $tip?.classList?.remove?.('open');
    // Force the tip to un-hover.
    $tip?.blur?.();
    $t.blur();
  }
});

$arena.addEventListener('change', ({ target: $t }) =>
  ($t.matches('.tip.open .presets')) &&
    toTip($t.closest('.tip'), scores[$t.selectedIndex] || false));

socket.on('connect', (id, size) => {
  console.log('connected', id, size);

  const { api, options } = geo;

  geo.watchID ??= api.watchPosition(toGeo, (e) => console.warn(e), options);
  $socket.textContent = 'connected';
});

socket.on('seek', (to, loop) => {
  console.log('seek', to, sync);
  $seek.textContent = `${round(seek = wrap(to+(sync || 0), 0, loop))}ms seek`;
  player?.isPlaying?.() && player.seekTo(seek*1e-3);
});

socket.on('arena', async (to) => {
  console.log('arena', to);

  const { tips, grid, splits } = Object.assign(arena, to);
  const { tips: vs, options } = visuals;

  arena.roles = [, , , grid, ];

  vs.forEach((v, i) => {
    const tip = tips?.[i];
    const score = tip?.score;
    const $svg = $scores[i];
    const $tipAt = $tipGeos[i];

    if($tips[i].classList.toggle('blank', !score)) {
      const { style } = $svg;

      style.width = style.height = $tipAt.textContent = $tipAt.title = '';
      v?.clear?.();
    }
    else {
      const { width, height } = v = vs[i] = new VisualSVG(score, $svg, options);
      const coords = tip?.at?.coords;

      $svg.setAttribute('viewBox', `0 0 ${max(0, width)} ${max(0, height)}`);

      $tipAt.textContent = $tipAt.title = ((!coords)? ''
        : `${coords.latitude.toFixed(8)}\u00a0lt ${
            coords.longitude.toFixed(8)}\u00a0ln`);
    }
  });

  $splits.value = splits;
  update(true);
  $body.classList.remove('wait');
});

socket.on('connect_error', (e) => {
  console.warn('connect_error', e);
  alert('Couldn\'t connect, retry?\n'+e);
  socket.connect();
});

socket.on('disconnect', (id, size) => {
  console.log('disconnected', id, size);

  const { api, watchID } = geo;

  geo.watchID = api.clearWatch(watchID);
  $socket.textContent = 'disconnected';
});
