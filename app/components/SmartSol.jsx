import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const SmartSol = () => {
  return (
    <div className="flex flex-col container mx-auto px-4 md:px-8 lg:px-16 xl:px-0 h-auto ">
      <div className="flex flex-col  lg:space-y-[84px] lg:mb-0 mb-[100px]">
        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[508px] justify-between items-center space-y-10 lg:space-y-0 gap-5">
          <div className="max-w-full lg:max-w-[503px] space-y-[30px]">
            <div
              className={`font-bold text-[24px] lg:text-[32px] leading-[34px] lg:leading-[44px] text-[#1B2559] capitalize font-Stoshi`}
            >
              Instant Compliance Processing
            </div>
            <div
              className={`font-normal text-base lg:text-lg leading-8 text-[#6D7A8D] font-Stoshi`}
            >
              <ul className="custom-bullets space-y-4">
                <li>
                  <span
                    className={`font-semibold text-[18px] leading-[30px] text-[#1E55A8] font-Stoshi`}
                  >
                    Upload and Analyze:
                  </span>
                  <br /> Instant evaluations upon document upload.
                </li>
                <li>
                  <span
                    className={`font-semibold text-[18px] leading-[30px] text-[#1E55A8] font-Stoshi`}
                  >
                    Immediate Feedback:
                  </span>
                  <br /> Real-time compliance status alerts.
                </li>
                <li>
                  <span
                    className={`font-semibold text-[18px] leading-[30px] text-[#1E55A8] font-Stoshi`}
                  >
                    Start Strong:
                  </span>
                  <br /> Reduce rework with upfront compliance checks.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:max-w-[570px]">
  <Image
    className="w-full h-auto lg:h-[417px]"
    src="/images/Dashboard1.png"
    alt="Dashboard"
    width={570}  
    height={417} 
    layout="responsive"
  />
</div>

        </div>

        <div className="flex flex-col-reverse lg:flex-row w-full h-auto justify-between items-center space-y-10 lg:space-y-0 gap-5 lg:mb-0 mb-10">
          
<div className="w-full lg:max-w-[530px]">
  <Image
    src="/images/Dashboard2.png"
    alt="Dashboard"
    className="w-full h-auto lg:h-[417px]"
    width={530}  
    height={417} 
    layout="responsive"
  />
</div>
          <div className="max-w-full lg:max-w-[503px] space-y-[30px]">
            <div
              className={`font-bold text-[24px] lg:text-[32px] leading-[34px]  lg:leading-[52px] text-[#1B2559] capitalize font-Stoshi`}
            >
              Streamlined Editing for Full Compliance
            </div>
            <div
              className={`font-normal text-base lg:text-lg leading-[30px] text-[#6D7A8D]   font-Stoshi`}
            >
              <ul className="custom-bullets space-y-4 mb-8 ">
                <li>
                  <span
                    className={`font-semibold text-[18px] leading-[30px] text-[#1E55A8] font-Stoshi`}
                  >
                    Pinpoint Corrections:
                  </span>
                  <br /> Alpa highlights precise compliance issues.
                </li>
                <li>
                  <span
                    className={`font-semibold text-[18px] leading-[30px] text-[#1E55A8] font-Stoshi`}
                  >
                    Edit and Resubmit:
                  </span>
                  <br /> Make changes, update compliance with one click.
                </li>
                <li>
                  <span
                    className={`font-semibold text-[18px] leading-[30px] text-[#1E55A8] font-Stoshi`}
                  >
                    Progress Efficiently:
                  </span>
                  <br /> Advance towards full compliance swiftly.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[508px] justify-between items-center space-y-10 lg:space-y-0 mt-10 md:mt-0 gap-5">
          <div className="max-w-full lg:max-w-[503px] space-y-[30px]">
            <div
              className={`font-bold text-[24px] lg:text-[32px] leading-[34px] lg:leading-[52px] text-[#1B2559] capitalize font-Stoshi`}
            >
              Achieve and Maintain Perfect Compliance
            </div>
            <div
              className={`font-normal text-base lg:text-lg leading-8 text-[#6D7A8D] font-Stoshi`}
            >
              <ul className="custom-bullets space-y-4 ">
                <li>
                  <span
                    className={`font-semibold text-[18px] leading-[30px] text-[#1E55A8] font-Stoshi`}
                  >
                    Comprehensive Monitoring:
                  </span>
                  <br /> Oversee all documents' statuses on our dashboard.
                </li>
                <li>
                  <span
                    className={`font-semibold text-[18px] leading-[30px] text-[#1E55A8] font-Stoshi`}
                  >
                    Continuous Support:
                  </span>
                  <br /> Maintain standards effortlessly with Alpa's tools.
                </li>
                <li>
                  <span
                    className={`font-semibold text-[18px] leading-[30px] text-[#1E55A8] font-Stoshi`}
                  >
                    Complete Verification:
                  </span>
                  <br /> Confirm full compliance with final document reviews.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:max-w-[570px]">
            <Image
              className="w-full h-auto lg:h-[417px]"
              src="/images/Dashboard3.png"
              alt="Dashboard"
              width={570}
              height={417} 
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartSol;
