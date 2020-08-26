import React from 'react'
import './FollowUsVideo.css'

export default function FollowUsVideo() {
  return (
    <div className="follow-us-div">
      <div className="followUs__right">
        <div className="followUs__iframe">
          <iframe
            className="iframe-resize"
            title="vimeo-player"
            src="https://player.vimeo.com/video/68974299?byline=false&title=false"
            height="280"
            width="300"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className="followUs__testimonial">
          <p>
            “The program was well run and staff truly caring. I felt like I’ve
          </p>
          <p>
            found a second family of sorts and these people that I met there
          </p>
          <p>as a client. Thanks for everything TPS!”-Former Resident</p>
        </div>
      </div>
      <div className="followUs__left">
        <h2>FOLLOW US</h2>
        <h2>FOR CURRENT EVENTS</h2>

        <div className="social-media">
          <a
            className="social-icon"
            href="https://www.instagram.com/trinitys_place/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
              height="50"
              alt="instagram"
            ></img>
          </a>
          <a
            href="https://www.facebook.com/trinityplaceshelter/"
            target="_blank"
            className="social-icon"
            rel="noopener noreferrer"
          >
            <img
              src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
              height="50"
              alt="facebook"
            ></img>
          </a>
          <a
            href="https://twitter.com/TPShelter"
            target="_blank"
            className="social-icon"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
              height="50"
              alt="twitter"
            ></img>
          </a>
        </div>
      </div>
    </div>
  )
}
