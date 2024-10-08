import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { CgMenu } from "react-icons/cg";

const Navbar = () => {
  return (
    <div>
      <div className="w-[100%] h-[30px] bg-[#020617] flex justify-around items-center">
        <div className="flex justify-center items-center">
          <FaCheck size="12" color="white" />
          <h1 className="text-white text-xs m-1">
            Free Shipping On All Orders Over $50
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center m-3 ">
            <h1 className="text-white text-xs m-1">Eng</h1>
            <FaChevronDown size="10" color="white" />
          </div>
          <h1 className="text-white text-xs m-3">Faqs</h1>
          <div className="flex justify-center items-center m-3 ">
            <FaExclamation size="12" color="white" />
            <h1 className="text-white text-xs m-1">Need Help</h1>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[60px] bg-gray-300 flex justify-evenly items-center">
        <div className="flex justify-center items-center">
          <img
            className="w-[30px] h-[30px] m-1"
            src="https://cdn-icons-png.flaticon.com/512/9903/9903988.png"
            alt=""
          />
          <h1 className="font-bold text-xl m-1 text-gray-900">Comforty</h1>
        </div>
        <div className="flex justify-between items-center bg-white w-[330px] h-[33px]">
          <h1 className="text-sm text-gray-500 m-2">Search here...</h1>
          <CiSearch className="m-2" size="23" color="black" />
        </div>
        <div className="flex justify-center items-center">
          <button className="flex justify-center items-center w-[110px] h-[33px] bg-white rounded m-2">
            <FiShoppingCart className="m-1" size="18" color="black" />
            <h1 className="text-black text-sm m-1">Cart</h1>
            <div className="flex justify-center items-center w-[17px] h-[17px] bg-teal-800 rounded-xl m-1">
              <h1 className="text-white text-xs">2</h1>
            </div>
          </button>
          <button className="flex justify-center items-center bg-white rounded w-[33px] h-[33px] m-2">
            <CiHeart size="20" />
          </button>
          <button className="flex justify-center items-center bg-white rounded w-[35px] h-[33px] m-2">
            <VscAccount size="20" />
          </button>
        </div>
      </div>
      <div className="w-[100%] h-[50px] bg-gwhite flex justify-around items-center">
        <div className="flex justify-center items-center">
          <button className="flex justify-center items-center w-[130px] h-[32px] rounded border-2 border-gray-200 m-3">
            <CgMenu className="m-1" size="20" />
            <h1 className="text-xs font -bold m-1">All Categories</h1>
          </button>
          <h1 className="text-xs font-bold text-teal-500 m-3">Home</h1>
          <h1 className="text-xs font-bold text-gray-600 m-3">Shop</h1>
          <h1 className="text-xs font-bold text-gray-600 m-3">Product</h1>
          <h1 className="text-xs font-bold text-gray-600 m-3">Pages</h1>
          <h1 className="text-xs font-bold text-gray-600 m-3">About</h1>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-xs font-bold text-gray-600 m-1 ">Contact:</h1>
          <h1 className="text-xs font-bold text-black m-1">(808) 555-111</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
