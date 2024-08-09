import React from 'react'
import Slider from "./slider";
import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const Trusted_clients = () => {
  return (
    <div className='space-y-[200px]'>
        <div className="flex container flex-col items-center space-y-[55px]">
    
    <div
      className={`font-bold text-[28px] lg:text-[34px] leading-[38px] lg:leading-[46px] text-center text-zinc-700 ${plusJakartaSans.className}`}
    >
      We’ve Worked with them, We Trust Each Other
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
    <div className="text-center">
      <button
                className={`font-semibold text-xs py-[12px] px-[22px] lg:text-base border-2 leading-5 lg:leading-7 w-[100px] lg:w-[164px] h-[36px] lg:h-[52px] rounded-full custom-button-bg text-white transition-all duration-300 ease-in-out transform hover:custom-btn-hvr-clr hover:text-white hover:scale-105 ${plusJakartaSans.className}`}
                >
        Book a demo
      </button>
    </div>
  </div>
  <div className="flex flex-col container justify-center items-center  space-y-[61px]">
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
  </div>
  </div>
  )
}

export default Trusted_clients