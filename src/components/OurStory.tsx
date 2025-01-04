'use client'

import { useRef } from 'react'
import Image from "next/image"
import { motion, useInView } from 'framer-motion'

export default function OurStory() {
    const storyData = [
        {
            year: "2018",
            title: "Birth Of UnderPin Service",
            description: "We started spreading our wings and supported various small businesses to achieve their goals. We aligned our creative approach with clients' vision."
        },
        {
            year: "2023",
            title: "UnderPin's Glow-Up",
            description: "We become a leading digital marketing agency. We used cutting edge technology and expanded our horizon with the time. We collaborated with different clients, enterprises and businesses."
        },
        {
            year: "5 Years",
            title: "Industry Game-Changers",
            description: "We become a leading digital marketing agency. We used cutting edge technology and expanded our horizon with the time. We collaborated with different clients, enterprises and businesses."
        }
    ]

    return (
        <section className="w-full bg-white lg:w-[90%] overflow-hidden  mx-auto lg:pb-16 px-4">
            <h2 className="text-center pb-14 lg:pb-28 tracking-tight text-secondary" style={{ fontSize: 'clamp(2.5rem, 5vw, 5.3125rem)', lineHeight: 'clamp(4.5rem, 7vw, 7.0125rem)' }}>
                <span className="font-switzer font-semibold">
                    Our
                </span>
                <span className="block text-primary font-sweetSuckerPunch font-normal " style={{ fontSize: 'clamp(3rem, 7vw, 7.1875rem)', lineHeight: 'clamp(1rem, 4vw, 9.580625rem)' }}>Story</span>
            </h2>
            <div className='space-y-8 lg:space-y-20'>
                {storyData?.map((item, ind) => (
                    <StoryItem key={ind} item={item} />
                ))}
            </div>
        </section>
    )
}

function StoryItem({ item}: any) {
    const leftRef = useRef(null)
    const rightRef = useRef(null)
    const isLeftInView = useInView(leftRef, { once: false, amount: 0.3 })
    const isRightInView = useInView(rightRef, { once: false, amount: 0.3 })

    return (
        <div className={`grid md:grid-cols-2 gap-y-4 lg:gap-x-20 lg:h-[90vh]  mx-auto`}>
            {/* Left Section */}
            <motion.div
                ref={leftRef}
                className="bg-secondary text-white px-6 py-10 lg:px-0 lg:py-0 rounded-2xl"
                initial={{ rotate: 10, translateX: '30%' }}
                animate={isLeftInView ? { rotate: 0, translateX: 0 } : {}}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <div className=" lg:p-0 lg:pt-[30%] lg:pl-[15%] w-full">
                    <h2  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light font-sweetSuckerPunch">{item?.year}</h2>
                    <h3 className="font-switzer text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium">{item?.title}</h3>
                </div>
            </motion.div>

            {/* Right Section */}
            <motion.div
                ref={rightRef}
                className="relative bg-white lg:pt-[30%] pl-[1rem] p-10 lg:p-0 lg:pl-[10%] rounded-2xl border border-black"
                initial={{ rotate: -10, translateX: '-30%' }}
                animate={isRightInView ? { rotate: 0, translateX: 0 } : {}}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <div className="flex justify-start w-full mb-8">
                    <Image src="/assets/images/logo.png" alt="logo" width={500} height={500} quality={100} className="w-[2.5rem] h-[5rem] lg:w-[4rem] lg:h-[7rem]" />
                </div>
                <p className="font-switzer font-[400] tracking-wide xl:w-[95%] 2xl:w-[90%] text-[1rem] xl:text-[1.3rem]  2xl:text-[1.7rem] text-[#737373] leading-relaxed">
                    {item?.description}
                </p>
            </motion.div>
        </div>
    )
}

