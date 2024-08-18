"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useEffect, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [header, setHeader] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null); // Ref to track sidebar element

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const scrollHeader = () => {
    if (window.scrollY >= 500) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false); // Close sidebar if click is outside
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={` ${
        header
          ? "fixed w-full mx-auto bg-white z-30"
          : " relative  bg-transparent "
      } py-3 lg:px-0 px-2 transition-all duration-300 ease-in-out`}
    >
      <div
        id="navbar"
        className="relative flex h-[52px]  max-w-[1152px] justify-between items-center z-10   lg:mx-auto "
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="w-24 cursor-pointer md:max-w-32 h-11"
            onClick={() => router.push("/")}
            src="/images/Logo2.svg"
            alt="Logo"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-between max-w-[440px] space-x-10  h-full ">
          <span
            onClick={() => router.push("/")}
            className={`font-normal text-lg leading-8 hover:text-[#169CFF] ${
              pathname === "/"
                ? "text-[#169CFF] font-semibold"
                : "text-gray-600 "
            } text-center cursor-pointer font-Stoshi`}
          >
            Home
          </span>
          <span
            onClick={() => router.push("/join-team")}
            className={`font-normal text-lg leading-8 ${
              pathname === "/join-team"
                ? "text-[#169CFF] font-semibold"
                : "text-gray-600 "
            } text-center cursor-pointer hover:text-[#169CFF] font-Stoshi`}
          >
            Careers
          </span>
          <span
            onClick={() => router.push("/contact-us")}
            className={`font-normal text-lg leading-8 ${
              pathname === "/contact-us"
                ? "text-[#169CFF] font-semibold"
                : "text-gray-600 "
            } text-center cursor-pointer hover:text-[#169CFF] font-Stoshi`}
          >
            Contact Us
          </span>
          <button
            onClick={() => router.push("")}
            className={`h-full flex items-center px-[22px] custom-button-bg rounded-full font-semibold text-base leading-7 text-white transition-all duration-300 transform  hover:bg-[#054099] hover:text-white font-Stoshi
  ${
    pathname === "/login"
      ? "bg-[#054099] "
      : "bg-custom-button-bg text-gray-600"
  }`}
          >
            <span className="eaduration-300"> Log In</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button onClick={toggleSidebar} className="text-2xl">
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          ref={sidebarRef} // Attach ref to sidebar
          className={`fixed top-0 right-0 h-full w-[250px] bg-white shadow-lg z-40 transform  ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out `}
        >
          <div className="flex flex-col p-6 space-y-6">
            <span
              onClick={() => {
                router.push("/");
                toggleSidebar(); // Close sidebar after navigation
              }}
              className={`font-normal text-base text-blue-950 cursor-pointer font-Stoshi hover:text-[#169CFF]`}
            >
              Home
            </span>

            <span
              onClick={() => {
                router.push("/join-team");
                toggleSidebar(); // Close sidebar after navigation
              }}
              className={`font-normal text-base text-blue-950 cursor-pointer font-Stoshi hover:text-[#169CFF]`}
            >
              Careers
            </span>
            <span
              onClick={() => {
                router.push("/contact-us");
                toggleSidebar(); // Close sidebar after navigation
              }}
              className={`font-normal text-base text-blue-950 cursor-pointer font-Stoshi hover:text-[#169CFF]`}
            >
              Contact Us
            </span>
            <button
              onClick={() => {
                router.push("");
                toggleSidebar(); // Close sidebar after navigation
              }}
              className={`h-12 px-4 items-center border-2 rounded-full bg-blue-800 font-medium text-base text-white transition-all duration-300 ease-in-out transform hover:border-blue-800 hover:bg-white hover:text-blue-800 font-Stoshi`}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
