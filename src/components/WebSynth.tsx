import React, {useRef} from 'react';
import AudioContext from 'audio-context';

function useOscillator(){
  const audioContext = AudioContext()!; 

  const context = useRef(audioContext);
  const oscillator = context.current.createOscillator()!;
  const filter = context.current.createBiquadFilter()!;
  const gain = context.current.createGain()!;

  oscillator
    .connect(filter)
    .connect(gain)
    .connect(audioContext.destination)

      

  return oscillator

}

export function WebSynth(){
  const oscillator = useOscillator()  
  return (
    <div>
      <button onClick={() => oscillator.start()}>
        Start Synth
      </button>
    </div>
  ) 
}