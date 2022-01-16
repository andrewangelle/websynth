import { useState, useRef } from "react";

import { Tremelo } from "../modules/Tremelo";

const tremeloBase = new Tremelo();

export function TremeloControls(){
  const [tremeloSpeed, setTremeloSpeed] = useState('fast')
  const tremelo = useRef(tremeloBase)
  return (
    <>
      <label
        style={{ width: '200px', margin: '10px auto auto' }}
        htmlFor="volume"
      >
        Tremelo
      </label>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {['fast', 'medium', 'slow'].map((speed, index) => {
          return (
            <button
              key={speed}
              onClick={() => setTremeloSpeed(speed)}
              style={{
                color: tremeloSpeed === speed ? 'blue' : '',
                borderColor: tremeloSpeed === speed ? 'blue' : ''
              }}
            >
              {speed}
            </button>
          )
        })}
      </div>

      <button
        style={{ width: '15%', margin: '10px auto auto' }}
        onClick={() => tremelo.current.trigger(tremeloSpeed)}
      >
        Trigger
      </button>
      <button 
        style={{ width: '15%', margin: '10px auto auto' }}
        onClick={() => tremelo.current.start()}
      >
        On
      </button>
      <button
        style={{ width: '15%', margin: '10px auto auto' }} 
        onClick={() => tremelo.current.stop()}
      >
        Off
      </button>
    </>
  )
}