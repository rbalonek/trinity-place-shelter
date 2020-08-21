import React from "react";
import "./Home.css";
import Donors from '../../components/Donors/Donors'
import Style from '../../components/Donors/Style'

//Components
import Footer from "../../components/shared/Footer/Footer";

function Home() {
  return (
    
    <div className="home">
      <Style>
      <Donors title="WELCOME TO TRINITY PLACE SHELTER" subtitle="Where our mission is to help homeless lesbian,gay,bisexual,trasngender or queer(LGBTQ*)youth and young adults in New York City to safety transition out of the shelter system and grow into independent,positive and productive adults.">
        </Donors>
        </Style>
    </div>
  );

}

export default Home;
