'use client'
import { motion } from 'framer-motion';
import Image from "next/image";
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Michael Davis",
        image: "/assets/client/client1.png",
        rating: 5,
        text: "UnderPin has been an invaluable partner in our digital marketing journey. Their team's expertise in SEO and PPC has significantly boosted our online visibility and generated more leads. We're particularly impressed with their ability to tailor strategies to our specific needs. Highly recommended",
    },
    {
        name: "Sarah Miller",
        image: "/assets/client/client2.png",
        rating: 5,
        text: "Creative team at UnderPin is nothing less than fabulous! They have contributed to the overall strategy of establishing the unique brand image through bright and distinguishing graphic design as well as producing comprehensible and eye-popping video materials. We're thrilled with the results!",
    },
    {
        name: "Emily Carter",
        image: "/assets/client/client3.png",
        rating: 5,
        text: "As a small business owner, I was hesitant to invest in digital marketing. But UnderPin made the process easy and affordable. Their team provided excellent customer service and delivered impressive results. I'm grateful for their support!",
    },
    {
        name: "David Lee",
        image: "/assets/client/client4.png",
        rating: 5,
        text: "The UnderPin software development team has played a significant role in optimising our performance. Their custom software solutions have increased our efficiency and productivity. We're impressed with their technical expertise and dedication to delivering high-quality results.",
    },
    {
        name: "John Smith",
        image: "/assets/client/client5.png",
        rating: 5,
        text: "UnderPin's game development team has brought our gaming vision to life. Their expertise in game design and development has resulted in a truly immersive and engaging gaming experience. We're excited to see what they'll create next!",
    },
    {
        name: "Jane Doe",
        image: "/assets/client/client6.png",
        rating: 5,
        text: "Their team is great and always courteous. I deal with them frequently via video call to discuss new strategy or if it's the detailed evaluation of our website analytics report. UnderPin has understood and helped our business to grow in every aspect like online presence, generate more leads and brand engagement.  I highly recommend them !!.",
    }
]

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5 justify-center">
            {[...Array(rating)].map((_, i) => (
                <Star
                    key={i}
                    className="h-5 w-5 fill-orange-500 text-orange-500"
                />
            ))}
        </div>
    );
}

function TestimonialCard({ testimonial }: any) {
    return (
        <div className="w-full bg-gray-100 mx-auto rounded-lg overflow-hidden flex items-center justify-center">
            <div className="p-6 w-full flex flex-col items-center justify-center">
                <div className="flex items-center gap-3 justify-center">
                    <Image
                        src={testimonial.image}
                        alt={`${testimonial.name}'s avatar`}
                        width={1000}
                        height={1000}
                        quality={100}
                        className="w-[3rem] h-[3rem] rounded-full"
                    />
                    <h3 className="font-semibold text-center">{testimonial.name}</h3>
                </div>
                <div className="mt-2">
                    <StarRating rating={testimonial.rating} />
                </div>
                <p className="mt-4 text-center opacity-70">
                    {testimonial.text}
                </p>
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section
            className="relative group w-full overflow-hidden px-4 py-12 lg:py-24"
        >
            <div className="absolute left-1/2 lg:top-24 -translate-x-1/2 z-20 w-full text-center">
                <h2 className="text-4xl lg:text-5xl font-switzer xl:text-7xl font-bold">
                    Client's
                    <br />
                    <span className="text-[#FF6B35] font-sweetSuckerPunch tracking-wide text-5xl lg:text-6xl xl:text-8xl">
                        SUCCESS STORIES
                    </span>
                </h2>
            </div>
            <div className="relative w-full h-full mt-40 lg:mt-48">
                <div className="w-full lg:w-[90%] mx-auto grid gap-x-8 gap-y-8 lg:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="z-10 w-full flex justify-center testimonial-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once:false, amount: 0.2 }}
                            transition={{ duration: 0.2, delay: index * 0.1 }}
                        >
                            <TestimonialCard testimonial={testimonial} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
