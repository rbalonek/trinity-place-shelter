import React from 'react'
import './HomeBanner.css'

export default function HomeBanner() {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="banner-content">
            <h1>WELCOME TO TRINITY PLACE SHELTER</h1>
            <div className="banner__text">
              <p>
                Where our mission is to help homeless lesbian, gay, bisexual,
                transgender or queer
              </p>
              <p>
                (LGBTQ*) youth and young adults in New York City to safely
                transition out of the shelter
              </p>
              <p>
                system and grow into independent, positive and productive
                adults.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
