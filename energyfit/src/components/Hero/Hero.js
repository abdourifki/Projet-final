import React from "react";
import { Link } from 'react-router-dom'; // Importez Link de react-router-dom
import "./Hero.css";
import NumberCounter from "./NumberCounter";
import { motion } from "framer-motion";
import HomeNavbar from '../Navbar/Homenavbar';
import { useState } from "react";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  return (
  <>
        <HomeNavbar />

    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        {/*the best ad*/}
        {/* <div className="the-best-ad">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={transition}
            ></motion.div>
          <span>the best fitness club in the town</span>
        </div> */}
        {/*hero heading*/}
        <div className="hero-text">
          <div className="hero-text1">
            <span className="stroke-text">Don't </span>
            <span className="color-text">be afraid</span>
          </div>
          <div className="hero-text2">
            <span className="color-text">of failure.</span>
          </div>
          <div className="hero-text3">
            <motion.span
             key={selected}
             initial={{opacity:0, x:-100}}
             animate={{opacity:1, x:0}}
             exit={{opacity:0, x:100}}
             transition={{ type: "spring", duration: 3 }}
             className="text-animation"      
             >
               
              ¨Bodybuilding is much like any other sport. To be successful, <br /> you
              must dedicate yourself 100% to your training, diet and mental
              approach.¨ -{" "} <br />
              <span style={{ color: "orange" }}>Arnold Schwarzenegger</span>
            </motion.span>
          </div>
        </div>
        {/*figures*/}
        <div className="figures">
          <NumberCounter targetNumber={40} plus= '+' label="EXPERT COATCHS" />
          <NumberCounter targetNumber={100} plus= '+' label="MEMBRE JOINED" />
          <NumberCounter targetNumber={50} plus= '+' label="PROGRAMS" />
        </div>
        
        {/*hero-button*/}
        <div className="hero-button">
          <Link to="/Programs"><button className="btn">Get Started</button></Link>
        </div>
      </div>
      
    </div>
            </>
  );
};

export default Hero;
