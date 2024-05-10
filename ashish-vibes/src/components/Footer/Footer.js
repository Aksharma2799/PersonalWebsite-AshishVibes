// Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-none py-4 absolute bottom-0 w-full flex justify-around items-center flex-col sm:flex-row">
      <div className="mb-4 sm:mb-0 sm:mr-4">
        AshishVibes
      </div>
      <div className="flex justify-center sm:justify-start">
        <a href="https://github.com/Aksharma2799" className="text-gray-300 mx-2"><FaGithub size={24} /></a>
        <a href="https://www.linkedin.com/in/ashishvishwakarma-ashishvibes/" className="text-gray-300 mx-2"><FaLinkedin size={24} /></a>
        <a href="https://youtube.com/ashishvibes19" className="text-gray-300 mx-2"><FaYoutube size={24} /></a>
        <a href="https://instagram.com/aksharma2799" className="text-gray-300 mx-2"><FaInstagram size={24} /></a>
      </div>
      <div>
        All rights reserved by AshishVibes
      </div>
    </footer>
  );
}

export default Footer;
