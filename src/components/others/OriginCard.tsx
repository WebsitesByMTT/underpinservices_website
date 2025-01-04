'use client';
import { useEffect, useRef } from "react";
import { InfiniteMoving } from "./InfiniteMoving";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface CardData {
    id: number;
    title: string;
    subtitle: string;
    description: string;
}

const cards: CardData[] = [
    {
        id: 1,
        title: "OUR ORIGIN:",
        subtitle: "A Vision Born In 2018",
        description: "UnderPin Services began its journey with a bold vision: that was aimed to help cooks, which in fact means to help small businesses as they struggle to be heard in the digital space. Being creative centred, we ensured we advised our clients to ensure they achieve their goals with appropriate strategies. This was the year that we grew wings and in its tracks we lay the fundamentals that would create an industry giant."
    },
    {
        id: 2,
        title: "2023:",
        subtitle: "Scaling New Heights",
        description: "Within five years, it grew from an idea with three people in an office to one of the best digital advertising companies. Consequently we came to adopt the current technology, adhere to sector challenges, and extend our filesystems. Sadly, working with very many clients, enterprises and businesses, we have spread new standards of performance. This innovation, ability and focus on outcomes became the key factors for our success."
    },
    {
        id: 3,
        title: "2024:",
        subtitle: "Global Ambitions, Local Expertise",
        description: "Having been operating for 5 years, we made a strategic change in the direction of our activity that allowed us to start establishing ourselves as an international leader in digital marketing. By promoting professionalism at the workplace, embracing technology and state of art tools, and employing openness, we took our services to the next level. Presently, we work with 50 professionals who help thousands of companies around the globe achieve their success."
    },
    {
        id: 4,
        title: "Our Team:",
        subtitle: "The Heart of UnderPin Services",
        description: "Our team of about 50 employees are dedicated to digital marketing with various abilities, attitudes and experiences. Each team member shares a common goal: to support the various companies to succeed in the complex digital environment. We respect each other and partner with a 'can-do' approach to delivering outstanding digital solutions."
    }
];

