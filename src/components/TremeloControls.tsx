import { Dispatch, SetStateAction } from "react";
import { FlexCenter } from "../styles/Flex";

type TremeloControlsProps = {
  styles: string;
  tremeloSpeed: string; 
  setTremeloSpeed: Dispatch<SetStateAction<string>>
  setTremeloOn: Dispatch<SetStateAction<boolean>>
};

export function TremeloControls({styles, tremeloSpeed, setTremeloSpeed, setTremeloOn}: TremeloControlsProps){
  return (
    <>
      <FlexCenter>
        <button 
          className={styles}
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