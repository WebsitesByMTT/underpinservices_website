import React from 'react'
import { InfiniteMoving } from './others/InfiniteMoving'
import TextDrop from './others/textDrop'
import FlipWordsAnimation from './others/flipWordAnimation'
import Image from 'next/image'
import ScheduleButton from './others/scheduleButton'

const Banner = () => {
    return (
        <div className='relative h-screen  overflow-hidden'>
            <InfiniteMoving />
            <div className='absolute top-[28%] lg:top-[30%] left-[50%] w-full translate-x-[-50%]'><TextDrop /></div>
            <FlipWordsAnimation />
            <Image src={'/assets/images/Elements.png'} alt='bannerElement' width={4000} height={100} priority className='w-full absolute  lg:bottom-0' quality={100}/>
            <div className='absolute bottom-[5%] right-[5%]'>
              <ScheduleButton/>
            </div>
        </div>
    )
}

export default Banner
