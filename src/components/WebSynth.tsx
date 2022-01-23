import { TremeloControls, DelayControls, Keyboard } from 'src/components';
import { FlexColumn } from 'src/styles';

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
      <Keyboard />
      <DelayControls />
      <TremeloControls   />
    </FlexColumn>
  ) 
}