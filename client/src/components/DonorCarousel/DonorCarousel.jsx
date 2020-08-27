import React, { useState } from 'react'
import './DonorCarousel.css'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import sealOfTrans from '../../assets/images/new-seal.png'
// carousel images
import pic1 from '../../assets/images/DonateCarousel/aids-institute.png'
import pic2 from '../../assets/images/DonateCarousel/calamus.png'
import pic3 from '../../assets/images/DonateCarousel/elton-john.png'
import pic4 from '../../assets/images/DonateCarousel/james-tudor.png'
import pic5 from '../../assets/images/DonateCarousel/tjx.png'
import pic6 from '../../assets/images/DonateCarousel/van-amerigen.png'

export default function DonorCarousel() {
  const [x, setX] = useState(0)

  let carouselArr = [
    <img src={pic1} alt="pic1" />,
    <img src={pic2} alt="pic2" />,
    <img src={pic3} alt="pic3" />,
    <img src={pic5} alt="pic5" />,
    <img src={pic6} alt="pic6" />,
    <img src={pic4} alt="pic4" />,
  ]

  const slideLeft = () => {
    x === 0 ? setX(-400) : setX(x + 100)
  }

  const slideRight = () => {
    x < -300 ? setX(0) : setX(x - 100)
  }

  return (
    <div className="carousel-container">
      <div className="donors-text">
        <h3>MAJOR DONORS</h3>
      </div>
      <div className="donorCarousel__leftButton">
        <button onClick={slideLeft}>
          <ChevronLeftIcon id="left-chev" className="chevron--donors" />
        </button>
      </div>
      {/* carousel maps image elements onto page */}
      <div className="donorCarousel__slider-container">
        {carouselArr.map((image, index) => {
          return (
            <div
              className="donorCarousel__slider"
              style={{ transform: `translateX(${x}%)` }}
            >
              {image}
            </div>
          )
        })}
      </div>
      <div className="donorCarousel__rightButton">
        <button onClick={slideRight}>
          <ChevronRightIcon className="chevron--donors" />
        </button>
      </div>
      <div className="donorCarousel__seal">
        {/* <a
          style={{ zIndex: '100' }}
          href="https://www.guidestar.org/profile/94-3447082"
          target="_blank"
          rel="noopener noreferrer"
        > */}
        <img
          className="seal-of-transparency"
          src={sealOfTrans}
          alt="seal-of-transparency"
        />
        {/* </a> */}
      </div>
    </div>
  )
}
