import { Play } from '../modules/Play';
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

const playButton = new Play()

export function WebSynth(){

  return (
    <div
      style={{display: 'flex', flexDirection: 'column'}}
    >
      <button
       style={{ width: '15%', margin: '10px auto auto' }}
       onKeyDown={() => playButton.playStart()}
       onKeyUp={() => playButton.playStop()}
      >
        Play
      </button>
      <TremeloControls  />
    </div>
  ) 
}