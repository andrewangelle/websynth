import styled from "styled-components";
import { useRecoilState } from "recoil";

import { tremeloSpeedState, tremeloToggleState } from "src/store";
import { FlexCenter, FlexColumn } from "src/styles";

const TremeloToggleButton = styled.button<{isSelected: boolean}>`
  width: 25%;
  margin: 10px auto auto;

  ${props => {
    if(props.isSelected){
      return `
        color: blue;
        border: 2px solid blue;
      `
    }
    return ''
  }}
`

const TremeloSpeedButton = styled.button<{isActive: boolean}>`
  width: 15%;
  margin: 10px auto auto;

  ${props => {
    if(props.isActive){
      return `
        color: blue;
        border: 2px solid blue;
      `
    }
    return ''
  }}
`

export function TremeloControls(){
  const [tremeloOn, setTremeloOn] = useRecoilState(tremeloToggleState)
  const [tremeloSpeed, setTremeloSpeed] = useRecoilState(tremeloSpeedState)
  return (
    <FlexColumn>
      <FlexCenter>
        <TremeloToggleButton 
          isSelected={tremeloOn}
          onClick={() => setTremeloOn(prevState => !prevState)}
        >
          {`Tremelo ${tremeloOn ? 'On' : 'Off'}`}
        </TremeloToggleButton>
      </FlexCenter>

      <FlexCenter>
        {['fast', 'medium', 'slow'].map((speed, index) => {
          return (
            <TremeloSpeedButton
              key={speed}
              isActive={tremeloSpeed === speed }
              onClick={() => setTremeloSpeed(speed)}
            >
              {speed}
            </TremeloSpeedButton>
          )
        })}
      </FlexCenter> 
    </FlexColumn>
  )
}