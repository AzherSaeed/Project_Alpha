import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google';
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const SliderCard = () => {
  return (
    <div className='w-auto h-auto mb-[40px]'>
    <div className="flex flex-col  rounded-xl p-6 gap-6 shadow-[0px_2px_47px_0px_#47566D24] mx-auto ">
      <div className={`font-normal text-lg leading-8 text-slate-500 font-Stoshi`}>
        I truly have nothing but the highest praise and appreciation for all that you did for us. Saving me on the video montage projection was huge, and even more important the amazing pictures.
      </div>
      <div className="flex flex-row w-[230px] justify-between">
        <img src="/images/PhotoF.png" alt="" className="" />
        <div className="">
          <div className={`font-bold text-lg leading-[23px] text-blue-950 font-Stoshi`}>Pricillia Makalew</div>
          <div className={`font-normal text-sm leading-8 text-slate-500 font-Stoshi`}>EhyaScape Client</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SliderCard
