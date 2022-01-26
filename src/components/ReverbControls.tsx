import { useRecoilState } from "recoil";
import styled from 'styled-components';

import { reverbToggleState } from "src/store";

const ReverbContainer = styled.div`
  font: sans-serif;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: auto;
  flex-direction: column;
`;

const ReverbButton = styled.button<{isSelected: boolean}>`
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

export function ReverbControls(){
  const [reverbOn, setReverbOn] = useRecoilState(reverbToggleState)

  return (
    <ReverbContainer>
      <ReverbButton 
        isSelected={reverbOn}
        onClick={() => setReverbOn(prevState => !prevState)}
      >
        {`Reverb  ${reverbOn ? 'On' : 'Off'}`}
      </ReverbButton>
    </ReverbContainer>
  )

}