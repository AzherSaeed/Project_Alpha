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
    <div className="relative container overflow-hidden space-y-14 px-4 lg:px-0">
      {/* Navbar */}
      <div className="relative mt-10">
        <Navbar />
      </div>
      {/* First Section */}
      <div className="flex flex-col max-w-[1053px] h-auto mt-[500px] mx-auto mb-24 space-y-10 lg:space-y-5">
        <div className="flex flex-col max-w-[891px] mx-auto  space-y-5 lg:text-left">
          <span
            className={`text-zinc-700 font-bold text-3xl lg:text-5xl text-center leading-10 lg:leading-[64px] ${plusJakartaSans.className}`}
          >
            Upload, Edit, and Collaborate on Documents Seamlessly
          </span>
          <span
            className={`font-normal text-base lg:text-lg leading-8 text-center text-slate-500 ${plusJakartaSans.className}`}
          >
            We bring the results while helping you achieve cost and time savings
            without taking on risk or management overhead.
          </span>
          <div className="text-center">
            <button
              className={`font-semibold text-sm lg:text-xl border-2 leading-6 lg:leading-7 w-[120px] lg:w-[164px] h-[40px] lg:h-[53px] rounded-full bg-blue-800 text-white transition-all duration-300 ease-in-out transform hover:border-blue-800 hover:bg-white hover:text-blue-800 hover:scale-105 ${plusJakartaSans.className}`}
            >
              Book a demo
            </button>
          </div>
        </div>
        {/* Dashboard image */}
        <img
          src="/images/Dashboard.png"
          alt="Dashboard"
          className="max-w-[1053px]"
        />
      </div>
      {/* Smart_Solution */}
      <Smart_Solution />
      {/* Trusted Section*/}
      <Trusted_Clients />
      {/* Founder Section */}
      <Founder />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
