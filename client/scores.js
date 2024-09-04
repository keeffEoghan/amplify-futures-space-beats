/**
 * The `MIDI` files of `../midi/{parts,tracks}/` converted to `NoteSequence`s
 * via the [`Magenta` hosted online demo](https://magenta.github.io/magenta-js/music/demos/midi_me.html)
 * for expedience.
 *
 * Uniform instruments/parts are changed to use trios, as per:
 * - `0`: lead (always with `{ "instrument": 0, "program": 0 }`)
 * - `1`: bass (always with `{ "instrument": 1, "program": 32 }`)
 * - `2`: drums (always with `{ "instrument": 2, "isDrum": true }`)
 *
 * @todo Check what combinations of tracks in trios these are meant to be in...
 */

import { trim, quantizeNoteSequence } from '@magenta/music/esm/core/sequences';

/** For the `trio_16bar` model. */
// export const totalQuantizedSteps = 2**8;
/** For the `trio_4bar` model. */
export const totalQuantizedSteps = 2**6;
/** For the `trio_2bar` model. */
// export const totalQuantizedSteps = 2**5;

const toScore = (name, tracks) => tracks.reduce((score, track, t) => {
  ((t === 1) &&
    (score = {
      ...score,
      notes: [...score.notes],
      sourceInfo: { ...score.sourceInfo, name }
    }));

  const { notes: sns, totalTime: st } = score;
  const { notes: tns, totalTime: tt } = track;

  sns.push(...tns);
  score.totalTime = Math.max(0, st, tt);

  return score;
});

// From `../midi/trios/`.

export const part_TRIO1_BASS = trim(quantizeNoteSequence({
      "ticksPerQuarter": 96,
      "timeSignatures": [
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        },
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        }
      ],
      "notes": [
        {
          "pitch": 36,
          "velocity": 100,
          "startTime": 0,
          "endTime": 0.75,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 37,
          "velocity": 100,
          "startTime": 0.75,
          "endTime": 2,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 34,
          "velocity": 100,
          "startTime": 2,
          "endTime": 2.75,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 31,
          "velocity": 100,
          "startTime": 2.75,
          "endTime": 4,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 29,
          "velocity": 100,
          "startTime": 4,
          "endTime": 4.75,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 34,
          "velocity": 100,
          "startTime": 4.75,
          "endTime": 6,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 36,
          "velocity": 100,
          "startTime": 6,
          "endTime": 6.75,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 31,
          "velocity": 100,
          "startTime": 6.75,
          "endTime": 8,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        }
      ],
      "totalTime": 8,
      "sourceInfo": {
        "encodingType": "MIDI",
        "parser": "TONEJS_MIDI_CONVERT"
      }
    },
    4),
  0, totalQuantizedSteps);

export const part_TRIO1_DRUMS = trim(quantizeNoteSequence({
      "ticksPerQuarter": 96,
      "timeSignatures": [
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        },
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        }
      ],
      "notes": [
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 0,
          "endTime": 0.2604166666666667,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 0.25,
          "endTime": 0.3125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 0.5,
          "endTime": 0.7552083333333334,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 0.75,
          "endTime": 0.8125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 0.875,
          "endTime": 0.90625,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 1.25,
          "endTime": 1.3125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 1.4947916666666667,
          "endTime": 1.625,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 1.75,
          "endTime": 1.8125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 2.25,
          "endTime": 2.3125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 2.5,
          "endTime": 2.7552083333333335,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 2.75,
          "endTime": 2.8125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 2.875,
          "endTime": 3,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 3.25,
          "endTime": 3.3125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 3.4947916666666665,
          "endTime": 3.625,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 3.75,
          "endTime": 3.8125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 4,
          "endTime": 4.260416666666667,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 4.25,
          "endTime": 4.3125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 4.5,
          "endTime": 4.755208333333333,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 4.75,
          "endTime": 4.8125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 4.875,
          "endTime": 4.90625,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 5.25,
          "endTime": 5.3125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 5.494791666666667,
          "endTime": 5.625,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 5.75,
          "endTime": 5.8125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 6.25,
          "endTime": 6.3125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 6.5,
          "endTime": 6.755208333333333,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 6.75,
          "endTime": 6.8125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 6.875,
          "endTime": 7,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 7.25,
          "endTime": 7.3125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 7.494791666666667,
          "endTime": 7.625,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 7.75,
          "endTime": 7.8125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        }
      ],
      "totalTime": 7.8125,
      "sourceInfo": {
        "encodingType": "MIDI",
        "parser": "TONEJS_MIDI_CONVERT"
      }
    },
    4),
  0, totalQuantizedSteps);

export const part_TRIO1_LEAD = trim(quantizeNoteSequence({
      "ticksPerQuarter": 96,
      "timeSignatures": [
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        },
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        }
      ],
      "notes": [
        {
          "pitch": 80,
          "velocity": 100,
          "startTime": 0,
          "endTime": 4,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 84,
          "velocity": 100,
          "startTime": 4,
          "endTime": 6,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 76,
          "velocity": 100,
          "startTime": 6,
          "endTime": 8,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        }
      ],
      "totalTime": 8,
      "sourceInfo": {
        "encodingType": "MIDI",
        "parser": "TONEJS_MIDI_CONVERT"
      }
    },
    4),
  0, totalQuantizedSteps);

export const part_TRIO2_BASS = trim(quantizeNoteSequence({
      "ticksPerQuarter": 96,
      "timeSignatures": [
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        },
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        }
      ],
      "notes": [
        {
          "pitch": 36,
          "velocity": 100,
          "startTime": 0,
          "endTime": 0.75,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 37,
          "velocity": 100,
          "startTime": 0.75,
          "endTime": 2,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 39,
          "velocity": 100,
          "startTime": 2,
          "endTime": 2.75,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 41,
          "velocity": 100,
          "startTime": 2.75,
          "endTime": 4,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 43,
          "velocity": 100,
          "startTime": 4,
          "endTime": 4.75,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 44,
          "velocity": 100,
          "startTime": 4.75,
          "endTime": 6,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 46,
          "velocity": 100,
          "startTime": 6,
          "endTime": 6.75,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 6.75,
          "endTime": 7.875,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        }
      ],
      "totalTime": 7.875,
      "sourceInfo": {
        "encodingType": "MIDI",
        "parser": "TONEJS_MIDI_CONVERT"
      }
    },
    4),
  0, totalQuantizedSteps);

export const part_TRIO2_DRUMS = trim(quantizeNoteSequence({
      "ticksPerQuarter": 96,
      "timeSignatures": [
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        },
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        }
      ],
      "notes": [
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 0,
          "endTime": 0.2604166666666667,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 0.25,
          "endTime": 0.3125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 0.375,
          "endTime": 0.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 0.5,
          "endTime": 0.7552083333333334,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 0.75,
          "endTime": 0.875,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 0.875,
          "endTime": 0.9375,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 59,
          "startTime": 1.25,
          "endTime": 1.375,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 1.4947916666666667,
          "endTime": 1.625,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 1.9947916666666667,
          "endTime": 2,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 2,
          "endTime": 2.2604166666666665,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 2.25,
          "endTime": 2.3125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 2.5,
          "endTime": 2.7552083333333335,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 2.75,
          "endTime": 2.875,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 2.875,
          "endTime": 2.9375,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 59,
          "startTime": 3.25,
          "endTime": 3.375,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 3.375,
          "endTime": 3.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 3.4947916666666665,
          "endTime": 3.625,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 3.75,
          "endTime": 3.8125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 3.9947916666666665,
          "endTime": 4,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 4,
          "endTime": 4.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 4.25,
          "endTime": 4.375,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 4.5,
          "endTime": 4.755208333333333,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 4.75,
          "endTime": 4.875,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 4.875,
          "endTime": 4.9375,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 59,
          "startTime": 5.25,
          "endTime": 5.375,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 5.494791666666667,
          "endTime": 5.625,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 5.994791666666667,
          "endTime": 6,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 6,
          "endTime": 6.260416666666667,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 6.25,
          "endTime": 6.3125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 6.5,
          "endTime": 6.755208333333333,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 6.75,
          "endTime": 6.875,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 6.875,
          "endTime": 6.9375,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 59,
          "startTime": 7.25,
          "endTime": 7.375,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 7.375,
          "endTime": 7.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 7.494791666666667,
          "endTime": 7.625,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 7.625,
          "endTime": 7.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 7.75,
          "endTime": 7.8125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 7.875,
          "endTime": 8,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 7.994791666666667,
          "endTime": 8,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        }
      ],
      "totalTime": 8,
      "sourceInfo": {
        "encodingType": "MIDI",
        "parser": "TONEJS_MIDI_CONVERT"
      }
    },
    4),
  0, totalQuantizedSteps);

export const part_TRIO2_LEAD = trim(quantizeNoteSequence({
      "ticksPerQuarter": 96,
      "timeSignatures": [
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        },
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        }
      ],
      "notes": [
        {
          "pitch": 75,
          "velocity": 120,
          "startTime": 0,
          "endTime": 0.109375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 73,
          "velocity": 120,
          "startTime": 0.125,
          "endTime": 0.25,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 120,
          "startTime": 0.25,
          "endTime": 0.375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 120,
          "startTime": 0.5,
          "endTime": 0.609375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 120,
          "startTime": 0.75,
          "endTime": 0.875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 79,
          "velocity": 120,
          "startTime": 1,
          "endTime": 1.109375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 73,
          "velocity": 120,
          "startTime": 1.125,
          "endTime": 1.25,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 120,
          "startTime": 1.25,
          "endTime": 1.375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 120,
          "startTime": 1.5,
          "endTime": 1.609375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 120,
          "startTime": 1.75,
          "endTime": 1.875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 75,
          "velocity": 120,
          "startTime": 2,
          "endTime": 2.109375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 73,
          "velocity": 120,
          "startTime": 2.125,
          "endTime": 2.25,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 120,
          "startTime": 2.25,
          "endTime": 2.375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 70,
          "velocity": 120,
          "startTime": 2.375,
          "endTime": 2.4739583333333335,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 120,
          "startTime": 2.5,
          "endTime": 2.609375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 73,
          "velocity": 120,
          "startTime": 2.625,
          "endTime": 2.75,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 65,
          "velocity": 120,
          "startTime": 2.75,
          "endTime": 2.875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 80,
          "velocity": 120,
          "startTime": 3,
          "endTime": 3.109375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 79,
          "velocity": 120,
          "startTime": 3.125,
          "endTime": 3.25,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 73,
          "velocity": 120,
          "startTime": 3.25,
          "endTime": 3.375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 84,
          "velocity": 120,
          "startTime": 3.5,
          "endTime": 3.609375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 120,
          "startTime": 3.625,
          "endTime": 3.75,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 120,
          "startTime": 3.75,
          "endTime": 3.875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 75,
          "velocity": 120,
          "startTime": 4,
          "endTime": 4.109375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 73,
          "velocity": 120,
          "startTime": 4.125,
          "endTime": 4.25,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 120,
          "startTime": 4.25,
          "endTime": 4.375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 120,
          "startTime": 4.5,
          "endTime": 4.609375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 120,
          "startTime": 4.75,
          "endTime": 4.875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 79,
          "velocity": 120,
          "startTime": 5,
          "endTime": 5.109375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 73,
          "velocity": 120,
          "startTime": 5.125,
          "endTime": 5.25,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 120,
          "startTime": 5.25,
          "endTime": 5.375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 120,
          "startTime": 5.5,
          "endTime": 5.609375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 120,
          "startTime": 5.75,
          "endTime": 5.875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 75,
          "velocity": 120,
          "startTime": 6,
          "endTime": 6.109375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 73,
          "velocity": 120,
          "startTime": 6.125,
          "endTime": 6.25,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 120,
          "startTime": 6.25,
          "endTime": 6.375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 70,
          "velocity": 120,
          "startTime": 6.375,
          "endTime": 6.473958333333333,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 120,
          "startTime": 6.5,
          "endTime": 6.609375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 73,
          "velocity": 120,
          "startTime": 6.625,
          "endTime": 6.75,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 65,
          "velocity": 120,
          "startTime": 6.75,
          "endTime": 6.875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 80,
          "velocity": 120,
          "startTime": 7,
          "endTime": 7.109375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 79,
          "velocity": 120,
          "startTime": 7.125,
          "endTime": 7.25,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 73,
          "velocity": 120,
          "startTime": 7.25,
          "endTime": 7.375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 84,
          "velocity": 120,
          "startTime": 7.5,
          "endTime": 7.609375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 120,
          "startTime": 7.625,
          "endTime": 7.75,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 120,
          "startTime": 7.75,
          "endTime": 7.875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        }
      ],
      "totalTime": 7.875,
      "sourceInfo": {
        "encodingType": "MIDI",
        "parser": "TONEJS_MIDI_CONVERT"
      }
    },
    4),
  0, totalQuantizedSteps);

export const part_TRIO3_BASS = trim(quantizeNoteSequence({
      "ticksPerQuarter": 96,
      "timeSignatures": [
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        },
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        }
      ],
      "notes": [
        {
          "pitch": 41,
          "velocity": 47,
          "startTime": 0,
          "endTime": 1.5,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 39,
          "velocity": 27,
          "startTime": 1.5,
          "endTime": 2.5,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 37,
          "velocity": 45,
          "startTime": 2.5,
          "endTime": 3.5,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 36,
          "velocity": 61,
          "startTime": 3.5,
          "endTime": 4,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 43,
          "velocity": 47,
          "startTime": 4,
          "endTime": 5.5,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 44,
          "velocity": 27,
          "startTime": 5.5,
          "endTime": 6.5,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 39,
          "velocity": 45,
          "startTime": 6.5,
          "endTime": 7.5,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 34,
          "velocity": 61,
          "startTime": 7.5,
          "endTime": 8.359375,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        }
      ],
      "totalTime": 8.359375,
      "sourceInfo": {
        "encodingType": "MIDI",
        "parser": "TONEJS_MIDI_CONVERT"
      }
    },
    4),
  0, totalQuantizedSteps);

export const part_TRIO3_DRUMS = trim(quantizeNoteSequence({
      "ticksPerQuarter": 96,
      "timeSignatures": [
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        },
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        }
      ],
      "notes": [
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 0,
          "endTime": 0.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 0.25,
          "endTime": 0.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 0.5,
          "endTime": 0.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 0.75,
          "endTime": 1,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 1,
          "endTime": 1.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 1.25,
          "endTime": 1.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 1.5,
          "endTime": 1.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 1.75,
          "endTime": 2,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 2,
          "endTime": 2.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 2.25,
          "endTime": 2.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 2.5,
          "endTime": 2.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 2.75,
          "endTime": 3,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 3,
          "endTime": 3.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 3.25,
          "endTime": 3.375,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 37,
          "startTime": 3.375,
          "endTime": 3.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 63,
          "startTime": 3.5,
          "endTime": 3.625,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 3.625,
          "endTime": 3.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 3.75,
          "endTime": 4,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 4,
          "endTime": 4.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 4.25,
          "endTime": 4.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 4.5,
          "endTime": 4.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 4.75,
          "endTime": 5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 5,
          "endTime": 5.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 5.25,
          "endTime": 5.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 5.5,
          "endTime": 5.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 5.75,
          "endTime": 6,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 6,
          "endTime": 6.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 6.25,
          "endTime": 6.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 6.5,
          "endTime": 6.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 6.75,
          "endTime": 7,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 7,
          "endTime": 7.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 7.25,
          "endTime": 7.375,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 41,
          "startTime": 7.375,
          "endTime": 7.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 7.5,
          "endTime": 7.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 67,
          "startTime": 7.75,
          "endTime": 7.848958333333333,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 7.875,
          "endTime": 7.9375,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        }
      ],
      "totalTime": 7.9375,
      "sourceInfo": {
        "encodingType": "MIDI",
        "parser": "TONEJS_MIDI_CONVERT"
      }
    },
    4),
  0, totalQuantizedSteps);

export const part_TRIO3_LEAD = trim(quantizeNoteSequence({
      "ticksPerQuarter": 96,
      "timeSignatures": [
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        },
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        }
      ],
      "notes": [
        {
          "pitch": 77,
          "velocity": 100,
          "startTime": 0,
          "endTime": 0.4375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 65,
          "velocity": 100,
          "startTime": 0.5,
          "endTime": 0.6875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 75,
          "velocity": 100,
          "startTime": 0.75,
          "endTime": 0.9375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 68,
          "velocity": 100,
          "startTime": 1,
          "endTime": 1.1875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 73,
          "velocity": 100,
          "startTime": 1.25,
          "endTime": 1.3125,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 100,
          "startTime": 1.375,
          "endTime": 1.4375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 80,
          "velocity": 100,
          "startTime": 1.5,
          "endTime": 1.6875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 100,
          "startTime": 1.75,
          "endTime": 1.9375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 79,
          "velocity": 100,
          "startTime": 2.25,
          "endTime": 2.4375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 75,
          "velocity": 100,
          "startTime": 2.5,
          "endTime": 2.5625,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 100,
          "startTime": 2.625,
          "endTime": 2.6875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 70,
          "velocity": 100,
          "startTime": 2.75,
          "endTime": 2.9375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 75,
          "velocity": 100,
          "startTime": 3,
          "endTime": 3.0625,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 79,
          "velocity": 100,
          "startTime": 3.125,
          "endTime": 3.1875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 73,
          "velocity": 100,
          "startTime": 3.25,
          "endTime": 3.4375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 70,
          "velocity": 100,
          "startTime": 3.5,
          "endTime": 3.6875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 80,
          "velocity": 100,
          "startTime": 3.75,
          "endTime": 3.8125,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 82,
          "velocity": 100,
          "startTime": 3.875,
          "endTime": 3.9375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 79,
          "velocity": 100,
          "startTime": 4,
          "endTime": 4.4375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 65,
          "velocity": 100,
          "startTime": 4.5,
          "endTime": 4.6875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 75,
          "velocity": 100,
          "startTime": 4.75,
          "endTime": 4.9375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 68,
          "velocity": 100,
          "startTime": 5,
          "endTime": 5.1875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 73,
          "velocity": 100,
          "startTime": 5.25,
          "endTime": 5.3125,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 100,
          "startTime": 5.375,
          "endTime": 5.4375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 82,
          "velocity": 100,
          "startTime": 5.5,
          "endTime": 5.6875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 80,
          "velocity": 100,
          "startTime": 5.75,
          "endTime": 6.1875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 79,
          "velocity": 100,
          "startTime": 6.25,
          "endTime": 6.4375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 75,
          "velocity": 100,
          "startTime": 6.5,
          "endTime": 6.5625,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 100,
          "startTime": 6.625,
          "endTime": 6.6875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 70,
          "velocity": 100,
          "startTime": 6.75,
          "endTime": 6.9375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 75,
          "velocity": 100,
          "startTime": 7,
          "endTime": 7.0625,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 79,
          "velocity": 100,
          "startTime": 7.125,
          "endTime": 7.1875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 73,
          "velocity": 100,
          "startTime": 7.25,
          "endTime": 7.4375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 70,
          "velocity": 100,
          "startTime": 7.5,
          "endTime": 7.6875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 80,
          "velocity": 100,
          "startTime": 7.75,
          "endTime": 7.8125,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 82,
          "velocity": 100,
          "startTime": 7.875,
          "endTime": 7.9375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        }
      ],
      "totalTime": 7.9375,
      "sourceInfo": {
        "encodingType": "MIDI",
        "parser": "TONEJS_MIDI_CONVERT"
      }
    },
    4),
  0, totalQuantizedSteps);

export const part_TRIO4_BASS = trim(quantizeNoteSequence({
      "ticksPerQuarter": 96,
      "timeSignatures": [
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        },
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        }
      ],
      "notes": [
        {
          "pitch": 49,
          "velocity": 47,
          "startTime": 0,
          "endTime": 1.5,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 44,
          "velocity": 27,
          "startTime": 1.5,
          "endTime": 2,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 48,
          "velocity": 47,
          "startTime": 2,
          "endTime": 3.5,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 46,
          "velocity": 27,
          "startTime": 3.5,
          "endTime": 4,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 41,
          "velocity": 47,
          "startTime": 4,
          "endTime": 5.5,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 39,
          "velocity": 27,
          "startTime": 5.5,
          "endTime": 6,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 44,
          "velocity": 47,
          "startTime": 6,
          "endTime": 7.5,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 43,
          "velocity": 27,
          "startTime": 7.5,
          "endTime": 8.5,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        }
      ],
      "totalTime": 8.5,
      "sourceInfo": {
        "encodingType": "MIDI",
        "parser": "TONEJS_MIDI_CONVERT"
      }
    },
    4),
  0, totalQuantizedSteps);

