import { managementData } from "@/src/managementDate";
import React from "react";
import DropDown from "../../DropDown/DropDown";

const Management = () => {
  return (
    <div className="flex flex-col gap-6 mb-10 lg:px-[360px] lg:mb-[180px]">
      <h2 className="text-h2 leading-6 font-[700] text-center lg:text-left lg:text-[48px] lg:leading-[58px] lg:mb-16">
        Management
      </h2>
      {managementData.map((process, index) => (
        <DropDown key={index} title={process.title} descr={process.descr} />
      ))}
    </div>
  );
};

export default Management;
