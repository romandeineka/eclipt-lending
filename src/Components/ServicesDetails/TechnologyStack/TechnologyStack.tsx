import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo1 from "@/public/Services-details/logo1.svg";
import logo2 from "@/public/Services-details/logo2.svg";
import logo3 from "@/public/Services-details/logo3.svg";
import logo4 from "@/public/Services-details/logo4.svg";

const TechnologyStack = () => {
  return (
    <section className="bg-card mb-10 lg:mb-[180px]">
    <h2 className="text-h2 font-[700] text-center pt-4 mb-6 lg:pt-[100px] lg:mb-20 lg:text-[48px]">
      Technology stack
    </h2>
    <div className="px-4 grid grid-cols-2 gap-2 pb-9 lg:px-20 lg:pb-[100px] lg:grid-cols-4 lg:gap-[20px]">
      <Link
        className="flex items-center justify-center border border-[#1B172A] h-[128px]"
        href={""}
      >
        <Image className="object-contain" src={logo1} alt="logo" />
      </Link>
      <Link
        className="flex items-center justify-center border border-[#1B172A] h-[128px]"
        href={""}
      >
        <Image className="object-contain" src={logo2} alt="logo" />
      </Link>
      <Link
        className="flex items-center justify-center border border-[#1B172A] h-[128px]"
        href={""}
      >
        <Image className="object-contain" src={logo3} alt="logo" />
      </Link>
      <Link
        className="flex items-center justify-center border border-[#1B172A] h-[128px]"
        href={""}
      >
        <Image className="object-contain" src={logo4} alt="logo" />
      </Link>
    </div>
  </section>
  );
};

export default TechnologyStack;
