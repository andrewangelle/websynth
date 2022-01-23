import styled from 'styled-components';

export const PianoKey = styled.button<{isBlackKey?: boolean;}>`
  height: 250px;
  width: 60px;
  z-index: 1;
  border-left: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  border-radius: 0 0 5px 5px;
  box-shadow: -1px 0 0 rgb(255 255 255 / 80%) inset, 0 0 5px #ccc inset, 0 0 3px rgb(0 0 0 / 20%);
  background: linear-gradient(to bottom,#eee 0%,#fff 100%);
  background: white;

  &:active {
    border-top:1px solid #777;
    border-left:1px solid #999;
    border-bottom:1px solid #999;
    box-shadow:2px 0 3px rgba(0,0,0,0.1) inset,-5px 5px 20px rgba(0,0,0,0.2) inset,0 0 3px rgba(0,0,0,0.2);
    background:linear-gradient(to bottom,#fff 0%,#e9e9e9 100%);
  }


  ${props => {
    if(props.isBlackKey){
      return `
        height: 125px;
        width: 30px;
        margin: 0 -16px 0 -16px;
        z-index: 2;
        border:1px solid #000;
        border-radius:0 0 3px 3px;
        box-shadow: -1px -1px 2px rgba(255,255,255,0.2) inset,0 -5px 2px 3px rgba(0,0,0,0.6) inset,0 2px 4px rgba(0,0,0,0.5);
        background: linear-gradient(45deg,#222 0%,#555 100%);

        &:active {
          box-shadow: -1px -1px 2px rgba(255,255,255,0.2) inset,0 -2px 2px 3px rgba(0,0,0,0.6) inset,0 1px 2px rgba(0,0,0,0.5);
          background: linear-gradient(to right,#444 0%,#222 100%)
        }
      `
    }
  }}

  &:first-child {
    border-radius: 5px 0 5px 5px
  }

  &:last-child {
    border-radius:0 5px 5px 5px
  }
`