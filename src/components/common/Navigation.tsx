'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navlinks = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Services',
        href: '/services',
    },
    {
        name: 'Portfolio',
        href: '/portfolio',
    },
    {
        name: 'Contact',
        href: '/contact',
    }
]

const Navigation = () => {
    const pathname = usePathname()

    return (
        <nav>
            <ul className='lg:flex  hidden items-center space-x-8 bg-white px-2.5 py-2 border rounded-full'>
                {Navlinks.map((link, index) => (
                    <li key={index} className={`${pathname === link.href ? 'bg-gray-200  text-primary  ' : 'text-secondary'} px-3 rounded-full py-1`}>
                        <Link
                            href={link.href}
                            className={`transition duration-150 ease-in-out`}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation

