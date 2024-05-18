// Footer.js
import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer bg-none py-4 absolute bottom-0 w-full flex justify-center items-center flex-col sm:flex-row">
      <div className="footer-icon flex justify-center sm:justify-start custom-footer">
        {/* <p>Find us here -</p> */}
        <a
          href="https://github.com/Aksharma2799"
          className="text-black-300 mx-2 hover:text-gray-600  "
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/ashishvishwakarma-ashishvibes/"
          className="text-black-300 mx-2 hover:text-blue-600  "
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://youtube.com/ashishvibes19"
          className="text-black-300 mx-2 hover:text-red-600  "
        >
          <FaYoutube size={30} />
        </a>
        <a
          href="https://instagram.com/aksharma2799"
          className="text-black-300 mx-2 hover:text-pink-600  "
        >
          <FaInstagram size={30} />
        </a>
      </div>

      <div className="custom-shape-divider-top-1715407462">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="65%" stop-color="rgba(253, 196, 53, 1)" />
              <stop offset="100%" stop-color="rgba(253, 89, 53, 1)" />
            </linearGradient>
          </defs>

          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.30-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="linear-gradient-fill"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
