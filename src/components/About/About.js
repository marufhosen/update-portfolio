import React from "react";
import "./About.css";
import img from "../../img/maruf2.jpg";

const About = () => {
  return (
    <div className="container">
      <div className="about-container">
        <div className="about-img">
          <img src={img} width="50%" />
        </div>
        <div className="about-content">
          <p>
            I am a dynamic web application developer who likes working with
            JavaScript. I have experience working with e-commerce websites. I
            have also worked on ticket booking and hotel booking applications. I
            am an adaptive developer who is interested in learning technology
            according to demand.
          </p>
          <span>
            <button className="rs-btn">Get Resume</button>
          </span>
          <span>
            <button className="ab-btn">About Me</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
