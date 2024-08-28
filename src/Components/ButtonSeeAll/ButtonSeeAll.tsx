import Image from "next/image";
import React from "react";
import arrowRight from '@/public/arrowRight.svg';

const ButtonSeeAll = () => {
  return <button className="flex gap-[10px] items-center text-h4 text-text_blue lg:hidden">
    See all
    <Image src={arrowRight} alt="Arrow-right"/>
  </button>;
};

export default ButtonSeeAll;
