import audioContext from 'audio-context';

export class Tremelo {
  ctx: ReturnType<typeof audioContext>
  oscillator: OscillatorNode;
  filter: BiquadFilterNode;
  mixer: GainNode;
  
  constructor(){
    this.ctx = audioContext()
    this.oscillator = this.ctx?.createOscillator()!;
    this.filter = this.ctx?.createBiquadFilter()!;
    this.mixer = this.ctx?.createGain()!

    this.oscillator
      .connect(this.filter)
      .connect(this.mixer)
      .connect(this.ctx?.destination!);

    this.oscillator.type = 'triangle' 
    this.oscillator.frequency.value = 440;
    this.mixer.gain.value = 0.25

  }

  start(){
    console.log(this.ctx?.state)
    if(this.ctx?.state === 'suspended'){
      this.ctx?.resume();
    } else {
      this.oscillator.start()
    }
    return this
  }

  stop(){
    this.ctx?.suspend()
    return this
  }

  trigger(speed: string){
    const cycle = [0.5, 1, 0.5, 0];
    const levels = [...cycle, ...cycle, ...cycle, ...cycle, 0.5]
    const tremeloSpeed = speed === 'fast' ? 0.5 : speed === 'medium' ? 1 : 2;
    this.mixer.gain.setValueCurveAtTime(levels, this.ctx?.currentTime!, tremeloSpeed)
  }
}
