import React from 'react'
import "./VolunteerOptions.css"


export default function VolunteerOptions() {
  return (
    <div className="volunteer-options-container">
      <div className="left-div">
      <img className="food-circle" src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597945994/Trinity-Place-Shelter/HomePage/Dinner_Volunteer_Option_vqbi44.png" alt=""/>
      <p className="food-text">PROVIDE DINNER FOR 10 YOUTH</p>
        <p className="food-text">MONDAY-THURSDAY</p>
        <p className="food-text">IT CAN BE HOME-MADE, TAKE-OUT</p>
        <p className="food-text">OR DELIVERY</p>  
    </div>
      <div className="middle-div">
      <img className="food-circle" src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597945995/Trinity-Place-Shelter/HomePage/Organize_Donations_Option_x2vvld.png" alt=""/>
      <p className="food-text">HELP US ORGANIZE DONATIONS</p>
        <p className="food-text">DURING SHELTER HOURS</p>
      </div>
      <div className="right-div">
      <img className="food-circle" src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597945995/Trinity-Place-Shelter/HomePage/Tech_Help_Option_epnmxd.png" alt=""/>
      <p className="food-text">OFFER SUPPORT WITH UPKEEP</p>
        <p className="food-text">OF RESIDENTS’ LAPTOP COMPUTERS</p>
      </div>
      <div className="small-white-bar">
      <p className="white-bar-text">PLEASE NOTE: in order to provide a safe space and ensure comfort and privacy for the youth, we generally do not have opportunities for volunteers to interact with our residents.</p>
    </div>
    </div>
  )
}
