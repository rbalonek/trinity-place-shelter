import React from 'react'
import './Volunteer.css'

//Components
import HomeIconBox from "../../components/HomeIconBox/HomeIconBox.js"
import VolunteerOptions from "../../components/VolunteerOptions/VolunteerOptions.js"

function Volunteer() {
  return (
    <div className="volunteer">
      <h1>Welcome to Volunteer</h1>
      <VolunteerOptions />
      <HomeIconBox />
    </div>
  )
}

export default Volunteer
