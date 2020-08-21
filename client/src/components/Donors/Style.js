import React from 'react'
import './Donors.css'



export default function Style({ children, style }) {
  return <header className={style}>{children}</header>
  // Banner contents are children components which we need to render using hero "prop"
}
    Style.defaultProps = {
      style: "defaultStyle"
    

  
}
