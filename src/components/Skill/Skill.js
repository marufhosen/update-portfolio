import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <div className="skill-container">
      <div>
        <ul>
          <li>
            <span>Front End:</span> React, React Router, Bootstrap, Material-UI.
          </li>
          <li>
            <span>Back End:</span> Express JS.
          </li>
          <li>
            <span>Database:</span> Mongo DB.
          </li>
          <li>
            <span>ML/AI:</span>Open CV, TensorFlow, Keras.
          </li>
          <li>
            <span>Languages:</span>C, Python, JavaScript (ES6).
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <span>Deployment: </span> Firebase, Heroku.
          </li>
          <li>
            <span>Version Control System:</span> Git.
          </li>
          <li>
            <span>Others Skills:</span> CSS3, SCSS, OOP.
          </li>
          <li>
            <span>OS:</span> Windows, Linux.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skill;
