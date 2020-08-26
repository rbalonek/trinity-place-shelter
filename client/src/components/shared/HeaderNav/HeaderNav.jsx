import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderNav.css'
import Logo from '../../../assets/Logo/Trinity-Logo.png'
import SideNav from '../../Res/SideNav/SideNav'

function HeaderNav() {
  return (
    <div className="header-nav">
      <Link className="header-nav__logo" to="/">
        <img
          className="header-nav__logo"
          src={Logo}
          alt="trinity place shelter logo"
        />
      </Link>
      <nav>
        <div className="header-nav__responsive">
          <SideNav />
        </div>

        <ul className="header-nav__container">
          <li>OUR STORY</li>
          <li>
            <Link to="/volunteer" className="header-nav--link">
              VOLUNTEER
            </Link>
          </li>
          <li>RESOURCES</li>
          <li>FAQ</li>
        </ul>
        <button
          onClick={() => {
            window.location.href = '/donate'
          }}
          className="header-nav__donateButton"
        >
          DONATE
        </button>
      </nav>
    </div>
  )
}

export default HeaderNav
