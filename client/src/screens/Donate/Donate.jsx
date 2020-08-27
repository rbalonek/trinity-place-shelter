import React from 'react'
import './Donate.css'

//Components
import YellowBoxDonate from '../../components/YellowBox/YellowBoxDonate.js'
import DonateForm from '../../components/DonateForm/DonateForm'
import DonateExampleBanner from '../../components/DonateExampleBanner/DonateExampleBanner'

function Donate() {
  return (
    <div className="donate">
      <DonateForm />
      <DonateExampleBanner />
      <YellowBoxDonate />
    </div>
  )
}

export default Donate
