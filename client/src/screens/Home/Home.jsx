import React from "react";
import "./Home.css";
import Donors from '../../components/Donors/Donors'

//Components
import Footer from "../../components/shared/Footer/Footer";

function Home() {
  return (

    <div className="home">
      <Donors />
    </div>
  );

}

export default Home;
