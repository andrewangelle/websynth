import context from 'audio-context'

export class Oscillator {
  node: OscillatorNode;

  constructor(params?: OscillatorOptions){
    this.node = context()!.createOscillator();
  }

  getOscillator(){
    return this.node
  }
}
