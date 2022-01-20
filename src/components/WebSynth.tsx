import { Play } from '../modules/Play';
import { pitchNames } from './constants';
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

  return (
    <div
      style={{display: 'flex', flexDirection: 'column'}}
    >

    <div
      style={{display: 'flex', margin: 'auto'}}
    >
      {pitchNames.map(pitch => {
        const play = new Play({frequency: pitch.value})
        return (
          <button
            key={pitch.value}
            onKeyDown={(event) => event.key === ' ' && play.playStart()}
            onKeyUp={(event) => event.key === ' ' && play.playStop()}
            onMouseDown={() => play.playStart()}
            onMouseUp={() => play.playStop()}
          >
            {pitch.label}
          </button>        
        )
      })}
    </div>
      <TremeloControls  />
    </div>
  ) 
}