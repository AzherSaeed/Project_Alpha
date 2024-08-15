'use client'
import Navbar from "@/app/components/navbar";
import React from "react";

const ContactUs = () => {
  
  

  return (
    <>
      <div className="overflow-hidden bg-slate-50 h-[300px] md:h-[629px] ">
        <div className="relative mt-[20px]  max-w-[95%] md:max-w-[1152px] mx-auto mb-[62px]">
          <Navbar />
        </div>
        <div className="flex flex-col space-y-[15px] md:space-y-[21px] privay_container max-w-[95%] md:max-w-[1001px] justify-center items-center mx-auto">
          <div
            className={`font-bold   text-[24px] md:text-[32px] leading-[32px] md:leading-[42px] text-center text-blue-950 mb[33px] font-Stoshi`}
          >
            Contact Us
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <form  className="flex flex-col w-full gap-[24px] md:gap-[34px] rounded-xl max-w-[95%] md:max-w-[1026px] relative bg-white -mt-[100px] md:-mt-[380px]  p-[40px] md:p-[60px] shadow-subtleDeepShadow">
          <div className="flex flex-col w-full gap-4 md:flex-row">
            <div className="w-full">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-davyGrey"
              >
                Full Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className={`w-full outline-slate-500   placeholder:text-slate-500 placeholder:text-[16px] md:placeholder:text-[18px] px-4 md:px-6 py-2 md:py-3 rounded-xl border border-ghost mt-2 md:mt-3 font-Stoshi`}
                placeholder="Julia William"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-davyGrey"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className={`w-full outline-slate-500 placeholder:text-slate-500 font-normal placeholder:text-[16px] md:placeholder:text-[18px] px-4 md:px-6 py-2 md:py-3 rounded-xl border border-ghost mt-2 md:mt-3 font-Stoshi`}
                placeholder="Julia William"
                required
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-4 md:flex-row">
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-davyGrey"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full outline-slate-500 placeholder:text-slate-500 placeholder:text-[16px] md:placeholder:text-[18px] px-4 md:px-6 py-2 md:py-3 rounded-xl border border-ghost mt-2 md:mt-3 font-Stoshi`}
                placeholder="julia@example.com"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-davyGrey"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className={`w-full outline-slate-500 placeholder:text-slate-500 placeholder:text-[16px] md:placeholder:text-[18px] px-4 md:px-6 py-2 md:py-3 rounded-xl border border-ghost mt-2 md:mt-3 font-Stoshi`}
                placeholder="+1234567890"
                required
              />
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="description"
              className="block text-sm font-medium outline-slate-500 text-davyGrey"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter Details"
              className={`mt-2 md:mt-3 w-full outline-slate-500 border-ghost border rounded-xl py-2 md:py-3 px-4 md:px-6 placeholder:text-slate-500 placeholder:text-[16px] md:placeholder:text-[18px] font-Stoshi`}
              rows={6}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="text-paleGrey shadow-softElevatedShadow bg-funBlue rounded-[100px] px-4 md:px-5 py-2 text-[16px] md:text-[18px]"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
