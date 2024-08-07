"use client";
import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "./navbar";
import Slider from "./slider"
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Home = () => {
  return (
    <div className="relative container overflow-hidden space-y-14">
      {/* Navbar */}
      <div className="relative mt-10">
        <Navbar />
      </div>
      {/* First Section */}
      <div className="flex flex-col max-w-[1053px] h-auto mt-32 mx-auto mb-24">
        <div className="flex flex-col max-w-[891px] h-auto mx-auto lg:ml-20 space-y-5 lg:text-left">
          <span
            className={`text-zinc-700 font-bold text-5xl lg:text-5xl text-center leading-10 lg:leading-[64px] ${plusJakartaSans.className}`}
          >
            Upload, Edit, and Collaborate on Documents Seamlessly
          </span>
          <span
            className={`font-normal text-lg lg:text-lg leading-8 text-center lg:leading-8 text-slate-500 ${plusJakartaSans.className}`}
          >
            We bring the results while helping you achieve cost and time savings
            without taking on risk or management overhead.
          </span>
          <div className="text-center">
            <button
              className={`font-semibold text-base lg:text-xl border-2 leading-6 lg:leading-[29px] w-[120px] lg:w-[164px] h-[40px] lg:h-[53px] rounded-full bg-blue-800 text-white transition-all duration-300 ease-in-out transform hover:border-blue-800 hover:bg-white hover:text-blue-800 hover:scale-105 ${plusJakartaSans.className}`}
            >
              Book a demo
            </button>
          </div>
        </div>
        {/* Dashboard image */}
        <img
          src="/images/Dashboard.png"
          alt="Dashboard"
          className="h-auto "
        />
      </div>
      {/* Section 2 */}
      <div className="flex flex-col container h-auto">
        <div className="max-w-[969px] mx-auto">
          <div
            className={`font-bold text-5xl leading-[64px] text-center text-zinc-700 ${plusJakartaSans.className}`}
          >
            Smart Solutions for Manage & Documents
          </div>
          <div
            className={`max-w-[733px] mx-auto font-normal text-lg leading-8 text-center text-slate-500 ${plusJakartaSans.className}`}
          >
            Streamline your planning and budgeting with a powerful platform
            designed for efficiency, automation, and effortless collaboration.
          </div>
        </div>
        <div className="flex lg:flex-row w-auto h-[508px] justify-between items-center">
          <div className="max-w-[503px] space-y-5">
            <div
              className={`font-bold text-[32px] leading-[52px] text-blue-950 capitalize ${plusJakartaSans.className}`}
            >
              Lorem Ipsum is simply dummy text of the
            </div>
            <div
              className={`font-normal text-lg leading-8 text-slate-500 ${plusJakartaSans.className}`}
            >
              Take advantage of a consistent budgeting, execution, and reporting
              experience with standardized planning boards and fields aligned
              with SFDC campaign fields and value
            </div>
          </div>
          <div>
            <img
              className="h-auto w-auto"
              src="/images/Dashboard2.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex w-auto h-auto justify-center items-center">
          <img className="h-auto w-auto" src="/images/Arrow.svg" alt="" />
        </div>
        <div className="flex w-auto flex-row justify-between items-center ">
          <div>
            {" "}
            <img src="/images/Dashboard3.png" alt="" />
          </div>
          <div className="max-w-[503px] space-y-5">
            <div
              className={`font-bold text-[32px] leading-[52px] text-blue-950 capitalize ${plusJakartaSans.className}`}
            >
              Lorem Ipsum is simply dummy text of the{" "}
            </div>
            <div
              className={`font-normal text-lg leading-8 text-slate-500 ${plusJakartaSans.className}`}
            >
              Take advantage of a consistent budgeting, execution, and reporting
              experience with standardized planning boards and fields aligned
              with SFDC campaign fields and value
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex container flex-col items-center space-y-10 ">
        
        <div
          className={`font-bold text-[34px] leading-[46px] text-center text-zinc-700 ${plusJakartaSans.className}`}
        >
          We’ve Worked with them,We Trust Each Other
        </div>
        <div>
          <img src="/images/List.png" alt="" />{" "}
        </div>
        <div className="text-center">
            <button
              className={`font-semibold text-base lg:text-xl border-2 leading-6 lg:leading-[29px] w-[120px] lg:w-[164px] h-[40px] lg:h-[53px] rounded-full bg-blue-800 text-white transition-all duration-300 ease-in-out transform hover:border-blue-800 hover:bg-white hover:text-blue-800 hover:scale-105 ${plusJakartaSans.className}`}
            >
              Book a demo
            </button>
          </div>
      </div>
    {/* Section 4 */}
    <div className="flex flex-col container  justify-center items-center">
      <div className="w-[623px]">
      <div className={`font-bold text-[32px] leading-[42px] text-center text-blue-950 capitalize${plusJakartaSans.className}`}>What Our Customer are Saying</div>
    <div className={`font-normal text-lg leading-8 text-center text-slate-500 capitalize ${plusJakartaSans.className}`}>Take advantage of a consistent budgeting, execution, and reporting experience with standardized planning</div>
    </div>
   <div className="flex container ">
    <Slider/>
   </div>
    </div> 
    {/* Section 5  */}
    <div className="flex max-w-[1089px] mx-auto flex-col items-center justify-between ">
      <div className={`font-bold text-[34px] leadindg-[46px] text-center text-zinc-700 ${plusJakartaSans.className}`}>Founders</div>
      <div className="flex flex-col gap-10">
      <div className={`max-w-[910px] font-normal text-lg leading-8 text-center text-slate-500 capitalize ${plusJakartaSans.className}`}>As patients, we've experienced the pain of delayed treatment from slow prior authorization. We're building for a world where doctors quarterback our care, not insurance policies.</div>
      <div className="flex justify-center items-center">
        <img src="/images/Founders.png" alt="" />
      </div>
      </div>
    </div>

    {/* Footer */}
<div className="flex container justify-between"></div>
    </div>
  );
};

export default Home;