export default function OriginCard() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const contentRefs = useRef<{ title: HTMLHeadingElement | null, subtitle: HTMLHeadingElement | null, description: HTMLParagraphElement | null }[]>(
        cards.map(() => ({ title: null, subtitle: null, description: null }))
    );

    useEffect(() => {
        const container = containerRef.current;
        if (!container || cardsRef.current.length === 0) return;

        // Initial setup - hide all cards except the first
        gsap.set(cardsRef.current.slice(1), {
            autoAlpha: 0,
            display: "none",
        });

        // Create animations for each card
        cards.forEach((_, index) => {
            if (index === 0) return;

            ScrollTrigger.create({
                trigger: container,
                pin: true,
                start: `${index * 33}% center`,
                end: "top",
                onEnter: () => {
                    // Fade out previous card
                    gsap.to(cardsRef.current[index - 1], {
                        autoAlpha: 0,
                        scale: 0.95,
                        scrub:true,
                        y: -30,
                        duration: 0.5,
                        ease: "power2.inOut",
                        onComplete: () => {
                            gsap.set(cardsRef.current[index - 1], { display: "none" });
                        },
                    });

                    // Fade in current card with content animation sequence
                    const timeline = gsap.timeline();

                    timeline
                        .set(cardsRef.current[index], {
                            display: "block",
                            autoAlpha: 0,
                            scale: 1.05,
                            y: 30,
                        })
                        .to(cardsRef.current[index], {
                            autoAlpha: 1,
                            scale: 1,
                            y: 0,
                            duration: 0.5,
                            ease: "power2.out",
                        })
                        .from(
                            contentRefs.current[index].title,
                            {
                                y: 20,
                                autoAlpha: 0,
                                duration: 0.4,
                                ease: "power2.out",
                            },
                            "-=0.2"
                        )
                        .from(
                            contentRefs.current[index].subtitle,
                            {
                                y: 15,
                                autoAlpha: 0,
                                duration: 0.4,
                                ease: "power2.out",
                            },
                            "-=0.3"
                        )
                        .from(
                            contentRefs.current[index].description,
                            {
                                y: 10,
                                autoAlpha: 0,
                                duration: 0.4,
                                ease: "power2.out",
                            },
                            "-=0.2"
                        );
                },
                onEnterBack: () => {
                    // Fade out current card
                    gsap.to(cardsRef.current[index], {
                        autoAlpha: 0,
                        scale: 1.05,
                        y: 30,
                        scrub:true,
                        duration: 0.5,
                        ease: "power2.inOut",
                        onComplete: () => {
                            gsap.set(cardsRef.current[index], { display: "none" });
                        },
                    });

                    // Fade in previous card with content animation sequence
                    const timeline = gsap.timeline();

                    timeline
                        .set(cardsRef.current[index - 1], {
                            display: "block",
                            autoAlpha: 0,
                            scale: 0.95,
                            y: -30,
                        })
                        .to(cardsRef.current[index - 1], {
                            autoAlpha: 1,
                            scale: 1,
                            y: 0,
                            duration: 0.3,
                            ease: "power2.out",
                        })
                        .from(
                            contentRefs.current[index - 1].title,
                            {
                                y: -20,
                                autoAlpha: 0,
                                duration: 0.4,
                                ease: "power2.out",
                            },
                            "-=0.2"
                        )
                        .from(
                            contentRefs.current[index - 1].subtitle,
                            {
                                y: -15,
                                autoAlpha: 0,
                                duration: 0.3,
                                ease: "power2.out",
                            },
                            "-=0.3"
                        )
                        .from(
                            contentRefs.current[index - 1].description,
                            {
                                y: -10,
                                autoAlpha: 0,
                                duration: 0.3,
                                ease: "power2.out",
                            },
                            "-=0.2"
                        );
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div ref={containerRef} className="w-full relative">
            <div className="absolute inset-0 z-[-1]">
                <InfiniteMoving />
            </div>
            <div  className="w-full min-h-[400vh]">
                <div className="sticky top-[15vh]  px-4 md:px-8 lg:px-12">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            ref={(el) => {
                                if (el) {
                                    cardsRef.current[index] = el;
                                }
                            }}
                            className="mx-auto w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%] backdrop-blur-sm bg-white/90 p-8 rounded-3xl border border-black"
                        >
                            <div className="space-y-8 md:space-y-12 w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto h-[70vh] pt-4 md:pt-8">
                                <div className="flex items-center">
                                    <Image
                                        src="/assets/images/icon.png"
                                        width={200}
                                        height={200}
                                        quality={100}
                                        className="lg:h-[5rem] h-[2.5rem] w-[2rem] md:h-[3rem] md:w-[2.5rem] lg:w-[4.5rem]"
                                        alt="icon"
                                    />
                                </div>

                                <div className="space-y-6">
                                    <h1
                                        ref={(el) => {
                                            if (el) {
                                                contentRefs.current[index].title = el;
                                            }
                                        }}
                                        className="text-4xl md:text-7xl lg:text-8xl font-light tracking-wide text-secondary font-sweetSuckerPunch"
                                    >
                                        {card.title}
                                    </h1>
                                    <h2
                                        ref={(el) => {
                                            if (el) {
                                                contentRefs.current[index].subtitle = el;
                                            }
                                        }}
                                        className="text-xl md:text-3xl lg:text-4xl font-normal text-gray-800"
                                    >
                                        {card.subtitle}
                                    </h2>
                                </div>

                                <p
                                    ref={(el) => {
                                        if (el) {
                                            contentRefs.current[index].description = el;
                                        }
                                    }}
                                    className="text-base md:text-lg text-secondary text-opacity-60 leading-relaxed mx-auto"
                                >
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}