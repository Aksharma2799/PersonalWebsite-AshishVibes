import React, { useEffect } from "react";
import { educationData } from "../../Data"; // Adjust the path as needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
// import "../Portfolio/Portfolio.css";

const Educations = () => {
  useEffect(() => {
    const handleScroll = () => {
      const line = document.querySelector(".timeline-line");
      const scrollPosition = window.scrollY + window.innerHeight;
      const lineHeight = line.scrollHeight;

      if (scrollPosition > line.offsetTop + lineHeight / 2) {
        line.classList.add("animate-line");
      } else {
        line.classList.remove("animate-line");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center h-auto">
      <div className="m-11 ">
        <div className="relative timeline-line">
          {educationData.map((item, index) => (
            <div key={index} className="ml-4">
              <div className="absolute w-8 h-8 bg-gray-200 rounded-full -left-4 border border-white flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-red-500"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="primary-color font-semibold text-3xl">
                  {item.college_name}
                </span>
                <span className="text-green-300">{item.jobTitle}</span>
                <span className="text-gray-400">{item.years}</span>
                <p className="mt-2 text-gray-300 ml-6">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Educations;
