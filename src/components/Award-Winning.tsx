import Image from "next/image"

export default function AwardWinning() {
    const awards = [
        {
            src: "/assets/awards/award1.png",
            alt: "Top 10 SEO Award",
            className: "lg:absolute lg:left-[10%] lg:top-[20%] scale-[1.1] group-hover:translate-y-[20%] transition translate-y-0"
        },
        {
            src: "/assets/awards/award2.png",
            alt: "DAN Member Badge",
            className: "lg:absolute lg:left-[25%] lg:top-[5%] group-hover:translate-y-[-20%] transition translate-y-0"
        },
        {
            src: "/assets/awards/award3.png",
            alt: "Clutch Certification",
            className: "lg:absolute lg:left-[40%] lg:top-[0%] group-hover:translate-y-[25%] transition translate-y-0"
        },
        {
            src: "/assets/awards/award4.png",
            alt: "Performance Award",
            className: "lg:absolute lg:right-[35%] lg:top-[5%] group-hover:translate-x-[20%] transition translate-x-0"
        },
        {
            src: "/assets/awards/award5.png",
            alt: "Accredited Agency Badge",
            className: "lg:absolute lg:right-[20%] lg:top-[14%] group-hover:translate-y-[20%] transition translate-y-0"
        },
        {
            src: "/assets/awards/award6.png",
            alt: "Gold SEO Badge",
            className: "lg:absolute lg:left-[5%] lg:top-[50%] group-hover:translate-x-[30%] transition translate-x-0"
        },
        {
            src: "/assets/awards/award7.png",
            alt: "HubSpot Academy Certification",
            className: "lg:absolute lg:right-[5%] lg:top-[35%] group-hover:translate-x-[-35%] transition translate-x-0"
        },
        {
            src: "/assets/awards/award8.png",
            alt: "Clutch Review",
            className: "lg:absolute lg:left-[20%] lg:bottom-[10%] group-hover:translate-y-[20%] transition translate-y-0"
        },
        {
            src: "/assets/awards/award9.png",
            alt: "Semrush Partner Badge",
            className: "lg:absolute lg:left-[35%] lg:bottom-[5%] group-hover:translate-x-[20%] transition translate-x-0"
        },
        {
            src: "/assets/awards/award10.png",
            alt: "Shopify Partner Badge",
            className: "lg:absolute lg:right-[40%] lg:bottom-[0%] group-hover:translate-y-[-20%] transition translate-y-0"
        },
        {
            src: "/assets/awards/award11.png",
            alt: "SEO Top 10 Badge",
            className: "lg:absolute lg:right-[25%] lg:bottom-[5%] group-hover:translate-x-[20%] transition translate-x-0"
        },
        {
            src: "/assets/awards/award12.png",
            alt: "Clutch Badge 2024",
            className: "lg:absolute lg:right-[10%] lg:bottom-[15%] group-hover:translate-y-[-20%] scale-[1.1] transition translate-y-0"
        }
    ]

    return (
        <section className="h-screen group transition mx-auto px-4 py-5">
            <div className="relative h-full w-full">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:hidden">
                    {awards.map((award, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <Image
                                src={award.src}
                                alt={award.alt}
                                width={1000}
                                height={1000}
                                quality={100}
                                className="h-[11rem] w-[11rem] object-contain md:h-24 md:w-24"
                            />
                        </div>
                    ))}
                </div>

                {/* Desktop Circular Layout */}
                <div className="hidden lg:block">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <h2 className="text-5xl xl:text-7xl font-bold">
                            2024 Award-Winning
                            <br />
                            <span className="text-[#FF6B35] font-sweetSuckerPunch tracking-wide text-6xl xl:text-8xl">DIGITAL MARKETING AGENCY</span>
                        </h2>
                    </div>
                    {awards?.map((award, index) => (
                        <div key={index} className={`${award.className} transition-transform hover:scale-110`}>
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

                {/* Mobile/Tablet Heading */}
                <div className="mb-8 text-center lg:hidden">
                    <h2 className="text-2xl font-bold md:text-3xl">
                        2024 Award-Winning
                        <br />
                        <span className="text-[#FF6B35]">DIGITAL MARKETING AGENCY</span>
                    </h2>
                </div>
            </div>
        </section>
    )
}

