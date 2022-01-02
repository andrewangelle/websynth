import context from 'audio-context';
import  {useState } from 'react';

export type WaveType = 'sawtooth'
  | 'sine'
  | 'square'
  | 'triangle'
  | 'custom'

export type WebSynthBaseOptions = {
  waveType: WaveType,
  frequency: number;
  gain: number;
};
const waveTypes: WaveType[] = [
  'sawtooth',
  'sine',
  'square',
  'triangle'
];


const pitchNames = [
  {label: 'A', value: 440},
  {label: 'B', value: 493.88},
  {label: 'C#', value: 554.37},
  {label: 'D', value: 587.33},
  {label: 'E', value: 659.25},
  {label: 'F#', value: 739.99},
  {label: 'G#', value: 830.61}
];

const gains = [
  0,
  0.25,
  0.5,
  0.75,
  1
]


export function WebSynth(){
  const [waveType, setWaveType] = useState<WaveType>('triangle')
  const [frequency, setFrequency] = useState(440);
  const [gain, setGain] = useState(0.25);

  const audioContext = context()!;
  const oscillator = audioContext.createOscillator()!;
  const filter = audioContext.createBiquadFilter()!;
  const mixer = audioContext.createGain()!
  
  oscillator!.connect(filter).connect(mixer).connect(audioContext.destination)
  oscillator.type = waveType
  oscillator.frequency.value = frequency;
  mixer.gain.value = gain;
  oscillator.start()

  return (
    <div
      style={{display: 'flex', flexDirection: 'column'}}
    >

      <button 
        style={{width: '25%', margin :'auto'}}
        onClick={() => audioContext.resume()}
      >
        Start
      </button>

      <button 
        style={{width: '25%', margin :'auto'}} 
        onClick={() =>  audioContext.suspend()}
      >
        Stop
      </button>

      <label style={{marginTop: '10px'}}>
        Wave type
      </label>


      <div style={{display: 'flex', justifyContent: 'center'}}>
        {waveTypes.map(type => (
          <button 
            key={type}
            onClick={() => setWaveType(type)}
            style={{
              color: waveType === type ? 'blue' : '',
              borderColor: waveType === type ? 'blue' : ''
            }}
          >
            {type}
          </button> 
        ))}
      </div>         

      <label
        style={{width: '100px', margin: '10px auto auto'}} 
        htmlFor="volume"
      >
        Pitch
      </label> 

      <div style={{display: 'flex', justifyContent: 'center'}}>
        {pitchNames.map(({label, value} ,index) => {
          return (
            <button 
              key={value}
              onClick={() => setFrequency(value)}
              style={{
                color: frequency === value ? 'blue' : '',
                borderColor: frequency === value ? 'blue' : ''
              }} 
            >
              {label}
            </button> 
          )
        })}
      </div>

      <label
        style={{width: '100px', margin: '10px auto auto'}} 
        htmlFor="volume"
      >
        Gain
      </label> 

      <div style={{display: 'flex', justifyContent: 'center'}}>
        {gains.map((value ,index) => {
          return (
            <button 
              key={value}
              onClick={() => setGain(value)}
              style={{
                color: gain === value ? 'blue' : '',
                borderColor: gain === value ? 'blue' : ''
              }} 
            >
              {value}
            </button> 
          )
        })}
      </div>
  
    </div>
  ) 
}