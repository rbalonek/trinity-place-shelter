import React from 'react'
import './VolunteerNowButton.css'

export default function VolunteerNowButton() {
  return (
    // <div className="volunteer-button-div">
    <button
      onClick={() => {
        window.location.href = '/volunteer-form'
      }}
      className="volunteer-button"
    >
      VOLUNTEER NOW
    </button>
    // </div>
  )
}
