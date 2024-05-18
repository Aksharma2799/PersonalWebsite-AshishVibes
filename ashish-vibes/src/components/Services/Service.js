// src/components/Service/Service.js
import React from "react";
import Slider from "react-slick";
import { ServiceCard } from "../../Data";
import "../../../src/App.css";
import "./Service.css";
import Card from "./Card"; // Assuming Card is in the same folder

const Service = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex justify-center p-11">
        <div className="primary-color text-4xl font-bold">Service</div>
        <div className="underLine flex flex-col mt-11"></div>
      </div>
      <div className="flex flex-row justify-center items-center bg-transparent p-2 m-11">
        {ServiceCard.length > 3 ? (
          <Slider {...settings} className="carousel-container">
            {ServiceCard.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </Slider>
        ) : (
          <div className="mobile-800 flex flex-row flex-nowrap gap-5">
            {ServiceCard.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Service;
