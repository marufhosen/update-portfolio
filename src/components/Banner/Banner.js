import React from "react";
import "./Banner.css";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <p className="name-intro">Hello! I am</p>
        <p className="name">Maruf M Islam</p>
        <p className="work-title">MERN Stack Developer</p>
        <p className="designation">
          Web Developer <span class="dot"></span> Programmer{" "}
          <span class="dot"></span> Softwer Engineer
        </p>
        <div className="banner-btns">
          <span>
            <button className="rs-btn">Get Resume</button>
          </span>
          <span>
            <button className="ab-btn">About Me</button>
          </span>
        </div>
      </div>
      <div className="banner-social-link">
        <div className="social-links">
          <div>
            <FaFacebook />
          </div>
          <div>
            <FaGithub />
          </div>
          <div>
            <FaLinkedin />
          </div>
          <div>
            <FaTwitter />
          </div>
          <div>
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
