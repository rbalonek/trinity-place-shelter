import React from 'react'
import VolunteerForm from '../../components/VolunteerForm/VolunteerForm'
import './VolunteerFormScreen.css'

//Component
import YellowBox from "../../components/YellowBox/YellowBox.js"

function VolunteerFormScreen() {
  return (
    <div className="volunteer-form">
      
      <VolunteerForm />
      <YellowBox />
    </div>
  )
}

export default VolunteerFormScreen
