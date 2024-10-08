import React from "react";
import { Carousel } from "@material-tailwind/react";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <Carousel className="rounded-xl w-[1400px] h-[500px] bg-gray-200 ">
          <div className="flex justify-end items-center h-full">
            <img
              className="w-[400px] h-[400px]"
              src="./images/hero/productImage.png"
              alt=""
            />
          </div>
          <div className="flex justify-end items-center h-full">
            <img
              className="w-[400px] h-[400px]"
              src="https://api.cabinet.smart-market.uz/uploads/images/ff808181a4db7261d393c97e"
              alt=""
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
