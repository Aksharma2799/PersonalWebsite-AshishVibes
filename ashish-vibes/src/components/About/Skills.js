import React, { useState, lazy, Suspense, useEffect } from "react";
import "../Projects/Project.css";
import "../About/About.css";
import SkillIcon from "./SkillIcon";
import Service from '../Services/Service'

// const SkillSection = lazy(() => import("./SkillSection"));
const Blob = lazy(() => import("../Blob/Blob"));

const Experience = () => (
  <div>
    <h2 className="text-2xl font-bold">Experience</h2>
    {/* <Experience/> */}
    <Service/>
  </div>
);

const Education = () => (
  <div>
    <h2 className="text-2xl font-bold">Education</h2>
    <Blob />
    {/* <Education/> */}
  </div>
);

const Skills = () => {
  const [activeSection, setActiveSection] = useState('skills');

  useEffect(() => {
    // Assuming tagCloudInstance is created here or in SkillSection
    let tagCloudInstance;
    if (activeSection === 'skills') {
      // Initialize tagCloudInstance
    }

    return () => {
      // Cleanup tagCloudInstance if it exists
      if (tagCloudInstance && typeof tagCloudInstance.destroy === 'function') {
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
              onClick={() => setActiveSection('skills')}
              className={`font-semibold px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 ${
                activeSection === 'skills' ? 'bg-red-700' : ''
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveSection('experience')}
              className={`font-semibold px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 ${
                activeSection === 'experience' ? 'bg-red-700' : ''
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveSection('education')}
              className={`font-semibold px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 ${
                activeSection === 'education' ? 'bg-red-700' : ''
              }`}
            >
              Education
            </button>
          </div>
        </div>
      </nav>

      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {activeSection === 'skills' && (
            <div>
            {/* Skill Component */}
              <SkillIcon/>
            </div>
          )}
          {activeSection === 'experience' && (
            <Experience />
          )}
          {activeSection === 'education' && (
            <Education />
          )}
        </Suspense>
      </div>
    </>
  );
};

export default Skills;
