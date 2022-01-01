import context from 'audio-context'

export class Filter {
  node: BiquadFilterNode;

  constructor(params?: BiquadFilterOptions){
    this.node = context()!.createBiquadFilter();
  }

  getFilter(){
    return this.node
  }
}
