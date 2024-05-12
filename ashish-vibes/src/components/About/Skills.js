import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Skills = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="primary-color font-extrabold text-4xl py-3">Skills</div>
      </div>
      <nav className="bg-transparent flex justify-center">
        <div className="flex">
          <div className="text-white">
            <Link
              to="/skills"
              className="font-semibold px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Skills
            </Link>
            <Link
              to="/experience"
              className="font-semibold px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Experience
            </Link>
            <Link
              to="/education"
              className="font-semibold px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Education
            </Link>
          </div>
        </div>
      </nav>
      div
    </>
  );
};

export default Skills;
