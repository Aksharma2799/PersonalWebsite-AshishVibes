import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../src/Home.css";
import Blob from "./components/Blob/Blob";
import AnimatedIcons from "./components/AnimatedIcons/AnimatedIcons";
import Service from "./components/Services/Service";
import Contact from "./components/Contact/Contact";
import TechIcons from "./components/TechIcons/TechIcons";

export const Home = () => {
  const roles = ["Developer", "Designer", "YouTuber"];
  const [text, setText] = useTypewriter({ words: roles, loop: true });

  return (
    <div className="justify-center">
      {/* <Navbar /> */}
      <div className="homePage flex flex-col justify-center md:flex-row p-11">
        <div className="rightSide">
          <Blob />
        </div>
        <div className="leftSide">
          <div className="p-11 text-white">
            <h1 className="primary-color font-extrabold text-4xl py-3">
              Hello,
            </h1>
            <h1 className="text-2xl font-semibold py-2">
              I'm Ashish a{" "}
              <span className="text-red-500 font-extrabold">{text}</span>
              <span className="primary-color">
                <Cursor />
              </span>
            </h1>
            <div className="discription leading-6">
              A passionate developer dedicated to crafting innovative solutions
              that make a difference. With a keen eye for detail and a love for
              problem-solving, I thrive in the dynamic world of software
              development. <br />
              Welcome to my digital journey!
            </div>
            <div className="homebutton flex font-semibold">
              <a
                href="/path/to/your/resume.pdf"
                download="YourResume.pdf"
                className="resumeButton"
              >
                Resume
              </a>
              <button className="SocialButton">
                <a
                  href="https://www.linkedin.com/in/ashishvishwakarma-ashishvibes/"
                  target="blank"
                >
                  LinkedIn
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <AnimatedIcons />
      <Service />
      <Contact />
      <TechIcons/>
    </div>
  );
};

export default Home;
