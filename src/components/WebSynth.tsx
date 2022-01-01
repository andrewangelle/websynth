import React, {useRef, useState} from 'react';

import { WebSynthBase } from '../modules';

export function WebSynth(){
  const [isPlaying, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0)
  const synth = useRef(new WebSynthBase({volume}));

  return (
    <div
      style={{display: 'flex', flexDirection: 'column'}}
    >


      <label
        style={{width: '100px', margin: '10px auto auto'}} 
        htmlFor="volume"
      >
        Volume
      </label>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button onClick={() => synth.current.oscillator.stop()}>
          0
        </button>      
        <button 
          onClick={() => {
            setVolume(0.25)
            synth.current.setVolume(0.25)
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setVolume(0.5)
            synth.current.setVolume(0.5)
          }}        
        >
          2
        </button>
        <button
          onClick={() => {
            setVolume(0.75)
            synth.current.setVolume(0.75)
          }}        
        >
          3
        </button>
        <button 
          onClick={() => {
            setVolume(1)
            synth.current.setVolume(1)
          }}        
        >
          4
        </button>
      </div>
    </div>
  ) 
}