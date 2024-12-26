'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface NavLink {
  name: string
  href: string
}

const Navlinks: NavLink[] = [
  // Add your navigation links here
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <ul className='lg:flex hidden items-center space-x-8 bg-white px-2.5 py-2 border rounded-full'>
        {Navlinks.map((link, index) => (
          <li 
            key={index} 
            className={`${pathname === link.href ? 'bg-gray-200 text-primary' : 'text-secondary'} px-3 rounded-full py-1`}
          >
            <Link
              href={link.href}
              className="transition duration-150 ease-in-out"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-white rounded-full shadow-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="flex flex-col items-center justify-center h-full space-y-8 p-4"
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
    </nav>
  )
}

