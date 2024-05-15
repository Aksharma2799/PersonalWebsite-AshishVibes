import React, { useState, useEffect, useRef } from "react";
import { ServiceCard } from "../../Data";
import "./Service.css";

const Service = () => {
  return (
    <>
      <div className="flex justify-center p-11">
        <div className="primary-color text-4xl font-bold">Service</div>
        <div className="underLine flex flex-col mt-11"></div>
      </div>
      <div className="flex justify-center items-center bg-transparent p-2 m-11">
        <div className="flex flex-row flex-nowrap gap-5">
          {ServiceCard.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const Card = ({ image, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const getShortDescription = (desc) => {
    if (desc.length <= 80) return desc;
    return `${desc.substring(0, 80)}...`;
  };

  return (
    <div
      ref={cardRef}
      className="card relative bg-transparent rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
    >
      <img
        src={image}
        alt={title}
        className="card-image bg-cover flex justify-center items-center h-48 object-cover"
      />

      <div className="card-content text-white p-2">
        <h3 className="card-title flex justify-center text-2xl font-bold mb-2">
          {title}
        </h3>
        <p className="card-description text-white-600">
          {isExpanded ? description : getShortDescription(description)}
          <button className="text-blue-500 ml-2" onClick={toggleExpand}>
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Service;
