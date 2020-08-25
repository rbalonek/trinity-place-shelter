import React from 'react'
import "./FollowUsVideo.css"


export default function FolowUsVideo() {
  return (
    <div className="follow-us-div">
      <div className="follow-text-div">
      <h2>FOLLOW US</h2>
      <h2>FOR CURRENT EVENTS</h2>
      </div>
    <div className="social-media">
    <a className="social-icon" href="https://www.instagram.com/trinitys_place/" target="_blank"  ><img className="social-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"  height="50"></img></a>
    <a href="https://www.facebook.com/trinityplaceshelter/" target="_blank" className="social-icon" ><img className="social-icon" src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" height="50"></img></a>
    <a href="https://twitter.com/TPShelter" target="_blank" className="social-icon" ><img className="social-icon" src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" height="50"></img></a>
    
        <div className="iframe">
        <iframe className="player" title="vimeo-player" src="https://player.vimeo.com/video/68974299" width="300" height="360" frameborder="0" allowfullscreen></iframe>
        </div>
        
        <div className="p-text-follow">
        <p>“The program was well run and staff truly caring. I felt like I’ve
        found a second family of sorts and these people that I met there
        as a client. Thanks for everything TPS!”</p><p>-Former Resident</p> 
        </div>
      </div>
      <div className="half-screen-div">
      </div>
      </div>
  )
}
