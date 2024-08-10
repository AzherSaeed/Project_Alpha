import React from 'react'
import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const SmartSol = () => {
  return (
    <div className="flex flex-col container h-auto  ">
    <div className='flex flex-col space-y-[100px]'>
      {/* <div className="max-w-[969px] mx-auto space-y-[23px]">
        <div
          className={`font-bold text-3xl lg:text-5xl leading-[44px] lg:leading-[64px] text-center text-zinc-700 ${plusJakartaSans.className}`}
        >
          Smart Solutions for Manage & Documents
        </div>
        <div
          className={`max-w-[773px] mx-auto font-normal text-base lg:text-lg leading-8 text-center text-slate-500 ${plusJakartaSans.className}`}
        >
          Streamline your planning and budgeting with a powerful platform
          designed for efficiency, automation, and effortless collaboration.
        </div>
      </div> */}
      <div className="flex flex-col lg:flex-row w-auto h-auto lg:h-[508px] justify-between items-center space-y-10 lg:space-y-0 mx-4 md:mx-0">
        <div className="max-w-[503px] space-y-[30px]">
          <div
            className={`font-bold text-[24px] max-w-[477px] lg:text-[32px] leading-[34px] lg:leading-[44px] text-[#1B2559] capitalize ${plusJakartaSans.className}`}
          >
Instant Compliance Processing          </div>
          <div
            className={`font-normal text-base lg:text-lg leading-8 text-[#6D7A8D] ${plusJakartaSans.className}`}
          >

            <ul className='list-disc space-y-4 ml-5'>
              <li>Upload and Analyze: Instant evaluations upon document upload.</li>
              <li>Immediate Feedback: Real-time compliance status alerts.</li>
              <li>Start Strong: Reduce rework with upfront compliance checks.</li>
            </ul>
          </div>
        </div>
        <div>
          <img className=" max-w-[570px] h-[417px]" src="/images/Dashboard1.png" alt="" />
        </div>
      </div>
    </div>
    
    <div className="flex flex-col lg:flex-row w-auto h-auto justify-between items-center space-y-10 lg:space-y-0  mx-4 md:mx-0">
      <div>
        <img src="/images/Dashboard3.png" alt="" className="max-w-auto" />
      </div>
      <div className="max-w-[503px] space-y-[30px]  ">
        <div
          className={`font-bold max-w-[477px] text-[24px] lg:text-[32px] leading-[34px] lg:leading-[52px] text-[#1B2559] capitalize ${plusJakartaSans.className}`}
        >
Streamlined Editing for Full Compliance        </div>
        <div
          className={`font-normal text-base lg:text-lg leading-[30px] text-[#6D7A8D] ${plusJakartaSans.className}`}
        >
          <ul className='list-disc space-y-4 ml-5'>
              <li>Pinpoint Corrections: Alpa highlights precise compliance issues.</li>
              <li>Edit and Resubmit: Make changes, update compliance with one click.</li>
              <li>Progress Efficiently: Advance towards full compliance swiftly.</li>
            </ul>
        </div>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row w-auto h-auto lg:h-[508px] justify-between items-center space-y-10 lg:space-y-0 mb-[148px] mx-4 md:mx-0">
        <div className="max-w-[503px] space-y-[30px]">
          <div
            className={`font-bold text-[24px] lg:text-[32px] leading-[34px] lg:leading-[52px] text-[#1B2559] capitalize ${plusJakartaSans.className}`}
          >
Achieve and Maintain Perfect Compliance          </div>
          <div
            className={`font-normal text-base lg:text-lg leading-8 text-[#6D7A8D] ${plusJakartaSans.className}`}
          >
            <ul className='list-disc space-y-4 ml-5'>
              <li>Comprehensive Monitoring: Oversee all documents' statuses on our dashboard.</li>
              <li>Continuous Support: Maintain standards effortlessly with Alpa's tools.</li>
              <li>Complete Verification: Confirm full compliance with final document reviews</li>
            </ul>
          </div>
        </div>
        <div>
          <img className=" max-w-auto" src="/images/Dashboard3.png" alt="" />
        </div>
      </div>
  </div>
    )
}

export default SmartSol