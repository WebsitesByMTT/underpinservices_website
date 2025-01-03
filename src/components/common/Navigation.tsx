'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


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

     
    </nav>
  )
}

