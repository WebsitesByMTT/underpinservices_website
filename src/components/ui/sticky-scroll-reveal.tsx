"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CardItem {
  title: string;
  description: string;
  content: React.ReactNode;
  rotations: string;
}

interface StickyScrollProps {
  content: CardItem[];
  contentClassName?: string;
}

export const StickyScroll: React.FC<StickyScrollProps> = ({
  content,
  contentClassName
}) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [visitedCards, setVisitedCards] = useState<Set<number>>(new Set());
  const [lastScrollPosition, setLastScrollPosition] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!window?.innerWidth || window.innerWidth <= 1024) {
      setActiveCard(null);
      return;
    }

    const cardsBreakpoints = Array.from(
      { length: content.length }, 
      (_, i) => i / content.length
    );
    
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

    // Determine scroll direction
    const isScrollingUp = latest < lastScrollPosition;
    setLastScrollPosition(latest);

    if (isScrollingUp) {
      // Remove cards from visited set that are above the current position
      setVisitedCards(prev => {
        const newSet = new Set(prev);
        for (let i = closestBreakpointIndex + 1; i < content.length; i++) {
          newSet.delete(i);
        }
        return newSet;
      });
    } else {
      // Add current card to visited set
      setVisitedCards(prev => new Set([...prev, closestBreakpointIndex]));
    }

    setActiveCard(closestBreakpointIndex);
  });

  const shouldAnimateCard = (index: number) => visitedCards.has(index);

  return (
    
    <motion.div
      className="lg:h-[70vh] hideScrollBar  w-[94%] lg:w-[90%] mx-auto overflow-y-auto lg:flex justify-center relative space-x-10 rounded-md"
      ref={ref}
    >
      {/* Left Section */}
      <div className="relative w-[100%]  lg:w-[50%] justify-center flex">
        <div className="w-full lg:translate-y-[25%]">
          {content.map((item, index) => (
            <div key={item.title + index} className="pb-5 lg:pb-0 lg:h-full">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{
                  opacity: shouldAnimateCard(index) ? (activeCard === index ? 1 : 0.3) : 1,
                }}
                transition={{ duration: 0.3 }}
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
                    <h2 className="text-2xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl  font-bold text-secondary">
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
                  opacity: shouldAnimateCard(index) ? (activeCard === index ? 1 : 0.3) : 1,
                }}
                transition={{ duration: 0.3 }}
                className="text-sm md:text-xl font-switzer font-normal lg:text-2xl 2xl:text-3xl text-[#737373] w-full lg:w-[95%] xl:w-[80%] mt-3 lg:mt-10"
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

      <div className="w-full lg:w-[50%] py-10 lg:block hidden lg:sticky lg:top-0">
        <div className={cn("rounded-md bg-white lg:relative", contentClassName)}>
          {content.map((item, index) => (
            <div
              key={index}
              className={cn(
                `lg:absolute ${item?.rotations} w-[90%] scale-110 mx-[10%] transition-transform duration-500`,
                {
                  "lg:translate-y-[-150%]": shouldAnimateCard(index) && activeCard !== index,
                  "lg:translate-y-0": !shouldAnimateCard(index) || activeCard === index,
                }
              )}
              style={{
                zIndex: content.length - index,
              }}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};