'use client'
import Navbar from "@/app/components/navbar";
import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const entries = Object.fromEntries(formData.entries());

    const emailBody =  `
      Full Name: ${entries.firstName} ${entries.lastName}\n
      Email: ${entries.email}\n
      Phone Number: ${entries.phoneNumber}\n
      Description: ${entries.description}
    `;

    const mailtoLink = `mailto:founders@alpatech.ai?subject=Contact Us Form Submission&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className="overflow-hidden bg-slate-50 h-[300px] md:h-[629px] ">
        <div className="relative mt-[20px]  max-w-[95%] md:max-w-[1152px] mx-auto mb-[62px]">
          <Navbar />
        </div>
        <div className="flex flex-col space-y-[15px] md:space-y-[21px] privay_container max-w-[95%] md:max-w-[1001px] justify-center items-center mx-auto">
          <div
            className={`font-bold   text-[24px] md:text-[32px] leading-[32px] md:leading-[42px] text-center text-blue-950 mb[33px] ${plusJakartaSans.className}`}
          >
            Contact Us
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-[24px] md:gap-[34px] rounded-xl max-w-[95%] md:max-w-[1026px] relative bg-white -mt-[100px] md:-mt-[380px]  p-[40px] md:p-[60px] shadow-subtleDeepShadow">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="w-full">
              <label
                htmlFor="firstName"
                className="block text-davyGrey font-medium text-sm"
              >
                Full Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className={`w-full outline-slate-500   placeholder:text-slate-500 placeholder:text-[16px] md:placeholder:text-[18px] px-4 md:px-6 py-2 md:py-3 rounded-xl border border-ghost mt-2 md:mt-3 ${plusJakartaSans.className}`}
                placeholder="Julia William"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="lastName"
                className="block text-davyGrey font-medium text-sm"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className={`w-full outline-slate-500 placeholder:text-slate-500 font-normal placeholder:text-[16px] md:placeholder:text-[18px] px-4 md:px-6 py-2 md:py-3 rounded-xl border border-ghost mt-2 md:mt-3 ${plusJakartaSans.className}`}
                placeholder="Julia William"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-davyGrey font-medium text-sm"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full outline-slate-500 placeholder:text-slate-500 placeholder:text-[16px] md:placeholder:text-[18px] px-4 md:px-6 py-2 md:py-3 rounded-xl border border-ghost mt-2 md:mt-3 ${plusJakartaSans.className}`}
                placeholder="julia@example.com"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="phoneNumber"
                className="block text-davyGrey font-medium text-sm"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className={`w-full outline-slate-500 placeholder:text-slate-500 placeholder:text-[16px] md:placeholder:text-[18px] px-4 md:px-6 py-2 md:py-3 rounded-xl border border-ghost mt-2 md:mt-3 ${plusJakartaSans.className}`}
                placeholder="+1234567890"
                required
              />
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="description"
              className="block outline-slate-500 text-davyGrey font-medium text-sm"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter Details"
              className={`mt-2 md:mt-3 w-full outline-slate-500 border-ghost border rounded-xl py-2 md:py-3 px-4 md:px-6 placeholder:text-slate-500 placeholder:text-[16px] md:placeholder:text-[18px] ${plusJakartaSans.className}`}
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
