import { WaveType } from "./WebSynth";

export const pitches = [
  {frequency: 440, wave: 'triangle', label: 'A'}, // A
  {frequency: 493.88, wave: 'triangle', label: 'B'}, // B
  {frequency: 554.37, wave: 'triangle', label: 'C#'}, // C#
  {frequency: 587.33, wave: 'triangle', label: 'D'}, // D
  {frequency: 659.25, wave: 'triangle', label: 'E'}, // E
  {frequency: 739.99, wave: 'triangle', label: 'F#'}, // F#
  {frequency: 830.61, wave: 'triangle', label: 'G#'} // G#
]
export const pitchNames = [
  {label: 'A', value: 440},
  {label: 'A#/Bb', value: 466.16},
  {label: 'B', value: 493.88},
  {label: 'C', value: 523.25},
  {label: 'C#/Db', value: 554.37},
  {label: 'D', value: 587.33},
  {label: 'D#/Eb', value: 622.25},
  {label: 'E', value: 659.25},
  {label: 'F', value: 698.46},
  {label: 'F#/Gb', value: 739.99},
  {label: 'G', value: 783.99},
  {label: 'G#', value: 830.61}
];

export const gains = [
  0,
  0.25,
  0.5,
  0.75,
  1
]

export const waveTypes: WaveType[] = [
  'sawtooth',
  'sine',
  'square',
  'triangle'
];