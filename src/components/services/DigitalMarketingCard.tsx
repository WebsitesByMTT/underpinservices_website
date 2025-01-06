import Link from "next/link"
import Image from "next/image"

interface Service {
    title: string
    subtitle?: string
    description: string
    image: string
    list: string[]
}

const services: Service[] = [
    {
        title: "SEO",
        subtitle: "(Search Engine Optimization)",
        description: "Improve your online presence and move up the search engine results with our all-inclusive SEO services. We use reliable strategies to assist your website get organic traffic and turn visitors into consumers. Our experience in SEO includes",
        image: "/assets/service/digital-marketing/seo.png",
        list: ['Technical SEO','Keyword research and strategy development','On-page and off-page SEO','Local SEO optimization','Content optimization','Link building and outreach','Mobile SEO optimization','Regular performance reporting']
    },
    {
        title: "Social Media Management",
        description: "With our expert Social Media Packages, increase your social media presence from ordinary to extraordinary. Our team of professional social media creates engaging content that connects with your target audience and builds meaningful connections. To optimise your social media presence on Facebook, Instagram, LinkedIn, Twitter, and other relevant platforms. Our team stays updated with the latest trends and updated algorithms. Ou",
        image: "/assets/service/digital-marketing/socialmedia.png",
        list: ['Strategic content planning and calendar management','Custom content creation for multiple platforms','Performance tracking and optimization','Competitor analysis and trend monitoring','Paid social media campaign management']
    },
    {
        title: "PPC Advertising",
        description: "Maximise your advertising ROI with our strategic PPC campaign management. Our certified PPC specialists create and optimise campaigns that drive qualified traffic and conversions. We offer:",
        image: "/assets/service/digital-marketing/ppc.png",
        list: ['Campaign strategy and planning','Keyword research and selection','Ad copy creation and testing','Landing page optimization','Budget allocation and management','Regular performance analysis and reporting']
    },
    {
        title: "Mobile App Optimization",
        description: "In a world where mobiles are everywhere, it's very necessary to have a unique app that stands out. Organic and paid app promotions help everybody find your mobile app and enjoy the unique experience it offers. In short, our team contributes towards improving your app’s ranking in app stores, and its ability to appeal to the audience.",
        image: "/assets/service/digital-marketing/mobileapp.png",
        list: ['App Store Optimization (ASO)','Keyword optimization for app stores','App Store listing optimization','User experience analysis and improvement','Performance optimization','Review management and response']
    },
    {
        title: "Content Writing",
        description: "Create engaging content your audience will love to read, share and act on, and that will build the story of your brand. Every created post is designed to meet the company’s brand tone and advertising goals together with the rules of SEO.",
        image: "/assets/service/digital-marketing/contentwriting.png",
        list: ['Website copy and landing pages','Blog posts and articles','Social media content','Video scripts','Email marketing content','Product descriptions']
    },
    {
        title: "Online Reputation Management",
        description: "Let our ORM services help you defend and build an even more positive reputation for your brand online. We assist you in creating and managing your online reputation while dealing with issues that hinder your progress. Our online reputation Management(ORM) services include",
        image: "/assets/service/digital-marketing/feedback.png",
        list: ['Brand mention monitoring','Review management and response','Negative and Positive content suppression','Social media reputation management','Crisis management planning','Competitor reputation analysis','Regular reputation reports']
    },
    {
        title: "Web Analytics Reports",
        description: "With the help of our extensive web analytics reporting services, make smart decisions. Our reports convert complicated data into understandable insights that direct your marketing strategy to help you evaluate your digital performance and identify areas for development. We provide valuable insights like",
        image: "/assets/service/digital-marketing/webanalytics.png",
        list: ['Traffic source analysis','Goal tracking and monitoring','Campaign performance analysis','Actionable insights and recommendations','Regular performance reporting','User behaviour analysis']
    },
]

export default function DigitalMarketingCards() {
    return (
        <div className="container mx-auto px-4 lg:pb-10">
            <div className="grid gap-6 md:gap-y-12 lg:gap-y-16">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="relative overflow-hidden"
                    >
                        <div className="relative w-full">
                            <Image
                                src={service.image}
                                alt={service.title}
                                height={2000}
                                width={4000}
                                quality={100}
                                className="object-fit  lg:h-[60dvh] transition-transform duration-300"
                            />
                            <div className="absolute w-[90%] mx-auto inset-0 pb-4 lg:pb-12 flex  justify-between items-end">
                                <div className="w-[40%]">
                                    <h3 className="text-lg md:text-xl lg:text-6xl font-bold text-white lg:mb-2 leading-snug font-switzer">{service.title}</h3>
                                    {service.subtitle && <p className="text-white tracking-wide text-[0.7rem] md:text-sm lg:text-2xl">{service.subtitle}</p>}
                                </div>
                                <p className="text-white leading-snug tracking-wide w-[60%] text-[0.6rem] md:text-xs lg:text-xl line-clamp-3">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                        <div className="w-[90%] pt-4 mx-auto">
                            <ul className="flex flex-wrap gap-x-8 justify-center gap-y-2 text-[#737373] text-[0.6rem] md:text-xs lg:text-lg list-disc items-center">
                                {
                                    service.list.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

