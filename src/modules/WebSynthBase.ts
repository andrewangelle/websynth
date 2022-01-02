import context from 'audio-context';

import {Gain, Filter, Oscillator} from '.';

export type WaveType = 'sawtooth'
  | 'sine'
  | 'square'
  | 'triangle'
  | 'custom'

export type WebSynthBaseOptions = {
  waveType: WaveType,
  frequency: number;
  gain: number;
};
export class WebSynthBase {
  node: ReturnType<typeof context>;
  oscillator: OscillatorNode;
  mixer: GainNode;
  filter: BiquadFilterNode

  constructor({
    waveType,
    frequency,
    gain
  }: WebSynthBaseOptions){
    this.node = context();
    this.oscillator = new Oscillator().getOscillator();
    this.filter = new Filter().getFilter();
    this.mixer = new Gain().getGain();
    
    this.oscillator
      .connect(this.filter)
      .connect(this.mixer)
      .connect(this.node?.destination!)

    this.oscillator.frequency.value = 440;
    this.oscillator.type = waveType
    this.oscillator.frequency.value = frequency;
    this.mixer.gain.value = gain;
  }
  
  start(){
    this.oscillator.start();
  }

  stop(){
    this.oscillator.start();
    this.oscillator.stop()
  }
}
