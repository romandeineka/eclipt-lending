import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import leftShadow from '@/public/Services-details/leftShadow.png';
import rightShadow from '@/public/Services-details/right-shadow.png';

const Intro = () => {
  return (
    <>
      <section className="flex flex-col items-center px-4 pb-[96px] lg:pb-[242px]">
        <h4 className="text-btn_color font-[400] mb-3">Our services</h4>
        <h1 className="text-h1 font-[600] mb-2 lg:text-[60px]">
          Mobile development
        </h1>
        <p className="text-paragraph font-[400] text-text_blue text-center leading-[22px] mb-6 lg:mb-10 lg:w-[60%]">
          Having designed dozens of products, we have the experience and
          know-how needed to create complex designs that are well-thought-out
          and highly efficient.
        </p>
        <Button title="Let’s collaborate" />
        {/* <div className="flex justify-between w-full">
        <Image className="w-[50vw] h-[40vh]" src={leftShadow} alt="bg"/>
        <Image className="w-[50vw] h-[40vh]" src={rightShadow} alt="bg"/>
      </div> */}
        <div className="">
          <div></div>
        </div>
      </section>
      
    </>
  );
};

export default Intro;
