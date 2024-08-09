"use client";
import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRouter } from "next/navigation";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Footer = () => {
  const router = useRouter();
  return (
    <div className="space-y-6 md:space-y-[128px] px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-between md:items-start">
        <div className="w-full md:max-w-[318px]">
          <div className="flex flex-col md:text-left mb-6 md:mb-0">
            <img
              src="/images/Logo2.svg"
              alt=""
              className="max-w-[116px]" // Adjust the size as needed
            />
          </div>
          <div
            className={`font-normal text-sm leading-[21px] text-left text-slate-500 mt-4 ${plusJakartaSans.className}`}
          >
            Lorem ipsum is a placeholder text commonly used to demonstrate.
          </div>
        </div>

        {/* Centered div */}
        <div id="terms" className="flex justify-center my-auto">
          <div className="flex flex-row justify-between w-[365px]">
            <div
            onClick={() => router.push('/terms-conditions')}
              className={`font-normal text-sm leading-[29px] text-gray-600  cursor-pointer ${plusJakartaSans.className}`}
            >
              Terms
            </div>
            <div
              onClick={() => router.push('/privacy-policy')}
              className={`font-normal text-sm leading-[29px] text-gray-600 cursor-pointer ${plusJakartaSans.className}`}
            >
              Privacy Policy
            </div>
            <div
              onClick={() => router.push('/secruity')}
              className={`font-normal text-sm leading-[29px] text-gray-600 cursor-pointer ${plusJakartaSans.className}`}
            >
              Secruity
            </div>
            <div
             onClick={() => router.push('/contact-us')}
              className={`font-normal text-sm leading-[29px] text-gray-600 cursor-pointer ${plusJakartaSans.className}`}
            >
              Contact Us
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex font-normal text-sm md:text-[15px] leading-[29px] justify-center text-slate-500 ${plusJakartaSans.className}`}
      >
        © 2024 ALPA
      </div>
    </div>
  );
};

export default Footer;
