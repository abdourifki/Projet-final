import React from "react";
import "./Program.css";
import { programsData } from "../data/programsData";
import RightArrow from "../assets/rightArrow.png";
import image1 from "../assets/P-image1.jpg";
import image2 from "../assets/P-image2.jpg";
const Programs = () => {
  const handleApi = () => {
    window.location.assign("http://localhost:3001");
  };
  return (
    <div className="programs" id="programs">
      {/*programs-header*/}

      <div className="programs-header">
        <span className="stroke-text">Explore</span>
        <span className="color-text">Our Programs</span>
        <span className="stroke-text">To shape You</span>
      </div>
      <div className="programs-categories">
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
