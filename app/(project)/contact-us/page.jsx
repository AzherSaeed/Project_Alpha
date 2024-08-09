import Navbar from "@/components/navbar";
import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const ContactUs = () => {
  return (
    <div>
      <div className=" overflow-hidden bg-slate-50 h-[400px] mb-[61px]">
        <div className="relative  mt-[40px] max-w-[1152px] mx-auto mb-[98px] ">
          <Navbar />
        </div>
        <div className="flex flex-col space-y-[21px] privay_container max-w-[1001px] justify-center items-center">
          <div
            className={` font-bold text-[32px] leading-[42px] text-center text-blue-950 ${plusJakartaSans.className}`}
          >
            Contact Us
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <form className="flex flex-col w-full gap-[34px] rounded-xl max-w-[715px] relative z-10 bg-white -mt-[200px] p-[60px] shadow-subtleDeepShadow">
          <div className="flex gap-4 w-full">
            <div className="w-full">
              <label
                htmlFor=""
                className="block text-davyGrey font-medium text-sm"
              >
                Full Name
              </label>
              <input
                type="text"
                className={`w-full placeholder:text-slate-500 placeholder:text-[18px] px-6 py-3 rounded-xl border border-ghost mt-3 ${plusJakartaSans.className}`}
                placeholder="Julia William"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor=""
                className="block text-davyGrey font-medium text-sm"
              >
                Last Name
              </label>
              <input
                type="text"
                className={`w-full placeholder:text-slate-500 font-normal placeholder:text-[18px] px-6 py-3 rounded-xl border border-ghost mt-3 ${plusJakartaSans.className}`}
                placeholder="Julia William"
              />
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="w-full">
              <label
                htmlFor=""
                className="block text-davyGrey font-medium text-sm"
              >
                Email
              </label>
              <input
                type="text"
                className={`w-full placeholder:text-slate-500 placeholder:text-[18px] px-6 py-3 rounded-xl border border-ghost mt-3 ${plusJakartaSans.className}`}
                placeholder="Julia William"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor=""
                className="block text-davyGrey font-medium text-sm"
              >
                Phone Number
              </label>
              <input
                type="text"
                className={`w-full placeholder:text-slate-500 placeholder:text-[18px] px-6 py-3 rounded-xl border border-ghost mt-3 ${plusJakartaSans.className}`}
                placeholder="Julia William"
              />
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor=""
              className="block text-davyGrey font-medium text-sm"
            >
              Description
            </label>
            <textarea
              type="text"
              placeholder="Enter Details"
              className={`mt-3 w-full border-ghost border rounded-xl py-3 px-6 placeholder:text-slate-500 placeholder:text-[18px] ${plusJakartaSans.className}`}
              rows={6}
            />
          </div>
          <div className="flex justify-end">
            <button className="text-paleGrey shadow-softElevatedShadow bg-funBlue rounded-[100px] px-5 py-2 text-[18px]">
              send{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
