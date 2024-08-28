import Image from "next/image";
import React from "react";
import logo from "@/public/logo.svg";
import menu from "@/public/Header/menu.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-[52px] flex justify-between items-center px-4 pt-3 lg:pt-[30px] lg:px-20">
      <div className="flex gap-[15px] items-center font-[600]">
        <Image src={logo} alt="logo" />
        <h4 className="hidden lg:block ">Eclipt</h4>
      </div>
      <nav className="hidden lg:flex lg:border lg:border-[#242424] lg:rounded-[90px] lg:py-4 lg:px-6">
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
      <div className="flex items-center gap-3">
        <button className="h-8 py-2 px-6 text-h4 leading-4 font-[500] text-btn_color rounded-[90px] border border-[#3CC5FF]">
          Book a call
        </button>
        <button className="lg:hidden">
          <Image src={menu} alt="menu" />
        </button>
      </div>
    </header>
  );
};

export default Header;
