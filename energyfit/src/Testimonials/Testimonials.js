import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../src/data/testimonialsData";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import { motion } from "framer-motion";



const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLenght = testimonialsData.length;
  
  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span className="color-text">say about Us</span>
        <motion.span
        key={selected}
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:100}}
        transition={{ type: "spring", duration: 3 }}      
        >
          {testimonialsData[selected].review}
          </motion.span>
        <span>
          <span style={{ color: "orange" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />

        <div className="arrows">
          <img
          onClick={()=>{
            selected===0
            ? setSelected(tLenght-1)
            : setSelected((prev)=>prev-1);
            
          }}
          
          
          src={leftArrow} alt="" />
          <img
          onClick={()=>{
            selected===tLenght-1
            ? setSelected(0)
            : setSelected((prev)=>prev+1);
          }}
          
          
          src={rightArrow} alt="" />

        </div>
      </div>
    </div>
  );
};

export default Testimonials;