import { KeyboardEvent } from "react";
import { Pitch } from "../modules/Pitch";

type PitchKeyProps = {
  delayOn: boolean; 
  tremeloOn: boolean;
  tremeloSpeed: string;
  pitchInfo: {
    label: string; 
    value: number;
  }
}
export function PitchKey({
  delayOn, 
  tremeloOn,
  tremeloSpeed,
  pitchInfo
}: PitchKeyProps){
  const pitch = new Pitch({frequency: pitchInfo.value});

  function startPitch(){
    if(delayOn){
      pitch.delayStart()
    } else if(tremeloOn){
      pitch.tremeloStart(tremeloSpeed)
    }
    else {
      pitch.playStart()
    }
  }

  function startPitchOnKeyDown(
    event: KeyboardEvent<HTMLButtonElement>
  ) {
    switch(event.key){
      case 'Enter':
      case ' ': {
        startPitch()
      }
    }
  }

  function stopPitchOnKeyUp(
    event: KeyboardEvent<HTMLButtonElement>
  ){
    switch(event.key){
      case 'Enter':
      case ' ':
        pitch.playStop()
    }
  }
  return (
    <button
      key={pitchInfo.value}
      onKeyDown={startPitchOnKeyDown}
      onKeyUp={stopPitchOnKeyUp}
      onMouseDown={startPitch}
      onMouseUp={() => pitch.playStop()}
    >
      {pitchInfo.label}
    </button>        
  )
}