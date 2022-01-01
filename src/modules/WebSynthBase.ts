import context from 'audio-context';

import {Gain, Filter, Oscillator} from '.';

export class WebSynthBase {
  node: ReturnType<typeof context>;
  oscillator: OscillatorNode;
  mixer: GainNode;
  filter: BiquadFilterNode

  constructor(){
    this.node = context();
    this.oscillator = new Oscillator().getOscillator();
    this.filter = new Filter().getFilter();
    this.mixer = new Gain().getGain();
    
    this.oscillator
      .connect(this.filter)
      .connect(this.mixer)
      .connect(this.node?.destination!)

    this.oscillator.start();
  }
  
  getOscillator(){
    return this.oscillator
  }

  setFrequency(frequency: number){
    this.oscillator.frequency.value = frequency;
  }


}
