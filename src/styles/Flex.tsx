import { PropsWithChildren } from "react";

export function FlexColumn({children}: PropsWithChildren<{}>){
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>{children}</div>
  )
}


export function FlexCenter({children}: PropsWithChildren<{}>){
  return (
    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>{children}</div>
  )
}
