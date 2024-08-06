'use client'
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
  weight: ["400", "700"], // Optional: specify the weights you need
  style: ["normal", "italic"], // Optional: specify the styles you need
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
          <div className="flex items-center">
            <img className="w-32 h-11" src="/images/logo.svg" alt="Logo" />
          </div>
          <div className="hidden md:flex absolute inset-y-0 right-0 items-center space-x-12 h-full">
            <span className={`font-semibold text-base text-blue-950 text-center ${openSans.className}`}>
              Home
            </span>
            <span className={`inline-flex items-center font-semibold text-base text-blue-950 text-center gap-1 ${openSans.className}`}>
              Career
              <FaAngleDown />
            </span>
            <button className={`h-12 px-4 items-center border-2 border-blue-700 rounded-lg font-bold text-base text-blue-700 ${openSans.className}`}>
              Contact Us
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleSidebar} className="text-2xl">
              {sidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform 
            ${sidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-20`}
        >
          <div className="flex flex-col p-4 space-y-4">
            <span className={`font-semibold text-base text-blue-950 ${openSans.className}`}>
              Home
            </span>
            <span className={`inline-flex items-center font-semibold text-base text-blue-950 gap-1 ${openSans.className}`}>
              Career
              <FaAngleDown />
            </span>
            <button className={`h-12 px-4 items-center border-2 border-blue-700 rounded-lg font-bold text-base text-blue-700 ${openSans.className}`}>
              Contact Us
            </button>
          </div>
        </div>
        </div>
        {/* Flex container for text and Macbook image */}
        <img className="relative -top-5 left-[770px]" src="/images/Folder.svg" alt="" />
        <div className="flex justify-between items-center relative">
          <div id="text" className="flex flex-col max-w-[606px] h-[370px] ml-20 gap-5">
            <span
              className={`text-black font-bold text-5xl leading-[70px] ${plusJakartaSans.className}`}
            >
              Upload, Edit, and Collaborate on Documents Seamlessly
            </span>
            <span
              className={`font-normal text-lg leading-8 text-slate-500 ${plusJakartaSans.className}`}
            >
              We bring the results while helping you achieve cost and time savings without taking on risk or management overhead.
            </span>
            <div className="mt-auto"> {/* This will push the button to the bottom */}
              <button className={`font-semibold size-4 leading-[29px] w-[164px] h-[53px] rounded-xl bg-blue-800 text-white ${plusJakartaSans.className}`}>
                Book a demo
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img className="relative w-[650px] right-0 h-[400px]" src="/images/Macbook.png" alt="" />
            <img className="absolute mr-[518px]" src="/images/CPR1.png" alt="" />
            <img className="absolute -bottom-20 right-0" src="/images/CPR2.png" alt="" />
          </div>
        </div>
     
    </div>
  );
};

export default Page;
