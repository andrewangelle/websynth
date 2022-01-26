import styled from "styled-components";
import { useRecoilState } from "recoil";
import { Donut } from "react-dial-knob";

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

export function TremeloControls(){
  const [tremeloOn, setTremeloOn] = useRecoilState(tremeloToggleState)
  const [tremeloSpeed, setTremeloSpeed] = useRecoilState(tremeloSpeedState)
  return (
    <FlexColumn>
      <FlexCenter>
        <TremeloToggleButton 
          isSelected={tremeloOn}
          onClick={() => {
            setTremeloOn(prevState => !prevState);
          }}
        >
          {`Tremelo ${tremeloOn ? 'On' : 'Off'}`}
        </TremeloToggleButton>
      </FlexCenter>

      <FlexCenter>
      <Donut
        style={{margin :'auto'}}
        diameter={100}
        min={0}
        max={200}
        step={1}
        value={tremeloSpeed}
        onValueChange={value => setTremeloSpeed(value)}
      >
        <button style={{border: 'none', background: 'transparent'}}>Tremelo Speed</button>
      </Donut>
      </FlexCenter> 
    </FlexColumn>
  )
}