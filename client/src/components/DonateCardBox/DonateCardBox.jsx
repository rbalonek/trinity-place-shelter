import React from 'react'
import './DonateCardBox.css'

function DonateCardBox() {
  return (
  
    <div className="card-div">
      <ul className="card-tab">
      <div className="one-time-div">
          <li className="one-time">ONE TIME</li>
        </div>
        <div className="recurring-div">
        <li className="recurring">RECURRING</li>
        </div>
      </ul>
      <div className="card-image">
        <img src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597945994/Trinity-Place-Shelter/HomePage/1_pza0ul.png" className="credit-card" alt="visa" />
        <img src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597945994/Trinity-Place-Shelter/HomePage/2_a7yimq.png" className="credit-card" alt="hk" />
        <img src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597945994/Trinity-Place-Shelter/HomePage/14_q0evfg.png" className="credit-card" alt="hj" />
        <img src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597945994/Trinity-Place-Shelter/HomePage/22_cjqquj.png" className="credit-card" alt="jh" />
        <img src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597945994/Trinity-Place-Shelter/HomePage/5_ydtq4z.png" className="credit-card" alt="jh" />
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
