"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="container space-y-6 md:space-y-[128px]">
      <div className="flex flex-col justify-between md:flex-row md:items-start">
        <div className="w-full md:max-w-[318px]">
          <div className="flex flex-col items-center mb-6 md:text-left md:mb-0 md:items-start">
            <Image
              src="/images/Logo2.svg"
              alt="Logo"
              width={32}
              height={11}
              className="w-24 cursor-pointer md:max-w-32 h-11"
            />
          </div>
        </div>

        {/* Centered div */}
        <div id="terms" className="flex justify-start my-auto ">
          <div className="md:flex  md:flex-row grid md:mx-0 mx-auto text-center grid-cols-2 justify-between w-[365px]">
            <div
              onClick={() => router.push("/terms-conditions")}
              className={`font-normal text-sm leading-[29px] cursor-pointer hover:font-bold hover:text-[#169CFF] ${
                pathname === "/terms-conditions"
                  ? "text-[#169CFF] font-semibold"
                  : "text-gray-600 "
              } font-Stoshi`}
            >
              Terms
            </div>
            <div
              onClick={() => router.push("/privacy-policy")}
              className={`font-normal text-sm leading-[29px]  ${
                pathname === "/privacy-policy"
                  ? "text-[#169CFF] font-semibold"
                  : "text-gray-600 "
              } cursor-pointer hover:font-bold hover:text-[#169CFF] font-Stoshi`}
            >
              Privacy Policy
            </div>
            <div
              onClick={() => router.push("/secruity")}
              className={`font-normal text-sm leading-[29px]  ${
                pathname === "/secruity"
                  ? "text-[#169CFF] font-semibold"
                  : "text-gray-600 "
              } cursor-pointer hover:font-bold hover:text-[#169CFF] font-Stoshi`}
            >
              Security
            </div>
            <div
              onClick={() => router.push("/contact-us")}
              className={`font-normal text-sm leading-[29px]  ${
                pathname === "/contact-us"
                  ? "text-[#169CFF] font-semibold"
                  : "text-gray-600 "
              } cursor-pointer hover:font-bold hover:text-[#169CFF] font-Stoshi`}
            >
              Contact Us
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex font-normal text-sm md:text-[15px] leading-[29px] justify-center text-slate-500 font-Stoshi`}
      >
        © 2024 ALPA
      </div>
    </div>
  );
};

export default Footer;
