import { PitchKey, TremeloControls, DelayControls, pitchNames } from 'src/components';
import { FlexCenter, FlexColumn } from 'src/styles';

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
  return ( 

    <FlexColumn>
      <FlexCenter>
        {pitchNames.map(pitchInfo => 
          <PitchKey 
            key={pitchInfo.value}
            pitchInfo={pitchInfo}
          />
        )}
      </FlexCenter>

      <DelayControls />
      <TremeloControls   />
    </FlexColumn>
  ) 
}