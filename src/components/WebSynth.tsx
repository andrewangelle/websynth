import { TremeloControls, DelayControls, Keyboard } from 'src/components';
import { FlexCenter } from 'src/styles';

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
    <div>
      <FlexCenter>
        <DelayControls />
        <TremeloControls   />
      </FlexCenter>
      <Keyboard />
    </div>
  ) 
}