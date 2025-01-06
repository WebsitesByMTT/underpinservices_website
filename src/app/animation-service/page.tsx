import { InfiniteMoving } from '@/components/others/InfiniteMoving'
import React from 'react'

const page = () => {
    return (
        <main>
            <div className="absolute inset-0 z-[-1]">
                <InfiniteMoving />
            </div>
            <div className='lg:flex px-4 space-y-5 lg:gap-y-0 items-end pb-16 pt-28 lg:py-32 lg:px-20 xl:py-36 2xl:p-36 justify-center'>
                <h2 className="text-[3rem] lg:text-[4rem] 2xl:text-[6rem] lg:w-[50%] font-switzer tracking-wide leading-snug">
                    Animation
                    <br />
                    <span className="text-primary text-[4rem] lg:text-[5rem] 2xl:text-[7rem] tracking-wide  font-sweetSuckerPunch">SERVICES</span>
                </h2>
                <div className='lg:w-[50%]'>
                    <p className='text-[#737373] tracking-wide leading-snug text-xs lg:text-sm xl:text-lg'>Bring your ideas to life, with our animation and motion graphic services give your ideas a life and create amazing animation that holds both information and captivates your audience.  This engaging format not only enhances understanding but also keeps your audience entertained and invested in your message.</p>
                </div>
            </div>

            <div className='pb-8'>
                <h2 className="text-[3rem] lg:text-[4rem] text-center 2xl:text-[6rem] font-switzer tracking-wide leading-[5.5rem]">
                    Get Started with
                    <br />
                    <span className="text-primary text-[4rem] lg:text-[5rem] 2xl:text-[7rem] tracking-wide  font-sweetSuckerPunch">UnderPin Services</span>
                </h2>
                <div className='text-center w-[75%] pt-16 text-base mx-auto text-[#737373] space-y-4'>
                    <p className='leading-relaxed tracking-wide'>Are you interested in having your ideas converted to animations? Let’s sit down and discuss your project requirements further and find out how we could assist you through using animations. Together we can build something fantastic.</p>
                </div>
            </div>
        </main>
    )




}

export default page
