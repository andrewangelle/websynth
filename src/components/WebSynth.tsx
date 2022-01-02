import  {useState} from 'react';

import { WaveType, WebSynthBase, WebSynthBaseOptions } from '../modules';

const waveTypes: WaveType[] = [
  'sawtooth',
  'sine',
  'square',
  'triangle'
];

function useWebSynth(options: WebSynthBaseOptions){
  const [isPlaying, setPlaying] = useState(false)

  const toggle = () => {
    const state = new WebSynthBase(options)
    if(isPlaying){
      setPlaying(false)
      state.stop()
    } else {
      setPlaying(true);
      state.start()
    }
  }

  return {
    toggle
  }
}

function APitch({ waveType }: { waveType: WaveType }){
  const options: WebSynthBaseOptions = {
    frequency: 440,
    gain: 0.5,
    waveType
  };
  const synth = useWebSynth(options)
  return (
    <button onClick={synth.toggle}>
      A
    </button> 
  )
}

function BPitch({ waveType }: { waveType: WaveType }){
  const options: WebSynthBaseOptions = {
    frequency: 493.88,
    gain: 0.5,
    waveType
  };
  const synth = useWebSynth(options)
  return (
    <button onClick={synth.toggle}>
      B
    </button> 
  )
};

function CSharpPitch({ waveType }: { waveType: WaveType }){
  const options: WebSynthBaseOptions = {
    frequency: 554.37,
    gain: 0.5,
    waveType
  };
  const synth = useWebSynth(options)
  return (
    <button onClick={synth.toggle}>
      C#
    </button> 
  )
};

function DPitch({ waveType }: { waveType: WaveType }){
  const options: WebSynthBaseOptions = {
    frequency: 587.33,
    gain: 0.5,
    waveType
  };
  const synth = useWebSynth(options)
  return (
    <button onClick={synth.toggle}>
      D
    </button> 
  )
};

function EPitch({ waveType }: { waveType: WaveType }){
  const options: WebSynthBaseOptions = {
    frequency: 659.25,
    gain: 0.5,
    waveType
  };
  const synth = useWebSynth(options)
  return (
    <button onClick={synth.toggle}>
      E
    </button> 
  )
};

function FSharpPitch({ waveType }: { waveType: WaveType }){
  const options: WebSynthBaseOptions = {
    frequency: 739.99,
    gain: 0.5,
    waveType
  };
  const synth = useWebSynth(options)
  return (
    <button onClick={synth.toggle}>
      F#
    </button> 
  )
};

function GSharpPitch({ waveType }: { waveType: WaveType }){
  const options: WebSynthBaseOptions = {
    frequency: 830.61,
    gain: 0.5,
    waveType
  };
  const synth = useWebSynth(options)
  return (
    <button onClick={synth.toggle}>
      G#
    </button> 
  )
};

export function WebSynth(){
  const [waveType, setWaveType] = useState<WaveType>('triangle')

  return (
    <div
      style={{display: 'flex', flexDirection: 'column'}}
    >

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
        <APitch waveType={waveType} />
        <BPitch waveType={waveType} />
        <CSharpPitch waveType={waveType} />
        <DPitch waveType={waveType} />
        <EPitch waveType={waveType} />
        <FSharpPitch waveType={waveType} />
        <GSharpPitch waveType={waveType} />
      </div>
  
    </div>
  ) 
}