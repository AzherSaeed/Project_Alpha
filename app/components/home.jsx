"use client";
import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import Founder from "./Founder";
import Smart_Solution from "./SmartSol";
import Trusted_Clients from "./Trusted_clients";
import { useRouter } from "next/navigation";
import Image from "next/image"
 
const Home = () => {
  const router = useRouter ();
  return (
    <div className="relative px-1 mx-auto overflow-hidden lg:px-0">
      {/* Navbar */}
      <div className="">
        <Navbar />
      </div>
      {/* First Section */}
      <div className="flex flex-col space-y-6 lg:space-y-[152px] mb-8 lg:mb-[120px] ">
        <div className="flex flex-col max-w-full lg:max-w-[1053px] mt-6 lg:mt-[152px] mx-auto space-y-4 lg:space-y-[78px]">
          <div className="flex flex-col max-w-full lg:max-w-[891px] mx-auto space-y-4 lg:space-y-8 text-center lg:text-left px-1 md:px-0">
            <div className="flex flex-col gap-4 text-center lg:gap-6">
              <h1
                className={`text-[#2D3643]  text-2xl lg:text-5xl leading-8 lg:leading-[64px] font-Stoshi `}
              >
                Unlock PCAOB Compliance with ALPA
              </h1>
              <p
                className={`font-normal text-sm lg:text-lg leading-6 lg:leading-8 text-slate-500 font-Stoshi`}
              >
                Experience the future of auditing with compliance solutions made
                for you.
              </p>
            </div>
            <div className="text-center md:h-[52px]">
            <a href="https://calendly.com/founders-alpa" target="_blank" rel="">
            <button 
                    className={`w-full max-w-[130px] lg:max-w-[146px] rounded-[39px] border-2 py-2 lg:py-3 px-4 lg:px-5 border-[#1E55A8] font-semibold text-sm lg:text-base leading-6 lg:leading-7 text-[#1E55A8] transition-all duration-300 ease-in-out transform hover:bg-[#054099] hover:text-white font-Stoshi`}
                  >
                    Book a demo
                  </button>
                  </a>
            </div>
          </div>
                    {/* Dashboard image */}
                    <Image
  src="/images/Dashboard.png"
  alt="Dashboard"
  className="max-w-full mx-auto"
  width={1280}  
  height={720}  
  layout="responsive"
  loading = 'lazy'
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
