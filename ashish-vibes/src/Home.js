import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "../src/Home.css";
import Blob from "./components/Blob/Blob";
import About from "./components/About/About";

export const Home = () => {
  const roles = ["Developer", "Designer", "YouTuber"];
  const [text, setText] = useTypewriter({ words: roles, loop: true });

  return (
    <div className="">
      <Navbar />
      <div className="homePage flex ">
        <div className="leftSide">
          <div className="p-11">
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
              <button className="resumeButton">Resume</button>
              <button className="SocialButton">LinkedIn</button>
            </div>
          </div>
        </div>

        <div className="rightSide">
          <Blob />
        </div>
      </div>
      <About/>
      <Footer />
    </div>
  );
};

export default Home;
