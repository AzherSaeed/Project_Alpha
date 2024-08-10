import React from 'react';
import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Founder = () => {
  return (
    <div className="flex max-w-[95%] lg:max-w-[1089px] mx-auto flex-col items-center justify-between space-y-6 lg:space-y-[12px] mb-16 lg:mb-[128px]">
      <div
        className={`font-bold text-2xl lg:text-[34px] leading-8 lg:leading-[46px] text-center text-[#2D3643] ${plusJakartaSans.className}`}
      >
        Founders
      </div>
      <div className="flex flex-col">
        <div
          className={`max-w-full lg:max-w-[910px] font-normal text-sm lg:text-lg mb-8 lg:mb-[55px] leading-6 lg:leading-8 text-center text-[#6D7A8D] capitalize ${plusJakartaSans.className}`}
        >
          As patients, we've experienced the pain of delayed treatment from
          slow prior authorization. We're building for a world where doctors
          quarterback our care, not insurance policies.
        </div>
      </div>
      <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-[74px] justify-center items-center">
        {/* Profile 1 */}
        <div id="profile1" className="flex flex-row justify-between w-full lg:w-[218px] space-x-3">
          <img className="flex size-[56px] left-0 top-0" src="/images/PhotoF.png" alt="" />
          <div className="space-y-2 lg:space-y-4">
            <div className="w-[145px] space-y-1">
              <div className={`font-bold text-base lg:text-lg leading-6 lg:leading-[22px] text-[#183B56] ${plusJakartaSans.className}`}>Alejandro Diez</div>
              <div className={`font-normal text-xs lg:text-sm leading-[14px] text-[#6D7A8D] ${plusJakartaSans.className}`}>Co-founder</div>
            </div>
            <div className="flex flex-row justify-between">
              <img src="/images/GoogleF.svg" alt="" />
              <img src="/images/AirbnbF.svg" alt="" />
            </div>
          </div>
        </div>

        {/* Divider (only visible on larger screens) */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l border-[#DDE6F2]"></div>

        {/* Profile 2 */}
        <div id="profile2" className="flex flex-row justify-between w-full lg:w-[218px] space-x-3">
          <img className="flex size-[56px] left-0 top-0" src="/images/PhotoF.png" alt="" />
          <div className="space-y-2 lg:space-y-4">
            <div className="w-[145px] space-y-1">
              <div className={`w-[152px] font-bold text-base lg:text-lg leading-6 lg:leading-[22px] text-[#183B56] ${plusJakartaSans.className}`}>Patricio Gutierrez</div>
              <div className={`font-normal text-xs lg:text-sm leading-[14px] text-[#6D7A8D] ${plusJakartaSans.className}`}>Co-founder</div>
            </div>
            <div className="flex flex-row justify-between">
              <img src="/images/GoogleF.svg" alt="" />
              <img src="/images/AirbnbF.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
