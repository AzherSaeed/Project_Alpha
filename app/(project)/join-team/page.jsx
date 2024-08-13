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
    <div >
      <div className="overflow-hidden bg-[#F9FAFF] h-auto sm:h-[271px] mb-[40px] sm:mb-[73px]">
        <div className="relative mt-[20px] sm:mt-[40px] max-w-[95%] sm:max-w-[1152px] mx-auto">
          <Navbar />
        </div>
        <div className="flex flex-col mt-[20px] sm:mt-[40px] md:px-4   sm:px-0 max-w-full sm:max-w-[1001px] justify-center items-center">
          <div
            className={`font-bold text-[24px] sm:text-[32px] leading-[32px] sm:leading-[42px] text-center text-blue-950 ${plusJakartaSans.className}`}
          >
            Join our team
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="openings-section flex flex-col items-center max-w-[90%] sm:max-w-[675px] w-full">
          <Image
            src="/images/search-illustration.png"
            alt="no-openings"
            width={201}
            height={228}
            className="w-[150px] sm:w-[201px] h-[170px] sm:h-[228px]"
          />
          <div className="bg-gradient-to-r from-blueChalk/0 mt-1 via-blueChalk to-blueChalk/0 h-1.5 w-full"></div>
        </div>
        <div
          className={`font-bold text-2xl sm:text-3xl leading-7 sm:leading-8 mt-5 sm:mt-7 text-[#1E55A8] mb-[12px] sm:mb-[17px] ${plusJakartaSans.className}`}
        >
          There are no openings yet
        </div>
        <div
          className={`text-center mx-1 text-base leading-6 sm:leading-8 text-[#6D7A8D] mt-2 sm:mt-4 ${plusJakartaSans.className}`}
        >
          We're not hiring now, but feel free to reach out for future
          opportunities.
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;
