import React, { useEffect } from "react";
import { educationData } from "../../Data"; // Adjust the path as needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "../Portfolio/Portfolio.css";

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
    <div className="flex justify-center">
      <div className="container  mx-auto p-4">
        {/* <h2 className="text-4xl font-extrabold text-center my-6">Education</h2> */}
        <div className="relative timeline-line">
          {educationData.map((item, index) => (
            <div key={index} className="mb-10 ml-4">
              <div className="absolute w-8 h-8 bg-gray-200 rounded-full -left-4 border border-white flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-red-500"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg">{item.company}</span>
                <span className="text-gray-500">{item.jobTitle}</span>
                <span className="text-gray-400">{item.years}</span>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Educations;
