import React from 'react'
import './DonateExampleBanner.css'

function DonateExampleBanner() {
  return (
    <div className="donateExampleBanner">
      <h1>HERE ARE EXAMPLES OF HOW YOUR GIFT WILL MAKE AN IMPACT</h1>
      <div className="donateExampleBanner__circles">
        <div className="donateExampleBanner__circle --orange ">
          <h1>$117</h1>
          <p>PUBLIC TRANSPORTATION TO WORK OR SCHOOL FOR A MONTH</p>
        </div>
        <div className="donateExampleBanner__circle --red">
          <h1>$1,100</h1>
          <p>DINNER FOR A WEEK FOR ALL RESIDENTS</p>
        </div>
        <div className="donateExampleBanner__circle --purple">
          <h1>$19</h1>
          <p>A CAKE TO CELEBRATE A YOUTH'S BIRTHDAY</p>
        </div>
      </div>
    </div>
  )
}

export default DonateExampleBanner
