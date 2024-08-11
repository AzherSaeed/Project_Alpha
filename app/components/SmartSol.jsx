import React from 'react'
import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const SmartSol = () => {
  return (
    <div className="flex flex-col container h-auto  ">
      <div className='flex flex-col space-y-10 lg:space-y-[100px] lg:mb-0 mb-[100px] '>
        <div className="flex flex-col lg:flex-row w-auto h-auto lg:h-[508px] justify-between items-center space-y-10 lg:space-y-0 mx-4 md:mx-0">
          <div className="max-w-[503px] space-y-[30px]">
            <div
              className={`font-bold text-[24px] max-w-[477px] lg:text-[32px] leading-[34px] lg:leading-[44px] text-[#1B2559] capitalize ${plusJakartaSans.className}`}
            >
              Instant Compliance Processing
            </div>
            <div
              className={`font-normal text-base lg:text-lg leading-8 text-[#6D7A8D] ${plusJakartaSans.className}`}
            >
              <ul className='custom-bullets space-y-4 ml-5'>
                <li>Upload and Analyze: Instant evaluations upon document upload.</li>
                <li>Immediate Feedback: Real-time compliance status alerts.</li>
                <li>Start Strong: Reduce rework with upfront compliance checks.</li>
              </ul>
            </div>
          </div>
          <div>
            <img className="w-full lg:max-w-[570px] h-[275px] lg:h-[417px]" src="/images/Dashboard1.png" alt="" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-auto h-auto justify-between items-center space-y-10 lg:space-y-0 mx-4 md:mx-0">
          <div>
            <img src="/images/Dashboard3.png" alt="" className="w-full lg:max-w-auto h-[275px] lg:h-auto" />
          </div>
          <div className="max-w-[503px] space-y-[30px]">
            <div
              className={`font-bold max-w-[477px] text-[24px] lg:text-[32px] leading-[34px] lg:leading-[52px] text-[#1B2559] capitalize ${plusJakartaSans.className}`}
            >
              Streamlined Editing for Full Compliance
            </div>
            <div
              className={`font-normal text-base lg:text-lg leading-[30px] text-[#6D7A8D] ${plusJakartaSans.className}`}
            >
              <ul className='custom-bullets space-y-4 ml-5'>
                <li>Pinpoint Corrections: Alpa highlights precise compliance issues.</li>
                <li>Edit and Resubmit: Make changes, update compliance with one click.</li>
                <li>Progress Efficiently: Advance towards full compliance swiftly.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-auto h-auto lg:h-[508px] justify-between items-center space-y-10 lg:space-y-0 mx-4 md:mx-0 ">
  <div className="max-w-[503px] space-y-[30px]">
    <div
      className={`font-bold text-[24px] lg:text-[32px] leading-[34px] lg:leading-[52px] text-[#1B2559] capitalize ${plusJakartaSans.className}`}
    >
      Achieve and Maintain Perfect Compliance
    </div>
    <div
      className={`font-normal text-base lg:text-lg leading-8 text-[#6D7A8D] ${plusJakartaSans.className}`}
    >
      <ul className='custom-bullets space-y-4 ml-5'>
        <li>Comprehensive Monitoring: Oversee all documents' statuses on our dashboard.</li>
        <li>Continuous Support: Maintain standards effortlessly with Alpa's tools.</li>
        <li>Complete Verification: Confirm full compliance with final document reviews.</li>
      </ul>
    </div>
  </div>
  <div>
    <img className="w-full lg:max-w-auto h-[275px] lg:h-auto" src="/images/Dashboard3.png" alt="" />
  </div>
</div>

      </div>
    </div>
  )
}

export default SmartSol;
