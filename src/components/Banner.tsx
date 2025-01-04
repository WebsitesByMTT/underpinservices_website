import React from 'react'
import { InfiniteMoving } from './others/InfiniteMoving'
import TextDrop from './others/textDrop'
import FlipWordsAnimation from './others/flipWordAnimation'
import Image from 'next/image'
import Link from 'next/link'
import { PhoneOutgoing } from 'lucide-react'

const Banner = () => {
    return (
        <div className='relative h-screen  overflow-hidden'>
            <InfiniteMoving />
            <div className='absolute top-[28%] lg:top-[30%] left-[50%] w-full translate-x-[-50%]'><TextDrop /></div>
            <FlipWordsAnimation />
            <Image src={'/assets/images/Elements.png'} alt='bannerElement' width={4000} height={100} priority className='w-full md:block hidden absolute  lg:bottom-0' quality={100} />
            <Image src={'/assets/images/mobileelements.png'} alt='bannerElement' width={4000} height={100} priority className='w-full md:hidden absolute  lg:bottom-0' quality={100} />
            <Link
                href="tel:+4733378901"
                className="lg:hidden inline-flex absolute top-[80%] left-[50%] translate-x-[-50%] w-[50%] justify-center md:w-auto items-center gap-2 rounded-full bg-[#F26B3A] px-5 py-2 md:px-6 md:py-3 text-base font-medium text-white transition-colors hover:bg-[#F26B3A]/90"
            >
                <div className='p-1.5'><PhoneOutgoing /></div>
                Call Now
            </Link>
        </div>
    )
}

export default Banner
