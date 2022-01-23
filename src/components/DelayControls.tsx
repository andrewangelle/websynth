import stylex from "@ladifire-opensource/stylex";
import { useRecoilState } from "recoil";

import { delayToggleState } from "../store";
import { FlexCenter } from "../styles/Flex";

export function DelayControls(){
  const [delayOn, setDelayOn] = useRecoilState(delayToggleState)

  const delayButtonStyles = stylex.dedupe(
    {
      width: '15%', 
      margin: '10px auto auto',
    },
    delayOn ? {
      color: 'blue',
      borderColor: 'blue' 
    } : {}
  );


  return (
    <FlexCenter>
      <button 
        className={delayButtonStyles}
        onClick={() => setDelayOn(prevState => !prevState)}
      >
        Delay
      </button>
    </FlexCenter>
  )

}