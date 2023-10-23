import React from "react";
import "./Reasons.css";
import image1 from "../../src/assets/image1.png";
import image2 from "../../src/assets/image2.png";
import image3 from "../../src/assets/image3.png";
import image4 from "../../src/assets/image4.png";
import nb from "../../src/assets/nb.png";
import adidas from "../../src/assets/adidas.png";
import nike from "../../src/assets/nike.png";
import tick from "../../src/assets/tick.png";
import HomeNavbar from '../components/Navbar/Homenavbar';
import Footer from "../components/Footer/Footer";

const Reasons = () => {
  return (
    <div className="container">
    <HomeNavbar/>
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>Some Reasons</span>
        <div>
          <span className="stroke-text">Why</span>
          <span> Choose Us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>Space of +1500 m² on 3 levels</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Fitness/Crossfit/20 meter swimming pool</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Spa/Aesthetics 100% MEN 100% WOMEN</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Personalized coaching and sports care</span>
          </div>
        </div>
        <span className="partners">Our Partners</span>
        <div className="partners-r">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
    <div className="d2">
    <hr/>
    </div>
    <Footer/>
    </div>
  

  );
};

export default Reasons;
