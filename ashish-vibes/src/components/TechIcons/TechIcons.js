import React from "react";
import {
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaJava,
  FaJsSquare,
  FaAws,
} from "react-icons/fa";
import { SiMongodb, SiMicrosoftazure, SiMysql } from "react-icons/si";
import "./TechIcons.css";
import "../../App.css";

const techIconsData = [
  { Component: FaReact, color: "#61DAFB", name: "React" },
  { Component: FaAngular, color: "#DD0031", name: "Angular" },
  { Component: FaVuejs, color: "#42B883", name: "Vue" },
  { Component: FaNodeJs, color: "#68A063", name: "Node.js" },
  { Component: FaJava, color: "#F89820", name: "Java" },
  { Component: FaJsSquare, color: "#F7DF1E", name: "JavaScript" },
  { Component: SiMongodb, color: "#47A248", name: "MongoDB" },
  { Component: SiMysql, color: "#CC2927", name: "SQL" },
  { Component: SiMicrosoftazure, color: "#0078D7", name: "Azure" },
  { Component: FaAws, color: "#FF9900", name: "AWS" },
];

const TechIcons = () => {
  const rows = [];
  let rowIndex = 0;
  let maxIconsPerRow = 5;

  while (rowIndex < techIconsData.length) {
    rows.push(techIconsData.slice(rowIndex, rowIndex + maxIconsPerRow));
    rowIndex += maxIconsPerRow;
    maxIconsPerRow--;
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl text-gray-400 font-bold mt-5">Modern Tech Arsenal</h2>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center space-x-4">
          {row.map((iconData, index) => {
            const { Component, color, name } = iconData;
            return (
              <div
                key={index}
                className="tech-icon flex flex-col items-center group mb-5"
              >
                <div className="tech-icons">
                  <Component
                    style={{ color, width: 35, height: 35 }}
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-xs text-white font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0">
                  {name}
                </span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TechIcons;
