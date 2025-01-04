"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link';

interface NavLink {
  name: string
  href: string
}

const Navlinks: NavLink[] = [
  // Add your navigation links here
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Packages', href: '/package' },
  { name: 'Industry', href: '/industry' },
]

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

  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header
      className={`fixed top-0 w-full ${isOpen&&'h-full'} lg:h-auto bg-opacity-90 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-0 lg:-translate-y-full'
        }`}
    >
      <div className="w-full bg-white lg:bg-transparent shadow-sm  lg:shadow-none lg:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={1000}
            height={1000}
            priority
            quality={100}
            className="w-[1.6rem] h-[3.4rem] lg:w-[3rem] lg:h-[5rem]"
          />
          <Navigation />
          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden fixed top-6 right-4 z-50 p-2 bg-white rounded-full shadow-lg"
          >
            {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 text-primary h-6" />}
          </button>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed inset-0 bg-white z-40 lg:hidden"
              >
                <motion.ul
                  className="flex flex-col items-center justify-center h-full space-y-4 p-4"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 }
                    }
                  }}
                >
                  {Navlinks.map((link, index) => (
                    <motion.li
                      key={index}
                      variants={{
                        open: {
                          y: 0,
                          opacity: 1,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 24
                          }
                        },
                        closed: { y: 20, opacity: 0 }
                      }}
                      className="w-full text-center"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block w-full px-6 py-3 rounded-full text-lg font-medium transition-colors
                      ${pathname === link.href
                            ? 'bg-gray-200 text-primary'
                            : 'text-secondary hover:bg-gray-100'
                          }`}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
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
