import React from "react";
import DropDownList from "../DropDownList/DropDownList";
import { mobileDevProcess } from "../mobileDevProcessData";

const MobileDevProcess = () => {
  return (
    <div className="flex flex-col gap-6 mb-10 lg:px-[360px] lg:mb-[180px]">
      <h2 className="text-h2 leading-6 font-[700] text-center lg:text-left lg:text-[48px] lg:leading-[58px] lg:mb-16">
        Our mobile development process
      </h2>
      {mobileDevProcess.map((process, index) => (
        <DropDownList key={index} title={process.title} items={process.items} />
      ))}
    </div>
  );
};

export default MobileDevProcess;
