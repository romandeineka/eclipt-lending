import React from "react";
import CardSlider from "../CardSlider/CardSlider";

const AdvantagesCarts = () => {
  return (
    <div className="hidden px-20 lg:grid lg:grid-cols-3 gap-[10px] lg:mb-[180px]">
      <CardSlider />
      <CardSlider />
      <CardSlider />
    </div>
  );
};

export default AdvantagesCarts;
