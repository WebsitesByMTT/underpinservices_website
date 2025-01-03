import React from 'react'
import { InfiniteMoving } from './others/InfiniteMoving'
import TextDrop from './others/textDrop'
import FlipWordsAnimation from './others/flipWordAnimation'
import Image from 'next/image'

const Banner = () => {
    return (
        <div className='relative h-screen  overflow-hidden'>
            <InfiniteMoving />
            <div className='absolute top-[28%] lg:top-[30%] left-[50%] w-full translate-x-[-50%]'><TextDrop /></div>
            <FlipWordsAnimation />
            <Image src={'/assets/images/Elements.png'} alt='bannerElement' width={4000} height={100} priority className='w-full md:block hidden absolute  lg:bottom-0' quality={100}/>
            <Image src={'/assets/images/mobileelements.png'} alt='bannerElement' width={4000} height={100} priority className='w-full md:hidden absolute  lg:bottom-0' quality={100}/>
        </div>
    )
}

export default Banner
