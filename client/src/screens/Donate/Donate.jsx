import React from 'react'
import './Donate.css'

//Components
import YellowBoxDonate from "../../components/YellowBox/YellowBoxDonate.js"
import DonateForm from '../../components/DonateForm/DonateForm'
import DonateExampleBanner from '../../components/DonateExampleBanner/DonateExampleBanner'
import WhiteSpace from "../../components/WhiteSpace/WhiteSpace.js"





function Donate() {
  return (
    <div className="donate">
      
     
      
      <DonateForm />
      <WhiteSpace />
      <WhiteSpace />
      <DonateExampleBanner />
      <WhiteSpace />
      <YellowBoxDonate />
    </div>
  )
}

export default Donate
