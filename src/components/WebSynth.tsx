import { TremeloControls, DelayControls, Keyboard } from 'src/components';
import { FlexCenter } from 'src/styles';
import { ReverbControls } from './ReverbControls';

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
        <ReverbControls />
        <TremeloControls   />
      </FlexCenter>
      <Keyboard />
    </div>
  ) 
}