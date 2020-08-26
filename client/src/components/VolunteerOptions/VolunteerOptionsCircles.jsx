import React from 'react'
import './VolunteerOptionsCircles.css'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LaptopMacIcon from '@material-ui/icons/LaptopMac'

function VolunteerOptionsCircles() {
  return (
    <>
      <div className="volunteerOptions__circle">
        <div className="volunteerOptions__iconContainer">
          <RestaurantIcon className="volunteerOptions__icon" />
        </div>
        <div className="volunteerOptions__circleText">
          <p>PROVIDE DINNER FOR 10 YOUTH</p>
          <p>MONDAY-THURSDAY</p>
          <p>IT CAN BE HOME-MADE, TAKE-OUT</p>
          <p>OR DELIVERY</p>
        </div>
      </div>
      <div className="volunteerOptions__circle">
        <div className="volunteerOptions__iconContainer">
          <FavoriteIcon className="volunteerOptions__icon" />
        </div>
        <div className="volunteerOptions__circleText">
          <p>HELP US ORGANIZE DONATIONS</p>
          <p>DURING SHELTER HOURS</p>
        </div>
      </div>
      <div className="volunteerOptions__circle">
        <div className="volunteerOptions__iconContainer">
          <LaptopMacIcon className="volunteerOptions__icon" />
        </div>
        <div className="volunteerOptions__circleText">
          <p>OFFER SUPPORT WITH UPKEEP</p>
          <p>OF RESIDENTS’ LAPTOP COMPUTERS</p>
        </div>
      </div>
    </>
  )
}

export default VolunteerOptionsCircles
