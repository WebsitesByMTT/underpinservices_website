"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide header on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full h-full bg-opacity-90 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-0 lg:-translate-y-full'
      }`}
    >
      <div className="w-full bg-white shadow-sm lg:bg-transparent lg:shadow-none lg:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={1000}
            height={1000}
            priority
            quality={100}
            className="w-[2rem] h-[3rem] lg:w-[3rem] lg:h-[5rem]"
          />
          <Navigation />
          <Image
            src="/assets/images/LetsTalk.png"
            alt="letsTalk"
            width={300}
            height={200}
            quality={100}
            className="w-[6rem] lg:block hidden cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
