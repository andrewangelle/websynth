
import { pitchNames, PitchKey } from "src/components";
import { FlexCenter } from "src/styles/Flex";

export function Keyboard(){
  return (
    <FlexCenter>
      {pitchNames.map(pitchInfo => 
        <PitchKey 
          key={pitchInfo.value}
          pitchInfo={pitchInfo}
        />
      )}
    </FlexCenter>
  )
}