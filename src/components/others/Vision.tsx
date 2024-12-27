import Logo from "../ui/Logo"

const Vision = () => {
    return (
        <section className="flex  flex-col scroll-smooth">
            <div className=" sticky top-0 h-[20vh] lg:h-screen bg-white w-full flex items-center justify-center">
                <h2 className=" text-center tracking-tight text-secondary ">
                    <span className="font-switzer font-semibold block" style={{ fontSize: 'clamp(1.5rem, 5vw, 5.3125rem)', lineHeight: '1.3' }}>
                        Pinning Your Vision
                    </span>
                    <span className="block text-primary font-sweetSuckerPunch font-normal" style={{ fontSize: 'clamp(2rem, 7vw, 7.1875rem)', lineHeight: '1.3' }}>To Reality</span>
                </h2>
            </div>
            <div className="lg:h-screen w-full scale-75 flex items-center justify-center z-10 bg-white shadow-[0px_-59px_55px_2px_rgb(255,255,255)]" >
                <div className="relative">
                    <Logo className="w-[30vw] md:w-[50vw] max-w-[22.735rem] h-auto" />
                    <Tag name="Search Engine Optimization (SEO)" className="top-[7%] right-[70%] -rotate-[6.12deg]" />
                    <Tag name="Game Development" className="top-[30%] right-[95%] rotate-[0.43deg]" />
                    <Tag name="Social Media Marketing" className="top-[50%] right-[80%] -rotate-[5.68deg]" />

                    <Tag name="Web Development" className="top-[7%] left-[75%] rotate-[5.93deg]" />
                    <Tag name="Content Marketing (Script Writing)" className="top-[28%] left-[92%] -rotate-[5.35deg]" />
                    <Tag name="Pay Per Click (PPC)" className="top-[51%] left-[75%] rotate-[3.21deg]" />
                </div>
            </div>
        </section>
    )
}


const Tag = ({ name, className }: { name: string, className?: string }) => {
    return (
        <div className={`bg-[#D9D9D9] font-switzer text-secondary py-2 px-4 flex items-center justify-center gap-2 absolute ${className}`} style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1.5rem)', lineHeight: '1.3' }}>
            <svg className="w-[clamp(1rem,3vw,3rem)] h-auto" viewBox="0 0 47 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.3673 3.12505L10.0899 19.8382C9.8014 20.1177 9.41457 20.2726 9.01284 20.2696C8.61111 20.2665 8.22668 20.1057 7.94242 19.8219L0.64741 12.5484C0.505085 12.4063 0.392141 12.2375 0.315027 12.0518C0.237913 11.866 0.19814 11.6669 0.197978 11.4658C0.197815 11.2647 0.237268 11.0655 0.314082 10.8796C0.390896 10.6938 0.503568 10.5248 0.645664 10.3825C0.78776 10.2402 0.956498 10.1272 1.14224 10.0501C1.32799 9.97302 1.5271 9.93325 1.72822 9.93309C1.92934 9.93292 2.12852 9.97237 2.31439 10.0492C2.50026 10.126 2.66918 10.2387 2.8115 10.3808L9.04076 16.5915L25.2383 0.922973C25.5303 0.640395 25.9226 0.485393 26.3289 0.492066C26.5301 0.495371 26.7286 0.538268 26.9132 0.618308C27.0978 0.698349 27.2649 0.813966 27.4048 0.958557C27.5447 1.10315 27.6548 1.27388 27.7287 1.46101C27.8026 1.64814 27.839 1.848 27.8357 2.04918C27.8324 2.25036 27.7895 2.44892 27.7094 2.63352C27.6294 2.81812 27.5138 2.98515 27.3692 3.12507L27.3673 3.12505ZM45.7773 1.098C45.6375 0.953301 45.4705 0.837589 45.2859 0.75748C45.1013 0.677371 44.9027 0.634436 44.7014 0.631131C44.5002 0.627826 44.3003 0.664215 44.1132 0.738218C43.9261 0.812222 43.7554 0.922388 43.6108 1.06242L27.4133 16.7309L23.8361 13.1627C23.5484 12.876 23.1586 12.7153 22.7524 12.716C22.3463 12.7166 21.957 12.8786 21.6703 13.1663C21.3835 13.454 21.2228 13.8439 21.2235 14.25C21.2242 14.6562 21.3862 15.0455 21.6739 15.3322L26.315 19.9613C26.5992 20.2452 26.9837 20.406 27.3854 20.409C27.7871 20.4121 28.174 20.2571 28.4625 19.9776L45.7398 3.2645C45.8847 3.12477 46.0005 2.95786 46.0808 2.77332C46.1611 2.58878 46.2042 2.39023 46.2077 2.18902C46.2111 1.98781 46.1749 1.78788 46.1011 1.60068C46.0272 1.41347 45.9172 1.24266 45.7773 1.098Z" fill="#EB6D27" />
            </svg>
            <h6 className="text-nowrap">
                {name}
            </h6>
        </div>
    )
}

export default Vision