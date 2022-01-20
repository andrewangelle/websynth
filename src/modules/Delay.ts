import audioContext from 'audio-context';

export class Delay {
  ctx: ReturnType<typeof audioContext>;
  oscillator: OscillatorNode;
  delay: DelayNode;

  constructor(){
    this.ctx = audioContext()
    this.oscillator = this.ctx?.createOscillator()!;
    this.delay = this.ctx?.createDelay()!;
  }
}