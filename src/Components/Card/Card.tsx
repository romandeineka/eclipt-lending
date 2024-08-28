import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
}

const Card = ({ title, description}: Props) => {
  return (
    <div className="bg-card py-4 px-6 flex flex-col rounded-[8px]">
      <div className="bg-[#060218] rounded-full h-[50px] w-[50px] mb-6"></div>
      <h3 className="text-h3 text-[#F1F1F1] font-[500] mb-4">{title}</h3>
      <p className="text-paragraph text-text_blue font-[400]">
        {description}
      </p>
    </div>
  );
};

export default Card;
