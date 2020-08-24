import React, { Component } from 'react'
import './Donors.css'

export default function Donors() {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="banner-content">
            <h1>WELCOME TO TRINITY PLACE SHELTER</h1>
            <p>
              Where our mission is to help homeless
              lesbian,gay,bisexual,transgender or queer
            </p>
            <p>
              (LGBTQ*)youth and young adults in New York City to safety
              transition out of the shelter
            </p>
            <p>
              system and grow into independent,positive and productive adults.
            </p>
          </div>
        </div>

        <div className="box">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/68974299"
            width="300"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className="follow-us">
          <h2>FOLLOW US FOR CURRENT EVENT</h2>
          <div class="social-media">
            <a href="/" target="_blank" class="social-icon">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                height="50"
                alt="instagram"
              ></img>
            </a>
            <a href="/" target="_blank" class="social-icon">
              <img
                src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
                height="50"
                alt="facebook"
              ></img>
            </a>
            <a href="/" target="_blank" class="social-icon">
              <img
                src="https://w7.pngwing.com/pngs/239/740/png-transparent-twitter-logo-icon-twitter-file-logo-social-media-news.png"
                height="50"
                alt="twitter"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
