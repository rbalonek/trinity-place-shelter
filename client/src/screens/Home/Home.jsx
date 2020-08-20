import React from "react";
import "./Home.css";

//Components
import Footer from "../../components/shared/Footer/Footer";
import ExtraSpace from "../../components/shared/Footer/ExtraSpace.js";

function Home() {
  return (
    <div className="home">
      <h1>Welcome HOME</h1>
      <ExtraSpace>
      <h1>LALA</h1>
      </ExtraSpace>

      <Footer />
    </div>
  );
}

export default Home;
