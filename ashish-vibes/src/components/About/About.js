import React from "react";
import Blob from "../Blob/Blob";
import Skills from "./Skills";
import SkillSection from "./SkillSection";

export const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center md:flex-row p-11">
        <Blob />
        <div className="md:order-last ml-11 mt-10 ">
          <h1 className="primary-color font-extrabold text-4xl py-3">
            About me
          </h1>
          <p className="leading-6 max-w-6xl text-white">
            Greetings! I'm Ashish Vishwakarma, a fervent Software Developer
            fueled by innovation and a thirst for knowledge. I dive deep into
            the realm of software development, crafting solutions that redefine
            possibilities. In addition to my coding adventures, I'm also an avid
            blogger, where I share my insights and experiences on technology,
            finance, and the stock market. I thrive on challenges and the
            opportunity to learn continuously, embracing the dynamic landscapes
            of both software development and blogging with equal zeal. Let's
            embark on a journey of exploration, creativity, and growth together!
          </p>

          <div className="homebutton">
            <button className="resumeButton">Resume</button>
          </div>
        </div>
      </div>
      <div className="">
        <Skills />
      </div>
      <div>
        <SkillSection/>
      </div>
    </>
  );
};
export default About;
