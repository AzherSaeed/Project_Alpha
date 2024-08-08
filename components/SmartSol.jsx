import React from 'react'
import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const SmartSol = () => {
  return (
    <div className="flex flex-col container h-auto  ">
    <div className='flex flex-col space-y-[100px]'>
      <div className="max-w-[969px] mx-auto space-y-[23px]">
        <div
          className={`font-bold text-3xl lg:text-5xl leading-[44px] lg:leading-[64px] text-center text-zinc-700 ${plusJakartaSans.className}`}
        >
          Smart Solutions for Manage & Documents
        </div>
        <div
          className={`max-w-[773px] mx-auto font-normal text-base lg:text-lg leading-8 text-center text-slate-500 ${plusJakartaSans.className}`}
        >
          Streamline your planning and budgeting with a powerful platform
          designed for efficiency, automation, and effortless collaboration.
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-auto h-auto lg:h-[508px] justify-between items-center space-y-10 lg:space-y-0">
        <div className="max-w-[503px] space-y-[30px]">
          <div
            className={`font-bold text-[24px] lg:text-[32px] leading-[34px] lg:leading-[52px] text-blue-950 capitalize ${plusJakartaSans.className}`}
          >
            Lorem Ipsum is simply dummy text of the
          </div>
          <div
            className={`font-normal text-base lg:text-lg leading-8 text-slate-500 ${plusJakartaSans.className}`}
          >
            Take advantage of a consistent budgeting, execution, and reporting
            experience with standardized planning boards and fields aligned
            with SFDC campaign fields and value
          </div>
        </div>
        <div>
          <img className=" max-w-auto" src="/images/Dashboard2.png" alt="" />
        </div>
      </div>
    </div>
    <div className="flex w-auto h-auto justify-center items-center">
      <img className="max-w-auto" src="/images/Arrow.svg" alt="" />
    </div>
    <div className="flex flex-col lg:flex-row w-auto h-auto justify-between items-center space-y-10 lg:space-y-0 mb-[148px]">
      <div>
        <img src="/images/Dashboard3.png" alt="" className="max-w-auto" />
      </div>
      <div className="max-w-[503px] space-y-[30px]">
        <div
          className={`font-bold text-[24px] lg:text-[32px] leading-[34px] lg:leading-[52px] text-blue-950 capitalize ${plusJakartaSans.className}`}
        >
          Lorem Ipsum is simply dummy text of the
        </div>
        <div
          className={`font-normal text-base lg:text-lg leading-8 text-slate-500 ${plusJakartaSans.className}`}
        >
          Take advantage of a consistent budgeting, execution, and reporting
          experience with standardized planning boards and fields aligned
          with SFDC campaign fields and value
        </div>
      </div>
    </div>
  </div>
    )
}

export default SmartSol