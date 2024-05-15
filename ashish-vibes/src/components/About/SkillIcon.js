import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import './About.css'
const SkillIcon = () => {
  useEffect(() => {
    console.log("Initializing TagCloud");

    const container = ".tagcloud";
    const texts = [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Angular",
      "NextJS",
      "NodeJS",
      "C++",
      "Jira",
      "ES6",
      "GIT",
      "GITHUB",
      "Tailwind"
    ];

    const options = {
      radius: 300,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    const tagCloudInstance = TagCloud(container, texts, options);

    return () => {
      tagCloudInstance.destroy();
    };
  }, []);

  return (
    <div className="text-sphere">
      <span className="tagcloud"></span>
    </div>
  );
};

export default SkillIcon;
