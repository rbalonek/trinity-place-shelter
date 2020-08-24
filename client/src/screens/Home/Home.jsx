import React from 'react'
import './Home.css'

//components
import Donors from '../../components/Donors/Donors'
import WhiteSpace from "../../components/WhiteSpace/WhiteSpace.js"

function Home() {
  return (
    <div className="home">
      <Donors />
      <WhiteSpace />
    </div>
  )
}

export default Home
