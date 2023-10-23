import React from "react";
import logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";
import "../Navbar/HomeNavbar.css";
const Navbar = () => {
  return (
    <div className="Navbars">
      <div className="navbar-containers">
        <div className="navbar-logo">
          <Link to="/">
            {" "}
            {/* Use Link component */}
            <img src={logo} alt="" className="logo" />
          </Link>
        </div>

        <div className="Navbar-contents">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/Programs">Programs</Link>
            <Link to="/Reasons">Why us</Link>
            <Link to="/Contact">Contact</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
