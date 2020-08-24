import React from 'react'
import './Home.css'

//components
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import WhiteSpace from "../../components/WhiteSpace/WhiteSpace.js"
import FollowUsVideo from '../../components/FollowUsVideo/FolowUsVideo'

function Home() {
  return (
    <div className="home">
      <HomeBanner />
      <WhiteSpace />
      <FollowUsVideo />
    </div>
  )
}

export default Home
