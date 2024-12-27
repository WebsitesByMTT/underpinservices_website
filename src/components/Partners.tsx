import Image from "next/image"

export default function Partners() {
    const partners = [
        {
            name: "Hostinger",
            logo: "/assets/partners/partner1.png",
        },
        {
            name: "Infusionsoft",
            logo: "/assets/partners/partner2.png",
        },
        {
            name: "Shopify Plus",
            logo: "/assets/partners/partner3.png",
        },
        {
            name: "LinkedIn Marketing Partners",
            logo: "/assets/partners/partner4.png",
        },
        {
            name: "GoDaddy Pro",
            logo: "/assets/partners/partner5.png",
        },
        {
            name: "Shopify Experts",
            logo: "/assets/partners/partner6.png",
        },
        {
            name: "HubSpot",
            logo: "/assets/partners/partner7.png",
        },
        {
            name: "Facebook Marketing Partners",
            logo: "/assets/partners/partner8.png",
        },
    ]

    return (
        <section className="w-[90%] mx-auto px-4 py-16">
            <h2 className="text-center tracking-tight pb-20 text-primary font-sweetSuckerPunch" style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', lineHeight: 'clamp(2rem, 6vw, 6.0125rem)' }}>
                Partners
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {partners.map((partner) => (
                    <div
                        key={partner.name}
                        className="flex items-center justify-center p-4"
                    >
                        <Image
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            width={2000}
                            height={2000}
                            quality={100}
                            className=" transition-all duration-300 w-[70%] sm:w-[90%]  h-auto"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

