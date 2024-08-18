"use client";
import Navbar from "@/app/components/navbar";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    description: "",
  });
  const [responseMessage, setResponseMessage] = useState(null);

  const [loading, setLoading] = useState(false); // New state for loading

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submission starts
    setResponseMessage("");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage("Email Sent Successfully");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          description: "",
        });
      } else {
        setResponseMessage("Failed to send email.");
      }
    } catch (error) {
      setResponseMessage("Failed to send email.");
    } finally {
      setLoading(false); // Set loading to false after submission completes
    }
  };

  return (
    <>
      <div className="overflow-hidden bg-slate-50 h-[300px] md:h-[629px] ">
        <div className="">
          <Navbar />
        </div>
        <div className="flex flex-col space-y-[15px] md:space-y-0 privay_container max-w-[95%] mt-[30px] md:max-w-[1001px] justify-center items-center mx-auto">
          <div className="font-bold text-[24px] md:text-[32px] leading-[32px] md:leading-[42px] text-center text-blue-950 font-Stoshi">
            Contact Us
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-[24px] md:gap-[34px] rounded-xl max-w-[95%] md:max-w-[1026px] relative bg-white -mt-[100px] md:-mt-[440px] p-[40px] md:p-[60px] shadow-subtleDeepShadow"
        >
          <div className="flex flex-col w-full gap-4 md:flex-row">
            <div className="w-full">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-davyGrey"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full outline-slate-500 placeholder:text-slate-500 placeholder:text-[16px] md:placeholder:text-[18px] px-4 md:px-6 py-2 md:py-3 rounded-xl border border-ghost mt-2 md:mt-3 font-Stoshi"
                placeholder="Julia"
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
                value={formData.lastName}
                onChange={handleChange}
                className="w-full outline-slate-500 placeholder:text-slate-500 font-normal placeholder:text-[16px] md:placeholder:text-[18px] px-4 md:px-6 py-2 md:py-3 rounded-xl border border-ghost mt-2 md:mt-3 font-Stoshi"
                placeholder="William"
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
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-slate-500 placeholder:text-slate-500 placeholder:text-[16px] md:placeholder:text-[18px] px-4 md:px-6 py-2 md:py-3 rounded-xl border border-ghost mt-2 md:mt-3 font-Stoshi"
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
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full outline-slate-500 placeholder:text-slate-500 placeholder:text-[16px] md:placeholder:text-[18px] px-4 md:px-6 py-2 md:py-3 rounded-xl border border-ghost mt-2 md:mt-3 font-Stoshi"
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
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter Details"
              className="mt-2 md:mt-3 w-full outline-slate-500 border-ghost border rounded-xl py-2 md:py-3 px-4 md:px-6 placeholder:text-slate-500 placeholder:text-[16px] md:placeholder:text-[18px] font-Stoshi"
              rows={6}
              required
            />
          </div>
          <p className="text-green-500 text-[16px]">{responseMessage}</p>

          <div className="flex justify-end">
            <button
              type="submit"
              id="sendEmailButton"
              className="text-paleGrey shadow-softElevatedShadow bg-funBlue rounded-[100px] px-4 md:px-5 py-2 text-[16px] md:text-[18px] flex items-center justify-center"
              disabled={loading} // Disable button when loading
            >
              {loading ? (
                <>
                  <svg
                    className="w-5 h-5 mr-2 text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
