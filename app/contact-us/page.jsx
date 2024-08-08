import React from 'react'

const ContactUs = () => {
    return (
        <div className='flex flex-col items-center mt-24 p-4'>
            <div className="bg-alabaster w-full flex flex-col items-center p-10">
                <h6 className='text-[34px] font-bold text-cloudBurst'>Contact Us</h6>
                <p className='text-[18px] max-w-[70%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%] text-center text-lightSlateGrey mt-5'>We bring the results while helping you achieve cost and time savings without taking on risk or management overhead.</p>
            </div>
            <form className='flex flex-col w-full gap-[34px] rounded-xl max-w-[715px] mt-20 p-[60px] shadow-subtleDeepShadow'>
                <div className="flex gap-4 w-full">
                    <div className='w-full'>
                        <label htmlFor="" className='block text-davyGrey font-medium text-sm'>Full Name</label>
                        <input type="text" className='w-full placeholder:text-lightSlateGrey placeholder:text-[18px] px-6 py-3 rounded-xl border border-ghost mt-3' placeholder='Enter First Name' />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="" className='block text-davyGrey font-medium text-sm'>Last Name</label>
                        <input type="text" className='w-full placeholder:text-lightSlateGrey placeholder:text-[18px] mt-3 px-6 py-3 rounded-xl border border-ghost' placeholder='Enter Last Name' />
                    </div>
                </div>
                <div className="flex gap-4 w-full">
                    <div className='w-full'>
                        <label htmlFor="" className='block text-davyGrey font-medium text-sm'>Email</label>
                        <input type="text" className='w-full placeholder:text-lightSlateGrey placeholder:text-[18px] px-6 py-3 rounded-xl border border-ghost mt-3' placeholder='Enter First Name' />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="" className='block text-davyGrey font-medium text-sm'>Phone Number</label>
                        <input type="text" className='w-full placeholder:text-lightSlateGrey placeholder:text-[18px] px-6 py-4 rounded-xl border border-ghost mt-3' placeholder='Enter Last Name' />
                    </div>
                </div>
                <div className='w-full'>
                    <label htmlFor="" className='block text-davyGrey font-medium text-sm'>Description</label>
                    <textarea type="text" placeholder='Enter Details' className='mt-3 w-full border-ghost border rounded-xl py-3 px-6 placeholder:text-lightSlateGrey placeholder:text-[18px]' rows={6} />
                </div>
                <div className="flex justify-start">
                    <button className='text-paleGrey shadow-softElevatedShadow bg-funBlue rounded-[100px] px-5 py-2 text-[18px]'>Contact Us</button>
                </div>
            </form>
        </div>
    )
}

export default ContactUs