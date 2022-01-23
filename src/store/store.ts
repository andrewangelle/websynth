import { atom } from "recoil";

export const delayToggleState = atom({
  key: 'delayOn',
  default: false
})

export const tremeloToggleState = atom({
  key: 'tremeloOn', 
  default: false, 
});

export const tremeloSpeedState = atom({
  key: 'tremeloSpeed', 
  default: 'fast', 
});

