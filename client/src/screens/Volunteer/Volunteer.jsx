import React from 'react'
import './Volunteer.css'

//Components
import HomeIconBox from '../../components/HomeIconBox/HomeIconBox.js'

function Volunteer() {
  return (
    <div className="volunteer">
      <div className="volunteer__banner">
        <div className="box"></div>
      </div>
      <HomeIconBox />
    </div>
  )
}

export default Volunteer

/*
<HomeIconBox /> 
<h1>EVERYONE DESERVES...</h1>
<h1>A WARM BED</h1>
<h1>A SAFE SPACE</h1>
<h1>A ROOF OVERHEAD</h1>
<h1>LOVE & ACCEPTANCE</h1>
*/
