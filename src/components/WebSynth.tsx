
import { pitchNames } from './constants';
import { PitchKey } from './PitchKey';
import { TremeloControls } from './TremeloControls';
import { FlexCenter, FlexColumn } from '../styles/Flex';
import { useRecoilState } from 'recoil';
import { delayToggleState, tremeloSpeedState, tremeloToggleState } from '../store';
import { DelayControls } from './DelayControls';

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