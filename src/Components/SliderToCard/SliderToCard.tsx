"use client";
import React from "react";
import Slider from "react-slick";
import Card from "../Card/Card";
import { CustomNextArrow, CustomPrevArrow } from "../CustomArrows/CustomArrows";
import { CardsDate } from "../ServicesDetails/CardsDate";

const SliderToCard = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {CardsDate.map((cardDate) => (
          <div key={cardDate.title}>
            <Card title={cardDate.title} description={cardDate.description} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderToCard;
