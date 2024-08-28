import Image from "next/image";
import React from "react";
import logo from "@/public/logo.svg";
import Link from "next/link";
import logoLink1 from "@/public/Footer/link1.svg";
import logoLink2 from "@/public/Footer/link2.svg";
import logoLink3 from "@/public/Footer/link3.svg";
import logoTwiter from "@/public/Footer/twiter.svg";
import logoTelegram from "@/public/Footer/telegram.svg";
import eclipt from "@/public/Footer/eclipt.png";
import line from "@/public/Footer/line.png";

const Footer = () => {
  return (
    <footer className="px-4 bg-footer-shadow bg-no-repeat bg-cover bg-center lg:px-20">
      <div className="pt-8 flex justify-between mb-[10px] lg:mb-5">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <nav className="hidden lg:flex">
          <ul className="flex gap-6 items-center">
            <li>
              <Link href={""}>Main</Link>
            </li>
            <li>
              <Link href={""}>Services</Link>
            </li>
            <li>
              <Link href={""}>Portfolio</Link>
            </li>
            <li>
              <Link href={""}>Reviews</Link>
            </li>
            <li>
              <Link href={""}>Blog</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-1">
          <Link href={""}>
            <Image src={logoLink1} alt=""></Image>
          </Link>
          <Link href={""}>
            <Image src={logoLink2} alt=""></Image>
          </Link>
          <Link href={""}>
            <Image src={logoLink3} alt=""></Image>
          </Link>
          <Link href={""}>
            <Image src={logoTwiter} alt=""></Image>
          </Link>
          <Link href={""}>
            <Image src={logoTelegram} alt=""></Image>
          </Link>
        </div>
      </div>
      <Image
        className="mb-[21px] w-full lg:mb-0"
        src={eclipt}
        alt="ECLIPT"
      />
      <Image
        className="pb-2 mx-auto w-[40%] lg:hidden"
        src={line}
        alt="___"
      />
    </footer>
  );
};

export default Footer;
