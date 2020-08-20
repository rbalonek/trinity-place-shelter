// @ts-nocheck
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
    <div >
      <div className="container">
        <div className="container-left">
          <div className="footer-nav-links">
            <p>Home</p>
            <p>Our Story</p>
            <p>Volunteer</p>
            <p>Resources</p>
            <p>Faq</p>
            <p>Donate</p>
          </div>
        </div>

        <div className="container-right"></div>
        <div className="iframe-div">
          <iframe
            className="iFrame"
            height="300px"
            width="340px"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftrinityplaceshelter%2F&tabs=timeline&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
            frameborder="0"
            allowTransparency="true"
          />
        </div>
      </div>
      </div>
      </footer>
  );
}

export default Footer;
