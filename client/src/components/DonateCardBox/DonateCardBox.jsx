import React from 'react'
import './DonateCardBox.css'

function DonateCardBox() {
  return (
    <div className="card-div">
      <div className="card-image">
        <img src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597945994/Trinity-Place-Shelter/HomePage/1_pza0ul.png" alt="jh" />
        <img src="../../assets/CreditCards/Discover.png" alt="hk" />
        <img src="../../assets/CreditCards/AmEx.png" alt="hj" />
        <img src="../../assets/CreditCards/Pypal.png" alt="jh" />
    </div>
    <form classNmae="card-form">
      <input className="card-input" placeholder="NAME ON CARD" />
      <input className="card-input" placeholder="CARD NUMBER"/>
      <input className="card-input" placeholder="EXPIRATION DATE (MM/YY)" />
      <input className="card-input" placeholder="CVC"/>
    </form>
    
  </div>
  )
}

export default DonateCardBox
