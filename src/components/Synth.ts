
const audioContext = new window.AudioContext()

export class Synth {
  ctx: typeof audioContext
  oscillator: OscillatorNode;
  filter: BiquadFilterNode;
  mixer: GainNode;
  
  constructor({waveType, frequency, gain}: any){
    this.ctx = audioContext
    this.oscillator = this.ctx.createOscillator()!;
    this.filter = this.ctx.createBiquadFilter()!;
    this.mixer = audioContext.createGain()!

    this.oscillator
      .connect(this.filter)
      .connect(this.mixer)
      .connect(audioContext.destination);

    this.oscillator.type = waveType
    this.oscillator.frequency.value = frequency;
    this.mixer.gain.value = gain;

    this.oscillator.start()
  }

  resume(){
    this.ctx.resume();
  }


  stop(){
    this.mixer.gain.setValueCurveAtTime([0, 0, 0 , 0], this.ctx?.currentTime!, 0.5)
  }

  triggerTremelo(speed: string){
    const cycle = [0.5, 1, 0.5, 0];
    const levels = [...cycle, ...cycle, ...cycle, ...cycle, 0.5]
    const tremeloSpeed = speed === 'fast' ? 0.5 : speed === 'medium' ? 1 : 2;
    this.mixer.gain.setValueCurveAtTime(levels, this.ctx?.currentTime!, tremeloSpeed)
  }
}