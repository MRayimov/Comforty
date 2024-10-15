import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const TopCategory = () => {
  return (
    <div>
      <div className="flex justify-around items-center  h-[90px]">
        <h1 className="text-xl font-bold">Top Categories</h1>
        <div className="flex justify-center items-center">
          <button className="w-[35px] h-[35px] rounded-full bg-teal-800 flex justify-center items-center m-1">
            <GoArrowLeft color="white" />
          </button>
          <button className="w-[35px] h-[35px] rounded-full bg-gray-300 flex justify-center items-center m-1">
            <GoArrowRight color="black" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between ">
        <img
          className="w-[250px] h-[300px] opacity-30"
          src="./images/topcategory/im1.png"
          alt=""
        />
        <img
          className="w-[300px] h-[300px] "
          src="./images/topcategory/im2.png"
          alt=""
        />
        <img
          className="w-[300px] h-[300px] "
          src="./images/topcategory/im3.png"
          alt=""
        />
        <img
          className="w-[300px] h-[300px] "
          src="./images/topcategory/im5.png"
          alt=""
        />
        <img
          className="w-[250px] h-[300px] opacity-30"
          src="./images/topcategory/im4.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default TopCategory;
