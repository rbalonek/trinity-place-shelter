import React from 'react'
import './DonateExampleBanner.css'

function DonateExampleBanner() {
  return (
    <div className="donateExampleBanner">
      <h1>HERE ARE EXAMPLES OF HOW YOUR GIFT WILL MAKE AN IMPACT</h1>
      <div className="donateExampleBanner__circles">
        <div className="donateExampleBanner__circle --orange "></div>
        <div className="donateExampleBanner__circle --red"></div>
        <div className="donateExampleBanner__circle --purple"></div>
      </div>
    </div>
  )
}

export default DonateExampleBanner
