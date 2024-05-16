import React from "react";
import { educationData } from "../../Data"; // Adjust the path as needed

const Education = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-extrabold text-center my-6">Education</h2>
      <div className="relative border-l-2 border-gray-200">
        {educationData.map((item, index) => (
          <div key={index} className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
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
  );
};

export default Education;
