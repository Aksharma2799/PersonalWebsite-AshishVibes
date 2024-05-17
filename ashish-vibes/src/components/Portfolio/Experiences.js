import React, { useEffect } from "react";
import { experienceData } from "../../Data"; // Adjust the path as needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"; // Ensure this is the correct import
import "../Portfolio/Portfolio.css";

const Experiences = () => {
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
        <div className="relative timeline-line">
          {experienceData.map((item, index) => (
            <div key={index} className="mb-10 ml-4">
              <div className="absolute w-8 h-8 bg-gray-200 rounded-full -left-4 border border-white flex items-center justify-center">
                <FontAwesomeIcon icon={faBriefcase} className="text-blue-500" />
              </div>
              <div className="flex flex-col">
                <span className="primary-color font-semibold text-3xl">
                  {item.company_name}
                </span>
                <span className="text-gray-500">{item.position}</span>
                <span className="text-gray-400">{item.years}</span>
                <p className="mt-2 text-gray-600">{item.start_date}</p>
                <p className="mt-2 text-gray-600">{item.end_date}</p>
                {/* <p className="mt-2 text-gray-600">{item.start_date}</p> */}
                <p className="mt-2 text-red-600 font-semibold text-lg">
                  Responsibilities:
                </p>
                <ul className="list-none text-gray-300 ml-6">
                  {item.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
                <p className="mt-2 text-red-600 font-semibold text-lg">
                  Achievements:
                </p>
                <ul className="list-none text-gray-300 ml-6">
                  {item.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
