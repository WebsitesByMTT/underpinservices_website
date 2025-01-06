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
                    Video Editing
                    <br />
                    <span className="text-primary text-[4rem] lg:text-[5rem] 2xl:text-[7rem] tracking-wide  font-sweetSuckerPunch">SERVICES</span>
                </h2>
                <div className='lg:w-[50%]'>
                    <p className='text-[#737373] tracking-wide leading-snug text-xs lg:text-sm xl:text-lg'>In this digital landscape you might have heard content is king and it is true. With our video editing services transform raw footage into engaging stories, keeping your viewers engaged. We also create GIFs and other multimedia content to uplift your brand image.</p>
                </div>
            </div>

            <div className='pb-8'>
                <h2 className="text-[3rem] lg:text-[4rem] text-center 2xl:text-[6rem] font-switzer tracking-wide leading-[5.5rem]">
                    Start Creating
                    <br />
                    <span className="text-primary text-[4rem] lg:text-[5rem] 2xl:text-[7rem] tracking-wide  font-sweetSuckerPunch">Engaging Video Content Today</span>
                </h2>
                <div className='text-center w-[75%] pt-16 text-base mx-auto text-[#737373] space-y-4'>
                    <p className='leading-relaxed tracking-wide'>Upgrade your online profile with professional video editing services and content marketing assistance by UnderPin Services. Need funny memes, slick promo videos or exciting educational materials? Whatever your vision, our team can help to turn it into reality.</p>

                    <p className='leading-relaxed tracking-wide'> For consultations on your video content requirements or learn how we can align your marketing goals with creative and engaging videos, get in touch with us today.</p>

                    <p className='leading-relaxed tracking-wide'> UnderPin Services will be glad to help you create video content that resonates with viewers, makes them take action and fosters long term loyalty. Helping you deliver everything from snappy viral videos shared on your business social media platforms to detailed brand videos.</p>
                </div>
            </div>
        </main>
    )




}

export default page
