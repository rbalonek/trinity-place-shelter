import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-nav-links">
          <Link to="/">
            <p>Home</p>
          </Link> <br />
          <p className="dead-link">Our Story</p> <br />
          <Link to="/volunteer"> 
            <p>Volunteer</p>
          </Link> <br />
          <Link to="/donate">
            <p>Donate</p>
          </Link> <br />
          <Link to="/admin">
            <p>Admin</p>
          </Link> <br />
         
        </div>

       
      
        <div className="footer-501-info">
        <a
        href="https://www.guidestar.org/profile/94-3447082"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
        className="footer-seal-of-transparency"
        src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597512463/Trinity-Place-Shelter/HomePage/Seal_of_transparancy_niagnw.png"
        alt="seal-of-transparency"
      /></a>
      <p>Trinity Community Connection</p>
      <p>is a 501(c)(3) Organization</p>
      <br />
      <p>164 West 100th</p>
      <p>New York, New York 10025</p>
      <br />
          <p>646-580-7045</p>
          <a
            href="https://www.123formbuilder.com/form-2356571/TPS-Contact-Form"
            target="_blank"
            rel="noopener noreferrer">
            <p>Contact Us</p>
            </a>
    </div>

    <div className="footer-payment-methods">
    <img
      className="footer-card"
      src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597945994/Trinity-Place-Shelter/HomePage/22_cjqquj.png"
      alt=""
    />
    <img
      className="footer-card"
      src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597945994/Trinity-Place-Shelter/HomePage/14_q0evfg.png"
      alt=""
    />
    <img
      className="footer-card"
      src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597945994/Trinity-Place-Shelter/HomePage/5_ydtq4z.png"
      alt=""
    />
  </div>
  <div className="footer-payment-methods-bottom">
    <img
      className="footer-card"
      src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597945994/Trinity-Place-Shelter/HomePage/2_a7yimq.png"
      alt=""
    />
    <img
      className="footer-card"
      src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597945994/Trinity-Place-Shelter/HomePage/1_pza0ul.png"
      alt=""
    />
    <img
      className="footer-card"
      src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597945994/Trinity-Place-Shelter/HomePage/3_inrnou.png"
      alt=""
    />
  </div>

      </div>
    </footer>
  )
}

export default Footer;