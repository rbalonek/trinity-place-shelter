import React from 'react'
import './Volunteer.css'

//Components
import HomeIconBox from '../../components/HomeIconBox/HomeIconBox.js'
import VolunteerOptions from '../../components/VolunteerOptions/VolunteerOptions.js'
import SmallBlackBar from "../../components/SmallBlackBar/SmallBlackBar.js"

function Volunteer() {
  return (
    <div className="volunteer">
      <div className="volunteer__banner">
        <div className="volunteer__bannerRight">
          <div className="volunteer_bannerText">
            <h3>EVERYONE DESERVES...</h3>
            <h3>A WARM BED</h3>
            <h3>A SAFE SPACE</h3>
            <h3>A ROOF OVERHEAD</h3>
            <h3>LOVE & ACCEPTANCE</h3>
          </div>
        </div>
        <div className="volunteer__bannerAngledLine"></div>
      </div>
      <VolunteerOptions />
      <SmallBlackBar />
      <HomeIconBox />
    </div>
  )
}

export default Volunteer
