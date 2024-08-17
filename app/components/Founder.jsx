import React from "react";
import { useRouter } from "next/navigation";

const Founder = () => {
  const Router = useRouter();
  return (
    <div className="flex max-w-[95%] lg:max-w-[1089px] mx-auto flex-col items-center justify-between space-y-6 lg:space-y-[32px] mb-16 lg:mb-[128px]">
      <div
        className={` text-2xl lg:text-[48px] leading-8 lg:leading-[62px] text-center text-[#1B2559] font-Stoshi`}
      >
        Founders
      </div>

      <div
        className={`max-w-full lg:max-w-[910px] font-normal text-sm lg:text-lg mb-8 lg:mb-[55px] leading-6 lg:leading-8 text-center text-[#6D7A8D] capitalize font-Stoshi`}
      >
        We've experienced the burdens of costly and time-consuming audits
        firsthand. At Alpa, we're committed to transforming compliance—saving
        you time and money with each review, so you can focus on what matters
        most.
      </div>
      <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-[74px] justify-center items-center mb-[32px]">
        {/* Profile 1 */}
        <div
          id="profile1"
          className="flex flex-row justify-between w-full lg:w-[218px] space-x-3"
        >
          <img
            className="w-14 h-14 rounded-full object-cover object-top"
            src="/images/Alejandro Diez.jpeg"
            alt=""
          />
          <div className="space-y-2 lg:space-y-4">
            <div className="w-[145px] space-y-1">
              <a
                href="https://www.linkedin.com/in/alejandrodiezguillamon/"
                target="_blank"
                rel=""
              >
                <div
                  className={`font-bold text-base lg:text-[22px] leading-6 lg:leading-[27px] text-[#183B56] hover:text-[#169CFF] font-Stoshi`}
                >
                  Alejandro Diez
                </div>
              </a>
              <div
                className={`font-normal text-xs lg:text-sm leading-[14px] text-[#6D7A8D] font-Stoshi`}
              >
                Co-founder
              </div>
            </div>
          </div>
        </div>

        {/* Divider (only visible on larger screens) */}
        <div className="hidden lg:block  absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l border-[#DDE6F2]"></div>

        {/* Profile 2 */}
        <div
          id="profile2"
          className="flex flex-row justify-between w-full lg:w-[218px] space-x-3"
        >
          <img
            className="w-14 h-14 rounded-full object-cover object-top"
            src="/images/Patricio Gutierrez.jpeg"
            alt=""
          />
          <div className="space-y-2 lg:space-y-4">
            <div className="w-[145px] space-y-1 ">
              <a
                href="https://www.linkedin.com/in/patgutam/"
                target="_blank"
                rel=""
              >
                <div
                  className={`w-[166px] font-bold text-base lg:text-[22px] leading-6 lg:leading-[27px] text-[#183B56] hover:text-[#169CFF] font-Stoshi`}
                >
                  Patricio Gutierrez
                </div>
              </a>
              <div
                className={`font-normal text-xs lg:text-sm leading-[14px] text-[#6D7A8D]  font-Stoshi`}
              >
                Co-founder
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center md:h-[52px]">
        <a href="https://calendly.com/founders-alpa" target="_blank" rel="">
          <button
            className={`w-full max-w-[130px] lg:max-w-[146px] rounded-[39px] border-2 py-2 lg:py-3 px-4 lg:px-5 border-[#1E55A8] text-sm lg:text-base leading-6 lg:leading-7 text-[#1E55A8] transition-all duration-300 ease-in-out transform hover:bg-[#054099] hover:text-white font-Stoshi`}
          >
            Book a demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default Founder;
