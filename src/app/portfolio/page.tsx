import { InfiniteMoving } from "@/components/others/InfiniteMoving"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
    const products = [
        {
            title: "True-adblocker Extension",
            site: 'https://www.trueadblocker.net/',
            subtitle: "Dive in to Ad-Free world with True-adblocker Extension",
            description: "People often get tired with intrusive ads, pop-ups and annoying video commercials while browsing websites. <a href='https://www.trueadblocker.net/' class='underline'>True-adblocker</a> is your friend, whether you're consuming Spotify, Hulu, Twitch streaming, Facebook browsing, or YouTube, True-adblocker blocks all types of ads and makes your streaming experience smoother and faster.",
            metrics: [
                { value: "30%", label: "Increased Website Traffic" },
                { value: "80%", label: "Target Audience Reached" },
                { value: "10K +", label: "Active Users" }
            ],
            icon: "/assets/product/trueadblocker.png"
        },
        {
            title: "Watch party Extension",
            site: 'https://www.watchottparty.com/',
            subtitle: "Sync up and chill out with Watch party Extension",
            description: "<a href='https://www.watchottparty.com/' class='underline'>Watch party extension</a> is a must have extension  if you enjoy watching movies with your friends or family. You may enjoy content together, regardless of distance, by exchanging reactions and debates via real-time chat. Encrypted communication ensures privacy and security while the addon provides smooth controls for collective pause, play, rewind, and fast-forward.",
            metrics: [
                { value: "30%", label: "Increased Website Traffic" },
                { value: "70%", label: "Target Audience Reached" },
                { value: "12K +", label: "Active Users" }
            ],
            icon: "/assets/product/watchparty.png"
        },
        {
            title: "Slot Games",
            site: '',
            subtitle: "Spin to win hidden treasures",
            description: "Are you in for the thrill of getting your hands closer to big wins or exploring new bonus features and tons of fun? Our selection of online slot games has something for everyone, regardless of experience level. It includes both traditional three-reel slots and cutting-edge video slots with captivating themes, bonus rounds, and immersive graphics.",
            metrics: [
                { value: "5%", label: "Active Users" },
            ],
            icon: "/assets/product/slotGames.png"
        },
        {
            title: "Trippybug",
            site: 'https://www.trippybug.com/',
            subtitle: "Hassle free travel with TrippyBug",
            description: "<a href='https://www.trippybug.com/' class='underline'>Trippybug</a> is much more than just a travel website – it is your opportunity to embark on a journey that is easy, fun, and open to any outcome. The creation of Trippybug was born from the desire to create a site that centralises the wide variety of travel choices out there to make your trip as easy and enjoyable as possible. Looking for excitement or you want to discover something new. Planning for a vacation or require some useful information, our website has all the necessary aids for you.",
            metrics: [
                { value: "30%", label: "Increased Website Traffic" },
                { value: "70%", label: "Target Ketword Ranked" },
            ],
            icon: "/assets/product/trippybug.png"
        },
        {
            title: "Tracknfly",
            site: 'https://www.tracknfly.com/',
            subtitle: "Book smart, travel smart",
            description: "At <a href='https://www.tracknfly.com/' class='underline'>tracknfly</a>, we have all that you need to help you plan for your trip without much stress. In only several minutes, you can book hotels, flights, and cars, and have no doubts that you have reached the best deals. Tracknfly makes travel easy, uncomplicated and affordable for every traveller, no matter where in the world you are.",
            metrics: [
                { value: "40%", label: "Increased Website Traffic" },
                { value: "60%", label: "Target Keyword Ranked" },
            ],
            icon: "/assets/product/track&fly.png"
        },
        {
            title: "Tejo Studio (Youtube Channel)",
            site: 'https://www.youtube.com/@tejostudio?themeRefresh=1',
            subtitle: "Your window to world of wonder",
            description: "<a href='https://www.youtube.com/@tejostudio?themeRefresh=1' class='underline'>Tejo Studio</a> is a team of enthusiasts who strive to make the world a little more interesting! Our roles include giving you the most entertaining and stimulating topics you might be interested in knowing answers or even just curious. Perhaps it’s incredible stories, people or ideas, these are the best and most riveting journeys that we present to you through our qualitative narrative skills.",
            metrics: [
                { value: "7.5K+", label: "Subscribers" },
                { value: "40%", label: "Active Viewers" },
                { value: "60%", label: "Click Through Rate (CTR)" }
            ],
            icon: "/assets/product/tejostudio.png"
        }
    ]

    return (
        <div className="min-h-screen relative py-12 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 z-[-1]">
                <InfiniteMoving />
            </div>
            <div className="w-full lg:w-[90%] mx-auto pt-12">
                <div className="space-y-12 lg:space-y-6">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="lg:p-6"
                        >
                            <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 items-center`}>
                                <Link href={product?.site} className={`w-full md:w-[40%]`}>
                                    <Image
                                        src={product.icon}
                                        alt={`${product.title} icon`}
                                        width={1000}
                                        height={1000}
                                        quality={100}
                                        className="w-full h-full hover:scale-105 transition-transform  mr-auto z-10"
                                    />
                                </Link>

                                <div className="flex-1 space-y-4">
                                    <h2 className="text-2xl lg:text-3xl font-bold tracking-wide text-primary">{product.title}</h2>
                                    <p className="text-gray-600 tracking-wide text-lg lg:text-xl leading-tight">{product.subtitle}</p>
                                    <p
                                        className="text-gray-600 leading-relaxed pt-2 lg:pt-8 text-lg"
                                        dangerouslySetInnerHTML={{ __html: product.description }}
                                    />
                                    <div className="flex flex-wrap gap-6 lg:gap-10 pt-4">
                                        {product.metrics.map((metric, idx) => (
                                            <div key={idx} className="space-y-1">
                                                <div className="text-2xl lg:text-3xl text-primary">{metric.value}</div>
                                                <div className="text-sm lg:text-lg text-gray-500">{metric.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

