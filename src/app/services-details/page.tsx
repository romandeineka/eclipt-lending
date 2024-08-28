import React from "react";

import ServisecDescr from "@/src/Components/ServicesDetails/ServisecDescr/ServisecDescr";
import Intro from "@/src/Components/Intro/Intro";
import { SliderAdvantages } from "@/src/Components/ServicesDetails/SliderAdvantages/SliderAdvantages";
import AdvantagesCarts from "@/src/Components/ServicesDetails/AdvantagesCarts/AdvantagesCarts";
import Picture from "@/src/Components/Picture/Picture";
import MobileDevProcess from "@/src/Components/ServicesDetails/MobileDevProcess/MobileDevProcess";
import TechnologyStack from "@/src/Components/ServicesDetails/TechnologyStack/TechnologyStack";
import CustomSolution from "@/src/Components/ServicesDetails/CustomSolution/CustomSolution";
import Management from "@/src/Components/ServicesDetails/Management/Management";
import Works from "@/src/Components/ServicesDetails/Works/Works";
import GetToWork from "@/src/Components/GetToWork/GetToWork";

const Page = () => {
  return (
    <main className="mt-[44px] lg:mt-[180px]">
      <Intro />
      <ServisecDescr />
      <SliderAdvantages />
      <AdvantagesCarts />
      <Picture />
      <MobileDevProcess />
      <TechnologyStack />
      <CustomSolution />
      <Management />
      <Works />
      <GetToWork />
    </main>
  );
};

export default Page;
