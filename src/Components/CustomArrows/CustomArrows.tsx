import { CustomArrowProps } from "react-slick";
import Image from "next/image";
import prevArrowImg from "@/public/prevArrow.svg";
import nextArrowImg from "@/public/nextArrow.svg";

export const CustomPrevArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        zIndex: 10,
        position: "absolute",
        top: "50%",
        left: '-25px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <Image
        src={prevArrowImg}
        alt="Prev"
      />
    </div>
  );
};

export const CustomNextArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
    style={{
      ...style,
      zIndex: 10,
      position: "absolute",
      top: "50%",
      right: '-25px',
      cursor: 'pointer',
    }}
      onClick={onClick}
    >
      <Image src={nextArrowImg} alt="Next" />
    </div>
  );
};
