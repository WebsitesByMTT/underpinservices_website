'use client'
import Image from 'next/image'
import React from 'react'

const NotJustAverageAgency = () => {

    const handelPlayVideo = () => {
      console.log('Playing')    
    }

    return (
        <section className='lg:pt-24 bg-white'>
            <h2 className="text-center pb-8 lg:pb-10 tracking-tight text-secondary" style={{ fontSize: 'clamp(1.6rem, 4.2vw, 4.5rem)', lineHeight: 'clamp(2rem, 6vw, 6.0125rem)' }}>
                <span className="font-switzer font-semibold">
                    we&apos;re not just your average agency
                </span>
                <span className="block text-primary font-sweetSuckerPunch font-normal " style={{ fontSize: 'clamp(2rem, 6vw, 6.1875rem)', lineHeight: 'clamp(3rem, 8vw, 8.580625rem)' }}>we&apos;re your digital fam</span>
            </h2>
            <div className='flex justify-center px-2'>
                <div className='relative inline-block group transition'>
                    <Image src={'/assets/images/averageAgency.png'} alt='averageEgency' width={4000} height={1000} quality={100} className='w-[100%] cursor-pointer mx-auto' />
                    <div className='backdrop-blur-sm lg:group-hover:backdrop-blur-none absolute transition cursor-pointer top-0 left-[50%] w-[100%] h-[100%]  translate-x-[-50%]'></div>
                    <div className='absolute transition lg:group-hover:opacity-40 top-[40%] lg:top-[50%] translate-y-[-50%]  lg:space-y-6 left-4'>
                        <h2 className='text-white text-xs md:text-3xl lg:text-4xl tracking-wide capitalize'><span className='text-secondary'>Underpin Services</span> has been a<br /> forefront digital marketing agency</h2>
                        <h2 className='text-white  text-sm md:text-4xl lg:text-5xl  tracking-wide font-sweetSuckerPunch lg:block hidden uppercase'>that has helped businesses to<br /> thrive in the digital landscape.</h2>
                    </div>
                    <div className='absolute transition w-[70%] lg:w-[50%] lg:group-hover:opacity-40 text-white  space-y-6 right-4 bottom-5'>
                        <h2 className='text-start text-[.5rem] md:text-2xl lg:text-3xl tracking-wider lg:tracking-wide'>We have over 5 years of experience in digital marketing.We aim for perfection and our excellent team of professional work with a positive attitude and shared values to achieve perfection. We are your dedicated ally in journey of growth and success.</h2>
                    </div>
                    <button onClick={handelPlayVideo} className='absolute top-[15%] lg:top-[25%] lg:group-hover:opacity-100 opacity-100 lg:opacity-0 transition right-[7%] lg:right-[25%]'>
                        <Image src={'/assets/images/play.png'} alt='videoPlayButton' width={500} height={500} quality={100} className='w-[50%] lg:w-[100%] cursor-pointer mx-auto' />
                    </button>
                </div>
            </div>

        </section>
    )
}

export default NotJustAverageAgency