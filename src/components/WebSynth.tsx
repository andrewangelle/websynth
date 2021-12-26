import React, {useRef, useState} from 'react';
import AudioContext from 'audio-context';

function useOscillator({
  filterValue
}: {
  filterValue: number;
}): [OscillatorNode, BiquadFilterNode, GainNode, ]{

  const audioContext = AudioContext()!; 

  const context = useRef(audioContext);
  const oscillator = context.current.createOscillator()!;
  const filter = context.current.createBiquadFilter()!;
  const gain = context.current.createGain()!;


  oscillator
    .connect(filter)
    .connect(gain)
    .connect(audioContext.destination)


  filter.frequency.value = filterValue


  return [oscillator, filter, gain]

}

export function WebSynth(){
  const [isPlaying, setPlaying] = useState(false)
  const [filterValue, setFilterValue] = useState(1)
  const [oscillator, filter, gain] = useOscillator({
    filterValue
  })

  filter.type = 'lowpass'
  return (
    <div
      style={{display: 'flex', flexDirection: 'column'}}
    >
      <button 
        style={{width: '100px', margin: 'auto'}}
        onClick={() => oscillator.start()}
      >
        Start Synth
      </button>

      <button 
        style={{width: '100px', margin: '10px auto'}}
        onClick={() => oscillator.stop()}
      >
        Stop Synth
      </button>   

      <label
        style={{width: '100px', margin: '10px auto auto'}} 
        htmlFor="filter"
      >
        Filter
      </label>
      <input 
        name="filter"
        type='range'
        style={{width: '50%', margin: 'auto'}} 
        value={filterValue.toString()}
        onChange={(e) => setFilterValue(Number(e.target.value))} 
      />
    </div>
  ) 
}