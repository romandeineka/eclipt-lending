import Image from "next/image";
import React from "react";
import img1 from '@/public/OurPortfolio/img1.png';
import img2 from '@/public/OurPortfolio/img2.png';
import img3 from '@/public/OurPortfolio/img3.png';
import Button from "../Button/Button";


type Props = {
  heading: string;
};

const OurPortfolio = ({ heading }: Props) => {
  return (
    <>
      <h2 className="text-center text-h2 mb-9 lg:text-[48px]">{heading}</h2>
      <div className="px-4 flex flex-col gap-[30px] mb-9 lg:px-[140px] lg:gap-20 lg:mb-20">
        <div className="flex gap-4 lg:gap-10">
          <Image className="h-[136px] w-1/2 lg:h-[560px] lg:w-[65%]" src={img1} alt="image" />
          <div className="flex flex-col justify-center gap-4">
            <span className="w-fit text-[10px] lg:text-[16px] leading-[10px] text-text_blue rounded-[90px] border-[1px] border-[#122336] p-2">App design</span>
            <h3 className="text-h3 font-[500] leading-[22px] lg:text-[40px] lg:leading-[48px]">Fastmates –Fasting Mobile App</h3>
          </div>
        </div>
        <div className="flex gap-4 flex-row-reverse lg:gap-10">
          <Image className="h-[136px] w-1/2 lg:h-[560px] lg:w-[65%]" src={img2} alt="image" />
          <div className="flex flex-col w-1/2 lg:justify-center">
            <div className="flex flex-col gap-[4px] lg:flex-row">
              <span className="w-fit text-[10px] lg:text-[16px] leading-[10px] text-text_blue rounded-[90px] border-[1px] border-[#122336] p-2">UI/UX Design</span>
              <span className="w-fit text-[10px] lg:text-[16px] leading-[10px] text-text_blue rounded-[90px] border-[1px] border-[#122336] p-2">Development</span>
            </div>
            <h3 className="text-h3 font-[500] leading-[22px] lg:text-[40px] lg:leading-[48px]">TraidingApp – Design & Development</h3>
          </div>
        </div>
        <div className="flex gap-4 lg:justify-center items-center lg:gap-10">
          <Image className="h-[136px] w-1/2 lg:h-[560px] lg:w-[65%]" src={img3} alt="image" />
          <div className="flex flex-col gap-4 w-1/2">
          <span className="w-fit text-[10px] lg:text-[16px] leading-[10px] text-text_blue rounded-[90px] border-[1px] border-[#122336] p-2">Web design</span>
            <h3 className="text-h3 font-[500] leading-[22px] lg:text-[40px] lg:leading-[48px]">Simply Contact – Customer Support Outsorce Website</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-center"><Button classMix="bg-[#020b18] text-[#3CC5FF] rounded-[#3CC5FF] border-[#3CC5FF] border-[1px] lg:h-[48px]" title='View all works'/></div>
    </>
  );
};

export default OurPortfolio;