export const part_TRIO4_DRUMS = trim(quantizeNoteSequence({
      "ticksPerQuarter": 96,
      "timeSignatures": [
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        },
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        }
      ],
      "notes": [
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 0,
          "endTime": 0.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 0,
          "endTime": 0.125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 0.125,
          "endTime": 0.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 0.25,
          "endTime": 0.375,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 61,
          "velocity": 34,
          "startTime": 0.25,
          "endTime": 0.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 0.375,
          "endTime": 0.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 0.5,
          "endTime": 0.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 0.5,
          "endTime": 0.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 0.5,
          "endTime": 0.625,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 0.625,
          "endTime": 0.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 0.75,
          "endTime": 0.875,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 61,
          "velocity": 34,
          "startTime": 0.75,
          "endTime": 1,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 0.875,
          "endTime": 1,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 1,
          "endTime": 1.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 1,
          "endTime": 1.125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 1.125,
          "endTime": 1.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 1.25,
          "endTime": 1.375,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 61,
          "velocity": 34,
          "startTime": 1.25,
          "endTime": 1.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 1.375,
          "endTime": 1.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 1.5,
          "endTime": 1.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 1.5,
          "endTime": 1.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 1.5,
          "endTime": 1.625,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 1.625,
          "endTime": 1.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 1.75,
          "endTime": 1.875,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 61,
          "velocity": 34,
          "startTime": 1.75,
          "endTime": 2,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 1.875,
          "endTime": 2,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 2,
          "endTime": 2.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 2,
          "endTime": 2.125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 2.125,
          "endTime": 2.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 2.25,
          "endTime": 2.375,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 61,
          "velocity": 34,
          "startTime": 2.25,
          "endTime": 2.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 2.375,
          "endTime": 2.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 2.5,
          "endTime": 2.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 2.5,
          "endTime": 2.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 2.5,
          "endTime": 2.625,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 2.625,
          "endTime": 2.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 2.75,
          "endTime": 2.875,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 61,
          "velocity": 34,
          "startTime": 2.75,
          "endTime": 3,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 2.875,
          "endTime": 3,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 3,
          "endTime": 3.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 3,
          "endTime": 3.125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 3.125,
          "endTime": 3.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 3.25,
          "endTime": 3.375,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 61,
          "velocity": 34,
          "startTime": 3.25,
          "endTime": 3.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 3.375,
          "endTime": 3.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 3.5,
          "endTime": 3.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 3.5,
          "endTime": 3.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 3.5,
          "endTime": 3.625,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 3.625,
          "endTime": 3.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 3.75,
          "endTime": 3.875,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 61,
          "velocity": 34,
          "startTime": 3.75,
          "endTime": 4,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 3.875,
          "endTime": 4,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 4,
          "endTime": 4.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 4,
          "endTime": 4.125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 4.125,
          "endTime": 4.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 4.25,
          "endTime": 4.375,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 61,
          "velocity": 34,
          "startTime": 4.25,
          "endTime": 4.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 4.375,
          "endTime": 4.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 4.5,
          "endTime": 4.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 4.5,
          "endTime": 4.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 4.5,
          "endTime": 4.625,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 4.625,
          "endTime": 4.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 4.75,
          "endTime": 4.875,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 61,
          "velocity": 34,
          "startTime": 4.75,
          "endTime": 5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 4.875,
          "endTime": 5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 5,
          "endTime": 5.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 5,
          "endTime": 5.125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 5.125,
          "endTime": 5.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 5.25,
          "endTime": 5.375,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 61,
          "velocity": 34,
          "startTime": 5.25,
          "endTime": 5.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 5.375,
          "endTime": 5.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 5.5,
          "endTime": 5.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 5.5,
          "endTime": 5.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 5.5,
          "endTime": 5.625,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 5.625,
          "endTime": 5.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 5.75,
          "endTime": 5.875,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 61,
          "velocity": 34,
          "startTime": 5.75,
          "endTime": 6,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 5.875,
          "endTime": 6,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 6,
          "endTime": 6.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 6,
          "endTime": 6.125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 6.125,
          "endTime": 6.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 6.25,
          "endTime": 6.375,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 61,
          "velocity": 34,
          "startTime": 6.25,
          "endTime": 6.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 6.375,
          "endTime": 6.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 6.5,
          "endTime": 6.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 6.5,
          "endTime": 6.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 6.5,
          "endTime": 6.625,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 6.625,
          "endTime": 6.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 6.75,
          "endTime": 6.875,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 61,
          "velocity": 34,
          "startTime": 6.75,
          "endTime": 7,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 6.875,
          "endTime": 7,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 7,
          "endTime": 7.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 7,
          "endTime": 7.125,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 7.125,
          "endTime": 7.25,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 7.25,
          "endTime": 7.375,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 61,
          "velocity": 34,
          "startTime": 7.25,
          "endTime": 7.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 7.375,
          "endTime": 7.5,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 48,
          "velocity": 100,
          "startTime": 7.5,
          "endTime": 7.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 50,
          "velocity": 100,
          "startTime": 7.5,
          "endTime": 7.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 7.5,
          "endTime": 7.625,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 7.625,
          "endTime": 7.75,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 7.75,
          "endTime": 7.875,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 61,
          "velocity": 34,
          "startTime": 7.75,
          "endTime": 8,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        },
        {
          "pitch": 54,
          "velocity": 100,
          "startTime": 7.875,
          "endTime": 8,
          "instrument": 2,
          "program": 128,
          "isDrum": true
        }
      ],
      "totalTime": 8,
      "sourceInfo": {
        "encodingType": "MIDI",
        "parser": "TONEJS_MIDI_CONVERT"
      }
    },
    4),
  0, totalQuantizedSteps);

export const part_TRIO4_LEAD = trim(quantizeNoteSequence({
      "ticksPerQuarter": 96,
      "timeSignatures": [
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        },
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        }
      ],
      "notes": [
        {
          "pitch": 65,
          "velocity": 100,
          "startTime": 0,
          "endTime": 0.078125,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 100,
          "startTime": 0.125,
          "endTime": 0.25,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 100,
          "startTime": 0.375,
          "endTime": 0.4583333333333333,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 61,
          "velocity": 100,
          "startTime": 0.5,
          "endTime": 0.5572916666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 68,
          "velocity": 100,
          "startTime": 0.625,
          "endTime": 0.6875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 70,
          "velocity": 100,
          "startTime": 0.75,
          "endTime": 0.8072916666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 80,
          "velocity": 100,
          "startTime": 0.875,
          "endTime": 0.9270833333333334,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 82,
          "velocity": 100,
          "startTime": 1,
          "endTime": 1.0625,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 75,
          "velocity": 100,
          "startTime": 1.125,
          "endTime": 1.25,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 100,
          "startTime": 1.375,
          "endTime": 1.4583333333333333,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 65,
          "velocity": 100,
          "startTime": 1.5,
          "endTime": 1.5572916666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 68,
          "velocity": 100,
          "startTime": 1.625,
          "endTime": 1.6875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 100,
          "startTime": 1.75,
          "endTime": 1.8072916666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 80,
          "velocity": 100,
          "startTime": 1.875,
          "endTime": 1.9270833333333333,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 65,
          "velocity": 100,
          "startTime": 2,
          "endTime": 2.078125,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 100,
          "startTime": 2.125,
          "endTime": 2.25,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 100,
          "startTime": 2.375,
          "endTime": 2.4583333333333335,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 61,
          "velocity": 100,
          "startTime": 2.5,
          "endTime": 2.5572916666666665,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 68,
          "velocity": 100,
          "startTime": 2.625,
          "endTime": 2.6875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 70,
          "velocity": 100,
          "startTime": 2.75,
          "endTime": 2.8072916666666665,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 80,
          "velocity": 100,
          "startTime": 2.875,
          "endTime": 2.9270833333333335,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 82,
          "velocity": 100,
          "startTime": 3,
          "endTime": 3.0625,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 75,
          "velocity": 100,
          "startTime": 3.125,
          "endTime": 3.25,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 100,
          "startTime": 3.375,
          "endTime": 3.4583333333333335,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 65,
          "velocity": 100,
          "startTime": 3.5,
          "endTime": 3.5572916666666665,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 68,
          "velocity": 100,
          "startTime": 3.625,
          "endTime": 3.6875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 100,
          "startTime": 3.75,
          "endTime": 3.8072916666666665,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 80,
          "velocity": 100,
          "startTime": 3.875,
          "endTime": 3.9270833333333335,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 65,
          "velocity": 100,
          "startTime": 4,
          "endTime": 4.078125,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 100,
          "startTime": 4.125,
          "endTime": 4.25,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 100,
          "startTime": 4.375,
          "endTime": 4.458333333333333,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 60,
          "velocity": 100,
          "startTime": 4.5,
          "endTime": 4.557291666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 68,
          "velocity": 100,
          "startTime": 4.625,
          "endTime": 4.6875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 70,
          "velocity": 100,
          "startTime": 4.75,
          "endTime": 4.807291666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 80,
          "velocity": 100,
          "startTime": 4.875,
          "endTime": 4.927083333333333,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 82,
          "velocity": 100,
          "startTime": 5,
          "endTime": 5.0625,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 75,
          "velocity": 100,
          "startTime": 5.125,
          "endTime": 5.25,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 100,
          "startTime": 5.375,
          "endTime": 5.458333333333333,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 68,
          "velocity": 100,
          "startTime": 5.5,
          "endTime": 5.557291666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 100,
          "startTime": 5.625,
          "endTime": 5.6875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 100,
          "startTime": 5.75,
          "endTime": 5.807291666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 80,
          "velocity": 100,
          "startTime": 5.875,
          "endTime": 5.927083333333333,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 65,
          "velocity": 100,
          "startTime": 6,
          "endTime": 6.078125,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 100,
          "startTime": 6.125,
          "endTime": 6.25,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 100,
          "startTime": 6.375,
          "endTime": 6.458333333333333,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 60,
          "velocity": 100,
          "startTime": 6.5,
          "endTime": 6.557291666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 68,
          "velocity": 100,
          "startTime": 6.625,
          "endTime": 6.6875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 70,
          "velocity": 100,
          "startTime": 6.75,
          "endTime": 6.807291666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 80,
          "velocity": 100,
          "startTime": 6.875,
          "endTime": 6.927083333333333,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 82,
          "velocity": 100,
          "startTime": 7,
          "endTime": 7.0625,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 75,
          "velocity": 100,
          "startTime": 7.125,
          "endTime": 7.25,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 72,
          "velocity": 100,
          "startTime": 7.375,
          "endTime": 7.458333333333333,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 65,
          "velocity": 100,
          "startTime": 7.5,
          "endTime": 7.557291666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 68,
          "velocity": 100,
          "startTime": 7.625,
          "endTime": 7.6875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 100,
          "startTime": 7.75,
          "endTime": 7.807291666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 80,
          "velocity": 100,
          "startTime": 7.875,
          "endTime": 7.927083333333333,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        }
      ],
      "totalTime": 7.927083333333333,
      "sourceInfo": {
        "encodingType": "MIDI",
        "parser": "TONEJS_MIDI_CONVERT"
      }
    },
    4),
  0, totalQuantizedSteps);

export const score1 = toScore('Simon - trio #1', [
  part_TRIO1_BASS,
  part_TRIO1_DRUMS,
  part_TRIO1_LEAD
]);

export const score2 = toScore('Simon - trio #2', [
  part_TRIO2_BASS,
  part_TRIO2_DRUMS,
  part_TRIO2_LEAD
]);

export const score3 = toScore('Simon - trio #3', [
  part_TRIO3_BASS,
  part_TRIO3_DRUMS,
  part_TRIO3_LEAD
]);

export const score4 = toScore('Simon - trio #4', [
  part_TRIO4_BASS,
  part_TRIO4_DRUMS,
  part_TRIO4_LEAD
]);

// From `../midi/trios-calm/`.

export const calm_TRIO1_BASS = trim(quantizeNoteSequence({
      "ticksPerQuarter": 96,
      "timeSignatures": [
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        },
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        }
      ],
      "notes": [
        {
          "pitch": 38,
          "velocity": 80,
          "startTime": 0,
          "endTime": 0.6979166666666666,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 40,
          "velocity": 80,
          "startTime": 1,
          "endTime": 2.046875,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 46,
          "velocity": 80,
          "startTime": 2,
          "endTime": 2.9583333333333335,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 41,
          "velocity": 80,
          "startTime": 3,
          "endTime": 3.8489583333333335,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 36,
          "velocity": 80,
          "startTime": 4,
          "endTime": 4.697916666666667,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 40,
          "velocity": 80,
          "startTime": 5,
          "endTime": 6.046875,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 43,
          "velocity": 80,
          "startTime": 6,
          "endTime": 6.958333333333333,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 40,
          "velocity": 80,
          "startTime": 7,
          "endTime": 7.848958333333333,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        }
      ],
      "totalTime": 7.848958333333333,
      "sourceInfo": {
        "encodingType": "MIDI",
        "parser": "TONEJS_MIDI_CONVERT"
      }
    },
    4),
  0, totalQuantizedSteps);

export const calm_TRIO1_LEAD = trim(quantizeNoteSequence({
      "ticksPerQuarter": 96,
      "timeSignatures": [
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        },
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        }
      ],
      "notes": [
        {
          "pitch": 76,
          "velocity": 80,
          "startTime": 0.25,
          "endTime": 1.78125,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 74,
          "velocity": 80,
          "startTime": 1.75,
          "endTime": 1.9947916666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 76,
          "velocity": 80,
          "startTime": 2,
          "endTime": 3.7135416666666665,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 74,
          "velocity": 80,
          "startTime": 3.75,
          "endTime": 4.072916666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 76,
          "velocity": 80,
          "startTime": 4,
          "endTime": 5.786458333333333,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 74,
          "velocity": 80,
          "startTime": 5.75,
          "endTime": 5.984375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 76,
          "velocity": 80,
          "startTime": 6,
          "endTime": 6.53125,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 80,
          "startTime": 6.5,
          "endTime": 6.994791666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 83,
          "velocity": 80,
          "startTime": 7,
          "endTime": 7.484375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 79,
          "velocity": 80,
          "startTime": 7.5,
          "endTime": 7.598958333333333,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 81,
          "velocity": 80,
          "startTime": 7.5,
          "endTime": 7.833333333333333,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 76,
          "velocity": 80,
          "startTime": 8,
          "endTime": 9.53125,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 74,
          "velocity": 80,
          "startTime": 9.75,
          "endTime": 9.994791666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 81,
          "velocity": 80,
          "startTime": 10,
          "endTime": 11.713541666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 74,
          "velocity": 80,
          "startTime": 11.75,
          "endTime": 12.072916666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 84,
          "velocity": 80,
          "startTime": 12,
          "endTime": 13.786458333333334,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 74,
          "velocity": 80,
          "startTime": 13.75,
          "endTime": 13.984375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 76,
          "velocity": 80,
          "startTime": 14,
          "endTime": 14.53125,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 80,
          "startTime": 14.5,
          "endTime": 14.994791666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 83,
          "velocity": 80,
          "startTime": 15,
          "endTime": 15.484375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 81,
          "velocity": 80,
          "startTime": 15.5,
          "endTime": 15.833333333333334,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        }
      ],
      "totalTime": 15.833333333333334,
      "sourceInfo": {
        "encodingType": "MIDI",
        "parser": "TONEJS_MIDI_CONVERT"
      }
    },
    4),
  0, totalQuantizedSteps);

export const calm_TRIO2_BASS = trim(quantizeNoteSequence({
      "ticksPerQuarter": 96,
      "timeSignatures": [
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        },
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        }
      ],
      "notes": [
        {
          "pitch": 45,
          "velocity": 60,
          "startTime": 0,
          "endTime": 2,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 50,
          "velocity": 60,
          "startTime": 2,
          "endTime": 2.1145833333333335,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 50,
          "velocity": 60,
          "startTime": 2.75,
          "endTime": 2.8802083333333335,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 48,
          "velocity": 60,
          "startTime": 3.5,
          "endTime": 3.5989583333333335,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 41,
          "velocity": 60,
          "startTime": 4,
          "endTime": 6,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 52,
          "velocity": 60,
          "startTime": 6,
          "endTime": 6.114583333333333,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 52,
          "velocity": 60,
          "startTime": 6.75,
          "endTime": 6.880208333333333,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 53,
          "velocity": 60,
          "startTime": 7.5,
          "endTime": 7.598958333333333,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        }
      ],
      "totalTime": 7.598958333333333,
      "sourceInfo": {
        "encodingType": "MIDI",
        "parser": "TONEJS_MIDI_CONVERT"
      }
    },
    4),
  0, totalQuantizedSteps);

export const calm_TRIO2_LEAD = trim(quantizeNoteSequence({
      "ticksPerQuarter": 96,
      "timeSignatures": [
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        },
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        }
      ],
      "notes": [
        {
          "pitch": 88,
          "velocity": 60,
          "startTime": 0,
          "endTime": 1.2447916666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 86,
          "velocity": 60,
          "startTime": 1.5,
          "endTime": 1.7760416666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 83,
          "velocity": 60,
          "startTime": 2,
          "endTime": 2.5,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 81,
          "velocity": 60,
          "startTime": 2.5,
          "endTime": 3,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 83,
          "velocity": 60,
          "startTime": 3,
          "endTime": 3.3697916666666665,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 84,
          "velocity": 60,
          "startTime": 3.5,
          "endTime": 3.84375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 90,
          "velocity": 60,
          "startTime": 3.9947916666666665,
          "endTime": 7.677083333333333,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 86,
          "velocity": 60,
          "startTime": 5.494791666666667,
          "endTime": 5.619791666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 83,
          "velocity": 60,
          "startTime": 5.979166666666667,
          "endTime": 6.078125,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 81,
          "velocity": 60,
          "startTime": 6.463541666666667,
          "endTime": 6.5625,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 83,
          "velocity": 60,
          "startTime": 6.958333333333333,
          "endTime": 7.0625,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 84,
          "velocity": 60,
          "startTime": 7.463541666666667,
          "endTime": 7.53125,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 88,
          "velocity": 60,
          "startTime": 8,
          "endTime": 9.244791666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 86,
          "velocity": 60,
          "startTime": 9.5,
          "endTime": 9.776041666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 83,
          "velocity": 60,
          "startTime": 10,
          "endTime": 10.5,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 81,
          "velocity": 60,
          "startTime": 10.5,
          "endTime": 11,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 83,
          "velocity": 60,
          "startTime": 11,
          "endTime": 11.369791666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 84,
          "velocity": 60,
          "startTime": 11.5,
          "endTime": 11.84375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 88,
          "velocity": 60,
          "startTime": 11.994791666666666,
          "endTime": 13.5,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 86,
          "velocity": 60,
          "startTime": 13.494791666666666,
          "endTime": 13.619791666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 83,
          "velocity": 60,
          "startTime": 13.979166666666666,
          "endTime": 14.078125,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 81,
          "velocity": 60,
          "startTime": 14.463541666666666,
          "endTime": 14.5625,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 83,
          "velocity": 60,
          "startTime": 14.958333333333334,
          "endTime": 15.0625,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 84,
          "velocity": 60,
          "startTime": 15.463541666666666,
          "endTime": 15.53125,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        }
      ],
      "totalTime": 15.53125,
      "sourceInfo": {
        "encodingType": "MIDI",
        "parser": "TONEJS_MIDI_CONVERT"
      }
    },
    4),
  0, totalQuantizedSteps);

export const calm_TRIO3_BASS = trim(quantizeNoteSequence({
      "ticksPerQuarter": 96,
      "timeSignatures": [
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        },
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        }
      ],
      "notes": [
        {
          "pitch": 43,
          "velocity": 60,
          "startTime": 0,
          "endTime": 1.4791666666666667,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 45,
          "velocity": 60,
          "startTime": 1.546875,
          "endTime": 3.4635416666666665,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 48,
          "velocity": 60,
          "startTime": 3.4895833333333335,
          "endTime": 5.432291666666667,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 50,
          "velocity": 60,
          "startTime": 5.536458333333333,
          "endTime": 6.796875,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 52,
          "velocity": 60,
          "startTime": 7.052083333333333,
          "endTime": 7.145833333333333,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 43,
          "velocity": 60,
          "startTime": 8,
          "endTime": 9.479166666666666,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 45,
          "velocity": 60,
          "startTime": 10,
          "endTime": 11.911458333333334,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 46,
          "velocity": 60,
          "startTime": 12,
          "endTime": 13.9375,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 50,
          "velocity": 60,
          "startTime": 14,
          "endTime": 15.255208333333334,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 52,
          "velocity": 60,
          "startTime": 15.5,
          "endTime": 15.59375,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        }
      ],
      "totalTime": 15.59375,
      "sourceInfo": {
        "encodingType": "MIDI",
        "parser": "TONEJS_MIDI_CONVERT"
      }
    },
    4),
  0, totalQuantizedSteps);

