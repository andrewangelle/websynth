import { KeyboardEvent } from "react";
import { useRecoilState } from "recoil";

import { Pitch } from "src/modules";
import { PianoKey } from "src/styles";
import { tremeloToggleState, tremeloSpeedState, delayToggleState, delaySpeedState } from "src/store";

type PitchKeyProps = {
  pitchInfo: {
    label: string; 
    value: number;
  }
}
export function PitchKey({
  pitchInfo
}: PitchKeyProps){
  const pitch = new Pitch({frequency: pitchInfo.value});
  const [delayOn] = useRecoilState(delayToggleState);
  const [tremeloOn] = useRecoilState(tremeloToggleState);
  const [tremeloSpeed] =  useRecoilState(tremeloSpeedState);
  const [delaySpeed] = useRecoilState(delaySpeedState);
  
  function startPitch(){
    if(delayOn){
      pitch.delayStart(delaySpeed)
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
    <PianoKey
      key={pitchInfo.value}
      isBlackKey={pitchInfo.label.includes('#')}
      onKeyDown={startPitchOnKeyDown}
      onKeyUp={stopPitchOnKeyUp}
      onMouseDown={startPitch}
      onMouseUp={() => pitch.playStop()}
    />
  )
}