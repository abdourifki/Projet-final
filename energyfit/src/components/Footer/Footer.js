import React from "react";
import "./Footer.css";
import logo from "../../assets/logo1.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";  

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-container">
        <div className="row">
          {/* column1 */}
          <div className="col">
            <h4>Energy Club</h4>
            <span>
              Leader de la remise en forme au Maroc.
              <br /> les meilleurs coachs à votre écoute inégalé. <br />
              <br />
              Contactez-nous : <span style={{ color: "green" }}> 05 22 64 70 30</span>
            </span>
          </div>
          {/* column2 */}
          <div className="col">
            <h4>Services</h4>
            <span>
              Clubs
              <br /> Activités
              <br /> Coaching
            </span>
          </div>
          {/* column3 */}
          <div className="col">
            <h4>About us</h4>
            <span className="contact-span">
              Contact
              <br />
              Coaching
            </span>
          </div>
        </div>
        <br />
        <hr/>
        <div className="rowx">
          <div className="social-media">
            <a href="https://www.facebook.com/EnergyFitCasablanca/photos_by?locale=fr_FR" target="_blank" rel="noreferrer">
              <FaFacebook className="facebook" />
            </a>
            <a href="https://www.instagram.com/energyfitmaroc/" target="_blank" rel="noreferrer">
              <FaInstagram className="instagram" />
            </a>
          </div>
          <p>
            &copy;{new Date().getFullYear()} thic mems inc | all right reserved | terms of service | privacy
          </p>
          <Link to='/'>  {/* Use Link component */}
            <img src={logo} alt="" className="logo1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
