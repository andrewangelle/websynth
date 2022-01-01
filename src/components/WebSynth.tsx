import React, {useRef, useState} from 'react';

import { WaveType, WebSynthBase } from '../modules';


const waveTypes: WaveType[] = [
  'sawtooth',
  'sine',
  'square',
  'triangle'
]

export function WebSynth(){
  const [isPlaying, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0)

  return (
    <div
      style={{display: 'flex', flexDirection: 'column'}}
    >
      <label
        style={{width: '100px', margin: '10px auto auto'}} 
        htmlFor="volume"
      >
        Pitch
      </label>

      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button 
          onClick={() => {
            new WebSynthBase().setFrequency(440)
          }}
        >
          A
        </button> 
        <button 
          onClick={() => {
            new WebSynthBase().setFrequency(493.88)
          }}
        >
          B
        </button>
        <button
          onClick={() => {
            new WebSynthBase().setFrequency(554.37)
          }}        
        >
          C#
        </button>
        <button 
          onClick={() => {
            new WebSynthBase().setFrequency(587.33)
          }}        
        >
          D
        </button>
      </div>

      <label style={{marginTop: '10px'}}>
        Wave type
      </label>


      <div style={{display: 'flex', justifyContent: 'center'}}>
        {waveTypes.map(type => (
          <button 
            key={type}
            onClick={() => {
              setVolume(0.25)
              new WebSynthBase().setWaveType(type)
            }}
          >
            {type}
          </button> 
        ))}
      </div>           
    </div>
  ) 
}