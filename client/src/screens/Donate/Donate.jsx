import React from 'react'
import './Donate.css'

//Components
import YellowBox from '../../components/YellowBox/YellowBox.js'
import DonateExampleBanner from '../../components/DonateExampleBanner/DonateExampleBanner'

function Donate() {
  return (
    <div className="donate">
      <DonateExampleBanner />
      <YellowBox />
    </div>
  )
}

export default Donate
