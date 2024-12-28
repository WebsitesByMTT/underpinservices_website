'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const Portfolio = () => {
    const [expand, setExpand] = useState(0)

    const portfolio = [
        {
            portfolio: '/assets/portfolio/portfolio1.png',
            thumbnail: '/assets/portfolio/portthumb1.png'
        },
        {
            portfolio: '/assets/portfolio/portfolio2.png',
            thumbnail: '/assets/portfolio/portthumb2.png'
        },
        {
            portfolio: '/assets/portfolio/portfolio3.png',
            thumbnail: '/assets/portfolio/portthumb3.png'
        },
        {
            portfolio: '/assets/portfolio/portfolio4.png',
            thumbnail: '/assets/portfolio/portthumb4.png'
        },
        {
            portfolio: '/assets/portfolio/portfolio5.png',
            thumbnail: '/assets/portfolio/portthumb5.png'
        },
        {
            portfolio: '/assets/portfolio/portfolio6.png',
            thumbnail: '/assets/portfolio/portthumb6.png'
        }
    ]
    const titles = ['TRUEAD BLOCKER','WATCHPRTY EXTENTION','SLOT GAMES','TRACKNFLY','TRIPPYBUG','TEJO STUDIO (YOUTUBE CHANNEL)']
    
    return (
        <section className='py-12 sm:py-16 md:py-20 lg:py-24 w-[95%] lg:w-[90%] mx-auto'>
            <h2 className="text-center  tracking-tight text-primary font-sweetSuckerPunch text-4xl md:text-5xl lg:text-6xl xl:text-7xl" 
                style={{ lineHeight: 'clamp(2rem, 6vw, 6.0125rem)' }}>
                PORTFOLIO
            </h2>

            <div className='py-6 sm:py-8 px-4 sm:px-6 lg:px-8'>
                <h2 className="text-secondary font-thin text-start tracking-wider font-sweetSuckerPunch text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8" 
                    style={{ lineHeight: 'clamp(2rem, 6vw, 6.0125rem)' }}>
                    {titles[expand]}
                </h2>

                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-5">
                    {portfolio?.map((item, ind) => (
                        <button 
                            key={ind} 
                            onClick={() => setExpand(ind)} 
                            className={`relative transition-all duration-300 ease-in-out rounded-lg overflow-hidden
                                h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[68.5vh]
                                ${expand === ind 
                                    ? 'w-full md:w-[50%]' 
                                    : 'w-full md:w-[10%]'}
                                mb-4 md:mb-0`}
                        >
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={expand === ind ? item.portfolio : item.thumbnail}
                                    alt="portfolio image"
                                    width={2000}
                                    height={2000}
                                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
                                    priority
                                />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio