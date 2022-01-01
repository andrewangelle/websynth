import React, {useRef, useState} from 'react';

import { WebSynthBase } from '../modules';

export function WebSynth(){
  const [isPlaying, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0)
  const synth = useRef(new WebSynthBase());

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
        <button 
          onClick={() => {
            setVolume(0.25)
            synth.current.getOscillator().start()
          }}
        >
          A
        </button> 
        <button 
          onClick={() => {
            setVolume(0.25)
            synth.current.setFrequency(493.88)
          }}
        >
          B
        </button>
        <button
          onClick={() => {
            setVolume(0.75)
            synth.current.setFrequency(554.37)
          }}        
        >
          C#
        </button>
        <button 
          onClick={() => {
            setVolume(1)
            synth.current.setFrequency(587.33)
          }}        
        >
          D
        </button>
      </div>
    </div>
  ) 
}