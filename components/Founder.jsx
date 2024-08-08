import React from 'react'
import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Founder = () => {
  return (
    <div className="flex max-w-[1089px] mx-auto flex-col items-center justify-between space-y-10">
    <div
      className={`font-bold text-[28px] lg:text-[34px] leading-[38px] lg:leading-[46px] text-center text-zinc-700 ${plusJakartaSans.className}`}
    >
      Founders
    </div>
    <div className="flex flex-col gap-10">
      <div
        className={`max-w-[910px] font-normal text-base lg:text-lg leading-8 text-center text-slate-500 capitalize ${plusJakartaSans.className}`}
      >
        As patients, we've experienced the pain of delayed treatment from
        slow prior authorization. We're building for a world where doctors
        quarterback our care, not insurance policies.
      </div>
      <div className="flex justify-center items-center">
      <div className="relative flex">
<div id="profile1" className="flex flex-row justify-between w-[230px] space-x-3 pr-10">
<img className="flex size-[56px] left-0 top-0" src="/images/PhotoF.png" alt="" />
<div className="space-y-4">
  <div className="w-[145px]">
    <div className={`font-bold text-lg leading-[22px] text-blue-950 ${plusJakartaSans.className}`}>Pricillia Makalew</div>
    <div className={`font-normal text-sm leading-[14px] text-slate-500 ${plusJakartaSans.className}`}>CEO, Cofounder</div>
  </div>
  <div className="flex flex-row">
    <img src="/images/GoogleF.svg" alt="" />
    <img src="/images/AirbnbF.svg" alt="" />
  </div>
</div>
</div>

<div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l border-gray-300"></div>

<div id="profile2" className="flex flex-row justify-between w-[218px] space-x-3 pl-4">
<img className="flex size-[56px] left-0 top-0" src="/images/PhotoF.png" alt="" />
<div className="space-y-4">
  <div className="w-[145px]">
    <div className={`font-bold text-lg leading-[22px] text-blue-950 ${plusJakartaSans.className}`}>Pricillia Makalew</div>
    <div className={`font-normal text-sm leading-[14px] text-slate-500 ${plusJakartaSans.className}`}>CEO, Cofounder</div>
  </div>
  <div className="flex flex-row">
    <img src="/images/GoogleF.svg" alt="" />
    <img src="/images/AirbnbF.svg" alt="" />
  </div>
</div>
</div>
</div>

      </div>
    </div>
  </div>
  )
}

export default Founder