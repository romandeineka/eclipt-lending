import React from "react";
import Button from "../Button/Button";

const GetToWork = () => {
  return (
    <div className="px-4 flex flex-col items-center gap-6 mb-10 lg:mb-[180px]">
      <h2 className="text-h2 font-[700]">Let’s get to work</h2>
      <p className="text-center text-paragraph text-text_blue">
        Talk to our amazing community or team to learn more about how to build
        your product.
      </p>
      <Button title="Let’s collaborate"/>
    </div>
  );
};

export default GetToWork;