export const calm_TRIO3_LEAD = trim(quantizeNoteSequence({
      "ticksPerQuarter": 96,
      "timeSignatures": [
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        },
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        }
      ],
      "notes": [
        {
          "pitch": 86,
          "velocity": 60,
          "startTime": 2,
          "endTime": 2.4947916666666665,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 82,
          "velocity": 60,
          "startTime": 2.5,
          "endTime": 2.9375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 86,
          "velocity": 60,
          "startTime": 3,
          "endTime": 3.6145833333333335,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 82,
          "velocity": 60,
          "startTime": 3.5,
          "endTime": 3.9479166666666665,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 86,
          "velocity": 60,
          "startTime": 4,
          "endTime": 4.536458333333333,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 82,
          "velocity": 60,
          "startTime": 4.5,
          "endTime": 4.979166666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 86,
          "velocity": 60,
          "startTime": 5,
          "endTime": 5.588541666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 82,
          "velocity": 60,
          "startTime": 5.5,
          "endTime": 5.994791666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 86,
          "velocity": 60,
          "startTime": 6,
          "endTime": 6.494791666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 82,
          "velocity": 60,
          "startTime": 6.5,
          "endTime": 6.963541666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 81,
          "velocity": 60,
          "startTime": 7,
          "endTime": 7.505208333333333,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 82,
          "velocity": 60,
          "startTime": 7.5,
          "endTime": 7.979166666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 79,
          "velocity": 60,
          "startTime": 8,
          "endTime": 8.5,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 84,
          "velocity": 60,
          "startTime": 8.5,
          "endTime": 8.890625,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 79,
          "velocity": 60,
          "startTime": 9,
          "endTime": 9.458333333333334,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 84,
          "velocity": 60,
          "startTime": 9.5,
          "endTime": 9.6875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 86,
          "velocity": 60,
          "startTime": 10,
          "endTime": 10.494791666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 81,
          "velocity": 60,
          "startTime": 10.5,
          "endTime": 10.9375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 86,
          "velocity": 60,
          "startTime": 11,
          "endTime": 11.614583333333334,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 81,
          "velocity": 60,
          "startTime": 11.5,
          "endTime": 11.947916666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 86,
          "velocity": 60,
          "startTime": 12,
          "endTime": 12.536458333333334,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 81,
          "velocity": 60,
          "startTime": 12.5,
          "endTime": 12.979166666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 86,
          "velocity": 60,
          "startTime": 13,
          "endTime": 13.588541666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 81,
          "velocity": 60,
          "startTime": 13.5,
          "endTime": 13.994791666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 86,
          "velocity": 60,
          "startTime": 14,
          "endTime": 14.494791666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 81,
          "velocity": 60,
          "startTime": 14.5,
          "endTime": 14.963541666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 60,
          "startTime": 15,
          "endTime": 15.5,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 82,
          "velocity": 60,
          "startTime": 15.5,
          "endTime": 15.979166666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 79,
          "velocity": 60,
          "startTime": 16,
          "endTime": 16.005208333333332,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        }
      ],
      "totalTime": 16.005208333333332,
      "sourceInfo": {
        "encodingType": "MIDI",
        "parser": "TONEJS_MIDI_CONVERT"
      }
    },
    4),
  0, totalQuantizedSteps);

export const calm_TRIO4_BASS = trim(quantizeNoteSequence({
      "ticksPerQuarter": 96,
      "timeSignatures": [
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        },
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        }
      ],
      "notes": [
        {
          "pitch": 41,
          "velocity": 60,
          "startTime": 0,
          "endTime": 0.8697916666666666,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 41,
          "velocity": 60,
          "startTime": 1,
          "endTime": 1.734375,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 40,
          "velocity": 60,
          "startTime": 2,
          "endTime": 2.6041666666666665,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 40,
          "velocity": 60,
          "startTime": 3,
          "endTime": 3.59375,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 38,
          "velocity": 60,
          "startTime": 4,
          "endTime": 4.510416666666667,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 38,
          "velocity": 60,
          "startTime": 5,
          "endTime": 5.541666666666667,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 38,
          "velocity": 55,
          "startTime": 6,
          "endTime": 6.5,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        },
        {
          "pitch": 36,
          "velocity": 60,
          "startTime": 7,
          "endTime": 7.463541666666667,
          "instrument": 1,
          "program": 32,
          "isDrum": false
        }
      ],
      "totalTime": 7.463541666666667,
      "sourceInfo": {
        "encodingType": "MIDI",
        "parser": "TONEJS_MIDI_CONVERT"
      }
    },
    4),
  0, totalQuantizedSteps);

export const calm_TRIO4_LEAD = trim(quantizeNoteSequence({
      "ticksPerQuarter": 96,
      "timeSignatures": [
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        },
        {
          "time": 0,
          "numerator": 4,
          "denominator": 4
        }
      ],
      "notes": [
        {
          "pitch": 89,
          "velocity": 60,
          "startTime": 2.75,
          "endTime": 3.2447916666666665,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 85,
          "velocity": 60,
          "startTime": 3.25,
          "endTime": 3.6875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 89,
          "velocity": 60,
          "startTime": 3.75,
          "endTime": 4.364583333333333,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 85,
          "velocity": 60,
          "startTime": 4.25,
          "endTime": 4.697916666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 89,
          "velocity": 60,
          "startTime": 4.75,
          "endTime": 5.286458333333333,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 85,
          "velocity": 60,
          "startTime": 5.25,
          "endTime": 5.729166666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 89,
          "velocity": 60,
          "startTime": 5.75,
          "endTime": 6.338541666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 85,
          "velocity": 60,
          "startTime": 6.25,
          "endTime": 6.744791666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 89,
          "velocity": 60,
          "startTime": 6.75,
          "endTime": 7.244791666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 85,
          "velocity": 60,
          "startTime": 7.25,
          "endTime": 7.713541666666667,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 85,
          "velocity": 60,
          "startTime": 8.25,
          "endTime": 8.729166666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 82,
          "velocity": 60,
          "startTime": 8.75,
          "endTime": 9.25,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 87,
          "velocity": 60,
          "startTime": 9.25,
          "endTime": 9.640625,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 82,
          "velocity": 60,
          "startTime": 9.75,
          "endTime": 10.208333333333334,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 87,
          "velocity": 60,
          "startTime": 10.25,
          "endTime": 10.4375,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 78,
          "velocity": 60,
          "startTime": 10.75,
          "endTime": 11.244791666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 84,
          "velocity": 60,
          "startTime": 11.25,
          "endTime": 11.6875,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 60,
          "startTime": 11.75,
          "endTime": 12.364583333333334,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 84,
          "velocity": 60,
          "startTime": 12.25,
          "endTime": 12.697916666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 78,
          "velocity": 60,
          "startTime": 12.75,
          "endTime": 13.286458333333334,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 84,
          "velocity": 60,
          "startTime": 13.25,
          "endTime": 13.729166666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 77,
          "velocity": 60,
          "startTime": 13.75,
          "endTime": 14.338541666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 84,
          "velocity": 60,
          "startTime": 14.25,
          "endTime": 14.744791666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 78,
          "velocity": 60,
          "startTime": 14.75,
          "endTime": 15.244791666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 84,
          "velocity": 60,
          "startTime": 15.25,
          "endTime": 15.713541666666666,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 80,
          "velocity": 60,
          "startTime": 15.75,
          "endTime": 16.25,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 85,
          "velocity": 60,
          "startTime": 16.25,
          "endTime": 16.729166666666668,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 82,
          "velocity": 60,
          "startTime": 16.75,
          "endTime": 16.755208333333332,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        }
      ],
      "totalTime": 16.755208333333332,
      "sourceInfo": {
        "encodingType": "MIDI",
        "parser": "TONEJS_MIDI_CONVERT"
      }
    },
    4),
  0, totalQuantizedSteps);

export const scoreCalm1 = toScore('Simon - trio calm #1', [
  calm_TRIO1_BASS,
  calm_TRIO1_LEAD
]);

export const scoreCalm2 = toScore('Simon - trio calm #2', [
  calm_TRIO2_BASS,
  calm_TRIO2_LEAD
]);

export const scoreCalm3 = toScore('Simon - trio calm #3', [
  calm_TRIO3_BASS,
  calm_TRIO3_LEAD
]);

export const scoreCalm4 = toScore('Simon - trio calm #4', [
  calm_TRIO4_BASS,
  calm_TRIO4_LEAD
]);

export const scoreMix1 = toScore('Simon - trio mix #1', [
  calm_TRIO1_BASS,
  part_TRIO1_DRUMS,
  calm_TRIO1_LEAD
]);

export const scoreMix2 = toScore('Simon - trio mix #2', [
  calm_TRIO2_BASS,
  part_TRIO2_DRUMS,
  calm_TRIO2_LEAD
]);

export const scoreMix3 = toScore('Simon - trio mix #3', [
  calm_TRIO3_BASS,
  part_TRIO3_DRUMS,
  calm_TRIO3_LEAD
]);

export const scoreMix4 = toScore('Simon - trio mix #4', [
  calm_TRIO4_BASS,
  part_TRIO4_DRUMS,
  calm_TRIO4_LEAD
]);

export const scores = [
  score1,
  score2,
  score3,
  score4,
  scoreCalm1,
  scoreCalm2,
  scoreCalm3,
  scoreCalm4,
  scoreMix1,
  scoreMix2,
  scoreMix3,
  scoreMix4
];

