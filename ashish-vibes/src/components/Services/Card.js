// src/components/Service/Card.js
import React, { useState, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import "../../../src/App.css";
import "./Service.css";

const Card = ({ image, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 25,
        speed: 400,
        scale: 1,
        startX: 15,
        glare: true,
        gyroscope: true,
        "max-glare": 0.5,
      });
    }

    return () => {
      if (cardRef.current && cardRef.current.vanillaTilt) {
        cardRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

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
        className="card-image bg-cover flex justify-center items-center ml-auto mr-auto h-48 object-cover"
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

export default Card;
