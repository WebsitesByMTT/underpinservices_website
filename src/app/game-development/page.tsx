import Process from '@/components/Process'
import { InfiniteMoving } from '@/components/others/InfiniteMoving'
import React from 'react'
import { Lightbulb, Pencil, Settings, Rocket } from 'lucide-react';


const page = () => {
    const processes = [
        {
          title: "Discovery and Planning",
          icon: Lightbulb,
          items: [
            "Understanding your vision and requirements",
            "Market research and analysis",
            "Technical feasibility assessment",
            "Development strategy formulation",
          ],
        },
        {
          title: "Design and Prototyping",
          icon: Pencil,
          items: [
            "Game design documentation",
            "Art style development",
            "Gameplay mechanics prototyping",
            "Technical architecture planning",
          ],
        },
        {
          title: "Development",
          icon: Settings,
          items: [
            "Iterative development cycles",
            "Regular builds and testing",
            "Continuous client feedback",
            "Quality assurance at every stage",
          ],
        },
        {
          title: "Launch and Support",
          icon: Rocket,
          items: [
            "Platform submission and compliance",
            "Launch strategy implementation",
            "Performance monitoring",
            "Ongoing support and updates",
          ],
        },
      ];
        
        const heading = {
            title: 'Our',
            subtitle: 'Development',
            subtitle2: 'Process'
        }
    return (
        <main>
            <div className="absolute inset-0 z-[-1]">
                <InfiniteMoving />
            </div>
            <div className='lg:flex px-4 space-y-5 lg:gap-y-0 items-end pb-16 pt-28 lg:py-32 lg:px-20 xl:py-36 2xl:p-36 justify-center'>
                <h2 className="text-[3rem] lg:text-[4rem] 2xl:text-[6rem] lg:w-[50%] font-switzer tracking-wide leading-snug">
                    Game Develpment
                    <br />
                    <span className="text-primary text-[4rem] lg:text-[5rem] 2xl:text-[7rem] tracking-wide  font-sweetSuckerPunch">SERVICES</span>
                </h2>
                <div className='lg:w-[50%]'>
                    <p className='text-[#737373] tracking-wide leading-snug text-xs lg:text-sm xl:text-lg'>As you know the gaming industry is growing, and we are ready to assist you with effective investing. We embrace a complete game development cycle, starting from the conceptual stage to fully developed games. This is a key area for us, where our goal is to establish genuinely engaging experiences that keep users coming back. If you need to launch a mobile game or an application, our team consists of experienced professionals who can help you.</p>
                </div>
            </div>
            <Process processes={processes} heading={heading} />
            <div className='pb-8'>
                <div className='text-center w-[95%] lg:w-[75%] pt-8 lg:pt-16 text-sm lg:text-base mx-auto text-[#737373] space-y-4'>
                    <p className='leading-relaxed tracking-wide'>Are you interested in having your ideas converted to animations? Let’s sit down and discuss your project requirements further and find out how we could assist you through using animations. Together we can build something fantastic.</p>
                </div>
            </div>
        </main>
    )




}

export default page
