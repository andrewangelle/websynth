
import { useRecoilState } from 'recoil';

import { PitchKey, TremeloControls, DelayControls } from 'src/components';
import { FlexCenter, FlexColumn } from 'src/styles';

import { delayToggleState, tremeloSpeedState, tremeloToggleState } from 'src/store';
import { pitchNames } from 'src/components/constants';

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
  const [delayOn] = useRecoilState(delayToggleState)
  const [tremeloOn] = useRecoilState(tremeloToggleState)
  const [tremeloSpeed] =  useRecoilState(tremeloSpeedState) 
    
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

      <DelayControls />
      <TremeloControls   />
    </FlexColumn>
  ) 
}