// From `../midi/parts/`.
/**
  export const part_bass_2_16BAR_3 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 0.875,
            "endTime": 0.9895833333333334,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 49,
            "velocity": 120,
            "startTime": 1,
            "endTime": 1.1458333333333333,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 2.875,
            "endTime": 2.9895833333333335,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 49,
            "velocity": 120,
            "startTime": 3,
            "endTime": 3.1458333333333335,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 4.875,
            "endTime": 4.989583333333333,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 48,
            "velocity": 120,
            "startTime": 5,
            "endTime": 5.145833333333333,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 6.875,
            "endTime": 6.989583333333333,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 48,
            "velocity": 120,
            "startTime": 7,
            "endTime": 7.145833333333333,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 41,
            "velocity": 100,
            "startTime": 8.875,
            "endTime": 8.989583333333334,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 53,
            "velocity": 120,
            "startTime": 9,
            "endTime": 9.145833333333334,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 41,
            "velocity": 100,
            "startTime": 10.875,
            "endTime": 10.989583333333334,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 53,
            "velocity": 120,
            "startTime": 11,
            "endTime": 11.145833333333334,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 44,
            "velocity": 100,
            "startTime": 12.875,
            "endTime": 12.989583333333334,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 56,
            "velocity": 120,
            "startTime": 13,
            "endTime": 13.145833333333334,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 44,
            "velocity": 100,
            "startTime": 14.875,
            "endTime": 14.989583333333334,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 56,
            "velocity": 120,
            "startTime": 15,
            "endTime": 15.145833333333334,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 16.875,
            "endTime": 16.989583333333332,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 49,
            "velocity": 120,
            "startTime": 17,
            "endTime": 17.145833333333332,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 18.875,
            "endTime": 18.989583333333332,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 49,
            "velocity": 120,
            "startTime": 19,
            "endTime": 19.145833333333332,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 20.875,
            "endTime": 20.989583333333332,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 48,
            "velocity": 120,
            "startTime": 21,
            "endTime": 21.145833333333332,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 22.875,
            "endTime": 22.989583333333332,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 48,
            "velocity": 120,
            "startTime": 23,
            "endTime": 23.145833333333332,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 41,
            "velocity": 100,
            "startTime": 24.875,
            "endTime": 24.989583333333332,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 53,
            "velocity": 120,
            "startTime": 25,
            "endTime": 25.145833333333332,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 41,
            "velocity": 100,
            "startTime": 26.875,
            "endTime": 26.989583333333332,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 53,
            "velocity": 120,
            "startTime": 27,
            "endTime": 27.145833333333332,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 44,
            "velocity": 100,
            "startTime": 28.875,
            "endTime": 28.989583333333332,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 56,
            "velocity": 120,
            "startTime": 29,
            "endTime": 29.145833333333332,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 44,
            "velocity": 100,
            "startTime": 30.875,
            "endTime": 30.989583333333332,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 56,
            "velocity": 120,
            "startTime": 31,
            "endTime": 31.145833333333332,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          }
        ],
        "totalTime": 31.145833333333332,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const part_bass_2_16BAR_4 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 0,
            "endTime": 1.9947916666666667,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 1.9895833333333333,
            "endTime": 5.963541666666667,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 6.041666666666667,
            "endTime": 9.901041666666666,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 9.979166666666666,
            "endTime": 13.869791666666666,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 14.020833333333334,
            "endTime": 17.958333333333332,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 18.026041666666668,
            "endTime": 21.791666666666668,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 21.973958333333332,
            "endTime": 26.015625,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 26.026041666666668,
            "endTime": 29.786458333333332,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 30.046875,
            "endTime": 33.984375,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          }
        ],
        "totalTime": 33.984375,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const part_bass_2_16BAR_6 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 0,
            "endTime": 0.25,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 0.375,
            "endTime": 0.625,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 2,
            "endTime": 3,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 4,
            "endTime": 4.25,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 4.375,
            "endTime": 4.625,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 6,
            "endTime": 6.875,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 8,
            "endTime": 8.25,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 8.375,
            "endTime": 8.75,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 10,
            "endTime": 11.75,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 12,
            "endTime": 12.25,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 12.375,
            "endTime": 12.625,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 14,
            "endTime": 15.989583333333334,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 16,
            "endTime": 16.25,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 16.375,
            "endTime": 16.625,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 18,
            "endTime": 19,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 20,
            "endTime": 20.25,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 20.375,
            "endTime": 20.625,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 22,
            "endTime": 22.875,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 24,
            "endTime": 24.25,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 24.375,
            "endTime": 24.75,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 26,
            "endTime": 27.75,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 28,
            "endTime": 28.25,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 28.375,
            "endTime": 28.625,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 30,
            "endTime": 31.989583333333332,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          }
        ],
        "totalTime": 31.989583333333332,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const part_bass_2_16BAR_7 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 0,
            "endTime": 4,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 0,
            "endTime": 4,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 4,
            "endTime": 8,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 67,
            "velocity": 100,
            "startTime": 4,
            "endTime": 8,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 8,
            "endTime": 12,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 8,
            "endTime": 12,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 12,
            "endTime": 16,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 12,
            "endTime": 16,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 16,
            "endTime": 20,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 16,
            "endTime": 20,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 20,
            "endTime": 24,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 67,
            "velocity": 100,
            "startTime": 20,
            "endTime": 24,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 24,
            "endTime": 28,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 24,
            "endTime": 28,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 28,
            "endTime": 32,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 28,
            "endTime": 37,
            "instrument": 1,
            "program": 32,
            "isDrum": false
          }
        ],
        "totalTime": 37,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const part_drum1 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 0,
            "endTime": 0.265625,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 38,
            "velocity": 100,
            "startTime": 0.5,
            "endTime": 0.6927083333333334,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 1,
            "endTime": 1.203125,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 38,
            "velocity": 100,
            "startTime": 1.5,
            "endTime": 1.6979166666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 2,
            "endTime": 2.1875,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 38,
            "velocity": 100,
            "startTime": 2.5,
            "endTime": 2.6458333333333335,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 3,
            "endTime": 3.0989583333333335,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 3.25,
            "endTime": 3.4166666666666665,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 38,
            "velocity": 100,
            "startTime": 3.5,
            "endTime": 3.640625,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 4,
            "endTime": 4.265625,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 38,
            "velocity": 100,
            "startTime": 4.5,
            "endTime": 4.692708333333333,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 5,
            "endTime": 5.203125,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 38,
            "velocity": 100,
            "startTime": 5.5,
            "endTime": 5.697916666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 6,
            "endTime": 6.1875,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 38,
            "velocity": 100,
            "startTime": 6.5,
            "endTime": 6.645833333333333,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 7,
            "endTime": 7.098958333333333,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 7.25,
            "endTime": 7.416666666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 38,
            "velocity": 100,
            "startTime": 7.5,
            "endTime": 7.640625,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          }
        ],
        "totalTime": 7.640625,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const part_drum2 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 0,
            "endTime": 0.15104166666666666,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 0.25,
            "endTime": 0.3385416666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 0.5,
            "endTime": 0.5625,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 0.625,
            "endTime": 0.7239583333333334,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 38,
            "velocity": 100,
            "startTime": 1,
            "endTime": 1.125,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 1.25,
            "endTime": 1.3020833333333333,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 1.375,
            "endTime": 1.5,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 1.5,
            "endTime": 1.6354166666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 1.75,
            "endTime": 1.8385416666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 1.875,
            "endTime": 1.96875,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 2,
            "endTime": 2.1510416666666665,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 2.25,
            "endTime": 2.3385416666666665,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 2.5,
            "endTime": 2.5625,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 2.625,
            "endTime": 2.7239583333333335,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 38,
            "velocity": 100,
            "startTime": 3,
            "endTime": 3.125,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 3.25,
            "endTime": 3.3020833333333335,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 3.375,
            "endTime": 3.5,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 3.5,
            "endTime": 3.6354166666666665,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 3.75,
            "endTime": 3.8385416666666665,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 3.875,
            "endTime": 3.96875,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 4,
            "endTime": 4.151041666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 4.25,
            "endTime": 4.338541666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 4.5,
            "endTime": 4.5625,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 4.625,
            "endTime": 4.723958333333333,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 38,
            "velocity": 100,
            "startTime": 5,
            "endTime": 5.125,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 5.25,
            "endTime": 5.302083333333333,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 5.375,
            "endTime": 5.5,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 5.5,
            "endTime": 5.635416666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 5.75,
            "endTime": 5.838541666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 5.875,
            "endTime": 5.96875,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 6,
            "endTime": 6.151041666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 6.25,
            "endTime": 6.338541666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 6.5,
            "endTime": 6.5625,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 6.625,
            "endTime": 6.723958333333333,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 38,
            "velocity": 100,
            "startTime": 7,
            "endTime": 7.125,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 7.25,
            "endTime": 7.302083333333333,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 7.375,
            "endTime": 7.5,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 7.5,
            "endTime": 7.635416666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 7.75,
            "endTime": 7.838541666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 7.875,
            "endTime": 7.96875,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          }
        ],
        "totalTime": 7.96875,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const part_drum3 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 0,
            "endTime": 0.11979166666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 42,
            "velocity": 100,
            "startTime": 0.25,
            "endTime": 0.3125,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 38,
            "velocity": 100,
            "startTime": 0.5,
            "endTime": 0.5729166666666666,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 42,
            "velocity": 100,
            "startTime": 0.75,
            "endTime": 0.8125,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 1,
            "endTime": 1.15625,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 1.25,
            "endTime": 1.3125,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 1.5,
            "endTime": 1.6822916666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 1.75,
            "endTime": 1.8854166666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 2,
            "endTime": 2.1197916666666665,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 42,
            "velocity": 100,
            "startTime": 2.25,
            "endTime": 2.3125,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 38,
            "velocity": 100,
            "startTime": 2.5,
            "endTime": 2.5729166666666665,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 42,
            "velocity": 100,
            "startTime": 2.75,
            "endTime": 2.8125,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 3,
            "endTime": 3.15625,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 3.25,
            "endTime": 3.3125,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 3.5,
            "endTime": 3.6822916666666665,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 3.75,
            "endTime": 3.8854166666666665,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 4,
            "endTime": 4.119791666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 42,
            "velocity": 100,
            "startTime": 4.25,
            "endTime": 4.3125,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 38,
            "velocity": 100,
            "startTime": 4.5,
            "endTime": 4.572916666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 42,
            "velocity": 100,
            "startTime": 4.75,
            "endTime": 4.8125,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 5,
            "endTime": 5.15625,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 5.25,
            "endTime": 5.3125,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 5.5,
            "endTime": 5.682291666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 5.75,
            "endTime": 5.885416666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 6,
            "endTime": 6.119791666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 42,
            "velocity": 100,
            "startTime": 6.25,
            "endTime": 6.3125,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 38,
            "velocity": 100,
            "startTime": 6.5,
            "endTime": 6.572916666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 42,
            "velocity": 100,
            "startTime": 6.75,
            "endTime": 6.8125,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 7,
            "endTime": 7.15625,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 7.25,
            "endTime": 7.3125,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 7.5,
            "endTime": 7.682291666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 7.75,
            "endTime": 7.885416666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          }
        ],
        "totalTime": 7.885416666666667,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const part_drum4 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 0,
            "endTime": 0.15104166666666666,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 42,
            "velocity": 100,
            "startTime": 0.25,
            "endTime": 0.5,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 0.5,
            "endTime": 0.65625,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 38,
            "velocity": 100,
            "startTime": 0.75,
            "endTime": 0.8854166666666666,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 0.9895833333333334,
            "endTime": 1.1041666666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 1.25,
            "endTime": 1.4375,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 1.5,
            "endTime": 1.6354166666666667,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 42,
            "velocity": 100,
            "startTime": 1.75,
            "endTime": 2,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 2,
            "endTime": 2.1510416666666665,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 42,
            "velocity": 100,
            "startTime": 2.25,
            "endTime": 2.5,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 2.5,
            "endTime": 2.65625,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 38,
            "velocity": 100,
            "startTime": 2.75,
            "endTime": 2.8854166666666665,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 2.9895833333333335,
            "endTime": 3.1041666666666665,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 3.25,
            "endTime": 3.4375,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 3.5,
            "endTime": 3.6354166666666665,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          },
          {
            "pitch": 42,
            "velocity": 100,
            "startTime": 3.75,
            "endTime": 4,
            "instrument": 2,
            "program": 128,
            "isDrum": true
          }
        ],
        "totalTime": 4,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const part_lead_2_16BAR_1 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 0,
            "endTime": 0.13020833333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 0.125,
            "endTime": 0.2760416666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 0.25,
            "endTime": 0.4114583333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 0.375,
            "endTime": 0.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 0.5,
            "endTime": 0.6302083333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 0.625,
            "endTime": 0.7760416666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 0.75,
            "endTime": 0.9114583333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 0.875,
            "endTime": 1,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 1,
            "endTime": 1.1302083333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 1.125,
            "endTime": 1.2760416666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 1.25,
            "endTime": 1.4114583333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 1.375,
            "endTime": 1.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 1.5,
            "endTime": 1.6302083333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 1.625,
            "endTime": 1.7760416666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 1.75,
            "endTime": 1.9114583333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 1.875,
            "endTime": 2,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 2,
            "endTime": 2.1302083333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 2.125,
            "endTime": 2.2760416666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 2.25,
            "endTime": 2.4114583333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 2.375,
            "endTime": 2.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 2.5,
            "endTime": 2.6302083333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 2.625,
            "endTime": 2.7760416666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 2.75,
            "endTime": 2.9114583333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 2.875,
            "endTime": 3,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 3,
            "endTime": 3.1302083333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 3.125,
            "endTime": 3.2760416666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 3.25,
            "endTime": 3.4114583333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 3.375,
            "endTime": 3.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 3.5,
            "endTime": 3.6302083333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 3.625,
            "endTime": 3.7760416666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 3.75,
            "endTime": 3.9114583333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 3.875,
            "endTime": 4,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 4,
            "endTime": 4.130208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 4.125,
            "endTime": 4.276041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 4.25,
            "endTime": 4.411458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 4.375,
            "endTime": 4.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 4.5,
            "endTime": 4.630208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 4.625,
            "endTime": 4.776041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 4.75,
            "endTime": 4.911458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 4.875,
            "endTime": 5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 5,
            "endTime": 5.130208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 5.125,
            "endTime": 5.276041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 5.25,
            "endTime": 5.411458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 5.375,
            "endTime": 5.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 5.5,
            "endTime": 5.630208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 5.625,
            "endTime": 5.776041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 5.75,
            "endTime": 5.911458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 5.875,
            "endTime": 6,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 6,
            "endTime": 6.130208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 6.125,
            "endTime": 6.276041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 6.25,
            "endTime": 6.411458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 6.375,
            "endTime": 6.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 6.5,
            "endTime": 6.630208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 6.625,
            "endTime": 6.776041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 6.75,
            "endTime": 6.911458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 6.875,
            "endTime": 7,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 7,
            "endTime": 7.130208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 7.125,
            "endTime": 7.276041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 7.25,
            "endTime": 7.411458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 7.375,
            "endTime": 7.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 7.5,
            "endTime": 7.630208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 7.625,
            "endTime": 7.776041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 7.75,
            "endTime": 7.911458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 7.875,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 8,
            "endTime": 8.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 8.125,
            "endTime": 8.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 8.25,
            "endTime": 8.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 8.375,
            "endTime": 8.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 8.5,
            "endTime": 8.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 8.625,
            "endTime": 8.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 8.75,
            "endTime": 8.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 8.875,
            "endTime": 9,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 9,
            "endTime": 9.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 9.125,
            "endTime": 9.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 9.25,
            "endTime": 9.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 9.375,
            "endTime": 9.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 9.5,
            "endTime": 9.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 9.625,
            "endTime": 9.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 9.75,
            "endTime": 9.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 9.875,
            "endTime": 10,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 10,
            "endTime": 10.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 10.125,
            "endTime": 10.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 10.25,
            "endTime": 10.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 10.375,
            "endTime": 10.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 10.5,
            "endTime": 10.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 10.625,
            "endTime": 10.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 10.75,
            "endTime": 10.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 10.875,
            "endTime": 11,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 11,
            "endTime": 11.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 11.125,
            "endTime": 11.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 11.25,
            "endTime": 11.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 11.375,
            "endTime": 11.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 11.5,
            "endTime": 11.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 11.625,
            "endTime": 11.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 11.75,
            "endTime": 11.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 11.875,
            "endTime": 12,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 12,
            "endTime": 12.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 12.125,
            "endTime": 12.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 12.25,
            "endTime": 12.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 12.375,
            "endTime": 12.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 12.5,
            "endTime": 12.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 12.625,
            "endTime": 12.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 12.75,
            "endTime": 12.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 12.875,
            "endTime": 13,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 13,
            "endTime": 13.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 13.125,
            "endTime": 13.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 13.25,
            "endTime": 13.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 13.375,
            "endTime": 13.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 13.5,
            "endTime": 13.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 13.625,
            "endTime": 13.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 13.75,
            "endTime": 13.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 13.875,
            "endTime": 14,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 14,
            "endTime": 14.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 14.125,
            "endTime": 14.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 14.25,
            "endTime": 14.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 14.375,
            "endTime": 14.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 14.5,
            "endTime": 14.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 14.625,
            "endTime": 14.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 14.75,
            "endTime": 14.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 14.875,
            "endTime": 15,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 15,
            "endTime": 15.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 15.125,
            "endTime": 15.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 15.25,
            "endTime": 15.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 15.375,
            "endTime": 15.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 15.5,
            "endTime": 15.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 15.625,
            "endTime": 15.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 15.75,
            "endTime": 15.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 15.875,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 16,
            "endTime": 16.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 16.125,
            "endTime": 16.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 16.25,
            "endTime": 16.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 16.375,
            "endTime": 16.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 16.5,
            "endTime": 16.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 16.625,
            "endTime": 16.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 16.75,
            "endTime": 16.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 16.875,
            "endTime": 17,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 17,
            "endTime": 17.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 17.125,
            "endTime": 17.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 17.25,
            "endTime": 17.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 17.375,
            "endTime": 17.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 17.5,
            "endTime": 17.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 17.625,
            "endTime": 17.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 17.75,
            "endTime": 17.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 17.875,
            "endTime": 18,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 18,
            "endTime": 18.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 18.125,
            "endTime": 18.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 18.25,
            "endTime": 18.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 18.375,
            "endTime": 18.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 18.5,
            "endTime": 18.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 18.625,
            "endTime": 18.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 18.75,
            "endTime": 18.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 18.875,
            "endTime": 19,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 19,
            "endTime": 19.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 19.125,
            "endTime": 19.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 19.25,
            "endTime": 19.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 19.375,
            "endTime": 19.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 19.5,
            "endTime": 19.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 19.625,
            "endTime": 19.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 19.75,
            "endTime": 19.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 19.875,
            "endTime": 20,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 20,
            "endTime": 20.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 20.125,
            "endTime": 20.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 20.25,
            "endTime": 20.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 20.375,
            "endTime": 20.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 20.5,
            "endTime": 20.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 20.625,
            "endTime": 20.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 20.75,
            "endTime": 20.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 20.875,
            "endTime": 21,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 21,
            "endTime": 21.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 21.125,
            "endTime": 21.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 21.25,
            "endTime": 21.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 21.375,
            "endTime": 21.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 21.5,
            "endTime": 21.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 21.625,
            "endTime": 21.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 21.75,
            "endTime": 21.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 21.875,
            "endTime": 22,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 22,
            "endTime": 22.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 22.125,
            "endTime": 22.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 22.25,
            "endTime": 22.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 22.375,
            "endTime": 22.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 22.5,
            "endTime": 22.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 22.625,
            "endTime": 22.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 22.75,
            "endTime": 22.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 22.875,
            "endTime": 23,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 23,
            "endTime": 23.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 23.125,
            "endTime": 23.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 23.25,
            "endTime": 23.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 23.375,
            "endTime": 23.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 23.5,
            "endTime": 23.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 23.625,
            "endTime": 23.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 23.75,
            "endTime": 23.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 23.875,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 24,
            "endTime": 24.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 24.125,
            "endTime": 24.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 24.25,
            "endTime": 24.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 24.375,
            "endTime": 24.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 24.5,
            "endTime": 24.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 24.625,
            "endTime": 24.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 24.75,
            "endTime": 24.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 24.875,
            "endTime": 25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 25,
            "endTime": 25.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 25.125,
            "endTime": 25.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 25.25,
            "endTime": 25.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 25.375,
            "endTime": 25.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 25.5,
            "endTime": 25.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 25.625,
            "endTime": 25.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 25.75,
            "endTime": 25.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 25.875,
            "endTime": 26,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 26,
            "endTime": 26.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 26.125,
            "endTime": 26.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 26.25,
            "endTime": 26.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 26.375,
            "endTime": 26.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 26.5,
            "endTime": 26.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 26.625,
            "endTime": 26.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 26.75,
            "endTime": 26.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 26.875,
            "endTime": 27,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 27,
            "endTime": 27.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 27.125,
            "endTime": 27.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 27.25,
            "endTime": 27.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 27.375,
            "endTime": 27.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 27.5,
            "endTime": 27.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 27.625,
            "endTime": 27.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 27.75,
            "endTime": 27.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 27.875,
            "endTime": 28,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 28,
            "endTime": 28.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 28.125,
            "endTime": 28.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 28.25,
            "endTime": 28.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 28.375,
            "endTime": 28.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 28.5,
            "endTime": 28.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 28.625,
            "endTime": 28.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 28.75,
            "endTime": 28.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 28.875,
            "endTime": 29,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 29,
            "endTime": 29.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 29.125,
            "endTime": 29.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 29.25,
            "endTime": 29.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 29.375,
            "endTime": 29.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 29.5,
            "endTime": 29.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 29.625,
            "endTime": 29.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 29.75,
            "endTime": 29.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 29.875,
            "endTime": 30,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 30,
            "endTime": 30.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 30.125,
            "endTime": 30.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 30.25,
            "endTime": 30.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 30.375,
            "endTime": 30.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 30.5,
            "endTime": 30.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 30.625,
            "endTime": 30.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 30.75,
            "endTime": 30.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 30.875,
            "endTime": 31,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 31,
            "endTime": 31.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 31.125,
            "endTime": 31.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 31.25,
            "endTime": 31.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 31.375,
            "endTime": 31.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 31.5,
            "endTime": 31.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 31.625,
            "endTime": 31.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 31.75,
            "endTime": 31.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 31.875,
            "endTime": 32.036458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          }
        ],
        "totalTime": 32.036458333333336,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const part_lead_2_16BAR_2 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 0,
            "endTime": 0.13020833333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 0.125,
            "endTime": 0.2760416666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 0.25,
            "endTime": 0.4114583333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 0.375,
            "endTime": 0.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 0.5,
            "endTime": 0.6302083333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 0.625,
            "endTime": 0.7760416666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 0.75,
            "endTime": 0.9114583333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 0.875,
            "endTime": 1,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 1,
            "endTime": 1.1302083333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 1.125,
            "endTime": 1.2760416666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 1.25,
            "endTime": 1.4114583333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 1.375,
            "endTime": 1.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 1.5,
            "endTime": 1.6302083333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 1.625,
            "endTime": 1.7760416666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 1.75,
            "endTime": 1.9114583333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 1.875,
            "endTime": 2,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 2,
            "endTime": 2.1302083333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 2.125,
            "endTime": 2.2760416666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 2.25,
            "endTime": 2.4114583333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 2.375,
            "endTime": 2.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 2.5,
            "endTime": 2.6302083333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 2.625,
            "endTime": 2.7760416666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 2.75,
            "endTime": 2.9114583333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 2.875,
            "endTime": 3,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 3,
            "endTime": 3.1302083333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 3.125,
            "endTime": 3.2760416666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 3.25,
            "endTime": 3.4114583333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 3.375,
            "endTime": 3.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 3.5,
            "endTime": 3.6302083333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 3.625,
            "endTime": 3.7760416666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 3.75,
            "endTime": 3.9114583333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 3.875,
            "endTime": 4,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 4,
            "endTime": 4.130208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 4.125,
            "endTime": 4.276041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 4.25,
            "endTime": 4.411458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 4.375,
            "endTime": 4.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 4.5,
            "endTime": 4.630208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 4.625,
            "endTime": 4.776041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 4.75,
            "endTime": 4.911458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 4.875,
            "endTime": 5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 5,
            "endTime": 5.130208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 5.125,
            "endTime": 5.276041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 5.25,
            "endTime": 5.411458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 5.375,
            "endTime": 5.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 5.5,
            "endTime": 5.630208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 5.625,
            "endTime": 5.776041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 5.75,
            "endTime": 5.911458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 5.875,
            "endTime": 6,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 6,
            "endTime": 6.130208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 6.125,
            "endTime": 6.276041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 6.25,
            "endTime": 6.411458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 6.375,
            "endTime": 6.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 6.5,
            "endTime": 6.630208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 6.625,
            "endTime": 6.776041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 6.75,
            "endTime": 6.911458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 6.875,
            "endTime": 7,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 7,
            "endTime": 7.130208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 7.125,
            "endTime": 7.276041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 7.25,
            "endTime": 7.411458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 7.375,
            "endTime": 7.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 7.5,
            "endTime": 7.630208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 7.625,
            "endTime": 7.776041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 7.75,
            "endTime": 7.911458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 7.875,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 8,
            "endTime": 8.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 8.125,
            "endTime": 8.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 8.25,
            "endTime": 8.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 8.375,
            "endTime": 8.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 8.5,
            "endTime": 8.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 8.625,
            "endTime": 8.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 8.75,
            "endTime": 8.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 8.875,
            "endTime": 9,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 9,
            "endTime": 9.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 9.125,
            "endTime": 9.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 9.25,
            "endTime": 9.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 9.375,
            "endTime": 9.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 9.5,
            "endTime": 9.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 9.625,
            "endTime": 9.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 9.75,
            "endTime": 9.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 9.875,
            "endTime": 10,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 10,
            "endTime": 10.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 10.125,
            "endTime": 10.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 10.25,
            "endTime": 10.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 10.375,
            "endTime": 10.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 10.5,
            "endTime": 10.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 10.625,
            "endTime": 10.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 10.75,
            "endTime": 10.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 10.875,
            "endTime": 11,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 11,
            "endTime": 11.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 11.125,
            "endTime": 11.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 11.25,
            "endTime": 11.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 11.375,
            "endTime": 11.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 11.5,
            "endTime": 11.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 11.625,
            "endTime": 11.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 11.75,
            "endTime": 11.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 11.875,
            "endTime": 12,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 12,
            "endTime": 12.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 12.125,
            "endTime": 12.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 12.25,
            "endTime": 12.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 12.375,
            "endTime": 12.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 12.5,
            "endTime": 12.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 12.625,
            "endTime": 12.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 12.75,
            "endTime": 12.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 12.875,
            "endTime": 13,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 13,
            "endTime": 13.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 13.125,
            "endTime": 13.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 13.25,
            "endTime": 13.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 13.375,
            "endTime": 13.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 13.5,
            "endTime": 13.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 13.625,
            "endTime": 13.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 13.75,
            "endTime": 13.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 13.875,
            "endTime": 14,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 14,
            "endTime": 14.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 14.125,
            "endTime": 14.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 14.25,
            "endTime": 14.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 14.375,
            "endTime": 14.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 14.5,
            "endTime": 14.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 14.625,
            "endTime": 14.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 14.75,
            "endTime": 14.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 14.875,
            "endTime": 15,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 15,
            "endTime": 15.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 15.125,
            "endTime": 15.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 15.25,
            "endTime": 15.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 15.375,
            "endTime": 15.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 15.5,
            "endTime": 15.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 15.625,
            "endTime": 15.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 15.75,
            "endTime": 15.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 15.875,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 16,
            "endTime": 16.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 16.125,
            "endTime": 16.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 16.25,
            "endTime": 16.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 16.375,
            "endTime": 16.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 16.5,
            "endTime": 16.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 16.625,
            "endTime": 16.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 16.75,
            "endTime": 16.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 16.875,
            "endTime": 17,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 17,
            "endTime": 17.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 17.125,
            "endTime": 17.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 17.25,
            "endTime": 17.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 17.375,
            "endTime": 17.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 17.5,
            "endTime": 17.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 17.625,
            "endTime": 17.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 17.75,
            "endTime": 17.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 17.875,
            "endTime": 18,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 18,
            "endTime": 18.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 18.125,
            "endTime": 18.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 18.25,
            "endTime": 18.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 18.375,
            "endTime": 18.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 18.5,
            "endTime": 18.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 18.625,
            "endTime": 18.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 18.75,
            "endTime": 18.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 18.875,
            "endTime": 19,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 19,
            "endTime": 19.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 19.125,
            "endTime": 19.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 19.25,
            "endTime": 19.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 19.375,
            "endTime": 19.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 19.5,
            "endTime": 19.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 19.625,
            "endTime": 19.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 19.75,
            "endTime": 19.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 19.875,
            "endTime": 20,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 20,
            "endTime": 20.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 20.125,
            "endTime": 20.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 20.25,
            "endTime": 20.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 20.375,
            "endTime": 20.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 20.5,
            "endTime": 20.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 20.625,
            "endTime": 20.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 20.75,
            "endTime": 20.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 20.875,
            "endTime": 21,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 21,
            "endTime": 21.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 21.125,
            "endTime": 21.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 21.25,
            "endTime": 21.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 21.375,
            "endTime": 21.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 21.5,
            "endTime": 21.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 21.625,
            "endTime": 21.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 21.75,
            "endTime": 21.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 21.875,
            "endTime": 22,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 22,
            "endTime": 22.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 22.125,
            "endTime": 22.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 22.25,
            "endTime": 22.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 22.375,
            "endTime": 22.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 22.5,
            "endTime": 22.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 22.625,
            "endTime": 22.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 22.75,
            "endTime": 22.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 22.875,
            "endTime": 23,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 23,
            "endTime": 23.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 23.125,
            "endTime": 23.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 23.25,
            "endTime": 23.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 23.375,
            "endTime": 23.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 23.5,
            "endTime": 23.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 23.625,
            "endTime": 23.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 23.75,
            "endTime": 23.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 23.875,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 24,
            "endTime": 24.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 24.125,
            "endTime": 24.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 24.25,
            "endTime": 24.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 24.375,
            "endTime": 24.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 24.5,
            "endTime": 24.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 24.625,
            "endTime": 24.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 24.75,
            "endTime": 24.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 24.875,
            "endTime": 25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 25,
            "endTime": 25.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 25.125,
            "endTime": 25.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 25.25,
            "endTime": 25.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 25.375,
            "endTime": 25.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 25.5,
            "endTime": 25.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 25.625,
            "endTime": 25.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 25.75,
            "endTime": 25.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 25.875,
            "endTime": 26,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 26,
            "endTime": 26.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 26.125,
            "endTime": 26.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 26.25,
            "endTime": 26.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 26.375,
            "endTime": 26.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 26.5,
            "endTime": 26.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 26.625,
            "endTime": 26.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 26.75,
            "endTime": 26.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 26.875,
            "endTime": 27,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 27,
            "endTime": 27.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 27.125,
            "endTime": 27.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 27.25,
            "endTime": 27.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 27.375,
            "endTime": 27.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 27.5,
            "endTime": 27.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 27.625,
            "endTime": 27.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 27.75,
            "endTime": 27.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 27.875,
            "endTime": 28,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 28,
            "endTime": 28.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 28.125,
            "endTime": 28.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 28.25,
            "endTime": 28.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 28.375,
            "endTime": 28.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 28.5,
            "endTime": 28.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 28.625,
            "endTime": 28.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 28.75,
            "endTime": 28.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 28.875,
            "endTime": 29,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 29,
            "endTime": 29.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 29.125,
            "endTime": 29.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 29.25,
            "endTime": 29.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 29.375,
            "endTime": 29.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 29.5,
            "endTime": 29.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 29.625,
            "endTime": 29.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 29.75,
            "endTime": 29.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 29.875,
            "endTime": 30,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 30,
            "endTime": 30.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 30.125,
            "endTime": 30.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 30.25,
            "endTime": 30.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 30.375,
            "endTime": 30.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 30.5,
            "endTime": 30.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 30.625,
            "endTime": 30.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 30.75,
            "endTime": 30.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 30.875,
            "endTime": 31,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 31,
            "endTime": 31.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 31.125,
            "endTime": 31.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 31.25,
            "endTime": 31.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 31.375,
            "endTime": 31.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 31.5,
            "endTime": 31.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 31.625,
            "endTime": 31.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 31.75,
            "endTime": 31.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 31.875,
            "endTime": 32,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 32,
            "endTime": 32.130208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 32.125,
            "endTime": 32.276041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 32.25,
            "endTime": 32.411458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 32.375,
            "endTime": 32.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 32.5,
            "endTime": 32.630208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 32.625,
            "endTime": 32.776041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 32.75,
            "endTime": 32.911458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 32.875,
            "endTime": 33,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 33,
            "endTime": 33.130208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 33.125,
            "endTime": 33.276041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 33.25,
            "endTime": 33.411458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 33.375,
            "endTime": 33.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 33.5,
            "endTime": 33.630208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 33.625,
            "endTime": 33.776041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 33.75,
            "endTime": 33.911458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 33.875,
            "endTime": 34,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 34,
            "endTime": 34.130208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 34.125,
            "endTime": 34.276041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 34.25,
            "endTime": 34.411458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 34.375,
            "endTime": 34.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 34.5,
            "endTime": 34.630208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 34.625,
            "endTime": 34.776041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 34.75,
            "endTime": 34.911458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 34.875,
            "endTime": 35,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 35,
            "endTime": 35.130208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 35.125,
            "endTime": 35.276041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 35.25,
            "endTime": 35.411458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 35.375,
            "endTime": 35.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 35.5,
            "endTime": 35.630208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 35.625,
            "endTime": 35.776041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 35.75,
            "endTime": 35.911458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 35.875,
            "endTime": 36,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 36,
            "endTime": 36.130208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 36.125,
            "endTime": 36.276041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 36.25,
            "endTime": 36.411458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 36.375,
            "endTime": 36.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 36.5,
            "endTime": 36.630208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 36.625,
            "endTime": 36.776041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 36.75,
            "endTime": 36.911458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 36.875,
            "endTime": 37,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 37,
            "endTime": 37.130208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 37.125,
            "endTime": 37.276041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 37.25,
            "endTime": 37.411458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 37.375,
            "endTime": 37.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 37.5,
            "endTime": 37.630208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 37.625,
            "endTime": 37.776041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 37.75,
            "endTime": 37.911458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 37.875,
            "endTime": 38.036458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          }
        ],
        "totalTime": 38.036458333333336,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const part_lead_2_16BAR_8 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 77,
            "velocity": 47,
            "startTime": 0,
            "endTime": 5.3125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 33,
            "startTime": 0.5,
            "endTime": 1.046875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 24,
            "startTime": 0.5,
            "endTime": 0.953125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 27,
            "startTime": 1.5,
            "endTime": 5.479166666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 57,
            "startTime": 2,
            "endTime": 5.270833333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 31,
            "startTime": 2.25,
            "endTime": 5.036458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 45,
            "startTime": 2.5,
            "endTime": 3.59375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 61,
            "startTime": 3.5,
            "endTime": 4.359375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 28,
            "startTime": 4,
            "endTime": 6.494791666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 44,
            "startTime": 4.494791666666667,
            "endTime": 6.494791666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 42,
            "startTime": 4.494791666666667,
            "endTime": 5.494791666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 92,
            "velocity": 19,
            "startTime": 4.494791666666667,
            "endTime": 6.494791666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 14,
            "startTime": 5.494791666666667,
            "endTime": 6,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 27,
            "startTime": 5.75,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 8,
            "startTime": 5.994791666666667,
            "endTime": 6.494791666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 33,
            "startTime": 6,
            "endTime": 6.546875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 24,
            "startTime": 6,
            "endTime": 6.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 57,
            "startTime": 6.25,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 92,
            "velocity": 47,
            "startTime": 6.5,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 31,
            "startTime": 6.75,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 100,
            "startTime": 7.25,
            "endTime": 7.75,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 100,
            "startTime": 7.75,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 47,
            "startTime": 8,
            "endTime": 13.3125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 33,
            "startTime": 8.5,
            "endTime": 9.046875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 24,
            "startTime": 8.5,
            "endTime": 8.953125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 27,
            "startTime": 9.5,
            "endTime": 13.479166666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 57,
            "startTime": 10,
            "endTime": 13.270833333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 31,
            "startTime": 10.25,
            "endTime": 13.036458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 45,
            "startTime": 10.5,
            "endTime": 11.59375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 61,
            "startTime": 11.5,
            "endTime": 12.359375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 28,
            "startTime": 12,
            "endTime": 14.494791666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 44,
            "startTime": 12.494791666666666,
            "endTime": 14.494791666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 42,
            "startTime": 12.494791666666666,
            "endTime": 13.494791666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 92,
            "velocity": 19,
            "startTime": 12.494791666666666,
            "endTime": 14.494791666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 14,
            "startTime": 13.494791666666666,
            "endTime": 14,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 27,
            "startTime": 13.75,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 8,
            "startTime": 13.994791666666666,
            "endTime": 14.494791666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 33,
            "startTime": 14,
            "endTime": 14.546875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 24,
            "startTime": 14,
            "endTime": 14.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 57,
            "startTime": 14.25,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 92,
            "velocity": 47,
            "startTime": 14.5,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 31,
            "startTime": 14.75,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 100,
            "startTime": 15.25,
            "endTime": 15.75,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 100,
            "startTime": 15.75,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 47,
            "startTime": 16,
            "endTime": 21.3125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 33,
            "startTime": 16.5,
            "endTime": 17.046875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 24,
            "startTime": 16.5,
            "endTime": 16.953125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 27,
            "startTime": 17.5,
            "endTime": 21.479166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 57,
            "startTime": 18,
            "endTime": 21.270833333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 31,
            "startTime": 18.25,
            "endTime": 21.036458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 45,
            "startTime": 18.5,
            "endTime": 19.59375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 61,
            "startTime": 19.5,
            "endTime": 20.359375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 28,
            "startTime": 20,
            "endTime": 22.494791666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 44,
            "startTime": 20.494791666666668,
            "endTime": 22.494791666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 42,
            "startTime": 20.494791666666668,
            "endTime": 21.494791666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 92,
            "velocity": 19,
            "startTime": 20.494791666666668,
            "endTime": 22.494791666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 14,
            "startTime": 21.494791666666668,
            "endTime": 22,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 27,
            "startTime": 21.75,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 8,
            "startTime": 21.994791666666668,
            "endTime": 22.494791666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 33,
            "startTime": 22,
            "endTime": 22.546875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 24,
            "startTime": 22,
            "endTime": 22.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 57,
            "startTime": 22.25,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 92,
            "velocity": 47,
            "startTime": 22.5,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 31,
            "startTime": 22.75,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 100,
            "startTime": 23.25,
            "endTime": 23.75,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 100,
            "startTime": 23.75,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 47,
            "startTime": 24,
            "endTime": 29.3125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 33,
            "startTime": 24.5,
            "endTime": 25.046875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 24,
            "startTime": 24.5,
            "endTime": 24.953125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 27,
            "startTime": 25.5,
            "endTime": 29.479166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 57,
            "startTime": 26,
            "endTime": 29.270833333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 31,
            "startTime": 26.25,
            "endTime": 29.036458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 45,
            "startTime": 26.5,
            "endTime": 27.59375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 61,
            "startTime": 27.5,
            "endTime": 28.359375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 28,
            "startTime": 28,
            "endTime": 30.494791666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 44,
            "startTime": 28.494791666666668,
            "endTime": 30.494791666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 42,
            "startTime": 28.494791666666668,
            "endTime": 29.494791666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 92,
            "velocity": 19,
            "startTime": 28.494791666666668,
            "endTime": 30.494791666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 14,
            "startTime": 29.494791666666668,
            "endTime": 30,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 27,
            "startTime": 29.75,
            "endTime": 32.25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 8,
            "startTime": 29.994791666666668,
            "endTime": 30.494791666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 33,
            "startTime": 30,
            "endTime": 30.546875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 24,
            "startTime": 30,
            "endTime": 30.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 57,
            "startTime": 30.25,
            "endTime": 32.25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 92,
            "velocity": 47,
            "startTime": 30.5,
            "endTime": 34.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 31,
            "startTime": 30.75,
            "endTime": 32.25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 100,
            "startTime": 31.25,
            "endTime": 31.75,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 100,
            "startTime": 31.75,
            "endTime": 32.25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          }
        ],
        "totalTime": 34.5,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const part_lead_12BAR_2 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 101,
            "velocity": 100,
            "startTime": 0,
            "endTime": 0.5677083333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 0.4947916666666667,
            "endTime": 1.109375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 0.9947916666666666,
            "endTime": 1.375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 101,
            "velocity": 100,
            "startTime": 1.5,
            "endTime": 1.84375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 1.9947916666666667,
            "endTime": 2.2239583333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 2.5,
            "endTime": 2.7708333333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 101,
            "velocity": 100,
            "startTime": 3,
            "endTime": 3.3020833333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 3.4947916666666665,
            "endTime": 3.859375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 4,
            "endTime": 4.3125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 101,
            "velocity": 100,
            "startTime": 4.494791666666667,
            "endTime": 4.755208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 4.994791666666667,
            "endTime": 5.333333333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 5.494791666666667,
            "endTime": 5.776041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 101,
            "velocity": 100,
            "startTime": 5.994791666666667,
            "endTime": 6.260416666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 6.244791666666667,
            "endTime": 6.484375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 6.5,
            "endTime": 6.869791666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 6.994791666666667,
            "endTime": 7.338541666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 7.494791666666667,
            "endTime": 7.786458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 7.994791666666667,
            "endTime": 8.375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 8.494791666666666,
            "endTime": 8.729166666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 9,
            "endTime": 9.291666666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 9.5,
            "endTime": 9.875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 10,
            "endTime": 10.229166666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 10.5,
            "endTime": 10.791666666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 11,
            "endTime": 11.375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 11.5,
            "endTime": 11.729166666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 12.494791666666666,
            "endTime": 13.109375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 12.994791666666666,
            "endTime": 13.375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 101,
            "velocity": 100,
            "startTime": 13.5,
            "endTime": 13.84375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 13.994791666666666,
            "endTime": 14.223958333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 14.5,
            "endTime": 14.770833333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 101,
            "velocity": 100,
            "startTime": 15,
            "endTime": 15.302083333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 15.494791666666666,
            "endTime": 15.859375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 16,
            "endTime": 16.3125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 101,
            "velocity": 100,
            "startTime": 16.494791666666668,
            "endTime": 16.755208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 16.994791666666668,
            "endTime": 17.333333333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 17.494791666666668,
            "endTime": 17.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 101,
            "velocity": 100,
            "startTime": 17.994791666666668,
            "endTime": 18.260416666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 18.244791666666668,
            "endTime": 18.484375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 18.5,
            "endTime": 18.869791666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 18.994791666666668,
            "endTime": 19.338541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 19.494791666666668,
            "endTime": 19.786458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 19.994791666666668,
            "endTime": 20.375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 20.494791666666668,
            "endTime": 20.729166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 21,
            "endTime": 21.291666666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 21.5,
            "endTime": 21.875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 22,
            "endTime": 22.229166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 22.5,
            "endTime": 22.791666666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 23,
            "endTime": 23.375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 23.5,
            "endTime": 23.729166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          }
        ],
        "totalTime": 23.729166666666668,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const score0 = toScore('Simon - score #0', [
    part_lead_2_16BAR_1,
    part_bass_2_16BAR_3,
    part_drum1
  ]);

  export const score1 = toScore('Simon - score #1', [
    part_lead_2_16BAR_2,
    part_bass_2_16BAR_4,
    part_drum2
  ]);

  export const score2 = toScore('Simon - score #2', [
    part_lead_2_16BAR_8,
    part_bass_2_16BAR_6,
    part_drum3
  ]);

  export const score3 = toScore('Simon - score #3', [
    part_lead_12BAR_2,
    part_bass_2_16BAR_7,
    part_drum4
  ]);

  export const score4 = toScore('Simon - score #4', [
    part_lead_2_16BAR_2,
    part_bass_2_16BAR_6,
    part_drum4
  ]);

  export const score5 = toScore('Simon - score #5', [
    part_lead_2_16BAR_8,
    part_bass_2_16BAR_7,
    part_drum1
  ]);

  export const score6 = toScore('Simon - score #6', [
    part_lead_12BAR_2,
    part_bass_2_16BAR_3,
    part_drum2
  ]);

  export const score7 = toScore('Simon - score #7', [
    part_lead_2_16BAR_1,
    part_bass_2_16BAR_7,
    part_drum2
  ]);

  export const score8 = toScore('Simon - score #8', [
    part_lead_2_16BAR_1,
    part_bass_2_16BAR_6,
    part_drum4
  ]);

  export const score9 = toScore('Simon - score #9', [
    part_lead_12BAR_2,
    part_bass_2_16BAR_4,
    part_drum4
  ]);

  export const scores = [
    score0,
    score1,
    score2,
    score3,
    score4,
    score5,
    score6,
    score7,
    score8,
    score9
  ];
 */

