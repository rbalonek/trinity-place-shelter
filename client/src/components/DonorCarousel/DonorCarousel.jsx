import React from 'react'
import './DonerCarousel.css'

export default function DonerCarousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-div">
        <h3 className="doners-text">MAJOR DONORS</h3>
        <img
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1598306691/Trinity-Place-Shelter/HomePage/AidsInst_vcypsl.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1598306691/Trinity-Place-Shelter/HomePage/viacom_gziix6.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1598306691/Trinity-Place-Shelter/HomePage/eltonJohn_zrrmb1.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1598306691/Trinity-Place-Shelter/HomePage/tudor_dgayqt.png"
          alt=""
        />
      </div>
      <img
        className="icon"
        src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597512463/Trinity-Place-Shelter/HomePage/Seal_of_transparancy_niagnw.png"
        alt=""
      />
    </div>
  )
}
