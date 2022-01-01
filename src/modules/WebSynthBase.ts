import context from 'audio-context';

import {Gain, Filter, Oscillator} from '.';

export class WebSynthBase {
  node: ReturnType<typeof context>;
  oscillator: OscillatorNode;
  volume: GainNode;
  filter: BiquadFilterNode

  constructor({volume}: any){
    this.node = context();
    this.oscillator = new Oscillator().getOscillator();
    this.filter = new Filter().getFilter();
    this.volume = new Gain().getGain();
    
    this.oscillator
      .connect(this.filter)
      .connect(this.volume)
      .connect(this.node?.destination!)

    this.oscillator.start();
  }

  setVolume(volume: number){
    this.volume.gain.value = volume;

  }

}
