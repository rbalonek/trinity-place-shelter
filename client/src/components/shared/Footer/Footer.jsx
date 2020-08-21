// @ts-nocheck
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="container">
          <div className="container-left">
            <div className="footer-nav-links">
              <Link to="/">
                <p>Home</p>
              </Link>{" "}
              <br />
              <p>Our Story</p>
              <br />
              <Link to="/volunteer">
                <p>Volunteer</p>
                <br />
              </Link>
              <p>Resources</p>
              <br />
              <p>FAQ</p>
              <br />
              <Link to="/donate">
                <p>Donate</p>
                <br />
              </Link>
            </div>
            <div className="footer-501-info">
              <p>Trinity Community Connection</p>
              <p>is a 501(c)(3) Organization</p>
              <br />
              <br />
              <p>164 West 100th</p>
              <p>New York, New York 10025</p>
              <br />
              <br />
              <p>646-580-7045</p>
              <br />
              <p>Contact Us</p>
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

          <div className="container-right"></div>
          <div className="iframe-div">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftrinityplaceshelter%2F&tabs=timeline&width=200&height=300&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="200"
              height="300"
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
