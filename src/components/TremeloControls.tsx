import stylex from "@ladifire-opensource/stylex";
import { useRecoilState } from "recoil";

import { tremeloSpeedState, tremeloToggleState } from "../store";
import { FlexCenter } from "../styles/Flex";

export function TremeloControls(){
  const [tremeloOn, setTremeloOn] = useRecoilState(tremeloToggleState)
  const [tremeloSpeed, setTremeloSpeed] = useRecoilState(tremeloSpeedState)
  const tremeloButtonStyles = stylex.dedupe(
    {
      width: '15%', 
      margin: '10px auto auto',
    },
    tremeloOn ? {
      color: 'blue' ,
      borderColor: 'blue'
    } : {}
  );
  return (
    <>
      <FlexCenter>
        <button 
          className={tremeloButtonStyles}
          onClick={() => setTremeloOn(prevState => !prevState)}
        >
          Tremelo
        </button>
      </FlexCenter>

      <FlexCenter>
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
      </FlexCenter> 
    </>
  )
}