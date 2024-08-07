"use client";
import React, { useState } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div id="navbar" className="relative flex h-12 justify-between z-10">
      <div className="flex items-center ">
        <img className="w-32 h-11" src="/images/logo.svg" alt="Logo" />
      </div>
      <div className="hidden md:flex absolute inset-y-0 right-0 items-center space-x-12 h-full">
        <span
          className={`font-normal text-lg leading-8 text-gray-600 text-center ${openSans.className}`}
        >
          Home
        </span>
        <span
          className={`font-normal text-lg leading-8 text-gray-600 text-center ${openSans.className}`}
        >
          Carrera
        </span>
        <button
          className={`h-full w-[153px] items-center shadow-lg border-2 bg-blue-800 rounded-full font-medium text-lg leading-8 text-center text-white transition-all duration-300 ease-in-out transform hover:border-blue-800 hover:bg-white hover:text-blue-800 hover:scale-100 ${openSans.className}`}
        >
          Contact Us
        </button>
      </div>
      <div className="md:hidden flex items-center ">
        <button onClick={toggleSidebar} className="text-2xl relative ">
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Mobile Sidebar */}
      <div
        className={`top-0 right-0 h-full md:hidden w-60 bg-white shadow-lg transform 
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
            className={`h-12 px-4 items-center border-2 border-blue-700 rounded-lg font-bold text-base text-blue-700 transition duration-300 ease-in-out transform hover:bg-transparent hover:scale-105 ${openSans.className}`}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default navbar;
