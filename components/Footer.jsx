import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Footer = () => {
  return (
    <div className="md:space-y-28 space-y-0">
      <div className="flex  justify-between">
        <div className="flex flex-col w-[318px] ">
          <img src="/images/Footer_Logo.svg" alt="" />
          <div
            className={`font-normal text-sm leading-[21px] text-slate-500 ${plusJakartaSans.className}`}
          >
             Lorem ipsum is a placeholder text commonly used to demonstrate.
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-row justify-between w-[288px]">
            <div
              className={` font-normal text-sm leading-[29px] text-gray-600 ${plusJakartaSans.className}`}
            >
              Terms
            </div>
            <div
              className={` font-normal text-sm leading-[29px] text-gray-600 ${plusJakartaSans.className}`}
            >
              Privacy Policy
            </div>
            <div
              className={` font-normal text-sm leading-[29px] text-gray-600 ${plusJakartaSans.className}`}
            >
              Contact US
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex font-normal text-lg leading-[29px] justify-center text-slate-500 ${plusJakartaSans.className}`}
      >
        © 2024 ALPA
      </div>
    </div>
  );
};

export default Footer;
