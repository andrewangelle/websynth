// import context from 'audio-context';
import { useState, useRef } from 'react';
import { gains, waveTypes } from './constants';
import { Tremelo } from '../modules/Tremelo';
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
      
      {/* <label style={{marginTop: '10px'}}>
        Wave type
      </label>


      <div style={{display: 'flex', justifyContent: 'center'}}>
        {waveTypes.map(type => (
          <button 
            key={type}
            onClick={() => setWaveType(type)}
            style={{
              color: waveType === type ? 'blue' : '',
              borderColor: waveType === type ? 'blue' : ''
            }}
          >
            {type}
          </button> 
        ))}
      </div>  */}

      {/* <label
        style={{width: '100px', margin: '10px auto auto'}} 
        htmlFor="volume"
      >
        Gain
      </label> 

      <div style={{display: 'flex', justifyContent: 'center'}}>
        {gains.map((value ,index) => {
          return (
            <button 
              key={value}
              onClick={() => setGain(value)}
              style={{
                color: gain === value ? 'blue' : '',
                borderColor: gain === value ? 'blue' : ''
              }} 
            >
              {value}
            </button> 
          )
        })}
      </div> */}

      <TremeloControls  />
    </div>
  ) 
}