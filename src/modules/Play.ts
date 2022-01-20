import audioContext from 'audio-context';

export class Play {
  ctx: ReturnType<typeof audioContext>
  oscillator: OscillatorNode;
  vca: GainNode;

  constructor(){
    this.ctx = audioContext()
    this.oscillator = this.ctx?.createOscillator()!;
    this.vca = this.ctx?.createGain()!

    this.oscillator
      .connect(this.vca)
      .connect(this.ctx?.destination!);

    this.oscillator.type = 'triangle' 
    this.oscillator.frequency.value = 440;
    this.vca.gain.value = 0

    this.oscillator.start()

  }

  playStart(){
    this.vca.gain.value = 1;

    return this
  }

  playStop(){
    this.vca.gain.value = 0

    return this
  }
}