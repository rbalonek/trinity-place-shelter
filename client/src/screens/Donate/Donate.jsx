import React from 'react'
import './Donate.css'

//Components
import YellowBox from "../../components/YellowBox/YellowBox.js"
import DonateForm from '../../components/DonateForm/DonateForm'

function Donate() {
  return (
    <div className="donate">
      
      <DonateForm />
      <YellowBox />
    </div>
  )
}

export default Donate
