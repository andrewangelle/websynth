import { Donut } from 'react-dial-knob'
import { useRecoilState } from "recoil";
import styled from 'styled-components';

import { delaySpeedState, delayToggleState } from "src/store";

const DelayContainer = styled.div`
  font: sans-serif;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;
  flex-direction: column;
`;

const DelayButton = styled.button<{isSelected: boolean}>`
  width: 25%;
  margin: 10px auto;

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

export function DelayControls(){
  const [delayOn, setDelayOn] = useRecoilState(delayToggleState)
  const [delaySpeed, setDelaySpeed] = useRecoilState(delaySpeedState);

  return (
    <DelayContainer>
      <DelayButton 
        isSelected={delayOn}
        onClick={() => setDelayOn(prevState => !prevState)}
      >
        {`Delay ${delayOn ? 'On' : 'Off'}`}
      </DelayButton>
      <Donut
        style={{margin :'auto'}}
        diameter={100}
        min={0}
        max={100}
        step={1}
        value={delaySpeed}
        onValueChange={value => setDelaySpeed(value)}
      >
        <button style={{border: 'none', background: 'transparent'}}>Delay Speed</button>
      </Donut>
    </DelayContainer>
  )

}