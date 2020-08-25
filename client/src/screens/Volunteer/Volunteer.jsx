import React, { useState } from 'react'
import './Volunteer.css'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

//Components
import HomeIconBox from '../../components/HomeIconBox/HomeIconBox.js'
import VolunteerOptions from '../../components/VolunteerOptions/VolunteerOptions.js'
import SmallBlackBar from '../../components/SmallBlackBar/SmallBlackBar.js'
import VolunteerNowButton from '../../components/VolunteerNowButton/VolunteerNowButton.js'
import CarouselSlide from '../../components/Carousel/CarouselSlide'
import pic1 from '../../assets/images/VolunteerCarousel/pic1.jpg'
import pic2 from '../../assets/images/VolunteerCarousel/pic2.jpg'
import pic3 from '../../assets/images/VolunteerCarousel/pic3.jpg'
import pic4 from '../../assets/images/VolunteerCarousel/pic4.jpg'
import pic5 from '../../assets/images/VolunteerCarousel/pic5.jpg'

function Volunteer() {
  const [x, setX] = useState(0)

  let carouselArr = [
    <CarouselSlide src={pic1} alt="pic1" />,
    <CarouselSlide src={pic2} alt="pic2" />,
    <CarouselSlide src={pic3} alt="pic3" />,
    <CarouselSlide src={pic4} alt="pic4" />,
    <CarouselSlide src={pic5} alt="pic5" />,
  ]

  const slideLeft = () => {
    x === 0 ? setX(-400) : setX(x + 100)
  }

  const slideRight = () => {
    x < -300 ? setX(0) : setX(x - 100)
  }

  return (
    <div className="volunteer">
      <div className="volunteer__banner">
        <div className="volunteer__bannerRight">
          <div className="volunteer_bannerText">
            <h3>EVERYONE DESERVES...</h3>
            <h3>A WARM BED</h3>
            <h3>A SAFE SPACE</h3>
            <h3>A ROOF OVERHEAD</h3>
            <h3>LOVE & ACCEPTANCE</h3>
          </div>
        </div>
        <div className="volunteer__bannerAngledLine"></div>
        {carouselArr.map((image, index) => {
          return (
            <div
              className="volunteer__bannerSlider"
              style={{ transform: `translateX(${x}%)` }}
            >
              {image}
            </div>
          )
        })}
        <button
          onClick={slideRight}
          className="volunteer__bannerButton --right"
        >
          <ChevronRightIcon className="chevron" />
        </button>
        <button onClick={slideLeft} className="volunteer__bannerButton --left">
          <ChevronLeftIcon className="chevron" />
        </button>

        {/* <div className="volunteer__bannerRight">
          <div className="volunteer_bannerText">
            <h3>EVERYONE DESERVES...</h3>
            <h3>A WARM BED</h3>
            <h3>A SAFE SPACE</h3>
            <h3>A ROOF OVERHEAD</h3>
            <h3>LOVE & ACCEPTANCE</h3>
          </div>
        </div>
        <div className="volunteer__bannerAngledLine"></div> */}
      </div>
      <VolunteerNowButton />
      <VolunteerOptions />
      <SmallBlackBar />
      <HomeIconBox />
    </div>
  )
}

export default Volunteer
