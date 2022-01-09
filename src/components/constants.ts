import { WaveType } from "./WebSynth";

export const contexts = [
  {frequency: 440, wave: 'triangle', gain: 0.25}, // A
  {frequency: 493.88, wave: 'triangle', gain: 0.25}, // B
  {frequency: 554.37, wave: 'triangle', gain: 0.25}, // C#
  {frequency: 587.33, wave: 'triangle', gain: 0.25}, // D
  {frequency: 659.25, wave: 'triangle', gain: 0.25}, // E
  {frequency: 739.99, wave: 'triangle', gain: 0.25}, // F#
  {frequency: 830.61, wave: 'triangle', gain: 0.25} // G#
]
export const pitchNames = [
  {label: 'A', value: 440},
  {label: 'B', value: 493.88},
  {label: 'C#', value: 554.37},
  {label: 'D', value: 587.33},
  {label: 'E', value: 659.25},
  {label: 'F#', value: 739.99},
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