"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import CardSlider from "../CardSlider/CardSlider";
import "./style.css";

const settings: Settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1.05,
  slidesToScroll: 1,
  
};

export const SliderAdvantages = () => {
  return (
    <div className="slider-container pl-[36px] mb-10 lg:hidden">
      <Slider {...settings}>
        <CardSlider />

        <CardSlider />

        <CardSlider />
      </Slider>
    </div>
  );
};
