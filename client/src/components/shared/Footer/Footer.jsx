import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="container">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500px&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="300px"
        className="iFrame"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media">
      </iframe>
      </div>
    </div>
  )
}

export default Footer