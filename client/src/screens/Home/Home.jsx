import React from 'react'
import './Home.css'

//components
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import WhiteSpace from "../../components/WhiteSpace/WhiteSpace.js"
import FollowUsVideo from '../../components/FollowUsVideo/FolowUsVideo'
import SmallBlackBorder from "../../components/SmallBlackBorder/SmallBlackBorder"

function Home() {
  return (
    <div className="home">
      <HomeBanner />
      <WhiteSpace />
      <FollowUsVideo />
      <SmallBlackBorder />
      <WhiteSpace />
    </div>
  )
}

export default Home
