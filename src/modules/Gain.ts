import context from 'audio-context'

export class Gain {
  node: GainNode;
  defaults = {
    gain: 0 
  }

  constructor(params?: GainOptions){
    this.node = context()!.createGain();
  }

  getGain(){
    return this.node
  }

  setGain(level: number){
    this.node.gain.value = level;
  }
}