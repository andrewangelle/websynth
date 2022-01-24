import stylex from "@ladifire-opensource/stylex";
import { useRecoilState } from "recoil";

import { tremeloSpeedState, tremeloToggleState } from "src/store";
import { FlexCenter, FlexColumn } from "src/styles";

export function TremeloControls(){
  const [tremeloOn, setTremeloOn] = useRecoilState(tremeloToggleState)
  const [tremeloSpeed, setTremeloSpeed] = useRecoilState(tremeloSpeedState)
  const tremeloButtonStyles = stylex.dedupe(
    {
      width: '25%', 
      margin: '10px auto auto',
    },
    tremeloOn ? {
      color: 'blue' ,
      borderColor: 'blue'
    } : {}
  );
  return (
    <FlexColumn>
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
    </FlexColumn>
  )
}