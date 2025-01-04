'use client'

import { useEffect, useState } from 'react'
import Logo from './ui/Logo'

export default function ServicesHexagon() {
  const services = [
    { name: 'Search Engine Optimization (SEO)', angle:'md:left-[12%] left-[6%] top-[34%] md:top-[28%] lg:left-[15%] xl:left-[20%] lg:top-[25%] absolute 2xl:left-[25%] -rotate-6' },
    { name: 'Web Development',  angle:'lg:top-[25%] absolute top-[41%] md:top-[28%] right-[10%] md:right-[20%] lg:right-[23%] xl:right-[28%] 2xl:right-[33%] rotate-6' },
    { name: 'Content Marketing (Blog Writing)',angle:'lg:top-[38%] absolute top-[52%] md:top-[40%] right-[10%] lg:right-[15%] xl:right-[20%] 2xl:right-[25%] -rotate-6' },
    { name: 'Pay Per Click (PPC)', angle:'top-[67%] md:top-[53%] absolute right-[23%] lg:right-[24%] xl:right-[29%] 2xl:right-[34%] rotate-[8deg] md:rotate-12'},
    { name: 'Social Media Marketing', angle:'top-[60%] md:top-[53%] absolute left-[15%] md:left-[20%] lg:left-[23%] xl:left-[28%] 2xl:left-[32%] -rotate-12' },
    { name: 'Game Development', angle:'lg:top-[38%] absolute top-[46%] md:top-[41%] left-[12%] md:left-[17%] lg:left-[20%] xl:left-[25%] 2xl:left-[30%]' }
  ]

  return (
    <section className="h-screen z-50 bg-white flex items-center justify-center md:p-4">
      <div className="relative h-screen bg-white  w-full aspect-square">
        <div className="absolute w-[10rem] md:w-[15rem] lg:w-[20rem] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <Logo />
        </div>

        {services.map((service) => (
          <div
            key={service.name}
            className={`${service?.angle}`}
          >
            <div
              className={`whitespace-nowrap
                       bg-[#D9D9D9] backdrop-blur shadow-lg  px-2 py-2 md:py-1 sm:px-4 sm:py-2
                       flex items-center gap-2 w-max
                       hover:bg-orange-50 transition-colors`}
            >
              <svg className="lg:w-[clamp(1rem,3vw,2rem)] w-[clamp(1.5rem,3vw,4rem)] h-auto" viewBox="0 0 47 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.3673 3.12505L10.0899 19.8382C9.8014 20.1177 9.41457 20.2726 9.01284 20.2696C8.61111 20.2665 8.22668 20.1057 7.94242 19.8219L0.64741 12.5484C0.505085 12.4063 0.392141 12.2375 0.315027 12.0518C0.237913 11.866 0.19814 11.6669 0.197978 11.4658C0.197815 11.2647 0.237268 11.0655 0.314082 10.8796C0.390896 10.6938 0.503568 10.5248 0.645664 10.3825C0.78776 10.2402 0.956498 10.1272 1.14224 10.0501C1.32799 9.97302 1.5271 9.93325 1.72822 9.93309C1.92934 9.93292 2.12852 9.97237 2.31439 10.0492C2.50026 10.126 2.66918 10.2387 2.8115 10.3808L9.04076 16.5915L25.2383 0.922973C25.5303 0.640395 25.9226 0.485393 26.3289 0.492066C26.5301 0.495371 26.7286 0.538268 26.9132 0.618308C27.0978 0.698349 27.2649 0.813966 27.4048 0.958557C27.5447 1.10315 27.6548 1.27388 27.7287 1.46101C27.8026 1.64814 27.839 1.848 27.8357 2.04918C27.8324 2.25036 27.7895 2.44892 27.7094 2.63352C27.6294 2.81812 27.5138 2.98515 27.3692 3.12507L27.3673 3.12505ZM45.7773 1.098C45.6375 0.953301 45.4705 0.837589 45.2859 0.75748C45.1013 0.677371 44.9027 0.634436 44.7014 0.631131C44.5002 0.627826 44.3003 0.664215 44.1132 0.738218C43.9261 0.812222 43.7554 0.922388 43.6108 1.06242L27.4133 16.7309L23.8361 13.1627C23.5484 12.876 23.1586 12.7153 22.7524 12.716C22.3463 12.7166 21.957 12.8786 21.6703 13.1663C21.3835 13.454 21.2228 13.8439 21.2235 14.25C21.2242 14.6562 21.3862 15.0455 21.6739 15.3322L26.315 19.9613C26.5992 20.2452 26.9837 20.406 27.3854 20.409C27.7871 20.4121 28.174 20.2571 28.4625 19.9776L45.7398 3.2645C45.8847 3.12477 46.0005 2.95786 46.0808 2.77332C46.1611 2.58878 46.2042 2.39023 46.2077 2.18902C46.2111 1.98781 46.1749 1.78788 46.1011 1.60068C46.0272 1.41347 45.9172 1.24266 45.7773 1.098Z" fill="#EB6D27" />
              </svg>

              <span className="text-xs md:text-sm tracking-wide lg:text-base xl:text-lg font-medium text-secondary">
                {service.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

