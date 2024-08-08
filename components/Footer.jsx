import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Footer = () => {
  return (
    <div className="space-y-6 md:space-y-[128px] px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="flex flex-col w-full md:w-[318px] text-center md:text-left mb-6 md:mb-0">
          <img src="/images/Footer_Logo.svg" alt="" className="mx-auto md:mx-0" />
          <div
            className={`font-normal text-sm leading-[21px] text-slate-500 mt-4 ${plusJakartaSans.className}`}
          >
            Lorem ipsum is a placeholder text commonly used to demonstrate.
          </div>
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-[288px] space-y-4 md:space-y-0 md:space-x-6">
            <div
              className={`font-normal text-sm leading-[29px] text-gray-600 ${plusJakartaSans.className}`}
            >
              Terms
            </div>
            <div
              className={`font-normal text-sm leading-[29px] text-gray-600 ${plusJakartaSans.className}`}
            >
              Privacy Policy
            </div>
            <div
              className={`font-normal text-sm leading-[29px] text-gray-600 ${plusJakartaSans.className}`}
            >
              Contact Us
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex font-normal text-sm md:text-lg leading-[29px] justify-center text-slate-500 ${plusJakartaSans.className}`}
      >
        © 2024 ALPA
      </div>
    </div>
  );
};

export default Footer;
