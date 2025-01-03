"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingImage = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: any[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate the items for seamless scrolling
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      setStart(true);
    }
  }, []);

  const getAnimationDuration = () => {
    switch (speed) {
      case "fast":
        return "5s";
      case "normal":
        return "20s";
      default:
        return "40s";
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden w-full z-20",
        "[mask-image:linear-gradient(to right, transparent, white 20%, white 80%, transparent)]",
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex gap-x-2 flex-nowrap will-change-transform",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `scroll-${direction} ${getAnimationDuration()} linear infinite`,
        }}
      >
        {items.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt={`Image ${index}`}
            width={4000}
            height={1200}
            quality={100}
            priority
            className="w-full h-[50vh] object-cover"
          />
        ))}
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
};
