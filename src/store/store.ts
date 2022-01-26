import { atom } from "recoil";

// toggles
export const delayToggleState = atom({
  key: 'delayOn',
  default: false
});

export const tremeloToggleState = atom({
  key: 'tremeloOn', 
  default: false, 
});

export const reverbToggleState = atom({
  key: 'reverbOn', 
  default: false, 
});

// settings
export const delaySpeedState = atom({
  key: 'delaySpeed',
  default: 50
})

export const tremeloSpeedState = atom({
  key: 'tremeloSpeed', 
  default: 50, 
});

