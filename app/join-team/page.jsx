import Image from 'next/image'
import React from 'react'

const JoinTeam = () => {
    return (
        <div className='mt-20 flex items-center flex-col py-4'>
            <div className="bg-alabaster w-full flex flex-col items-center p-10">
                <h6 className='text-[32px] font-bold text-cloudBurst'>Join our team</h6>
                <p className='text-[18px] text-center text-lightSlateGrey mt-5'>Discover Your Potentials and grow with us</p>
            </div>
            <div className="openings-section flex flex-col items-center max-w-[675px] mt-20 w-full">
                <Image src='/images/search-illustration.png' alt='no-openings' width={200} height={218} />
                <div className='bg-gradient-to-r from-blueChalk to-blueChalk/0 h-1.5 w-full'></div>
            </div>
            <h6 className='font-bold text-3xl mt-7 text-cloudBurst'>There are no openings yet</h6>
            <p className='text-center text-lightSlateGrey mt-4'>We're not hiring now, but feel free to reach out for future opportunities.</p>
        </div>
    )
}

export default JoinTeam