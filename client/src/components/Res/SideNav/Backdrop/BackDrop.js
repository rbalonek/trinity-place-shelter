import React from 'react'
import './BackDrop.css'

function BackDrop(props) {
  return props.show ? (
    <div className="backdrop" onClick={props.clickHandler}></div>
  ) : null
}

export default BackDrop
