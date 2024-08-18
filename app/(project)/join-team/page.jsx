import Navbar from "@/app/components/navbar";
import Image from "next/image";
import React from "react";

const JoinTeam = () => {
  return (
    <>
      <div className=" overflow-hidden bg-[#F9FAFF] md:h-[200px] h-[200px]    md:px-0 px-0">
        <div className="">
          <Navbar />
        </div>
        <div className="flex flex-col privay_container max-w-[1001px] justify-center mt-[30px] items-center">
          <div
            className={` font-bold  text-2xl md:text-[32px] leading-[42px] text-center capitalize text-blue-950 font-Stoshi`}>
            Join our team
          </div>
        </div>
      </div>


      <div className="flex flex-col items-center mt-[10px]">
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
        <div className={`text-center font-bold text-xl md:text-[31px] leading-8 px-2 md:px-0   mt-4 text-[#1E55A8] mb-[5px] font-Stoshi`}>
          There are no openings yet
        </div>
        <div className={`text-center px-2 md:px-0 text-sm  md:text-base  leading-6  text-[#6D7A8D] mt-2 font-Stoshi`}>
          We're not hiring now, but feel free to reach out for future
          opportunities.
        </div>
      </div>
    </>
  );
};

export default JoinTeam;
