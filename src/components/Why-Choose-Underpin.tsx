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
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    )
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
    title: "Expertise",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/images/Commitment-to-Quality.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    )
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
    title: "Expertise",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/images/Customised-Solutions.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    )
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
    title: "Expertise",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/images/Transparent-Communication.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    )
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
    title: "Expertise",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/images/Results-Driven-Approach.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    )
  },
];
export function WhyChooseUnderpin() {
  return (
    <div className="lg:h-[95vh]  pt-5 lg:pt-16">
      <h2 className="text-2xl sm:text-3xl shadow-[0px_200px_55px_2px_rgb(255,255,255)] bg-white  md:text-4xl pb-8 lg:text-5xl xl:text-6xl text-center text-secondary font-semibold mb-1">
        Why Choose <br /><span className="text-primary font-sweetSuckerPunch text-3xl sm:text-4xl md:text-5xl pb-8 lg:text-6xl xl:text-7xl ">UNDERPIN SERVICES?</span>
      </h2>
      <StickyScroll content={content} />
    </div>
  );
}
