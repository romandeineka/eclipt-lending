import Image from "next/image";
import React from "react";
import imgSlider from "@/public/Services-details/imgSlider.svg";

const CardSlider = () => {
  return (
    <div className="bg-card flex items-start gap-4 p-4 lg:flex-col">
      <Image src={imgSlider} alt="img" />
      <div className="flex flex-col gap-4 lg:gap[10px]">
        <h3 className="text-h3 font-[500] leading-[22px]">Increase 20-50% conversions</h3>
        <p className="text-paragraph text-text_blue font-[600] leading-5">Improving UX/UI can increase website conversions by 20-50%.</p>
      </div>
    </div>
  );
};

export default CardSlider;
