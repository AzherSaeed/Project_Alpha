import Navbar from "@/app/components/navbar";
import Image from "next/image";
import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const JoinTeam = () => {
  return (
    <>
      <div className=" overflow-hidden bg-[#F9FAFF] md:h-[271px] h-[200px]  mb-[20px]">
        <div className="relative mt-[20px] md:mt-[40px] max-w-[1152px] mx-auto mb-[40px] md:mb-[73px] ">
          <Navbar />
        </div>
        <div className="flex flex-col privay_container max-w-[1001px] justify-center items-center">
          <div
            className={` font-bold  text-2xl md:text-[32px] leading-[42px] text-center capitalize text-blue-950 ${plusJakartaSans.className}`}>
            Join our team
          </div>
        </div>
      </div>


      <div className="flex flex-col items-center">
        <div className="openings-section flex flex-col items-center max-w-[675px] w-full">
          <Image
            src="/images/search-illustration.png"
            alt="no-openings"
            width={190}
            height={217}
             className="w-[150px] h-[170px] sm:w-[190px] sm:h-[217px]"
          />
          <div className="bg-gradient-to-r from-blueChalk/0 mt-1 via-blueChalk to-blueChalk/0 h-1.5 w-full"></div>
        </div>
        <div className={`text-center font-bold text-2xl md:text-3xl leading-6 px-2 md:px-0  mt-4 text-[#1E55A8] mb-[5px] ${plusJakartaSans.className}`}>
          There are no openings yet
        </div>
        <div className={`text-center px-2 md:px-0 text-sm  md:text-base  leading-6  text-[#6D7A8D] mt-4${plusJakartaSans.className}`}>
          We're not hiring now, but feel free to reach out for future
          opportunities.
        </div>
      </div>
    </>
  );
};

export default JoinTeam;
