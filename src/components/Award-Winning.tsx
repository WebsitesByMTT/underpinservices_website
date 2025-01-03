"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AwardWinning() {
    const sectionRef = useRef<HTMLElement>(null);
    const awardsRef = useRef<HTMLDivElement>(null);

    const awards = [
        {
            src: "/assets/awards/award1.png",
            alt: "Top 10 SEO Award",
            className: "lg:absolute lg:left-[15%] lg:top-[3%]",
        },
        {
            src: "/assets/awards/award2.png",
            alt: "DAN Member Badge",
            className: "lg:absolute lg:left-[30%] lg:top-[3%]",
        },
        {
            src: "/assets/awards/award3.png",
            alt: "Clutch Certification",
            className: "lg:absolute lg:left-[45%] lg:top-[3%]",
        },
        {
            src: "/assets/awards/award4.png",
            alt: "Performance Award",
            className: "lg:absolute lg:right-[30%] lg:top-[3%]",
        },
        {
            src: "/assets/awards/award5.png",
            alt: "Accredited Agency Badge",
            className: "lg:absolute lg:right-[15%] lg:top-[3%]",
        },
        {
            src: "/assets/awards/award6.png",
            alt: "Gold SEO Badge",
            className: "lg:absolute lg:left-[10%] lg:top-[40%]",
        },
        {
            src: "/assets/awards/award7.png",
            alt: "HubSpot Academy Certification",
            className: "lg:absolute lg:right-[10%] lg:top-[40%]",
        },
        {
            src: "/assets/awards/award8.png",
            alt: "Clutch Review",
            className: "lg:absolute lg:left-[15%] lg:bottom-[3%]",
        },
        {
            src: "/assets/awards/award9.png",
            alt: "Semrush Partner Badge",
            className: "lg:absolute lg:left-[30%] lg:bottom-[3%]",
        },
        {
            src: "/assets/awards/award10.png",
            alt: "Shopify Partner Badge",
            className: "lg:absolute lg:left-[45%] lg:bottom-[3%]",
        },
        {
            src: "/assets/awards/award11.png",
            alt: "SEO Top 10 Badge",
            className: "lg:absolute lg:right-[30%] lg:bottom-[3%]",
        },
        {
            src: "/assets/awards/award12.png",
            alt: "Clutch Badge 2024",
            className: "lg:absolute lg:right-[15%] lg:bottom-[3%]",
        },
    ];

    useEffect(() => {
        if (sectionRef.current && awardsRef.current) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            tl.to(awardsRef.current, {
                y: "-10%",
                ease: "none",
            });
        }
    }, []);

    return (
        <section
            ref={sectionRef}
            id="award-section"
            className="lg:h-screen group transition mx-auto px-4"
        >
            <div className="relative h-full w-full">
                {/* Mobile/Tablet Heading */}
                <div className="mb-12  text-center lg:hidden">
                    <h2 className="text-2xl font-bold md:text-3xl">
                        2024 Award-Winning
                        <br />
                        <span className="text-[#FF6B35]">DIGITAL MARKETING AGENCY</span>
                    </h2>
                </div>
                {/* Mobile layout */}
                <div className="grid grid-cols-2 h-full w-full gap-4 lg:gap-8 md:grid-cols-3 lg:hidden">
                    {awards.map((award, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <Image
                                src={award.src}
                                alt={award.alt}
                                width={1000}
                                height={1000}
                                quality={100}
                                className="h-[11rem] w-[11rem] animation-y object-contain md:h-24 md:w-24"
                            />
                        </div>
                    ))}
                </div>

                {/* Desktop Circular Layout */}
                <div className="hidden lg:block h-full">
                    <h2
                        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center pb-20 tracking-tight text-secondary"
                        style={{
                            fontSize: "clamp(1.6rem, 4.2vw, 4.5rem)",
                            lineHeight: "clamp(2rem, 6vw, 6.0125rem)",
                        }}
                    >
                        <span className="font-switzer font-semibold">
                            2024 Award-Winning
                        </span>
                        <span
                            className="block text-primary font-sweetSuckerPunch font-normal"
                            style={{
                                fontSize: "clamp(2rem, 6vw, 6.1875rem)",
                                lineHeight: "clamp(3rem, 8vw, 8.580625rem)",
                            }}
                        >
                            Digital Marketing Agency
                        </span>
                    </h2>

                    {/* GSAP controlled div */}
                    <div ref={awardsRef} className="h-full">
                        {awards?.map((award, index) => (
                            <div
                                key={index}
                                className={`${award.className} animation-y transition-transform hover:scale-110`}
                            >
                                <Image
                                    src={award.src}
                                    alt={award.alt}
                                    width={1000}
                                    height={1000}
                                    quality={100}
                                    className="w-[100%] lg:w-[8rem] 2xl:w-[11rem] object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                
            </div>
        </section>
    );
}

