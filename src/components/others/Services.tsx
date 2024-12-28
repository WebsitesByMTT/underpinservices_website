"use client"
import Image from 'next/image'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

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

const Services = () => {
    return (
        <section className='flex flex-col lg:pt-6'>
                <h2 className="text-center pb-24 tracking-tight text-secondary" style={{ fontSize: 'clamp(2rem, 5vw, 5.3125rem)', lineHeight: 'clamp(3rem, 7vw, 7.0125rem)' }}>
                    <span className="font-switzer font-semibold">
                        Services
                    </span>
                    <span className="block text-primary font-sweetSuckerPunch font-normal " style={{ fontSize: 'clamp(3rem, 7vw, 7.1875rem)', lineHeight: 'clamp(1rem, 4vw, 9.580625rem)' }}>we offer</span>
                </h2>
            <div className='flex-grow px-16 '>
                <Carousel plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}>
                    <CarouselContent>
                        {servicesData.map((service, index) => (
                            <CarouselItem key={index}>
                                <div className=' flex'>
                                    <div className=' flex-1 flex flex-col items-start justify-center'>
                                        <h3 className=' text-primary font-sweetSuckerPunch font-normal text-left' style={{ fontSize: 'clamp(3rem, 7vw, 7.1875rem)', lineHeight: 'clamp(4rem, 9vw, 9.580625rem)' }}>{service.title}</h3>
                                        <p className='font-normal text-left' style={{ fontSize: 'clamp(1rem, 2vw, 2rem)', lineHeight: 'clamp(1.5rem, 3vw, 2.64rem)' }}>{service.description}</p>
                                    </div>
                                    <div className=' flex-1'>
                                        <Image src={service.image} width={1000} height={1000} alt={service.title} />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

            </div>
        </section>
    )
}

export default Services