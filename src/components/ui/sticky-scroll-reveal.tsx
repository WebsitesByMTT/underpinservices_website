"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: any[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState<number | null>(0);
  
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    if (window?.innerWidth>1024){
      setActiveCard(closestBreakpointIndex);          
    } else {
      setActiveCard(null);
    }
  
  });

  return (
    <motion.div
      className="lg:h-[70vh] hideScrollBar  w-[90%] mx-auto overflow-y-auto lg:flex justify-center relative space-x-10 rounded-md"
      ref={ref}
    >
      <div className="div relative w-[100%] lg:w-[50%]   justify-center flex">
        <div className="w-full lg:translate-y-[25%] ">
          {content.map((item, index) => (
            <div key={item.title + index} className="pb-5 lg:pb-0 lg:h-full">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{
                  opacity: activeCard?activeCard === index ? 1 : .3:1, 
                }}
              >
                <div className="flex gap-x-2">
                  <Image
                    src="/assets/images/icon.png"
                    width={200}
                    height={200}
                    quality={100}
                    className="lg:h-[3.5rem] h-[2.5rem] w-[2rem] md:h-[3rem] md:w-[2.5rem] lg:w-[3rem]"
                    alt="icon"
                  />
                  <div>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-secondary">
                      {item.title}
                    </h2>
                    <Image
                      src="/assets/images/choose.png"
                      width={1000}
                      quality={100}
                      height={1000}
                      className="h-[1.4rem] md:h-[1.8rem] lg:h-[2rem] w-full"
                      alt="icon"
                    />
                  </div>
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 1 }}
                animate={{
                  opacity: activeCard?activeCard === index ? 1 : .3:1, 
                }}
                className="text-sm md:text-xl lg:text-2xl xl:text-3xl text-[#737373] w-full lg:w-[95%] xl:w-[80%] mt-3 lg:mt-10"
              >
                {item.description}
              </motion.p>
              <div className="pb-5 lg:hidden w-full">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-[50%] lg:block hidden lg:sticky lg:top-0">
        <div className={cn("rounded-md bg-white lg:relative", contentClassName)}>
          {content.map((item, index) => (
            <div
              key={index}
              className={cn(
                "lg:absolute w-[90%] mx-[10%] transition-transform duration-500",
                {
                  "lg:translate-y-[-100%]": activeCard !== index,
                  "lg:translate-y-0": activeCard === index, 
                }
              )}
              style={{
                zIndex: content.length - index,
              }}
            >
              {item?.content}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
