'use client'
import { Star } from 'lucide-react'
import Image from "next/image"
import { useState } from 'react'

interface Testimonial {
    name: string
    image: string
    rating: number
    text: string
    rotation?: string
    translate?: string
}

const testimonials: Testimonial[] = [
    {
        name: "Michael Davis",
        image: "/assets/client/client1.png",
        rating: 5,
        text: "UnderPin has been an invaluable partner in our digital marketing journey. Their team's expertise in SEO and PPC has significantly boosted our online visibility and generated more leads. We're particularly impressed with their ability to tailor strategies to our specific needs. Highly recommended",
        rotation: "lg:-rotate-6 group-hover:rotate-0",
        translate: "lg:translate-y-36 lg:translate-x-20 group-hover:translate-y-0 group-hover:translate-x-0"
    },
    {
        name: "Sarah Miller",
        image: "/assets/client/client2.png",
        rating: 5,
        text: "Creative team at UnderPin is nothing less than fabulous! They have contributed to the overall strategy of establishing the unique brand image through bright and distinguishing graphic design as well as producing comprehensible and eye-popping video materials. We're thrilled with the results!",
        translate: "lg:translate-y-36  group-hover:translate-y-0"
    },
    {
        name: "Emily Carter",
        image: "/assets/client/client3.png",
        rating: 5,
        text: "As a small business owner, I was hesitant to invest in digital marketing. But UnderPin made the process easy and affordable. Their team provided excellent customer service and delivered impressive results. I'm grateful for their support!",
        rotation: "lg:rotate-[12deg] group-hover:rotate-0",
        translate: "lg:translate-y-40 lg:-translate-x-20 group-hover:translate-y-0 group-hover:translate-x-0"
    },
    {
        name: "David Lee",
        image: "/assets/client/client4.png",
        rating: 5,
        text: "The UnderPin software development team has played a significant role in optimising our performance. Their custom software solutions have increased our efficiency and productivity. We're impressed with their technical expertise and dedication to delivering high-quality results.",
        rotation: "lg:rotate-[12deg] group-hover:rotate-0",
        translate: "lg:-translate-y-0  lg:translate-x-20 group-hover:translate-y-0 group-hover:translate-x-0"
    },
    {
        name: "John Smith",
        image: "/assets/client/client5.png",
        rating: 5,
        text: "UnderPin's game development team has brought our gaming vision to life. Their expertise in game design and development has resulted in a truly immersive and engaging gaming experience. We're excited to see what they'll create next!",
        translate: "lg:translate-y-16  lg:group-hover:translate-y-0"
    },
    {
        name: "Jane Doe",
        image: "/assets/client/client6.png",
        rating: 5,
        text: "Their team is great and always courteous. I deal with them frequently via video call to discuss new strategy or if it's the detailed evaluation of our website analytics report. UnderPin has understood and helped our business to grow in every aspect like online presence, generate more leads and brand engagement.  I highly recommend them !!.",
        rotation: "lg:-rotate-[12deg] group-hover:rotate-0",
        translate: "lg:translate-y-0 lg:-translate-x-24 group-hover:translate-y-0 group-hover:translate-x-0"
    }
]

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {[...Array(rating)].map((_, i) => (
                <Star
                    key={i}
                    className="h-5 w-5 fill-orange-500 text-orange-500"
                />
            ))}
        </div>
    )
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial, index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} 
            className={`w-full bg-gray-100 transition-all duration-300 ease-in-out min-h-[200px]  mx-auto rounded-lg overflow-hidden ${
                isHovered ? ' shadow-lg' : ''
            } ${testimonial.rotation} ${testimonial.translate}`}
        >
            <div className="p-6">
                <div className="flex items-center gap-3">
                    <Image
                        src={testimonial.image}
                        alt={`${testimonial.name}'s avatar`}
                        width={1000}
                        height={1000}
                        quality={100}
                        className="w-[3rem] h-[3rem] rounded-full"
                    />
                    <h3 className="font-semibold">{testimonial.name}</h3>
                </div>
                <div className="mt-2">
                    <StarRating rating={testimonial.rating} />
                </div>
                <p className={`mt-4 text-muted-foreground transition-all duration-300 ease-in-out ${
                    isHovered ? 'opacity-100' : 'opacity-70 lg:line-clamp-3'
                }`}>
                    {testimonial.text}
                </p>
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section className="relative group w-[90%] mx-auto lg:h-screen overflow-hidden px-4 py-16">
            <div className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 pb-8 text-center">
                <h2 className="text-5xl font-switzer xl:text-7xl font-bold">
                    Client's
                    <br />
                    <span className="text-[#FF6B35] font-sweetSuckerPunch tracking-wide text-6xl xl:text-8xl">SUCCESS STORIES</span>
                </h2>
            </div>
            <div className="relative w-full h-full">
                <div className="grid h-full gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="z-10 h-full">
                            <TestimonialCard testimonial={testimonial} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

