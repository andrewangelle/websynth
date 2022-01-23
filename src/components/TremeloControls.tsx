import React, { Dispatch, SetStateAction } from "react";

type TremeloControlsProps = {tremeloSpeed: string; setTremeloSpeed: Dispatch<SetStateAction<string>>};
export function TremeloControls({tremeloSpeed, setTremeloSpeed}: TremeloControlsProps){
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '10px auto auto' }}>
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
    </>
  )
}