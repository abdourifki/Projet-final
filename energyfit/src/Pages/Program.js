import React from "react";
import "./Program.css";
import { programsData } from "../data/programsData";
import RightArrow from "../assets/rightArrow.png";
import image1 from "../assets/P-image1.jpg";
import image2 from "../assets/P-image2.jpg";
import aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";
import { animateScroll as scroll }from 'react-scroll';
const Programs = () => {
useEffect(()=>{
  aos.init({duration:1000,
    once: true,
    easing:"ease-in-out",
    offset:100,
  })
},[]);
  const handleApi = () => {
    window.location.assign("http://localhost:3001");
  };
  const scrollToTop= ()=> {
scroll.scrollToTop({
  duration: 0.1,
  smooth:'easeInOutQuart',
});
  }
  return (
    <div className="programs" id="programs" onMouseEnter={scrollToTop}>
      {/*programs-header*/}

      <div className="programs-header">
        <span className="stroke-text">Explore</span>
        <span className="color-text">Our Programs</span>
        <span className="stroke-text">To shape You</span>
      </div>
      <div className="programs-categories" data-aos="zoom-in" onMouseEnter={scrollToTop}>
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now" onClick={handleApi}>
              <span> Join Now</span>
              <img src={RightArrow} />
            </div>
          </div>
        ))}
      </div>
      <div className="P1">
        <hr/>
      </div>
    </div>
  );
};

export default Programs;
