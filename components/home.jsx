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
    <div className="relative container mx-auto overflow-hidden ">
      {/* Navbar */}
      <div className="relative mt-4  lg:mt-10">
        <Navbar />
      </div>
      {/* First Section */}
      <div className="flex flex-col space-y-6 lg:space-y-[152px] mb-8 lg:mb-[148px] lg:mt-10 mt-10">
        <div className="flex flex-col max-w-full lg:max-w-[1100px] mt-6 lg:mt-[152px] mx-auto space-y-4 lg:space-y-[78px]">
          <div className="flex flex-col max-w-full lg:max-w-[891px] mx-auto space-y-4 lg:space-y-8 text-center lg:text-left px-4 ">
            <div className="flex flex-col text-center gap-4 lg:gap-6">
              <h1
                className={`text-[#2D3643] font-bold text-2xl lg:text-5xl leading-8 lg:leading-[64px] ${plusJakartaSans.className}`}
              >
                Unlock PCAOB Compliance with alpa
              </h1>
              <p
                className={`font-normal text-sm lg:text-lg leading-6 lg:leading-8 text-slate-500 ${plusJakartaSans.className}`}
              >
                Experience the future of auditing with compliance solutions made for you.
              </p>
            </div>
            <div className="text-center md:h-[52px] ">
            <button
  className={`w-full max-w-[130px] lg:max-w-[146px] rounded-[39px] border-2 py-2 lg:py-3 px-4 lg:px-5 border-[#1E55A8] font-semibold text-sm lg:text-base leading-6 lg:leading-7 text-[#1E55A8] transition-all duration-300 ease-in-out transform hover:bg-[#054099] hover:text-white ${plusJakartaSans.className}`}
>
  Book a demo
</button>

            </div>
          </div>
          {/* Dashboard image */}
          <div className="px-4">
            <img
              src="/images/Dashboard.png"
              alt="Dashboard"
              className="w-full lg:max-w-[1053px] mx-auto rounded-[17px] shadow-subtleDeepShadow"
            />
          </div>
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
