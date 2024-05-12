import React from "react";
import {
  FaGithub,
  FaReact,
  FaNode,
  FaDatabase,
  FaYoutube,
} from "react-icons/fa";
import "./AnimatedIcons.css"; // Import your CSS file for animations

const AnimatedIcons = () => {
  return (
    <div className="animated-icons-container space-y-2.5 mx-32 opacity-50">
      <div className="leftIcons mx-32">
        <div className="icon-container">
          <FaGithub className="icon github" />
        </div>
        <div className="icon-container">
          <FaReact className="icon react" />
        </div>
      </div>
      <div className="icon-container">
        <FaNode className="icon node" />
      </div>
      <div className="rightIcons mx-32">
        <div className="icon-container">
          <div className="icon-container">
            <FaDatabase className="icon mongodb" />
          </div>
          <div className="icon-container">
            <FaYoutube className="icon youtube" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedIcons;