// From `../midi/tracks/`.
/**
  export const track_2_16BAR_1 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 0,
            "endTime": 0.13020833333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 0.125,
            "endTime": 0.2760416666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 0.25,
            "endTime": 0.4114583333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 0.375,
            "endTime": 0.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 0.5,
            "endTime": 0.6302083333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 0.625,
            "endTime": 0.7760416666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 0.75,
            "endTime": 0.9114583333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 0.875,
            "endTime": 1,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 1,
            "endTime": 1.1302083333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 1.125,
            "endTime": 1.2760416666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 1.25,
            "endTime": 1.4114583333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 1.375,
            "endTime": 1.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 1.5,
            "endTime": 1.6302083333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 1.625,
            "endTime": 1.7760416666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 1.75,
            "endTime": 1.9114583333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 1.875,
            "endTime": 2,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 2,
            "endTime": 2.1302083333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 2.125,
            "endTime": 2.2760416666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 2.25,
            "endTime": 2.4114583333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 2.375,
            "endTime": 2.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 2.5,
            "endTime": 2.6302083333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 2.625,
            "endTime": 2.7760416666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 2.75,
            "endTime": 2.9114583333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 2.875,
            "endTime": 3,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 3,
            "endTime": 3.1302083333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 3.125,
            "endTime": 3.2760416666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 3.25,
            "endTime": 3.4114583333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 3.375,
            "endTime": 3.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 3.5,
            "endTime": 3.6302083333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 3.625,
            "endTime": 3.7760416666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 3.75,
            "endTime": 3.9114583333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 3.875,
            "endTime": 4,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 4,
            "endTime": 4.130208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 4.125,
            "endTime": 4.276041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 4.25,
            "endTime": 4.411458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 4.375,
            "endTime": 4.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 4.5,
            "endTime": 4.630208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 4.625,
            "endTime": 4.776041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 4.75,
            "endTime": 4.911458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 4.875,
            "endTime": 5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 5,
            "endTime": 5.130208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 5.125,
            "endTime": 5.276041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 5.25,
            "endTime": 5.411458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 5.375,
            "endTime": 5.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 5.5,
            "endTime": 5.630208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 5.625,
            "endTime": 5.776041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 5.75,
            "endTime": 5.911458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 5.875,
            "endTime": 6,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 6,
            "endTime": 6.130208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 6.125,
            "endTime": 6.276041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 6.25,
            "endTime": 6.411458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 6.375,
            "endTime": 6.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 6.5,
            "endTime": 6.630208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 6.625,
            "endTime": 6.776041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 6.75,
            "endTime": 6.911458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 6.875,
            "endTime": 7,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 7,
            "endTime": 7.130208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 7.125,
            "endTime": 7.276041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 7.25,
            "endTime": 7.411458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 7.375,
            "endTime": 7.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 7.5,
            "endTime": 7.630208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 7.625,
            "endTime": 7.776041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 7.75,
            "endTime": 7.911458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 7.875,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 8,
            "endTime": 8.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 8.125,
            "endTime": 8.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 8.25,
            "endTime": 8.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 8.375,
            "endTime": 8.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 8.5,
            "endTime": 8.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 8.625,
            "endTime": 8.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 8.75,
            "endTime": 8.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 8.875,
            "endTime": 9,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 9,
            "endTime": 9.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 9.125,
            "endTime": 9.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 9.25,
            "endTime": 9.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 9.375,
            "endTime": 9.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 9.5,
            "endTime": 9.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 9.625,
            "endTime": 9.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 9.75,
            "endTime": 9.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 9.875,
            "endTime": 10,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 10,
            "endTime": 10.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 10.125,
            "endTime": 10.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 10.25,
            "endTime": 10.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 10.375,
            "endTime": 10.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 10.5,
            "endTime": 10.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 10.625,
            "endTime": 10.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 10.75,
            "endTime": 10.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 10.875,
            "endTime": 11,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 11,
            "endTime": 11.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 11.125,
            "endTime": 11.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 11.25,
            "endTime": 11.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 11.375,
            "endTime": 11.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 11.5,
            "endTime": 11.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 11.625,
            "endTime": 11.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 11.75,
            "endTime": 11.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 11.875,
            "endTime": 12,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 12,
            "endTime": 12.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 12.125,
            "endTime": 12.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 12.25,
            "endTime": 12.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 12.375,
            "endTime": 12.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 12.5,
            "endTime": 12.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 12.625,
            "endTime": 12.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 12.75,
            "endTime": 12.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 12.875,
            "endTime": 13,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 13,
            "endTime": 13.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 13.125,
            "endTime": 13.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 13.25,
            "endTime": 13.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 13.375,
            "endTime": 13.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 13.5,
            "endTime": 13.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 13.625,
            "endTime": 13.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 13.75,
            "endTime": 13.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 13.875,
            "endTime": 14,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 14,
            "endTime": 14.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 14.125,
            "endTime": 14.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 14.25,
            "endTime": 14.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 14.375,
            "endTime": 14.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 14.5,
            "endTime": 14.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 14.625,
            "endTime": 14.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 14.75,
            "endTime": 14.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 14.875,
            "endTime": 15,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 15,
            "endTime": 15.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 15.125,
            "endTime": 15.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 15.25,
            "endTime": 15.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 15.375,
            "endTime": 15.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 15.5,
            "endTime": 15.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 15.625,
            "endTime": 15.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 15.75,
            "endTime": 15.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 15.875,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 16,
            "endTime": 16.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 16.125,
            "endTime": 16.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 16.25,
            "endTime": 16.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 16.375,
            "endTime": 16.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 16.5,
            "endTime": 16.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 16.625,
            "endTime": 16.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 16.75,
            "endTime": 16.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 16.875,
            "endTime": 17,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 17,
            "endTime": 17.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 17.125,
            "endTime": 17.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 17.25,
            "endTime": 17.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 17.375,
            "endTime": 17.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 17.5,
            "endTime": 17.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 17.625,
            "endTime": 17.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 17.75,
            "endTime": 17.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 17.875,
            "endTime": 18,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 18,
            "endTime": 18.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 18.125,
            "endTime": 18.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 18.25,
            "endTime": 18.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 18.375,
            "endTime": 18.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 18.5,
            "endTime": 18.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 18.625,
            "endTime": 18.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 18.75,
            "endTime": 18.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 18.875,
            "endTime": 19,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 19,
            "endTime": 19.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 19.125,
            "endTime": 19.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 19.25,
            "endTime": 19.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 19.375,
            "endTime": 19.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 19.5,
            "endTime": 19.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 19.625,
            "endTime": 19.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 19.75,
            "endTime": 19.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 19.875,
            "endTime": 20,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 20,
            "endTime": 20.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 20.125,
            "endTime": 20.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 20.25,
            "endTime": 20.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 20.375,
            "endTime": 20.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 20.5,
            "endTime": 20.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 20.625,
            "endTime": 20.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 20.75,
            "endTime": 20.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 20.875,
            "endTime": 21,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 21,
            "endTime": 21.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 21.125,
            "endTime": 21.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 21.25,
            "endTime": 21.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 21.375,
            "endTime": 21.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 21.5,
            "endTime": 21.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 21.625,
            "endTime": 21.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 21.75,
            "endTime": 21.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 21.875,
            "endTime": 22,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 22,
            "endTime": 22.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 22.125,
            "endTime": 22.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 22.25,
            "endTime": 22.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 22.375,
            "endTime": 22.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 22.5,
            "endTime": 22.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 22.625,
            "endTime": 22.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 22.75,
            "endTime": 22.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 22.875,
            "endTime": 23,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 23,
            "endTime": 23.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 23.125,
            "endTime": 23.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 23.25,
            "endTime": 23.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 23.375,
            "endTime": 23.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 23.5,
            "endTime": 23.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 23.625,
            "endTime": 23.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 23.75,
            "endTime": 23.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 23.875,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 24,
            "endTime": 24.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 24.125,
            "endTime": 24.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 24.25,
            "endTime": 24.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 24.375,
            "endTime": 24.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 24.5,
            "endTime": 24.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 24.625,
            "endTime": 24.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 24.75,
            "endTime": 24.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 24.875,
            "endTime": 25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 25,
            "endTime": 25.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 25.125,
            "endTime": 25.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 25.25,
            "endTime": 25.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 25.375,
            "endTime": 25.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 25.5,
            "endTime": 25.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 25.625,
            "endTime": 25.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 25.75,
            "endTime": 25.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 25.875,
            "endTime": 26,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 26,
            "endTime": 26.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 26.125,
            "endTime": 26.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 26.25,
            "endTime": 26.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 26.375,
            "endTime": 26.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 26.5,
            "endTime": 26.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 26.625,
            "endTime": 26.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 26.75,
            "endTime": 26.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 26.875,
            "endTime": 27,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 27,
            "endTime": 27.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 27.125,
            "endTime": 27.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 27.25,
            "endTime": 27.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 27.375,
            "endTime": 27.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 27.5,
            "endTime": 27.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 27.625,
            "endTime": 27.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 27.75,
            "endTime": 27.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 27.875,
            "endTime": 28,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 28,
            "endTime": 28.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 28.125,
            "endTime": 28.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 28.25,
            "endTime": 28.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 28.375,
            "endTime": 28.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 28.5,
            "endTime": 28.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 28.625,
            "endTime": 28.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 28.75,
            "endTime": 28.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 28.875,
            "endTime": 29,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 29,
            "endTime": 29.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 29.125,
            "endTime": 29.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 29.25,
            "endTime": 29.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 29.375,
            "endTime": 29.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 29.5,
            "endTime": 29.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 29.625,
            "endTime": 29.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 29.75,
            "endTime": 29.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 29.875,
            "endTime": 30,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 30,
            "endTime": 30.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 30.125,
            "endTime": 30.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 30.25,
            "endTime": 30.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 30.375,
            "endTime": 30.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 30.5,
            "endTime": 30.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 30.625,
            "endTime": 30.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 30.75,
            "endTime": 30.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 30.875,
            "endTime": 31,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 31,
            "endTime": 31.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 31.125,
            "endTime": 31.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 31.25,
            "endTime": 31.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 31.375,
            "endTime": 31.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 31.5,
            "endTime": 31.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 120,
            "startTime": 31.625,
            "endTime": 31.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 120,
            "startTime": 31.75,
            "endTime": 31.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 120,
            "startTime": 31.875,
            "endTime": 32.036458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          }
        ],
        "totalTime": 32.036458333333336,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const track_2_16BAR_2 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 0,
            "endTime": 0.13020833333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 0.125,
            "endTime": 0.2760416666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 0.25,
            "endTime": 0.4114583333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 0.375,
            "endTime": 0.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 0.5,
            "endTime": 0.6302083333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 0.625,
            "endTime": 0.7760416666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 0.75,
            "endTime": 0.9114583333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 0.875,
            "endTime": 1,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 1,
            "endTime": 1.1302083333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 1.125,
            "endTime": 1.2760416666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 1.25,
            "endTime": 1.4114583333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 1.375,
            "endTime": 1.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 1.5,
            "endTime": 1.6302083333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 1.625,
            "endTime": 1.7760416666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 1.75,
            "endTime": 1.9114583333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 1.875,
            "endTime": 2,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 2,
            "endTime": 2.1302083333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 2.125,
            "endTime": 2.2760416666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 2.25,
            "endTime": 2.4114583333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 2.375,
            "endTime": 2.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 2.5,
            "endTime": 2.6302083333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 2.625,
            "endTime": 2.7760416666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 2.75,
            "endTime": 2.9114583333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 2.875,
            "endTime": 3,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 3,
            "endTime": 3.1302083333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 3.125,
            "endTime": 3.2760416666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 3.25,
            "endTime": 3.4114583333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 3.375,
            "endTime": 3.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 3.5,
            "endTime": 3.6302083333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 3.625,
            "endTime": 3.7760416666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 3.75,
            "endTime": 3.9114583333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 3.875,
            "endTime": 4,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 4,
            "endTime": 4.130208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 4.125,
            "endTime": 4.276041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 4.25,
            "endTime": 4.411458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 4.375,
            "endTime": 4.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 4.5,
            "endTime": 4.630208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 4.625,
            "endTime": 4.776041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 4.75,
            "endTime": 4.911458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 4.875,
            "endTime": 5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 5,
            "endTime": 5.130208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 5.125,
            "endTime": 5.276041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 5.25,
            "endTime": 5.411458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 5.375,
            "endTime": 5.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 5.5,
            "endTime": 5.630208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 5.625,
            "endTime": 5.776041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 5.75,
            "endTime": 5.911458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 5.875,
            "endTime": 6,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 6,
            "endTime": 6.130208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 6.125,
            "endTime": 6.276041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 6.25,
            "endTime": 6.411458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 6.375,
            "endTime": 6.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 6.5,
            "endTime": 6.630208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 6.625,
            "endTime": 6.776041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 6.75,
            "endTime": 6.911458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 6.875,
            "endTime": 7,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 7,
            "endTime": 7.130208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 7.125,
            "endTime": 7.276041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 7.25,
            "endTime": 7.411458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 7.375,
            "endTime": 7.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 7.5,
            "endTime": 7.630208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 7.625,
            "endTime": 7.776041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 7.75,
            "endTime": 7.911458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 7.875,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 8,
            "endTime": 8.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 8.125,
            "endTime": 8.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 8.25,
            "endTime": 8.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 8.375,
            "endTime": 8.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 8.5,
            "endTime": 8.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 8.625,
            "endTime": 8.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 8.75,
            "endTime": 8.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 8.875,
            "endTime": 9,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 9,
            "endTime": 9.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 9.125,
            "endTime": 9.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 9.25,
            "endTime": 9.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 9.375,
            "endTime": 9.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 9.5,
            "endTime": 9.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 9.625,
            "endTime": 9.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 9.75,
            "endTime": 9.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 9.875,
            "endTime": 10,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 10,
            "endTime": 10.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 10.125,
            "endTime": 10.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 10.25,
            "endTime": 10.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 10.375,
            "endTime": 10.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 10.5,
            "endTime": 10.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 10.625,
            "endTime": 10.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 10.75,
            "endTime": 10.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 10.875,
            "endTime": 11,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 11,
            "endTime": 11.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 11.125,
            "endTime": 11.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 11.25,
            "endTime": 11.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 11.375,
            "endTime": 11.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 11.5,
            "endTime": 11.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 11.625,
            "endTime": 11.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 11.75,
            "endTime": 11.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 11.875,
            "endTime": 12,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 12,
            "endTime": 12.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 12.125,
            "endTime": 12.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 12.25,
            "endTime": 12.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 12.375,
            "endTime": 12.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 12.5,
            "endTime": 12.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 12.625,
            "endTime": 12.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 12.75,
            "endTime": 12.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 12.875,
            "endTime": 13,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 13,
            "endTime": 13.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 13.125,
            "endTime": 13.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 13.25,
            "endTime": 13.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 13.375,
            "endTime": 13.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 13.5,
            "endTime": 13.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 13.625,
            "endTime": 13.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 13.75,
            "endTime": 13.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 13.875,
            "endTime": 14,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 14,
            "endTime": 14.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 14.125,
            "endTime": 14.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 14.25,
            "endTime": 14.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 14.375,
            "endTime": 14.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 14.5,
            "endTime": 14.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 14.625,
            "endTime": 14.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 14.75,
            "endTime": 14.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 14.875,
            "endTime": 15,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 15,
            "endTime": 15.130208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 15.125,
            "endTime": 15.276041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 15.25,
            "endTime": 15.411458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 15.375,
            "endTime": 15.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 15.5,
            "endTime": 15.630208333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 15.625,
            "endTime": 15.776041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 15.75,
            "endTime": 15.911458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 15.875,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 16,
            "endTime": 16.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 16.125,
            "endTime": 16.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 16.25,
            "endTime": 16.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 16.375,
            "endTime": 16.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 16.5,
            "endTime": 16.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 16.625,
            "endTime": 16.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 16.75,
            "endTime": 16.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 16.875,
            "endTime": 17,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 17,
            "endTime": 17.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 17.125,
            "endTime": 17.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 17.25,
            "endTime": 17.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 17.375,
            "endTime": 17.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 17.5,
            "endTime": 17.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 17.625,
            "endTime": 17.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 17.75,
            "endTime": 17.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 17.875,
            "endTime": 18,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 18,
            "endTime": 18.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 18.125,
            "endTime": 18.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 18.25,
            "endTime": 18.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 18.375,
            "endTime": 18.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 18.5,
            "endTime": 18.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 18.625,
            "endTime": 18.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 18.75,
            "endTime": 18.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 18.875,
            "endTime": 19,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 19,
            "endTime": 19.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 19.125,
            "endTime": 19.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 19.25,
            "endTime": 19.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 19.375,
            "endTime": 19.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 19.5,
            "endTime": 19.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 19.625,
            "endTime": 19.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 19.75,
            "endTime": 19.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 19.875,
            "endTime": 20,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 20,
            "endTime": 20.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 20.125,
            "endTime": 20.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 20.25,
            "endTime": 20.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 20.375,
            "endTime": 20.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 20.5,
            "endTime": 20.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 20.625,
            "endTime": 20.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 20.75,
            "endTime": 20.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 20.875,
            "endTime": 21,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 21,
            "endTime": 21.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 21.125,
            "endTime": 21.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 21.25,
            "endTime": 21.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 21.375,
            "endTime": 21.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 21.5,
            "endTime": 21.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 21.625,
            "endTime": 21.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 21.75,
            "endTime": 21.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 21.875,
            "endTime": 22,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 22,
            "endTime": 22.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 22.125,
            "endTime": 22.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 22.25,
            "endTime": 22.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 22.375,
            "endTime": 22.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 22.5,
            "endTime": 22.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 22.625,
            "endTime": 22.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 22.75,
            "endTime": 22.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 22.875,
            "endTime": 23,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 23,
            "endTime": 23.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 23.125,
            "endTime": 23.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 23.25,
            "endTime": 23.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 23.375,
            "endTime": 23.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 23.5,
            "endTime": 23.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 23.625,
            "endTime": 23.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 23.75,
            "endTime": 23.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 23.875,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 24,
            "endTime": 24.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 24.125,
            "endTime": 24.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 24.25,
            "endTime": 24.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 24.375,
            "endTime": 24.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 24.5,
            "endTime": 24.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 24.625,
            "endTime": 24.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 24.75,
            "endTime": 24.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 24.875,
            "endTime": 25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 25,
            "endTime": 25.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 25.125,
            "endTime": 25.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 25.25,
            "endTime": 25.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 25.375,
            "endTime": 25.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 25.5,
            "endTime": 25.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 25.625,
            "endTime": 25.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 25.75,
            "endTime": 25.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 25.875,
            "endTime": 26,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 26,
            "endTime": 26.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 26.125,
            "endTime": 26.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 26.25,
            "endTime": 26.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 26.375,
            "endTime": 26.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 26.5,
            "endTime": 26.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 26.625,
            "endTime": 26.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 26.75,
            "endTime": 26.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 26.875,
            "endTime": 27,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 27,
            "endTime": 27.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 27.125,
            "endTime": 27.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 27.25,
            "endTime": 27.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 27.375,
            "endTime": 27.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 27.5,
            "endTime": 27.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 27.625,
            "endTime": 27.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 27.75,
            "endTime": 27.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 27.875,
            "endTime": 28,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 28,
            "endTime": 28.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 28.125,
            "endTime": 28.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 28.25,
            "endTime": 28.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 28.375,
            "endTime": 28.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 28.5,
            "endTime": 28.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 28.625,
            "endTime": 28.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 28.75,
            "endTime": 28.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 28.875,
            "endTime": 29,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 29,
            "endTime": 29.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 29.125,
            "endTime": 29.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 29.25,
            "endTime": 29.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 29.375,
            "endTime": 29.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 29.5,
            "endTime": 29.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 29.625,
            "endTime": 29.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 29.75,
            "endTime": 29.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 29.875,
            "endTime": 30,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 30,
            "endTime": 30.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 30.125,
            "endTime": 30.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 30.25,
            "endTime": 30.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 30.375,
            "endTime": 30.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 30.5,
            "endTime": 30.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 30.625,
            "endTime": 30.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 30.75,
            "endTime": 30.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 30.875,
            "endTime": 31,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 31,
            "endTime": 31.130208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 31.125,
            "endTime": 31.276041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 31.25,
            "endTime": 31.411458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 31.375,
            "endTime": 31.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 31.5,
            "endTime": 31.630208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 31.625,
            "endTime": 31.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 31.75,
            "endTime": 31.911458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 31.875,
            "endTime": 32,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 32,
            "endTime": 32.130208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 32.125,
            "endTime": 32.276041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 32.25,
            "endTime": 32.411458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 32.375,
            "endTime": 32.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 32.5,
            "endTime": 32.630208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 32.625,
            "endTime": 32.776041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 32.75,
            "endTime": 32.911458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 32.875,
            "endTime": 33,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 33,
            "endTime": 33.130208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 33.125,
            "endTime": 33.276041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 33.25,
            "endTime": 33.411458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 33.375,
            "endTime": 33.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 33.5,
            "endTime": 33.630208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 33.625,
            "endTime": 33.776041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 33.75,
            "endTime": 33.911458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 33.875,
            "endTime": 34,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 34,
            "endTime": 34.130208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 34.125,
            "endTime": 34.276041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 34.25,
            "endTime": 34.411458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 34.375,
            "endTime": 34.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 34.5,
            "endTime": 34.630208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 34.625,
            "endTime": 34.776041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 34.75,
            "endTime": 34.911458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 34.875,
            "endTime": 35,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 35,
            "endTime": 35.130208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 35.125,
            "endTime": 35.276041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 35.25,
            "endTime": 35.411458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 35.375,
            "endTime": 35.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 35.5,
            "endTime": 35.630208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 35.625,
            "endTime": 35.776041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 120,
            "startTime": 35.75,
            "endTime": 35.911458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 120,
            "startTime": 35.875,
            "endTime": 36,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 36,
            "endTime": 36.130208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 36.125,
            "endTime": 36.276041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 36.25,
            "endTime": 36.411458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 36.375,
            "endTime": 36.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 36.5,
            "endTime": 36.630208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 36.625,
            "endTime": 36.776041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 36.75,
            "endTime": 36.911458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 36.875,
            "endTime": 37,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 37,
            "endTime": 37.130208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 37.125,
            "endTime": 37.276041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 37.25,
            "endTime": 37.411458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 37.375,
            "endTime": 37.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 120,
            "startTime": 37.5,
            "endTime": 37.630208333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 120,
            "startTime": 37.625,
            "endTime": 37.776041666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 120,
            "startTime": 37.75,
            "endTime": 37.911458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 120,
            "startTime": 37.875,
            "endTime": 38.036458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          }
        ],
        "totalTime": 38.036458333333336,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const track_2_16BAR_3 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 0.875,
            "endTime": 0.9895833333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 49,
            "velocity": 120,
            "startTime": 1,
            "endTime": 1.1458333333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 2.875,
            "endTime": 2.9895833333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 49,
            "velocity": 120,
            "startTime": 3,
            "endTime": 3.1458333333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 4.875,
            "endTime": 4.989583333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 48,
            "velocity": 120,
            "startTime": 5,
            "endTime": 5.145833333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 6.875,
            "endTime": 6.989583333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 48,
            "velocity": 120,
            "startTime": 7,
            "endTime": 7.145833333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 41,
            "velocity": 100,
            "startTime": 8.875,
            "endTime": 8.989583333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 53,
            "velocity": 120,
            "startTime": 9,
            "endTime": 9.145833333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 41,
            "velocity": 100,
            "startTime": 10.875,
            "endTime": 10.989583333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 53,
            "velocity": 120,
            "startTime": 11,
            "endTime": 11.145833333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 44,
            "velocity": 100,
            "startTime": 12.875,
            "endTime": 12.989583333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 56,
            "velocity": 120,
            "startTime": 13,
            "endTime": 13.145833333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 44,
            "velocity": 100,
            "startTime": 14.875,
            "endTime": 14.989583333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 56,
            "velocity": 120,
            "startTime": 15,
            "endTime": 15.145833333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 16.875,
            "endTime": 16.989583333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 49,
            "velocity": 120,
            "startTime": 17,
            "endTime": 17.145833333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 37,
            "velocity": 100,
            "startTime": 18.875,
            "endTime": 18.989583333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 49,
            "velocity": 120,
            "startTime": 19,
            "endTime": 19.145833333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 20.875,
            "endTime": 20.989583333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 48,
            "velocity": 120,
            "startTime": 21,
            "endTime": 21.145833333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 36,
            "velocity": 100,
            "startTime": 22.875,
            "endTime": 22.989583333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 48,
            "velocity": 120,
            "startTime": 23,
            "endTime": 23.145833333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 41,
            "velocity": 100,
            "startTime": 24.875,
            "endTime": 24.989583333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 53,
            "velocity": 120,
            "startTime": 25,
            "endTime": 25.145833333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 41,
            "velocity": 100,
            "startTime": 26.875,
            "endTime": 26.989583333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
          "pitch": 53,
            "velocity": 120,
            "startTime": 27,
            "endTime": 27.145833333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 44,
            "velocity": 100,
            "startTime": 28.875,
            "endTime": 28.989583333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 56,
            "velocity": 120,
            "startTime": 29,
            "endTime": 29.145833333333332,
            "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 44,
          "velocity": 100,
          "startTime": 30.875,
          "endTime": 30.989583333333332,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        },
        {
          "pitch": 56,
          "velocity": 120,
          "startTime": 31,
          "endTime": 31.145833333333332,
          "instrument": 0,
          "program": 0,
          "isDrum": false
        }
        ],
        "totalTime": 31.145833333333332,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const track_2_16BAR_4 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 0,
            "endTime": 1.9947916666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 1.9895833333333333,
            "endTime": 5.963541666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 6.041666666666667,
            "endTime": 9.901041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 9.979166666666666,
            "endTime": 13.869791666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 14.020833333333334,
            "endTime": 17.958333333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 18.026041666666668,
            "endTime": 21.791666666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 21.973958333333332,
            "endTime": 26.015625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 26.026041666666668,
            "endTime": 29.786458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 30.046875,
            "endTime": 33.984375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          }
        ],
        "totalTime": 33.984375,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const track_2_16BAR_5 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 105,
            "velocity": 100,
            "startTime": 0,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 113,
            "velocity": 100,
            "startTime": 0,
            "endTime": 4,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 112,
            "velocity": 100,
            "startTime": 4,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 105,
            "velocity": 100,
            "startTime": 8,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 113,
            "velocity": 100,
            "startTime": 8,
            "endTime": 12,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 112,
            "velocity": 100,
            "startTime": 12,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 105,
            "velocity": 100,
            "startTime": 16,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 113,
            "velocity": 100,
            "startTime": 16,
            "endTime": 20,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 112,
            "velocity": 100,
            "startTime": 20,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 105,
            "velocity": 100,
            "startTime": 24,
            "endTime": 32,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 113,
            "velocity": 100,
            "startTime": 24,
            "endTime": 28,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 112,
            "velocity": 100,
            "startTime": 28,
            "endTime": 32.010416666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          }
        ],
        "totalTime": 32.010416666666664,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const track_2_16BAR_6 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 0,
            "endTime": 0.25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 0.375,
            "endTime": 0.625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 2,
            "endTime": 3,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 4,
            "endTime": 4.25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 4.375,
            "endTime": 4.625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 6,
            "endTime": 6.875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 8,
            "endTime": 8.25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 8.375,
            "endTime": 8.75,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 10,
            "endTime": 11.75,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 12,
            "endTime": 12.25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 12.375,
            "endTime": 12.625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 14,
            "endTime": 15.989583333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 16,
            "endTime": 16.25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 16.375,
            "endTime": 16.625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 18,
            "endTime": 19,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 20,
            "endTime": 20.25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 20.375,
            "endTime": 20.625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 22,
            "endTime": 22.875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 24,
            "endTime": 24.25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 24.375,
            "endTime": 24.75,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 26,
            "endTime": 27.75,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 28,
            "endTime": 28.25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 28.375,
            "endTime": 28.625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 30,
            "endTime": 31.989583333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          }
        ],
        "totalTime": 31.989583333333332,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const track_2_16BAR_7 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 0,
            "endTime": 4,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 0,
            "endTime": 4,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 4,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 67,
            "velocity": 100,
            "startTime": 4,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 8,
            "endTime": 12,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 8,
            "endTime": 12,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 12,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 12,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 16,
            "endTime": 20,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 16,
            "endTime": 20,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 20,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 67,
            "velocity": 100,
            "startTime": 20,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 24,
            "endTime": 28,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 24,
            "endTime": 28,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 28,
            "endTime": 32,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 28,
            "endTime": 37,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          }
        ],
        "totalTime": 37,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const track_2_16BAR_8 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 77,
            "velocity": 47,
            "startTime": 0,
            "endTime": 5.3125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 33,
            "startTime": 0.5,
            "endTime": 1.046875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 24,
            "startTime": 0.5,
            "endTime": 0.953125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 27,
            "startTime": 1.5,
            "endTime": 5.479166666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 57,
            "startTime": 2,
            "endTime": 5.270833333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 31,
            "startTime": 2.25,
            "endTime": 5.036458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 45,
            "startTime": 2.5,
            "endTime": 3.59375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 61,
            "startTime": 3.5,
            "endTime": 4.359375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 28,
            "startTime": 4,
            "endTime": 6.494791666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 44,
            "startTime": 4.494791666666667,
            "endTime": 6.494791666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 42,
            "startTime": 4.494791666666667,
            "endTime": 5.494791666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 92,
            "velocity": 19,
            "startTime": 4.494791666666667,
            "endTime": 6.494791666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 14,
            "startTime": 5.494791666666667,
            "endTime": 6,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 27,
            "startTime": 5.75,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 8,
            "startTime": 5.994791666666667,
            "endTime": 6.494791666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 33,
            "startTime": 6,
            "endTime": 6.546875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 24,
            "startTime": 6,
            "endTime": 6.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 57,
            "startTime": 6.25,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 92,
            "velocity": 47,
            "startTime": 6.5,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 31,
            "startTime": 6.75,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 100,
            "startTime": 7.25,
            "endTime": 7.75,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 100,
            "startTime": 7.75,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 47,
            "startTime": 8,
            "endTime": 13.3125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 33,
            "startTime": 8.5,
            "endTime": 9.046875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 24,
            "startTime": 8.5,
            "endTime": 8.953125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 27,
            "startTime": 9.5,
            "endTime": 13.479166666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 57,
            "startTime": 10,
            "endTime": 13.270833333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 31,
            "startTime": 10.25,
            "endTime": 13.036458333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 45,
            "startTime": 10.5,
            "endTime": 11.59375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 61,
            "startTime": 11.5,
            "endTime": 12.359375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 28,
            "startTime": 12,
            "endTime": 14.494791666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 44,
            "startTime": 12.494791666666666,
            "endTime": 14.494791666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 42,
            "startTime": 12.494791666666666,
            "endTime": 13.494791666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 92,
            "velocity": 19,
            "startTime": 12.494791666666666,
            "endTime": 14.494791666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 14,
            "startTime": 13.494791666666666,
            "endTime": 14,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 27,
            "startTime": 13.75,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 8,
            "startTime": 13.994791666666666,
            "endTime": 14.494791666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 33,
            "startTime": 14,
            "endTime": 14.546875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 24,
            "startTime": 14,
            "endTime": 14.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 57,
            "startTime": 14.25,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 92,
            "velocity": 47,
            "startTime": 14.5,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 31,
            "startTime": 14.75,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 100,
            "startTime": 15.25,
            "endTime": 15.75,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 100,
            "startTime": 15.75,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 47,
            "startTime": 16,
            "endTime": 21.3125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 33,
            "startTime": 16.5,
            "endTime": 17.046875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 24,
            "startTime": 16.5,
            "endTime": 16.953125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 27,
            "startTime": 17.5,
            "endTime": 21.479166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 57,
            "startTime": 18,
            "endTime": 21.270833333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 31,
            "startTime": 18.25,
            "endTime": 21.036458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 45,
            "startTime": 18.5,
            "endTime": 19.59375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 61,
            "startTime": 19.5,
            "endTime": 20.359375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 28,
            "startTime": 20,
            "endTime": 22.494791666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 44,
            "startTime": 20.494791666666668,
            "endTime": 22.494791666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 42,
            "startTime": 20.494791666666668,
            "endTime": 21.494791666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 92,
            "velocity": 19,
            "startTime": 20.494791666666668,
            "endTime": 22.494791666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 14,
            "startTime": 21.494791666666668,
            "endTime": 22,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 27,
            "startTime": 21.75,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 8,
            "startTime": 21.994791666666668,
            "endTime": 22.494791666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 33,
            "startTime": 22,
            "endTime": 22.546875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 24,
            "startTime": 22,
            "endTime": 22.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 57,
            "startTime": 22.25,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 92,
            "velocity": 47,
            "startTime": 22.5,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 31,
            "startTime": 22.75,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 100,
            "startTime": 23.25,
            "endTime": 23.75,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 100,
            "startTime": 23.75,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 47,
            "startTime": 24,
            "endTime": 29.3125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 33,
            "startTime": 24.5,
            "endTime": 25.046875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 24,
            "startTime": 24.5,
            "endTime": 24.953125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 27,
            "startTime": 25.5,
            "endTime": 29.479166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 57,
            "startTime": 26,
            "endTime": 29.270833333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 31,
            "startTime": 26.25,
            "endTime": 29.036458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 45,
            "startTime": 26.5,
            "endTime": 27.59375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 61,
            "startTime": 27.5,
            "endTime": 28.359375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 28,
            "startTime": 28,
            "endTime": 30.494791666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 44,
            "startTime": 28.494791666666668,
            "endTime": 30.494791666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 89,
            "velocity": 42,
            "startTime": 28.494791666666668,
            "endTime": 29.494791666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 92,
            "velocity": 19,
            "startTime": 28.494791666666668,
            "endTime": 30.494791666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 14,
            "startTime": 29.494791666666668,
            "endTime": 30,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 27,
            "startTime": 29.75,
            "endTime": 32.25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 91,
            "velocity": 8,
            "startTime": 29.994791666666668,
            "endTime": 30.494791666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 33,
            "startTime": 30,
            "endTime": 30.546875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 24,
            "startTime": 30,
            "endTime": 30.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 57,
            "startTime": 30.25,
            "endTime": 32.25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 92,
            "velocity": 47,
            "startTime": 30.5,
            "endTime": 34.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 31,
            "startTime": 30.75,
            "endTime": 32.25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 100,
            "startTime": 31.25,
            "endTime": 31.75,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 100,
            "startTime": 31.75,
            "endTime": 32.25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          }
        ],
        "totalTime": 34.5,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const track_12BAR_1 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 0,
            "endTime": 6,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 4,
            "endTime": 6,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 100,
            "startTime": 6,
            "endTime": 12.010416666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 10,
            "endTime": 12,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 12,
            "endTime": 18,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 58,
            "velocity": 100,
            "startTime": 15,
            "endTime": 18,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 18,
            "endTime": 23.979166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 23.979166666666668,
            "endTime": 29.786458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 29.947916666666668,
            "endTime": 35.958333333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 35.994791666666664,
            "endTime": 41.828125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 41.963541666666664,
            "endTime": 47.927083333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 70,
            "velocity": 47,
            "startTime": 48,
            "endTime": 53.3125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 48.046875,
            "endTime": 53.96875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 33,
            "startTime": 48.5,
            "endTime": 49.046875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 78,
            "velocity": 24,
            "startTime": 48.5,
            "endTime": 48.953125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 27,
            "startTime": 49.5,
            "endTime": 53.479166666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 57,
            "startTime": 50,
            "endTime": 53.270833333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 31,
            "startTime": 50.5,
            "endTime": 53.286458333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 66,
            "velocity": 45,
            "startTime": 51.5,
            "endTime": 52.59375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 61,
            "startTime": 52.5,
            "endTime": 53.359375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 78,
            "velocity": 28,
            "startTime": 53.5,
            "endTime": 56,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 53.958333333333336,
            "endTime": 59.921875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 44,
            "startTime": 54,
            "endTime": 56,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 42,
            "startTime": 54,
            "endTime": 54.994791666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 19,
            "startTime": 54,
            "endTime": 56,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 14,
            "startTime": 55,
            "endTime": 56,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 8,
            "startTime": 55.5,
            "endTime": 56,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 47,
            "startTime": 56,
            "endTime": 60,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 33,
            "startTime": 56.5,
            "endTime": 57.046875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 24,
            "startTime": 56.5,
            "endTime": 56.953125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 27,
            "startTime": 57.5,
            "endTime": 60,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 57,
            "startTime": 58,
            "endTime": 60,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 31,
            "startTime": 58.5,
            "endTime": 60,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 59,
            "endTime": 59.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 100,
            "startTime": 59.5,
            "endTime": 60,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 70,
            "velocity": 47,
            "startTime": 60,
            "endTime": 65.3125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 58,
            "velocity": 100,
            "startTime": 60.010416666666664,
            "endTime": 65.94791666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 33,
            "startTime": 60.5,
            "endTime": 61.046875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 78,
            "velocity": 24,
            "startTime": 60.5,
            "endTime": 60.953125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 27,
            "startTime": 61.5,
            "endTime": 65.47916666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 57,
            "startTime": 62,
            "endTime": 65.27083333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 31,
            "startTime": 62.5,
            "endTime": 65.28645833333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 66,
            "velocity": 45,
            "startTime": 63.5,
            "endTime": 64.59375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 61,
            "startTime": 64.5,
            "endTime": 65.359375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 78,
            "velocity": 28,
            "startTime": 65.5,
            "endTime": 68,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 65.97395833333333,
            "endTime": 71.03125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 44,
            "startTime": 66,
            "endTime": 68,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 42,
            "startTime": 66,
            "endTime": 66.99479166666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 19,
            "startTime": 66,
            "endTime": 68,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 14,
            "startTime": 67,
            "endTime": 68,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 84,
            "velocity": 8,
            "startTime": 67.5,
            "endTime": 68,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 85,
            "velocity": 47,
            "startTime": 68,
            "endTime": 72,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 33,
            "startTime": 68.5,
            "endTime": 69.046875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 24,
            "startTime": 68.5,
            "endTime": 68.953125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 27,
            "startTime": 69.5,
            "endTime": 72,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 57,
            "startTime": 70,
            "endTime": 72,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 31,
            "startTime": 70.5,
            "endTime": 72,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 71,
            "endTime": 71.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 71.046875,
            "endTime": 71.95833333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 100,
            "startTime": 71.5,
            "endTime": 72,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 71.96875,
            "endTime": 72.84895833333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 70,
            "velocity": 47,
            "startTime": 72,
            "endTime": 77.3125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 33,
            "startTime": 72.5,
            "endTime": 73.046875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 78,
            "velocity": 24,
            "startTime": 72.5,
            "endTime": 72.953125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 57,
            "velocity": 100,
            "startTime": 73.03125,
            "endTime": 73.79166666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 27,
            "startTime": 73.5,
            "endTime": 77.47916666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          }
        ],
        "totalTime": 77.47916666666667,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const track_12BAR_2 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 101,
            "velocity": 100,
            "startTime": 0,
            "endTime": 0.5677083333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 0.4947916666666667,
            "endTime": 1.109375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 0.9947916666666666,
            "endTime": 1.375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 101,
            "velocity": 100,
            "startTime": 1.5,
            "endTime": 1.84375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 1.9947916666666667,
            "endTime": 2.2239583333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 2.5,
            "endTime": 2.7708333333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 101,
            "velocity": 100,
            "startTime": 3,
            "endTime": 3.3020833333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 3.4947916666666665,
            "endTime": 3.859375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 4,
            "endTime": 4.3125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 101,
            "velocity": 100,
            "startTime": 4.494791666666667,
            "endTime": 4.755208333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 4.994791666666667,
            "endTime": 5.333333333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 5.494791666666667,
            "endTime": 5.776041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 101,
            "velocity": 100,
            "startTime": 5.994791666666667,
            "endTime": 6.260416666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 6.244791666666667,
            "endTime": 6.484375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 6.5,
            "endTime": 6.869791666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 6.994791666666667,
            "endTime": 7.338541666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 7.494791666666667,
            "endTime": 7.786458333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 7.994791666666667,
            "endTime": 8.375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 8.494791666666666,
            "endTime": 8.729166666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 9,
            "endTime": 9.291666666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 9.5,
            "endTime": 9.875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 10,
            "endTime": 10.229166666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 10.5,
            "endTime": 10.791666666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 11,
            "endTime": 11.375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 11.5,
            "endTime": 11.729166666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 12.494791666666666,
            "endTime": 13.109375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 12.994791666666666,
            "endTime": 13.375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 101,
            "velocity": 100,
            "startTime": 13.5,
            "endTime": 13.84375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 13.994791666666666,
            "endTime": 14.223958333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 14.5,
            "endTime": 14.770833333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 101,
            "velocity": 100,
            "startTime": 15,
            "endTime": 15.302083333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 15.494791666666666,
            "endTime": 15.859375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 16,
            "endTime": 16.3125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 101,
            "velocity": 100,
            "startTime": 16.494791666666668,
            "endTime": 16.755208333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 16.994791666666668,
            "endTime": 17.333333333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 17.494791666666668,
            "endTime": 17.776041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 101,
            "velocity": 100,
            "startTime": 17.994791666666668,
            "endTime": 18.260416666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 18.244791666666668,
            "endTime": 18.484375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 18.5,
            "endTime": 18.869791666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 18.994791666666668,
            "endTime": 19.338541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 19.494791666666668,
            "endTime": 19.786458333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 19.994791666666668,
            "endTime": 20.375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 20.494791666666668,
            "endTime": 20.729166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 21,
            "endTime": 21.291666666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 21.5,
            "endTime": 21.875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 22,
            "endTime": 22.229166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 22.5,
            "endTime": 22.791666666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 23,
            "endTime": 23.375,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 23.5,
            "endTime": 23.729166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          }
        ],
        "totalTime": 23.729166666666668,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const track_12BAR_33 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 0,
            "endTime": 4,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 100,
            "startTime": 0,
            "endTime": 2,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 100,
            "startTime": 0,
            "endTime": 2,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 70,
            "velocity": 100,
            "startTime": 1,
            "endTime": 2,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 2,
            "endTime": 3,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 3,
            "endTime": 4,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 58,
            "velocity": 100,
            "startTime": 4,
            "endTime": 6,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 4,
            "endTime": 6,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 4,
            "endTime": 6,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 100,
            "startTime": 5,
            "endTime": 5.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 100,
            "startTime": 5.5,
            "endTime": 6,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 6,
            "endTime": 12,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 100,
            "startTime": 6,
            "endTime": 7,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 100,
            "startTime": 6,
            "endTime": 7,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 100,
            "startTime": 7,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 100,
            "startTime": 8,
            "endTime": 9,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 9,
            "endTime": 9.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 100,
            "startTime": 9.5,
            "endTime": 10,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 56,
            "velocity": 100,
            "startTime": 10,
            "endTime": 12,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 10,
            "endTime": 12,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 70,
            "velocity": 100,
            "startTime": 10,
            "endTime": 11,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 11,
            "endTime": 11.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 100,
            "startTime": 11.5,
            "endTime": 12,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 12,
            "endTime": 15,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 12,
            "endTime": 15,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 12,
            "endTime": 15,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 100,
            "startTime": 12,
            "endTime": 15,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 70,
            "velocity": 100,
            "startTime": 13,
            "endTime": 14,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 100,
            "startTime": 14,
            "endTime": 14.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 100,
            "startTime": 14.5,
            "endTime": 15,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 15,
            "endTime": 18,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 100,
            "startTime": 15,
            "endTime": 18,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 100,
            "startTime": 15,
            "endTime": 18,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 100,
            "startTime": 17,
            "endTime": 17.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 82,
            "velocity": 100,
            "startTime": 17.5,
            "endTime": 18,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 18,
            "endTime": 23.979166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 18,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 100,
            "startTime": 18,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 19,
            "endTime": 20,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 100,
            "startTime": 20,
            "endTime": 21,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 21,
            "endTime": 21.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 100,
            "startTime": 21.5,
            "endTime": 22,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 70,
            "velocity": 100,
            "startTime": 22,
            "endTime": 23,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 100,
            "startTime": 22.5,
            "endTime": 23,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 23,
            "endTime": 23.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 87,
            "velocity": 100,
            "startTime": 23.25,
            "endTime": 23.75,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 100,
            "startTime": 23.5,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 92,
            "velocity": 100,
            "startTime": 23.75,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 23.979166666666668,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          }
        ],
        "totalTime": 24,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const track_16bar_1 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 0,
            "endTime": 2,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 2,
            "endTime": 5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 4,
            "endTime": 6,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 6,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 8,
            "endTime": 10,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 10,
            "endTime": 13,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 12,
            "endTime": 14,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 14,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 16,
            "endTime": 18,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 18,
            "endTime": 21,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 20,
            "endTime": 22,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 22,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 24,
            "endTime": 26,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 26,
            "endTime": 29,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 28,
            "endTime": 30,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 68,
            "velocity": 100,
            "startTime": 30,
            "endTime": 31.489583333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 31.989583333333332,
            "endTime": 35.963541666666664,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          }
        ],
        "totalTime": 35.963541666666664,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const track_16bar_2 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 0,
            "endTime": 2,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 100,
            "startTime": 0,
            "endTime": 1,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 100,
            "startTime": 0,
            "endTime": 1,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 70,
            "velocity": 100,
            "startTime": 0.5,
            "endTime": 1,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 1,
            "endTime": 1.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 1.5,
            "endTime": 2,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 2,
            "endTime": 4,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 100,
            "startTime": 2,
            "endTime": 3,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 100,
            "startTime": 2,
            "endTime": 3,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 70,
            "velocity": 100,
            "startTime": 2.5,
            "endTime": 3,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 3,
            "endTime": 3.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 3.5,
            "endTime": 4,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 4,
            "endTime": 6,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 4,
            "endTime": 6,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 100,
            "startTime": 4,
            "endTime": 6,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 4.5,
            "endTime": 5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 100,
            "startTime": 5,
            "endTime": 5.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 5.5,
            "endTime": 6,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 6,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 6,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 100,
            "startTime": 6,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 6.5,
            "endTime": 7,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 100,
            "startTime": 7,
            "endTime": 7.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 100,
            "startTime": 7.5,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 8,
            "endTime": 10,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 100,
            "startTime": 8,
            "endTime": 9,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 100,
            "startTime": 8,
            "endTime": 9,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 70,
            "velocity": 100,
            "startTime": 8.5,
            "endTime": 9,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 9,
            "endTime": 9.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 9.5,
            "endTime": 10,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 10,
            "endTime": 12,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 100,
            "startTime": 10,
            "endTime": 11,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 100,
            "startTime": 10,
            "endTime": 11,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 70,
            "velocity": 100,
            "startTime": 10.5,
            "endTime": 11,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 11,
            "endTime": 11.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 11.5,
            "endTime": 12,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 12,
            "endTime": 14,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 12,
            "endTime": 14,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 100,
            "startTime": 12,
            "endTime": 14,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 12.5,
            "endTime": 13,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 100,
            "startTime": 13,
            "endTime": 13.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 13.5,
            "endTime": 14,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 14,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 14,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 100,
            "startTime": 14,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 14.5,
            "endTime": 15,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 100,
            "startTime": 15,
            "endTime": 15.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 100,
            "startTime": 15.5,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 16,
            "endTime": 18,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 100,
            "startTime": 16,
            "endTime": 17,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 100,
            "startTime": 16,
            "endTime": 17,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 70,
            "velocity": 100,
            "startTime": 16.5,
            "endTime": 17,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 17,
            "endTime": 17.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 17.5,
            "endTime": 18,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 18,
            "endTime": 20,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 100,
            "startTime": 18,
            "endTime": 19,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 100,
            "startTime": 18,
            "endTime": 19,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 70,
            "velocity": 100,
            "startTime": 18.5,
            "endTime": 19,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 19,
            "endTime": 19.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 19.5,
            "endTime": 20,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 20,
            "endTime": 22,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 20,
            "endTime": 22,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 100,
            "startTime": 20,
            "endTime": 22,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 20.5,
            "endTime": 21,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 100,
            "startTime": 21,
            "endTime": 21.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 21.5,
            "endTime": 22,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 22,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 22,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 100,
            "startTime": 22,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 22.5,
            "endTime": 23,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 100,
            "startTime": 23,
            "endTime": 23.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 100,
            "startTime": 23.5,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 24,
            "endTime": 26,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 100,
            "startTime": 24,
            "endTime": 25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 100,
            "startTime": 24,
            "endTime": 25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 70,
            "velocity": 100,
            "startTime": 24.5,
            "endTime": 25,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 25,
            "endTime": 25.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 25.5,
            "endTime": 26,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 61,
            "velocity": 100,
            "startTime": 26,
            "endTime": 28,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 100,
            "startTime": 26,
            "endTime": 27,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 100,
            "startTime": 26,
            "endTime": 27,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 70,
            "velocity": 100,
            "startTime": 26.5,
            "endTime": 27,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 27,
            "endTime": 27.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 27.5,
            "endTime": 28,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 28,
            "endTime": 30,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 28,
            "endTime": 30,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 100,
            "startTime": 28,
            "endTime": 30,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 28.5,
            "endTime": 29,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 100,
            "startTime": 29,
            "endTime": 29.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 29.5,
            "endTime": 30,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 60,
            "velocity": 100,
            "startTime": 30,
            "endTime": 32.989583333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 65,
            "velocity": 100,
            "startTime": 30,
            "endTime": 33.75,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 100,
            "startTime": 30,
            "endTime": 33.75,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 30.5,
            "endTime": 31,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 100,
            "startTime": 31,
            "endTime": 31.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 79,
            "velocity": 100,
            "startTime": 31.5,
            "endTime": 32,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          }
        ],
        "totalTime": 33.75,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const track_16bar_3 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 0,
            "endTime": 0.53125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 0.4947916666666667,
            "endTime": 0.9895833333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 0.9947916666666666,
            "endTime": 1.671875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 1.5,
            "endTime": 1.96875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 2,
            "endTime": 2.5104166666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 2.4947916666666665,
            "endTime": 2.9583333333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 2.9947916666666665,
            "endTime": 3.5572916666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 3.4947916666666665,
            "endTime": 3.9739583333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 3.9947916666666665,
            "endTime": 4,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 4,
            "endTime": 4.53125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 4.494791666666667,
            "endTime": 4.989583333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 4.994791666666667,
            "endTime": 5.671875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 5.5,
            "endTime": 5.96875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 6,
            "endTime": 6.510416666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 6.494791666666667,
            "endTime": 6.958333333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 6.994791666666667,
            "endTime": 7.557291666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 7.494791666666667,
            "endTime": 7.973958333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 7.994791666666667,
            "endTime": 8,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 8,
            "endTime": 8.53125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 8.494791666666666,
            "endTime": 8.989583333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 8.994791666666666,
            "endTime": 9.671875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 9.5,
            "endTime": 9.96875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 10,
            "endTime": 10.510416666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 10.494791666666666,
            "endTime": 10.958333333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 10.994791666666666,
            "endTime": 11.557291666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 11.494791666666666,
            "endTime": 11.973958333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 11.994791666666666,
            "endTime": 12,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 12,
            "endTime": 12.53125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 12.494791666666666,
            "endTime": 12.989583333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 12.994791666666666,
            "endTime": 13.671875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 13.5,
            "endTime": 13.96875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 14,
            "endTime": 14.510416666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 14.494791666666666,
            "endTime": 14.958333333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 14.994791666666666,
            "endTime": 15.557291666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 15.494791666666666,
            "endTime": 15.973958333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 15.994791666666666,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 16,
            "endTime": 16.53125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 16.494791666666668,
            "endTime": 16.989583333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 16.994791666666668,
            "endTime": 17.671875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 17.5,
            "endTime": 17.96875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 18,
            "endTime": 18.510416666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 18.494791666666668,
            "endTime": 18.958333333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 18.994791666666668,
            "endTime": 19.557291666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 19.494791666666668,
            "endTime": 19.973958333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 19.994791666666668,
            "endTime": 20,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 20,
            "endTime": 20.53125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 20.494791666666668,
            "endTime": 20.989583333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 20.994791666666668,
            "endTime": 21.671875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 21.5,
            "endTime": 21.96875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 22,
            "endTime": 22.510416666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 22.494791666666668,
            "endTime": 22.958333333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 22.994791666666668,
            "endTime": 23.557291666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 23.494791666666668,
            "endTime": 23.973958333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 23.994791666666668,
            "endTime": 24,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 24,
            "endTime": 24.53125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 24.494791666666668,
            "endTime": 24.989583333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 24.994791666666668,
            "endTime": 25.671875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 25.5,
            "endTime": 25.96875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 26,
            "endTime": 26.510416666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 26.494791666666668,
            "endTime": 26.958333333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 26.994791666666668,
            "endTime": 27.557291666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 27.494791666666668,
            "endTime": 27.973958333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 27.994791666666668,
            "endTime": 28,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 28,
            "endTime": 28.53125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 28.494791666666668,
            "endTime": 28.989583333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 28.994791666666668,
            "endTime": 29.671875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 29.5,
            "endTime": 29.96875,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 30,
            "endTime": 30.510416666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 30.494791666666668,
            "endTime": 30.958333333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 30.994791666666668,
            "endTime": 31.557291666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 77,
            "velocity": 40,
            "startTime": 31.494791666666668,
            "endTime": 31.973958333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 80,
            "velocity": 40,
            "startTime": 31.994791666666668,
            "endTime": 32.520833333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          }
        ],
        "totalTime": 32.520833333333336,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const track_16bar_4 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 0,
            "endTime": 0.10416666666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 0.24479166666666666,
            "endTime": 0.3229166666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 0.375,
            "endTime": 0.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 0.625,
            "endTime": 0.6822916666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 0.8697916666666666,
            "endTime": 0.9010416666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 1.1197916666666667,
            "endTime": 1.1666666666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 1.2447916666666667,
            "endTime": 1.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 1.4947916666666667,
            "endTime": 1.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 1.625,
            "endTime": 1.6770833333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 1.8697916666666667,
            "endTime": 1.9635416666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 2,
            "endTime": 2.1041666666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 2.2447916666666665,
            "endTime": 2.3229166666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 2.375,
            "endTime": 2.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 2.625,
            "endTime": 2.6822916666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 2.8697916666666665,
            "endTime": 2.9010416666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 3.1197916666666665,
            "endTime": 3.1666666666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 3.2447916666666665,
            "endTime": 3.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 3.4947916666666665,
            "endTime": 3.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 3.625,
            "endTime": 3.6770833333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 3.8697916666666665,
            "endTime": 3.9635416666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 4,
            "endTime": 4.104166666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 4.244791666666667,
            "endTime": 4.322916666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 4.375,
            "endTime": 4.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 4.625,
            "endTime": 4.682291666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 4.869791666666667,
            "endTime": 4.901041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 5.119791666666667,
            "endTime": 5.166666666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 5.244791666666667,
            "endTime": 5.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 5.494791666666667,
            "endTime": 5.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 5.625,
            "endTime": 5.677083333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 5.869791666666667,
            "endTime": 5.963541666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 6,
            "endTime": 6.104166666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 6.244791666666667,
            "endTime": 6.322916666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 6.375,
            "endTime": 6.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 6.625,
            "endTime": 6.682291666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 6.869791666666667,
            "endTime": 6.901041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 7.119791666666667,
            "endTime": 7.166666666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 7.244791666666667,
            "endTime": 7.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 7.494791666666667,
            "endTime": 7.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 7.625,
            "endTime": 7.677083333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 7.869791666666667,
            "endTime": 7.963541666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 8,
            "endTime": 8.104166666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 8.244791666666666,
            "endTime": 8.322916666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 8.375,
            "endTime": 8.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 8.625,
            "endTime": 8.682291666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 8.869791666666666,
            "endTime": 8.901041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 9.119791666666666,
            "endTime": 9.166666666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 9.244791666666666,
            "endTime": 9.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 9.494791666666666,
            "endTime": 9.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 9.625,
            "endTime": 9.677083333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 9.869791666666666,
            "endTime": 9.963541666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 10,
            "endTime": 10.104166666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 10.244791666666666,
            "endTime": 10.322916666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 10.375,
            "endTime": 10.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 10.625,
            "endTime": 10.682291666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 10.869791666666666,
            "endTime": 10.901041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 11.119791666666666,
            "endTime": 11.166666666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 11.244791666666666,
            "endTime": 11.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 11.494791666666666,
            "endTime": 11.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 11.625,
            "endTime": 11.677083333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 11.869791666666666,
            "endTime": 11.963541666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 12,
            "endTime": 12.104166666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 12.25,
            "endTime": 12.333333333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 12.494791666666666,
            "endTime": 12.572916666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 12.75,
            "endTime": 12.828125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 12.994791666666666,
            "endTime": 13.083333333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 13.125,
            "endTime": 13.213541666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 13.369791666666666,
            "endTime": 13.463541666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 13.5,
            "endTime": 13.578125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 13.744791666666666,
            "endTime": 13.833333333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 13.875,
            "endTime": 13.963541666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 14.119791666666666,
            "endTime": 14.213541666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 14.25,
            "endTime": 14.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 14.494791666666666,
            "endTime": 14.583333333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 14.625,
            "endTime": 14.713541666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 14.869791666666666,
            "endTime": 14.963541666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 15,
            "endTime": 15.078125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 15.244791666666666,
            "endTime": 15.333333333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 15.375,
            "endTime": 15.463541666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 15.619791666666666,
            "endTime": 15.713541666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 15.75,
            "endTime": 15.828125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 15.994791666666666,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 16,
            "endTime": 16.104166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 16.244791666666668,
            "endTime": 16.322916666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 16.375,
            "endTime": 16.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 16.625,
            "endTime": 16.682291666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 16.869791666666668,
            "endTime": 16.901041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 17.119791666666668,
            "endTime": 17.166666666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 17.244791666666668,
            "endTime": 17.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 17.494791666666668,
            "endTime": 17.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 17.625,
            "endTime": 17.677083333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 17.869791666666668,
            "endTime": 17.963541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 18,
            "endTime": 18.104166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 18.244791666666668,
            "endTime": 18.322916666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 18.375,
            "endTime": 18.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 18.625,
            "endTime": 18.682291666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 18.869791666666668,
            "endTime": 18.901041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 19.119791666666668,
            "endTime": 19.166666666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 19.244791666666668,
            "endTime": 19.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 19.494791666666668,
            "endTime": 19.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 19.625,
            "endTime": 19.677083333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 19.869791666666668,
            "endTime": 19.963541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 20,
            "endTime": 20.104166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 20.244791666666668,
            "endTime": 20.322916666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 20.375,
            "endTime": 20.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 20.625,
            "endTime": 20.682291666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 20.869791666666668,
            "endTime": 20.901041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 21.119791666666668,
            "endTime": 21.166666666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 21.244791666666668,
            "endTime": 21.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 21.494791666666668,
            "endTime": 21.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 21.625,
            "endTime": 21.677083333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 21.869791666666668,
            "endTime": 21.963541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 22,
            "endTime": 22.104166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 22.244791666666668,
            "endTime": 22.322916666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 22.375,
            "endTime": 22.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 22.625,
            "endTime": 22.682291666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 22.869791666666668,
            "endTime": 22.901041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 23.119791666666668,
            "endTime": 23.166666666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 23.244791666666668,
            "endTime": 23.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 23.494791666666668,
            "endTime": 23.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 23.625,
            "endTime": 23.677083333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 23.869791666666668,
            "endTime": 23.963541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 24,
            "endTime": 24.104166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 24.244791666666668,
            "endTime": 24.322916666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 24.375,
            "endTime": 24.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 24.625,
            "endTime": 24.682291666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 24.869791666666668,
            "endTime": 24.901041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 25.119791666666668,
            "endTime": 25.166666666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 25.244791666666668,
            "endTime": 25.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 25.494791666666668,
            "endTime": 25.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 25.625,
            "endTime": 25.677083333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 25.869791666666668,
            "endTime": 25.963541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 26,
            "endTime": 26.104166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 26.244791666666668,
            "endTime": 26.322916666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 26.375,
            "endTime": 26.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 26.625,
            "endTime": 26.682291666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 26.869791666666668,
            "endTime": 26.901041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 27.119791666666668,
            "endTime": 27.166666666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 27.244791666666668,
            "endTime": 27.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 27.494791666666668,
            "endTime": 27.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 27.625,
            "endTime": 27.677083333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 27.869791666666668,
            "endTime": 27.963541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 28,
            "endTime": 28.104166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 28.25,
            "endTime": 28.333333333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 28.494791666666668,
            "endTime": 28.572916666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 28.75,
            "endTime": 28.828125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 28.994791666666668,
            "endTime": 29.083333333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 29.125,
            "endTime": 29.213541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 29.369791666666668,
            "endTime": 29.463541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 29.5,
            "endTime": 29.578125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 29.744791666666668,
            "endTime": 29.833333333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 29.875,
            "endTime": 29.963541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 30.119791666666668,
            "endTime": 30.213541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 30.25,
            "endTime": 30.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 30.494791666666668,
            "endTime": 30.583333333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 30.625,
            "endTime": 30.713541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 30.869791666666668,
            "endTime": 30.963541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 31,
            "endTime": 31.078125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 31.244791666666668,
            "endTime": 31.333333333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 31.375,
            "endTime": 31.463541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 31.619791666666668,
            "endTime": 31.713541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 31.75,
            "endTime": 31.828125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 31.994791666666668,
            "endTime": 32.083333333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          }
        ],
        "totalTime": 32.083333333333336,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const track_16bar_5 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 0,
            "endTime": 0.10416666666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 0.24479166666666666,
            "endTime": 0.3229166666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 0.375,
            "endTime": 0.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 0.625,
            "endTime": 0.6822916666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 0.8697916666666666,
            "endTime": 0.9010416666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 1.1197916666666667,
            "endTime": 1.1666666666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 1.2447916666666667,
            "endTime": 1.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 1.4947916666666667,
            "endTime": 1.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 1.625,
            "endTime": 1.6770833333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 1.8697916666666667,
            "endTime": 1.9635416666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 2,
            "endTime": 2.1041666666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 2.2447916666666665,
            "endTime": 2.3229166666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 2.375,
            "endTime": 2.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 2.625,
            "endTime": 2.6822916666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 2.8697916666666665,
            "endTime": 2.9010416666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 3.1197916666666665,
            "endTime": 3.1666666666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 3.2447916666666665,
            "endTime": 3.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 3.4947916666666665,
            "endTime": 3.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 3.625,
            "endTime": 3.6770833333333335,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 3.8697916666666665,
            "endTime": 3.9635416666666665,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 4,
            "endTime": 4.104166666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 4.244791666666667,
            "endTime": 4.322916666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 4.375,
            "endTime": 4.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 4.625,
            "endTime": 4.682291666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 4.869791666666667,
            "endTime": 4.901041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 5.119791666666667,
            "endTime": 5.166666666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 5.244791666666667,
            "endTime": 5.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 5.494791666666667,
            "endTime": 5.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 5.625,
            "endTime": 5.677083333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 5.869791666666667,
            "endTime": 5.963541666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 6,
            "endTime": 6.104166666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 6.244791666666667,
            "endTime": 6.322916666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 6.375,
            "endTime": 6.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 6.625,
            "endTime": 6.682291666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 6.869791666666667,
            "endTime": 6.901041666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 7.119791666666667,
            "endTime": 7.166666666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 7.244791666666667,
            "endTime": 7.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 7.494791666666667,
            "endTime": 7.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 7.625,
            "endTime": 7.677083333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 7.869791666666667,
            "endTime": 7.963541666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 8,
            "endTime": 8.104166666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 8.244791666666666,
            "endTime": 8.322916666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 8.375,
            "endTime": 8.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 8.625,
            "endTime": 8.682291666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 8.869791666666666,
            "endTime": 8.901041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 9.119791666666666,
            "endTime": 9.166666666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 9.244791666666666,
            "endTime": 9.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 9.494791666666666,
            "endTime": 9.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 9.625,
            "endTime": 9.677083333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 9.869791666666666,
            "endTime": 9.963541666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 10,
            "endTime": 10.104166666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 10.244791666666666,
            "endTime": 10.322916666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 10.375,
            "endTime": 10.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 10.625,
            "endTime": 10.682291666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 10.869791666666666,
            "endTime": 10.901041666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 11.119791666666666,
            "endTime": 11.166666666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 11.244791666666666,
            "endTime": 11.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 11.494791666666666,
            "endTime": 11.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 11.625,
            "endTime": 11.677083333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 11.869791666666666,
            "endTime": 11.963541666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 12,
            "endTime": 12.104166666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 12.25,
            "endTime": 12.333333333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 12.494791666666666,
            "endTime": 12.572916666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 12.75,
            "endTime": 12.828125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 12.994791666666666,
            "endTime": 13.083333333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 13.125,
            "endTime": 13.213541666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 13.369791666666666,
            "endTime": 13.463541666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 13.5,
            "endTime": 13.578125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 13.744791666666666,
            "endTime": 13.833333333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 13.875,
            "endTime": 13.963541666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 14.119791666666666,
            "endTime": 14.213541666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 14.25,
            "endTime": 14.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 14.494791666666666,
            "endTime": 14.583333333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 14.625,
            "endTime": 14.713541666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 14.869791666666666,
            "endTime": 14.963541666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 15,
            "endTime": 15.078125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 15.244791666666666,
            "endTime": 15.333333333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 15.375,
            "endTime": 15.463541666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 15.619791666666666,
            "endTime": 15.713541666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 15.75,
            "endTime": 15.828125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 15.994791666666666,
            "endTime": 16,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 16,
            "endTime": 16.104166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 16.244791666666668,
            "endTime": 16.322916666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 16.375,
            "endTime": 16.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 16.625,
            "endTime": 16.682291666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 16.869791666666668,
            "endTime": 16.901041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 17.119791666666668,
            "endTime": 17.166666666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 17.244791666666668,
            "endTime": 17.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 17.494791666666668,
            "endTime": 17.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 17.625,
            "endTime": 17.677083333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 17.869791666666668,
            "endTime": 17.963541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 18,
            "endTime": 18.104166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 18.244791666666668,
            "endTime": 18.322916666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 18.375,
            "endTime": 18.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 18.625,
            "endTime": 18.682291666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 18.869791666666668,
            "endTime": 18.901041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 19.119791666666668,
            "endTime": 19.166666666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 19.244791666666668,
            "endTime": 19.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 19.494791666666668,
            "endTime": 19.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 19.625,
            "endTime": 19.677083333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 104,
            "velocity": 100,
            "startTime": 19.869791666666668,
            "endTime": 19.963541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 20,
            "endTime": 20.104166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 20.244791666666668,
            "endTime": 20.322916666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 20.375,
            "endTime": 20.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 20.625,
            "endTime": 20.682291666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 20.869791666666668,
            "endTime": 20.901041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 21.119791666666668,
            "endTime": 21.166666666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 21.244791666666668,
            "endTime": 21.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 21.494791666666668,
            "endTime": 21.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 21.625,
            "endTime": 21.677083333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 21.869791666666668,
            "endTime": 21.963541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 22,
            "endTime": 22.104166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 22.244791666666668,
            "endTime": 22.322916666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 22.375,
            "endTime": 22.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 22.625,
            "endTime": 22.682291666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 22.869791666666668,
            "endTime": 22.901041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 23.119791666666668,
            "endTime": 23.166666666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 23.244791666666668,
            "endTime": 23.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 23.494791666666668,
            "endTime": 23.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 23.625,
            "endTime": 23.677083333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 23.869791666666668,
            "endTime": 23.963541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 24,
            "endTime": 24.104166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 24.244791666666668,
            "endTime": 24.322916666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 24.375,
            "endTime": 24.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 24.625,
            "endTime": 24.682291666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 24.869791666666668,
            "endTime": 24.901041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 25.119791666666668,
            "endTime": 25.166666666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 25.244791666666668,
            "endTime": 25.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 25.494791666666668,
            "endTime": 25.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 25.625,
            "endTime": 25.677083333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 25.869791666666668,
            "endTime": 25.963541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 26,
            "endTime": 26.104166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 26.244791666666668,
            "endTime": 26.322916666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 26.375,
            "endTime": 26.453125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 26.625,
            "endTime": 26.682291666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 26.869791666666668,
            "endTime": 26.901041666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 27.119791666666668,
            "endTime": 27.166666666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 27.244791666666668,
            "endTime": 27.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 27.494791666666668,
            "endTime": 27.5625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 27.625,
            "endTime": 27.677083333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 108,
            "velocity": 100,
            "startTime": 27.869791666666668,
            "endTime": 27.963541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 28,
            "endTime": 28.104166666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 28.25,
            "endTime": 28.333333333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 111,
            "velocity": 100,
            "startTime": 28.494791666666668,
            "endTime": 28.572916666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 28.75,
            "endTime": 28.828125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 28.994791666666668,
            "endTime": 29.083333333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 29.125,
            "endTime": 29.213541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 106,
            "velocity": 100,
            "startTime": 29.369791666666668,
            "endTime": 29.463541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 29.5,
            "endTime": 29.578125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 29.744791666666668,
            "endTime": 29.833333333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 29.875,
            "endTime": 29.963541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 30.119791666666668,
            "endTime": 30.213541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 30.25,
            "endTime": 30.328125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 30.494791666666668,
            "endTime": 30.583333333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 30.625,
            "endTime": 30.713541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 30.869791666666668,
            "endTime": 30.963541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 31,
            "endTime": 31.078125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 31.244791666666668,
            "endTime": 31.333333333333332,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 31.375,
            "endTime": 31.463541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 31.619791666666668,
            "endTime": 31.713541666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 31.75,
            "endTime": 31.828125,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 103,
            "velocity": 100,
            "startTime": 31.994791666666668,
            "endTime": 32.083333333333336,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          }
        ],
        "totalTime": 32.083333333333336,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);

  export const track_16bar_6 = trim(quantizeNoteSequence({
        "ticksPerQuarter": 96,
        "timeSignatures": [
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          },
          {
            "time": 0,
            "numerator": 4,
            "denominator": 4
          }
        ],
        "notes": [
          {
            "pitch": 77,
            "velocity": 100,
            "startTime": 5,
            "endTime": 5.572916666666667,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 5.994791666666667,
            "endTime": 7.083333333333333,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 100,
            "startTime": 11,
            "endTime": 11.479166666666666,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 75,
            "velocity": 100,
            "startTime": 11.994791666666666,
            "endTime": 12.614583333333334,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 125,
            "startTime": 14,
            "endTime": 15,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 100,
            "startTime": 17,
            "endTime": 17.447916666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 100,
            "startTime": 17.5,
            "endTime": 17.90625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 70,
            "velocity": 100,
            "startTime": 18,
            "endTime": 18.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 60,
            "startTime": 21,
            "endTime": 22,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 60,
            "startTime": 22,
            "endTime": 23,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 100,
            "startTime": 25,
            "endTime": 25.447916666666668,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 100,
            "startTime": 25.5,
            "endTime": 25.90625,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 70,
            "velocity": 100,
            "startTime": 26,
            "endTime": 26.5,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 73,
            "velocity": 60,
            "startTime": 29,
            "endTime": 30,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 72,
            "velocity": 60,
            "startTime": 30,
            "endTime": 31,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          },
          {
            "pitch": 70,
            "velocity": 60,
            "startTime": 31,
            "endTime": 32,
            "instrument": 0,
            "program": 0,
            "isDrum": false
          }
        ],
        "totalTime": 32,
        "sourceInfo": {
          "encodingType": "MIDI",
          "parser": "TONEJS_MIDI_CONVERT"
        }
      },
      4),
    0, totalQuantizedSteps);
 */
/**
  export const score0 = toScore('Simon - score "2_16BAR"', [
    track_2_16BAR_1,
    track_2_16BAR_2,
    track_2_16BAR_3,
    track_2_16BAR_4,
    track_2_16BAR_5,
    track_2_16BAR_6,
    track_2_16BAR_7,
    track_2_16BAR_8
  ]);

  export const score1 = toScore('Simon - score "12BAR"', [
    track_12BAR_1,
    track_12BAR_2,
    track_12BAR_33
  ]);

  export const score2 = toScore('Simon - score "16bar"', [
    track_16bar_1,
    track_16bar_2,
    track_16bar_3,
    track_16bar_4,
    track_16bar_5,
    track_16bar_6
  ]);

  export const scores = [score0, score1, score2];
 */

export default scores;
