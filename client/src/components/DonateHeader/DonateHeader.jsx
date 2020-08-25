import React from 'react'
import './DonateHeader.css'

function DonateHeader() {
  return (
    <div className="donate-container">
        <h1 className="donate-text">DONATE</h1>{" "}
        <h1 className="donate-divider">|</h1>
        <p className="donate-p">
          Hello! Your gift today helps Trinity Place Shelter support
          homeless LGBTQ youth in New York City.
        </p>
      </div>
  )
}

export default DonateHeader
