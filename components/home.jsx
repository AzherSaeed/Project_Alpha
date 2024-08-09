"use client";
import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import Founder from "./Founder";
import Smart_Solution from "./SmartSol";
import Trusted_Clients from "./Trusted_clients";
import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Home = () => {
  return (
    <div className="relative container mx-auto px-4 overflow-hidden">
      {/* Navbar */}
      <div className="relative mt-4 lg:mt-10">
        <Navbar />
      </div>
      {/* First Section */}
      <div className="flex flex-col space-y-10 lg:space-y-[152px] mb-12 lg:mb-36">
        <div className="flex flex-col max-w-full lg:max-w-[1100px] mt-8 lg:mt-[152px] mx-auto space-y-6 lg:space-y-[78px]">
          <div className="flex flex-col max-w-full lg:max-w-[891px] mx-auto space-y-4 lg:space-y-8 text-center lg:text-left">
            <div className="flex flex-col text-center gap-4 lg:gap-6">
              <span
                className={`text-zinc-700 font-bold text-2xl lg:text-5xl leading-8 lg:leading-[64px] ${plusJakartaSans.className}`}
              >
                Upload, Edit, and Collaborate on Documents Seamlessly
              </span>
              <span
                className={`font-normal text-sm lg:text-lg leading-6 lg:leading-8 text-slate-500 ${plusJakartaSans.className}`}
              >
                We bring the results while helping you achieve cost and time
                savings without taking on risk or management overhead.
              </span>
            </div>
            <div className="text-center h-[52px]">
              <button
                className={`font-semibold border-0 text-xs py-3 px-5 lg:text-base lg:py-[12px] lg:px-[22px] w-[100px] lg:w-[164px] h-[36px] lg:h-full rounded-full custom-button-bg text-white  hover:custom-btn-hvr-clr hover:text-white ${plusJakartaSans.className}`}
              >
                Book a demo
              </button>
            </div>
          </div>
          {/* Dashboard image */}
          <img
            src="/images/Dashboard.png"
            alt="Dashboard"
            className="w-full lg:max-w-[1053px] mx-auto"
          />
        </div>
      </div>
      {/* Smart_Solution */}
      <Smart_Solution />
      {/* Trusted Section */}
      <Trusted_Clients />
      {/* Founder Section */}
      <Founder />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
