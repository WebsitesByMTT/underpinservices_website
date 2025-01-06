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
                    Software Development
                    <br />
                    <span className="text-primary text-[4rem] lg:text-[5rem] 2xl:text-[7rem] tracking-wide  font-sweetSuckerPunch">SERVICES</span>
                </h2>
                <div className='lg:w-[50%]'>
                    <p className='text-[#737373] tracking-wide leading-snug text-xs lg:text-sm xl:text-lg'>Having the right tools is always essential as it minimises the efforts and boosts productivity. With our software development team, experience the enhanced efficiency. Whether you need web development, mobile development, cloud strategy or customised software development solution we got you covered.</p>
                </div>
            </div>

            <div className='pb-8'>
                <h2 className="text-[3rem] lg:text-[4rem] text-center 2xl:text-[6rem] font-switzer tracking-wide leading-[5.5rem]">
                    Our
                    <br />
                    <span className="text-primary text-[4rem] lg:text-[5rem] 2xl:text-[7rem] tracking-wide  font-sweetSuckerPunch">COMMITMENT</span>
                </h2>
                <div className='text-center w-[75%] pt-16 text-base mx-auto text-[#737373] space-y-4'>
                    <p className='leading-relaxed tracking-wide'>At UnderPin Services, we're committed to delivering software solutions that exceed expectations and drive real business value. We work closely with our clients to understand their unique challenges and objectives, ensuring our solutions align perfectly with their business goals.</p>

                    <p className='leading-relaxed tracking-wide'>Whether you're a startup looking to build your first MVP or an enterprise seeking to modernise your technology infrastructure, UnderPin Services has the expertise and experience to help you succeed in the digital landscape.</p>

                    <p className='leading-relaxed tracking-wide'>Contact us today to discuss how we can help transform your digital vision into reality.</p>
                </div>
            </div>

        </main>
    )
}

export default page
