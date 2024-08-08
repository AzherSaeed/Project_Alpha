"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import { Open_Sans } from "next/font/google";
import React, { useEffect, useState } from 'react';

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const Navbar = () => {
  const [header, setHeader] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const scrollHeader = () => {
    if (window.scrollY >= 500) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);

    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);

  return (
    <div className={` ${header ? "fixed top-0 container bg-white z-30" : "relative container bg-transparent"} transition-all duration-300 ease-in-out`}>
      <div id="navbar" className="relative flex h-12 justify-between items-center z-10 mx-4 md:mx-0 ">
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-32 h-11" src="/images/logo.svg" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 h-full">
          <span className={`font-normal text-lg leading-8 text-gray-600 cursor-pointer ${openSans.className}`}>
            Home
          </span>
          <span className={`font-normal text-lg leading-8 text-gray-600 cursor-pointer ${openSans.className}`}>
            Career
          </span>
          <button
            className={`h-full w-[153px] flex items-center justify-center shadow-lg border-2 bg-blue-800 rounded-full font-medium text-lg leading-8 text-center text-white transition-all duration-300 ease-in-out transform hover:border-blue-800 hover:bg-white hover:text-blue-800 hover:scale-100 ${openSans.className}`}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleSidebar} className="text-2xl">
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full md:hidden w-52 bg-white shadow-lg transform 
            ${sidebarOpen ? "translate-x-0" : "translate-x-full"} 
            transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col p-4 space-y-6">
            <span className={`font-normal text-base text-blue-950 cursor-pointer ${openSans.className}`}>
              Home
            </span>
            <span className={`inline-flex items-center font-normal text-base text-blue-950 gap-1 cursor-pointer ${openSans.className}`}>
              Career
            </span>
            <button
              className={`h-12 px-4 items-center border-2 rounded-full bg-blue-800 font-medium text-base text-white transition-all duration-300 ease-in-out transform hover:border-blue-800 hover:bg-white hover:text-blue-800 ${openSans.className}`}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
