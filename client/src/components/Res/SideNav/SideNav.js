import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SideNav.css'
import BackDrop from './Backdrop/BackDrop'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'

function SideNav() {
  const [clicked, updateClicked] = useState(false)
  const [backdropClicked, setBackDropClicked] = useState(false)

  const backdropToggleHandler = () => {
    console.log('CLICKED')
    if (backdropClicked) {
      setBackDropClicked(false)
      updateClicked(false)
    } else {
      setBackDropClicked(false)
    }
  }

  const sideNavToggleHandler = () => {
    if (!clicked) {
      updateClicked(true)
      setBackDropClicked(true)
    } else {
      updateClicked(false)
    }
  }

  return (
    <>
      <BackDrop clickHandler={backdropToggleHandler} show={backdropClicked} />

      <Button onClick={sideNavToggleHandler} className="sideNav__toggleButton">
        <MenuIcon />
      </Button>
      <div className={clicked ? 'open' : 'close'}>
        <div className="sideNav">
          <nav className="sideNav__nav">
            <ul>
              <Link to="/" className="header-nav--link">
                <li>HOME</li>
              </Link>
              <li>OUR STORY</li>
              <li>
                <Link to="/volunteer" className="header-nav--link">
                  VOLUNTEER
                </Link>
              </li>
              <li>RESOURCES</li>
              <li>FAQ</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default SideNav
