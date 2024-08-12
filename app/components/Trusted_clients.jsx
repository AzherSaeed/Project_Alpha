import React from 'react'
import Slider from "./slider";
import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const Trusted_clients = () => {
  return (
    <div className='space-y-[200px] mt-[120px] mb-[128px]'>
        <div className="flex container flex-col items-center space-y-[55px] ">
    <div className='space-y-[21px]'>
    <div
      className={`font-bold text-[28px] lg:text-[32px] leading-[38px] lg:leading-[42px] text-center text-[#1B2559] capitalize ${plusJakartaSans.className}`}
    >
Compliance made simple
    </div>
    <div className={`font-normal text-lg leading-8 text-center text-[#6D7A8D] capitalize ${plusJakartaSans.className}`}>Streamline audit processes with solutions embraced by top firms.</div>
    </div>
    <div className="flex md:flex-row space-y-4 md:space-y-0 flex-col ">
      <div className="logo-container">
        <img src="/images/Slack_C.svg" alt="Slack Logo" class="logo" />
      </div>
      <div className="logo-container">
        <img
          src="/images/Netflix_C.svg"
          alt="Netflix Logo" 
          class="logo"
        />
      </div>
      <div class="logo-container">
        <img src="/images/Fitbit_C.svg" alt="Fitbit Logo" class="logo" />
      </div>
      <div className="logo-container">
        <img src="/images/Google_C.svg" alt="Google Logo" class="logo"/>
      </div>
      <div className="logo-container">
        <img src="/images/Airbnb_C.svg" alt="Airbnb Logo" class="logo" />
      </div>
    </div>
    
  </div>
  {/* <div className="flex flex-col container justify-center items-center  space-y-[61px]">
    <div className="w-full lg:w-[623px]">
      <div
        className={`font-bold text-[28px] lg:text-[32px] mb-[21px] leading-[38px] lg:leading-[42px] text-center text-blue-950 capitalize ${plusJakartaSans.className}`}
      >
        What Our Customers are Saying
      </div>
      <div
        className={`font-normal text-base lg:text-lg leading-8 text-center text-slate-500 capitalize mx-1 md:mx-0 ${plusJakartaSans.className}`}
      >
        Take advantage of a consistent budgeting, execution, and reporting
        experience with standardized planning
      </div>
    </div>
    <div className="flex container ">
      <Slider />
    </div>
  </div> */}
  </div>
  )
}

export default Trusted_clients