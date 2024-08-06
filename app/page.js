"use client";
import React, { useState } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Open_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative max-w-[1440px] h-[900px] bg-slate-50 overflow-hidden">
      <div
        id="circle"
        className="absolute w-[1246px] h-[1246px] bg-white -top-[168px] -left-[233px] rounded-full"
      ></div>
      <div id="content" className="relative m-10">
        <div id="navbar" className="relative flex h-12 justify-between z-10">
          <div className="flex items-center ">
            <img className="w-32 h-11" src="/images/logo.svg" alt="Logo" />
          </div>
          <div className="hidden md:flex absolute inset-y-0 right-0 items-center space-x-12 h-full">
            <span
              className={`font-semibold text-base text-blue-950 text-center ${openSans.className}`}
            >
              Home
            </span>
            <span
              className={`inline-flex  items-center font-semibold text-base text-blue-950 text-center gap-1  ${openSans.className}`}
            >
              Career
              <FaAngleDown />
            </span>
            <button
              className={`h-12 px-4 items-center border-2 border-blue-700 rounded-lg font-bold text-base text-blue-700 transition-all duration-300 ease-in-out transform hover:bg-blue-700 hover:text-white hover:scale-105 ${openSans.className}`}
            >
              Contact Us
            </button>
          </div>
          <div className="md:hidden flex items-center ">
            <button onClick={toggleSidebar} className="text-2xl relative ">
              {sidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {/* Mobile Sidebar */}
        <div
          className={` top-0 right-0 h-full md:hidden w-60 bg-white  shadow-lg transform 
            ${sidebarOpen ? "translate-x-0" : "translate-x-96"} 
            transition-transform duration-300 ease-in-out `}
        >
          <div className="flex flex-col p-4 space-y-4">
            <span
              className={`font-semibold text-base text-blue-950 ${openSans.className}`}
            >
              Home
            </span>
            <span
              className={`inline-flex items-center font-semibold text-base text-blue-950 gap-1 ${openSans.className}`}
            >
              Career
              <FaAngleDown />
            </span>
            <button
              className={`h-12 px-4 items-center border-2 border-blue-700 rounded-lg font-bold text-base text-blue-700 transition duration-300 ease-in-out transform hover:bg-transparent  hover:scale-105 ${openSans.className}`}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      {/* Flex container for text and Macbook image */}
      <img
        className="relative -top-5 left-[770px] hidden lg:block"
        src="/images/Folder.svg"
        alt=""
      />
      <div className="flex flex-col lg:flex-row justify-between items-center relative">
        <div
          id="text"
          className="flex flex-col max-w-[606px] h-auto lg:h-[370px] ml-5 lg:ml-20 gap-5 text-center lg:text-left"
        >
          <span
            className={`text-black font-bold text-3xl lg:text-5xl leading-10 lg:leading-[70px] ${plusJakartaSans.className}`}
          >
            Upload, Edit, and Collaborate on Documents Seamlessly
          </span>
          <span
            className={`font-normal text-base lg:text-lg leading-6 lg:leading-8 text-slate-500 ${plusJakartaSans.className}`}
          >
            We bring the results while helping you achieve cost and time savings
            without taking on risk or management overhead.
          </span>
          <div className="mt-auto">
            <button
              className={`font-semibold text-base lg:text-xl leading-6 lg:leading-[29px] w-[120px] lg:w-[164px] h-[40px] lg:h-[53px] rounded-xl bg-blue-800 text-white transition   duration-300 ease-in-out transform hover:scale-105 ${plusJakartaSans.className}`}
            >
              Book a demo
            </button>
          </div>
        </div>
        <div className="relative flex justify-center items-center mt-10 lg:mt-0">
          <img
            className="relative w-80 lg:w-[650px] h-auto lg:h-[400px] z-10"
            src="/images/Macbook.png"
            alt=""
          />
          <img
            className="absolute -bottom-10 lg:-bottom-20 right-20 lg:right-72 z-0"
            src="/images/dott.png"
            alt=""
          />
          <img
            className="absolute z-20 mr-32 lg:mr-[518px]"
            src="/images/CPR1.png"
            alt=""
          />
          <img
            className="absolute -bottom-10 lg:-bottom-20 right-0 z-20"
            src="/images/CPR2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
