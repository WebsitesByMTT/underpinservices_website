"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Expertise",
    description:
      "Our diverse team of professionals brings a wealth of experience in various fields, ensuring that we have the skills needed to tackle any project.",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/images/Expertise.png"
          width={1000}
          height={1000}
          quality={100}
          className="h-[90%] w-[90%] object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    rotations:'rotate-6'
  },
  {
    icon: <Image
      src="/assets/images/icon.png"
      width={100}
      height={100}
      quality={100}
      className="h-[3rem] w-[3rem]"
      alt="icon"
    />,
    signSymbol: <Image
      src="/assets/images/choose.png"
      width={300}
      quality={100}
      height={200}
      className="h-[3rem] w-[10rem]"
      alt="icon"
    />,
    title: "Commitment to Quality",
    description:
      "Quality is at the forefront of everything we do. We strive for excellence in our services and aim to exceed client expectations.",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/images/Commitment-to-Quality.png"
          width={1000}
          height={1000}
          quality={100}
          className="h-[90%] w-[90%] object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    rotations:'-rotate-6'
  },
  {
    icon: <Image
      src="/assets/images/icon.png"
      width={100}
      height={100}
      quality={100}
      className="h-[3rem] w-[3rem]"
      alt="icon"
    />,
    signSymbol: <Image
      src="/assets/images/choose.png"
      width={300}
      quality={100}
      height={200}
      className="h-[3rem] w-[10rem]"
      alt="icon"
    />,
    title: "Customised Solutions",
    description:
      "We understand that one size does not fit all. We tailor our services to meet your unique needs, ensuring that you get the best results.",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/images/Customised-Solutions.png"
          width={1000}
          height={1000}
          quality={100}
          className="h-[90%] w-[90%] object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    rotations:'rotate-8'
  },
  {
    icon: <Image
      src="/assets/images/icon.png"
      width={100}
      height={100}
      quality={100}
      className="h-[3rem] w-[3rem]"
      alt="icon"
    />,
    signSymbol: <Image
      src="/assets/images/choose.png"
      width={300}
      quality={100}
      height={200}
      className="h-[3rem] w-[10rem]"
      alt="icon"
    />,
    title: "Transparent Communication",
    description:
      "We believe in fostering open lines of communication with our clients. You’ll always be informed about the progress of your projects.",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/images/Transparent-Communication.png"
          width={1000}
          height={1000}
          quality={100}
          className="h-[90%] w-[90%] object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    rotations:'-rotate-4'
  },
  {
    icon: <Image
      src="/assets/images/icon.png"
      width={100}
      height={100}
      quality={100}
      className="h-[3rem] w-[3rem]"
      alt="icon"
    />,
    signSymbol: <Image
      src="/assets/images/choose.png"
      width={300}
      quality={100}
      height={200}
      className="h-[3rem] w-[10rem]"
      alt="icon"
    />,
    title: "Results-Driven Approach",
    description:
      "Our strategies are data-driven, ensuring that every decision we make is backed by insights and analytics.",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/images/Results-Driven-Approach.png"
          width={1000}
          height={1000}
          quality={100}
          className="h-[90%] w-[90%] object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    rotations:'rotate-12'
  },
];
export function WhyChooseUnderpin() {
  return (
    <div className="pt-5 lg:pt-28">
      <h2 className="text-2xl  sm:text-3xl  md:text-4xl pb-20 lg:text-5xl xl:text-6xl text-center text-secondary font-semibold mb-1">
        Why Choose <br /><span className="text-primary font-sweetSuckerPunch text-3xl sm:text-4xl md:text-5xl pb-8 lg:text-6xl xl:text-7xl ">UNDERPIN SERVICES?</span>
      </h2>
      <StickyScroll  content={content} />
    </div>
  );
}
