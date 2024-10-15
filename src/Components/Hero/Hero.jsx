import React from "react";
import { Carousel } from "@material-tailwind/react";
import { duration } from "@mui/material";
import { FaBox } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { Ri24HoursFill } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
const Hero = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <Carousel
          className="rounded-xl w-[1400px] h-[500px] bg-gray-300 "
          autoplay
          autoplayDelay={5000}
          loop
          transition={{ duration: 2 }}
        >
          <div className="flex justify-evenly items-center h-full relative">
            <div className="flex flex-col justify-center">
              <h1 className="text-sm">WELCOME TO CHAIRY</h1>
              <h1 className="text-5xl font-bold">Best Furniture</h1>
              <h1 className="text-5xl font-bold">Collection For Your</h1>
              <h1 className="text-5xl font-bold">Interior.</h1>
            </div>
            <img
              className="w-[400px] h-[400px] "
              src="./images/hero/productImage.png"
              alt=""
            />
            <div className="absolute top-10 right-40 bg-white w-[90px] h-[90px] rounded-full flex flex-col items-center justify-center ">
              <h1 className="text-orange-900 font-bold text-2xl">54%</h1>
              <h1 className="text-xs">Discount</h1>
            </div>
          </div>
          <div className="flex justify-evenly items-center h-full relative">
            <div className="flex flex-col justify-center">
              <h1 className="text-sm">WELCOME TO CHAIRY</h1>
              <h1 className="text-5xl font-bold">Best Furniture</h1>
              <h1 className="text-5xl font-bold">Collection For Your</h1>
              <h1 className="text-5xl font-bold">Interior.</h1>
            </div>
            <img
              className="w-[400px] h-[400px]"
              src="https://api.cabinet.smart-market.uz/uploads/images/ff808181a4db7261d393c97e"
              alt=""
            />
            <div className="absolute top-10 right-48 bg-white w-[90px] h-[90px] rounded-full flex flex-col items-center justify-center ">
              <h1 className="text-orange-900 font-bold text-2xl">20%</h1>
              <h1 className="text-xs">Discount</h1>
            </div>
          </div>
          <div className="flex justify-evenly items-center h-full relative">
            <div className="flex flex-col justify-center">
              <h1 className="text-sm">WELCOME TO CHAIRY</h1>
              <h1 className="text-5xl font-bold">Best Furniture</h1>
              <h1 className="text-5xl font-bold">Collection For Your</h1>
              <h1 className="text-5xl font-bold">Interior.</h1>
            </div>
            <img
              className="w-[400px] h-[400px]"
              src="https://www.ikcplay.com/sites/default/files/2021-01/Classic_FunChairs_Red_Angled2_0.png"
              alt=""
            />
            <div className="absolute top-12 right-56 bg-white w-[90px] h-[90px] rounded-full flex flex-col items-center justify-center ">
              <h1 className="text-orange-900 font-bold text-2xl">49%</h1>
              <h1 className="text-xs">Discount</h1>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="flex justify-center -translate-y-[50px]">
        <div className="bg-white  w-[1100px] h-[100px] rounded-lg flex justify-evenly items-center shadow-lg">
          <div className="flex justify-center items-center">
            <FaBox className="w-[30px] h-[30px] m-1" />
            <div className="flex justify-center flex-col m-1">
              <h1 className="text-sm font-bold">Discount</h1>
              <h1 className="text-gray-500 text-xs">Every week new sales</h1>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <CiDeliveryTruck className="w-[45px] h-[45px] m-1" />
            <div className="flex justify-center flex-col m-1">
              <h1 className="text-sm font-bold">Free Delivery</h1>
              <h1 className="text-gray-500 text-xs">
                100% Free for all olders
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Ri24HoursFill className="w-[37px] h-[37px] m-1" />
            <div className="flex justify-center flex-col m-1">
              <h1 className="text-sm font-bold">Great Support 24/7</h1>
              <h1 className="text-gray-500 text-xs">
                We care your experiences
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <RiSecurePaymentLine className="w-[37px] h-[37px] m-1" />
            <div className="flex justify-center flex-col m-1">
              <h1 className="text-sm font-bold">Secure Payment</h1>
              <h1 className="text-gray-500 text-xs">
                100% Secure Payment Method
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-between items-center w-[1100px] h-[100px] ">
          <img
            className="w-[65px] h-[65px]"
            src="./images/hero/fon1.png"
            alt=""
          />
          <img
            className="w-[65px] h-[65px]"
            src="./images/hero/fon2.png"
            alt=""
          />
          <img
            className="w-[65px] h-[65px]"
            src="./images/hero/fon3.png"
            alt=""
          />
          <img
            className="w-[65px] h-[65px]"
            src="./images/hero/fon4.png"
            alt=""
          />
          <img
            className="w-[65px] h-[65px]"
            src="./images/hero/fon5.png"
            alt=""
          />
          <img
            className="w-[65px] h-[65px]"
            src="./images/hero/fon6.png"
            alt=""
          />
          <img
            className="w-[65px] h-[65px]"
            src="./images/hero/fon7.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
