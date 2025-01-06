import React from 'react'
import { InfiniteMoving } from '../others/InfiniteMoving'
import DigitalMarketingCards from './DigitalMarketingCard'

const DigitalMarketing = () => {
  return (
    <section>
      <div className="absolute inset-0 z-[-1]">
        <InfiniteMoving />
      </div>
      <div className='lg:flex px-4 space-y-5 lg:gap-y-0 items-end pb-16 pt-28 lg:py-32 lg:px-20 xl:py-36 2xl:p-36 justify-center'>
        <h2 className="text-[3rem] lg:text-[4rem] 2xl:text-[6rem] lg:w-[55%] font-switzer tracking-wide leading-snug">
          Digital Marketing
          <br />
          <span className="text-primary text-[4rem] lg:text-[5rem] 2xl:text-[7rem] tracking-wide  font-sweetSuckerPunch">SERVICES</span>
        </h2>
        <div className='lg:w-[45%]'>
          <p className='text-[#737373] tracking-wide leading-snug text-xs lg:text-sm xl:text-lg'>Your online presence isn't just an option that is why effective marketing is very crucial for business success. At UnderPin Services, we provide the Best & Affordable SEO to PPC advertising. We believe every brand's needs are different and for that, we craft customised plans. We analyse your target audience and the latest market trends that help your business to achieve maximum growth.</p>
        </div>
      </div>
      <DigitalMarketingCards />
    </section>
  )
}

export default DigitalMarketing
