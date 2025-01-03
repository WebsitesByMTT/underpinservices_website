'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const servicesData = [
    {
        title: 'Digital Marketing',
        description: 'In this digital era, effective marketing is very crucial. We provide SEO to PPC advertising.',
        image: '/assets/service/digital-marketing.png'
    },
    {
        title: 'Graphic Designing',
        description: "Visuals are very vital to showcase your brand's presence",
        image: '/assets/service/graphic-design.png'
    },
    {
        title: 'Content Marketing',
        description: 'With our video editing services transform raw footage into engaging stories',
        image: '/assets/service/content-marketing.png'
    },
    {
        title: 'Software Development',
        description: 'With our software development team, experience the enhanced efficiency',
        image: '/assets/service/software-development.png'
    },
    {
        title: 'Motion Graphics',
        description: 'Bring your ideas to life, with our animation and motion graphics services',
        image: '/assets/service/motion-graphics.png'
    },
    {
        title: 'Game Development',
        description: 'We embrace a complete game development cycle, starting from the conceptual stage to fully developed games',
        image: '/assets/service/game-development.png'
    }
]

export default function Carousel() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const sections = gsap.utils.toArray<HTMLElement>('.carousel-item')

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => `+=${containerRef.current!.offsetWidth * (sections.length - 1)}`,
            },
        })

        // Clean up
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill())
        }
    }, [])

    return (
        <div ref={containerRef} className='flex h-screen flex-col justify-center lg:py-2'>
            <h2 className="text-center pb-10 lg:pb-5 tracking-tight text-secondary" style={{ fontSize: 'clamp(2rem, 5vw, 5.3125rem)', lineHeight: 'clamp(3rem, 7vw, 7.0125rem)' }}>
                <span className="font-switzer font-semibold">
                    Services
                </span>
                <span className="block text-primary font-sweetSuckerPunch font-normal " style={{ fontSize: 'clamp(3rem, 7vw, 7.1875rem)', lineHeight: 'clamp(1rem, 4vw, 9.580625rem)' }}>we offer</span>
            </h2>
            <div className="overflow-hidden">
                <div className="flex flex-row">
                    {servicesData.map((item: any, ind) => (
                        <div key={ind} className='space-y-10 lg:space-y-0 lg:space-x-8 carousel-item flex-shrink-0 w-full  p-2 lg:p-8 flex flex-col lg:flex-row justify-center items-center'>
                            <div className=' flex-1 flex flex-col items-start justify-center'>
                                <h3 className=' text-primary font-sweetSuckerPunch font-normal text-left' style={{ fontSize: 'clamp(3rem, 7vw, 7.1875rem)', lineHeight: 'clamp(4rem, 9vw, 9.580625rem)' }}>{item.title}</h3>
                                <p className='font-normal lg:w-[70%]  text-left' style={{ fontSize: 'clamp(1rem, 2vw, 2rem)', lineHeight: 'clamp(1.5rem, 3vw, 2.64rem)' }}>{item.description}</p>
                            </div>
                            <div className='lg:flex-1'>
                                <Image src={item.image} width={1000} height={100} quality={100} alt={item.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
