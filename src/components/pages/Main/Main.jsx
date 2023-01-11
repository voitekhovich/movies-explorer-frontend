import "./Main.css";

import React from "react";
import Promo from "../../Promo/Promo";
import AboutProject from "../../AboutProject/AboutProject";
import Techs from "../../Techs/Techs";
import AboutMe from "../../AboutMe/AboutMe";
import Footer from "../../Footer/Footer";

function Main() {
  return (
    <div className="main">
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}

export default Main;
