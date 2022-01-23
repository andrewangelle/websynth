import React, { useState } from 'react';
import stylex from '@ladifire-opensource/stylex';

import { pitchNames } from './constants';
import { PitchKey } from './PitchKey';
import { TremeloControls } from './TremeloControls';
import { FlexCenter, FlexColumn } from '../styles/Flex';

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

  const delayButtonStyles = stylex.dedupe(
    {
      width: '15%', 
      margin: '10px auto auto',
    },
    delayOn ? {
      color: 'blue',
      borderColor: 'blue' 
    } : {}
  );

  const tremeloButtonStyles = stylex.dedupe(
    {
      width: '15%', 
      margin: '10px auto auto',
    },
    tremeloOn ? {
      color: 'blue' ,
      borderColor: 'blue'
    } : {}
  );
    
  return ( 

    <FlexColumn>
      <FlexCenter>
        {pitchNames.map(pitchInfo => 
          <PitchKey 
            key={pitchInfo.value}
            pitchInfo={pitchInfo} 
            delayOn={delayOn} 
            tremeloOn={tremeloOn}
            tremeloSpeed={tremeloSpeed}
          />
        )}
      </FlexCenter>

      <FlexCenter>
        <button 
          className={delayButtonStyles}
          onClick={() => setDelayOn(prevState => !prevState)}
        >
          Delay
        </button>
      </FlexCenter>

      <TremeloControls  
        styles={tremeloButtonStyles}
        tremeloSpeed={tremeloSpeed}
        setTremeloSpeed={setTremeloSpeed}
        setTremeloOn={setTremeloOn}
      />
    </FlexColumn>
  ) 
}