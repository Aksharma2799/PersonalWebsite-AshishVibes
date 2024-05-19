import React, { useState, Suspense, useEffect } from "react";
import SkillIcon from "./SkillIcon";
import Experiences from "../Portfolio/Experiences";
import Educations from "../Portfolio/Educations";
import "../Projects/Project.css";
import "../About/About.css";
import "../../../src/App.css";
import AnimatedIcons from "../AnimatedIcons/AnimatedIcons";
import TechIcons from "../TechIcons/TechIcons";

const Experience = () => (
  <div className="relative">
    {/* Experiences Component */}
    <Experiences />
  </div>
);

const Education = () => (
  <div className="relative">
    {/* Educations Component */}
    <Educations />
  </div>
);

const Skills = () => {
  const [activeSection, setActiveSection] = useState("skills");

  useEffect(() => {
    // Assuming tagCloudInstance is created here or in SkillSection
    let tagCloudInstance;
    if (activeSection === "skills") {
      // Initialize tagCloudInstance
    }

    return () => {
      // Cleanup tagCloudInstance if it exists
      if (tagCloudInstance && typeof tagCloudInstance.destroy === "function") {
        tagCloudInstance.destroy();
      }
    };
  }, [activeSection]);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="primary-color font-extrabold text-4xl py-3">Skills</div>
        <div className="underLine underLineSkill mt-12 sm:mt-3.2"></div>
      </div>

      <nav className="bg-transparent flex justify-center">
        <div className="flex">
          <div className="text-white">
            <button
              onClick={() => setActiveSection("skills")}
              className={` nav-hover font-semibold px-3 py-1 rounded-md text-sm font-medium  ${
                activeSection === "skills" ? "bg-red-700" : ""
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveSection("experience")}
              className={`nav-hover font-semibold px-3 py-1 rounded-md text-sm font-medium  ${
                activeSection === "experience" ? "bg-red-700" : ""
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveSection("education")}
              className={`nav-hover font-semibold px-2 py-1 rounded-md text-sm font-medium  ${
                activeSection === "education" ? "bg-red-700" : ""
              }`}
            >
              Education
            </button>
          </div>
        </div>
      </nav>

      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {activeSection === "skills" && (
            <div>
              {/* Skill Component */}
              <SkillIcon />
            </div>
          )}
          {activeSection === "experience" && <Experience />}
          {activeSection === "education" && <Education />}
        </Suspense>
      </div>
      <AnimatedIcons/>
      <TechIcons/>
    </>
  );
};

export default Skills;
