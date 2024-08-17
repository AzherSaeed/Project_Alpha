import React from 'react'
import Image from 'next/image'

const Trusted_clients = () => {
  return (
    <div className='space-y-[200px] lg:max-w-[1089px] lg:mx-auto   mt:[50px] md:mt-[120px] mb-[128px]'>
        <div className="flex container flex-col items-center space-y-[55px] ">
    <div className='space-y-[21px]'>
    <div
      className={` text-[28px] lg:text-[48px] leading-[38px] lg:leading-[62px] text-center text-[#1B2559] capitalize font-Stoshi`}
    >
Compliance made simple
    </div>
    <div className={`font-normal text-lg leading-8 text-center text-[#6D7A8D] capitalize font-Stoshi`}>Streamline audit processes with solutions embraced by top firms.</div>
    </div>
    <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 ">
      <div className="logo-container">
      <Image
  src="/images/Slack_C.svg"
  alt="Slack Logo"
  className="logo"
  width={225}  // Replace this with the actual width of the SVG.
  height={39} // Replace this with the actual height of the SVG.
  layout="intrinsic" // Use intrinsic layout for SVG to maintain its original size.
  priority // Add this if the image should load with higher priority.
/>      </div>
      <div className="logo-container">
      <Image
  src="/images/Netflix_C.svg"
  alt="Netflix Logo"
  className="logo"
  width={225}  // Replace this with the actual width of the SVG.
  height={39} // Replace this with the actual height of the SVG.
  layout="intrinsic" // Use intrinsic layout for SVG to maintain its original size.
  priority // Add this if the image should load with higher priority.
/>   
      </div>
      <div class="logo-container">
      <Image
  src="/images/Fitbit_C.svg"
  alt="Fitbit Logo"
  className="logo"
  width={225}  // Replace this with the actual width of the SVG.
  height={39} // Replace this with the actual height of the SVG.
  layout="intrinsic" // Use intrinsic layout for SVG to maintain its original size.
  priority // Add this if the image should load with higher priority.
/>   
      </div>
      <div className="logo-container">
      <Image
  src="/images/Google_C.svg"
  alt="Google Logo"
  className="logo"
  width={225}  // Replace this with the actual width of the SVG.
  height={39} // Replace this with the actual height of the SVG.
  layout="intrinsic" // Use intrinsic layout for SVG to maintain its original size.
  priority // Add this if the image should load with higher priority.
/>   
      </div>
      <div className="logo-container">
      <Image
  src="/images/Airbnb_C.svg"
  alt="Airbnb Logo"
  className="logo"
  width={225}  // Replace this with the actual width of the SVG.
  height={39} // Replace this with the actual height of the SVG.
  layout="intrinsic" 
  priority 
/>         </div>
    </div>
    
  </div>
 
  </div>
  )
}

export default Trusted_clients