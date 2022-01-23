import { useState } from 'react';
import { pitchNames } from './constants';
import { PitchKey } from './PitchKey';
import { TremeloControls } from './TremeloControls';

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

export function WebSynth(){
  const [delayOn, setDelayOn] = useState(false);
  const [tremeloOn, setTremeloOn] = useState(false);
  const [tremeloSpeed, setTremeloSpeed] = useState('fast')

  return ( 
    <div style={{display: 'flex', flexDirection: 'column'}}>

      <div style={{display: 'flex', margin: 'auto'}}>
        {pitchNames.map(pitchInfo => 
          <PitchKey 
            pitchInfo={pitchInfo} 
            delayOn={delayOn} 
            tremeloOn={tremeloOn}
            tremeloSpeed={tremeloSpeed}
          />
        )}
      </div>

      <button 
        style={{
          width: '5%', 
          margin: '10px auto auto',
          color: delayOn ? 'blue' : '',
          borderColor: delayOn ? 'blue' : ''
        }}
        onClick={() => setDelayOn(prevState => !prevState)}
      >
        Delay
      </button>

      <button 
        style={{
          width: '5%', 
          margin: '10px auto auto',
          color: tremeloOn ? 'blue' : '',
          borderColor: tremeloOn ? 'blue' : ''
        }}
        onClick={() => setTremeloOn(prevState => !prevState)}
      >
        Tremelo
      </button>

      <TremeloControls  
        tremeloSpeed={tremeloSpeed}
        setTremeloSpeed={setTremeloSpeed}
      />
    </div>
  ) 
}