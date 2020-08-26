import React from 'react'
import './DonorCarousel.css'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

export default function DonorCarousel() {
  return (
    <div className="carousel-container">
      <h3 className="doners-text">MAJOR DONORS</h3>
      <ChevronLeftIcon id="left-chev" className="chevron--donors" />
      <img
        className="img-carousel"
        src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1598306691/Trinity-Place-Shelter/HomePage/AidsInst_vcypsl.png"
        alt="aids-institute"
      />
      <img
      className="img-carousel"
        src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1598306691/Trinity-Place-Shelter/HomePage/viacom_gziix6.png"
        alt="viacom-cbs"
      />
      <img
      className="img-carousel"
        src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1598306691/Trinity-Place-Shelter/HomePage/eltonJohn_zrrmb1.png"
        alt="elton-john-aids-foundation"
      />
      <img
      className="img-carousel"
        src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1598306691/Trinity-Place-Shelter/HomePage/tudor_dgayqt.png"
        alt="james-tudor-foundation"
      />
      <ChevronRightIcon className="chevron--donors" />
      <a
      style={{ zIndex: '100' }}
      href="https://www.guidestar.org/profile/94-3447082"
        target="_blank"
        rel="noopener noreferrer"
      >
      <img
        className="seal-of-transparency"
        style={{ zIndex: '100' }}
        src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597512463/Trinity-Place-Shelter/HomePage/Seal_of_transparancy_niagnw.png"
        alt="seal-of-transparency"
      />
      </a>
    </div>
  )
}
