import audioContext from 'audio-context';

export class Pitch {
  ctx: ReturnType<typeof audioContext>
  oscillator: OscillatorNode;
  vca: GainNode;
  delay: DelayNode;
  feedback: GainNode;

  constructor({ frequency }: { frequency: number }){
    this.ctx = audioContext()
    this.oscillator = this.ctx?.createOscillator()!;
    this.vca = this.ctx?.createGain()!
    this.feedback = this.ctx?.createGain()!
    this.delay = this.ctx?.createDelay()!
  
    // connect the pieces
    this.oscillator
      .connect(this.vca)
      .connect(this.ctx?.destination!);

    this.oscillator.type = 'triangle' 
    this.oscillator.frequency.value = frequency;
    this.vca.gain.value = 0

    // start
    this.oscillator.start()

  }

  playStart(){
    if(this.ctx?.state === 'suspended'){
      this.ctx?.resume()
    }
    this.vca.gain.value = 1;

    return this
  }

  playStop(){
    this.vca.gain.value = 0

    return this
  }


  delayStart(speed: number){
    this.vca.connect(this.delay);
    this.delay.connect(this.ctx?.destination!)
    this.delay.connect(this.feedback)
    this.feedback.connect(this.delay);

    // set defaults
    this.delay.delayTime.value = speed / 100
    this.feedback.gain.value = 0.5;

    this.playStart();
  }

  tremeloStart(speed: number){
    const cycle = [0.5, 1, 0.5, 0];
    const levels = [...cycle, ...cycle, ...cycle, ...cycle,...cycle, 0.5]
    const tremeloSpeed = speed / 100;
    this.vca.gain.setValueCurveAtTime(levels, this.ctx?.currentTime!, tremeloSpeed)
    
  }
}