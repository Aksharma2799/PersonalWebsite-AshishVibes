import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import "./About.css";

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
      "Tailwind",
    ];

    const calculateRadius = () => {
      const width = window.innerWidth;
      if (width < 600) {
        return 100;
      } else if (width < 900) {
        return 150;
      } else {
        return 250;
      }
    };

    let tagCloudInstance = TagCloud(container, texts, {
      radius: calculateRadius(),
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    });

    const handleResize = () => {
      tagCloudInstance.destroy();
      tagCloudInstance = TagCloud(container, texts, {
        radius: calculateRadius(),
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      tagCloudInstance.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mobile-800 flex justify-center">
      <div className="flex flex-col md:flex-row justify-center m-11">
        <div className="Image"> </div>
        {/* //   <SkillIcon/> */}
      </div>

      <div className="text-sphere m-11">
        <span className="tagcloud"></span>
      </div>
    </div>
  );
};

export default SkillIcon;
