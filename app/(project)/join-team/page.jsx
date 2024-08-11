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
    <div className="">
     



      <div className=" overflow-hidden bg-[#F9FAFF] h-[271px]  mb-[73px]">
        <div className="relative  mt-[40px] max-w-[1152px] mx-auto mb-[73px] ">
          <Navbar />
        </div>
        <div className="flex flex-col !mt-[40px] privay_container max-w-[1001px] justify-center items-center">
          <div
            className={` font-bold text-[32px] leading-[42px] text-center text-blue-950 ${plusJakartaSans.className}`}
          >
            Join our team
          </div>
        </div>
      </div>


      <div className="flex flex-col items-center">
        <div className="openings-section flex flex-col items-center max-w-[675px] w-full">
          <Image
            src="/images/search-illustration.png"
            alt="no-openings"
            width={201}
            height={228}
          />
          <div className="bg-gradient-to-r from-blueChalk/0 mt-1 via-blueChalk to-blueChalk/0 h-1.5 w-full"></div>
        </div>
        <div className={` font-bold text-3xl leading-8  mt-7 text-[#1E55A8] mb-[17px] ${plusJakartaSans.className}`}>
          There are no openings yet
        </div>
        <div className={`text-center text-base leading-8 text-[#6D7A8D] mt-4${plusJakartaSans.className}`}>
          We're not hiring now, but feel free to reach out for future
          opportunities.
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;
