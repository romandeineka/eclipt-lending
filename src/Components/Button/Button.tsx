import React from "react";

type Props = {
  title: string;
  classMix?: string
};

const Button = ({ title, classMix }: Props) => {
  return (
    <button className={`text-[#000] text-h4 font-[500] bg-[#3cc5ff] h-10 w-[174px] rounded-[90px] ${classMix}`}>
      {title}
    </button>
  );
};

export default Button;
