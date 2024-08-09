import Navbar from "@/components/navbar";
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
     



      <div className=" overflow-hidden bg-slate-50 h-[400px] mb-[61px]">
        <div className="relative  mt-[40px] max-w-[1152px] mx-auto mb-[98px] ">
          <Navbar />
        </div>
        <div className="flex flex-col space-y-[21px] privay_container max-w-[1001px] justify-center items-center">
          <div
            className={` font-bold text-[32px] leading-[42px] text-center text-blue-950 ${plusJakartaSans.className}`}
          >
            Join our team
          </div>
          <div
            className={` font-normal text-lg leading-8 text-center text-slate-500 capitalize  ${plusJakartaSans.className}`}
          >
            Discover Your Potentials and grow with us
          </div>
        </div>
      </div>


      <div className="flex flex-col items-center">
        <div className="openings-section flex flex-col items-center max-w-[675px] mt-20 w-full">
          <Image
            src="/images/search-illustration.png"
            alt="no-openings"
            width={200}
            height={218}
          />
          <div className="bg-gradient-to-r from-blueChalk to-blueChalk/0 h-1.5 w-full"></div>
        </div>
        <h6 className="font-bold text-3xl mt-7 text-cloudBurst">
          There are no openings yet
        </h6>
        <p className="text-center text-lightSlateGrey mt-4">
          We're not hiring now, but feel free to reach out for future
          opportunities.
        </p>
      </div>
    </div>
  );
};

export default JoinTeam;
