import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faqs() {
    const faqs = [
        {
            question: "Seo Services And Digital Marketing Agency In NYC?",
            answer: "We are a leading digital marketing agency and digital partner that provides prominent SEO solutions. With a proven track record of success, we have helped many businesses to achieve their goals. We have various SEO services like local SEO, off- page SEO, keyword research , on- page SEO and technical SEO. We go beyond SEO and also provide Social media marketing, PPC, web development, game development  and Content marketing. We are a one-stop solution for all your needs."
        },
        {
            question: "What Is Included In Digital Marketing Agency Service?",
            answer: "Digital marketing agencies provide various types of services but here at UnderPin services we provide a wide range of services like SEO, PPC, SMM, Content marketing, web design and development. Additionally we also provide services like game development, graphic design , video editing, GIFs ,animation and motion graphics. To know more check out our services page"
        },
        {
            question: "How Can I Increase My Website Traffic?",
            answer: "By choosing a reputable agency like UnderPin you can increase your website traffic. As we go for a multi-faceted approach which includes a set of procedures that helps to grow traffic. FIrst we do keyword research and implement SEO techniques afterwards we target your potential audience through the help of social media to increase website traffic. To know more in detail call us right now! ( it's free) and get a detailed report."
        },
        {
            question: "Can You Help Me Improve My Online Presence?",
            answer: "We can examine your current online presence, pinpoint areas that require improvement and implement plans to increase your online presence. We will work closely with you to achieve your goals and will provide a detailed analytic report. Let's work together to make your brand viral."
        },
        {
            question: "What Is Your Experience With Digital Marketing?",
            answer: "We are a pioneer digital marketing agency and have 5 plus years of experience. We have a team of professionals who work in an organised way. To learn more about our experience check out our website."
        },
        {
            question: "How Do You Measure The Success Of Your Campaigns?",
            answer: "We track the effectiveness of the campaigns using key performance indicators (KPIs) and analytical instruments. These vary according to the objectives of each campaign but they include; web traffic, conversion, number of leads, social media interaction, and ROI. Thus, when monitoring these quantifiable measurements, one can assess which strategies prove most effective and which are not likely to be successful. By optimising our strategy we help you to get the best possible results."
        },
        {
            question: "Why Should Hire A Seo Company?",
            answer: "There are many benefits of hiring a SEO company like UnderPin Services. We can increase your internet presence, draw more organic traffic and eventually generate more leads and sales. By hiring us you can save time, resources and ensure that your website is optimised to the highest standards. you can always stay one step ahead and outrank your rivals."
        },
        {
            question: "What Makes Underpin A Leading Digital Marketing Agency?",
            answer: "We have a team of experienced professionals who are passionate about delivering outstanding results. We provide a full range of services to improve your online visibility, from SEO and PPC to social media and content marketing. We believe in creating customised solutions that align with your need and target audience allowing to increase brand recognition, and provide measurable commercial growth."
        },
        {
            question: "How Can We Contact Or Schedule A Meeting With Underpin Services?",
            answer: "To schedule a meeting with UnderPin Service and discuss your digital marketing needs, you can visit our website, email us or even call us."
        }
    ]

    return (
        <section className="w-[98%] bg-white sm:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto px-4 pt-8 pb-16">
            <h2 className="text-center tracking-tight pb-10 text-primary font-sweetSuckerPunch" style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', lineHeight: 'clamp(2rem, 6vw, 6.0125rem)' }}>
                FAQ'S
            </h2>
            <Accordion type="single" collapsible className="space-y-5">
                {faqs.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="bg-gray-50 hover:bg-gray-100 group rounded-md overflow-hidden"
                    >
                        <AccordionTrigger className="px-4 py-3 ">
                            <span className="text-left w-[85%] lg:w-full  group-hover:translate-x-3 transition text-base sm:text-lg lg:text-xl xl:text-2xl">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="font-normal text-black text-opacity-70  translate-x-5 px-4 text-sm lg:text-lg xl:text-xl pb-3">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}

