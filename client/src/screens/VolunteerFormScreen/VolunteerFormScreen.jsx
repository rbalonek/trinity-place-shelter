import React from 'react'
import VolunteerForm from '../../components/VolunteerForm/VolunteerForm'
import './VolunteerFormScreen.css'

//Component
import YellowBox from "../../components/YellowBox/YellowBox.js"
import SmallBlackBar from "../../components/SmallBlackBar/SmallBlackBar.js"

function VolunteerFormScreen() {
  return (
    <div className="volunteer-form">
      
      <VolunteerForm />
      <SmallBlackBar />
      <YellowBox />
    </div>
  )
}

export default VolunteerFormScreen
