import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

const footerSections = [
  {
    title: "Services",
    items: [
      { name: "SEO", href: "#" },
      { name: "Web Development", href: "#" },
      { name: "Social Media Marketing", href: "#" },
      { name: "Pay Per Click(PPC) Management", href: "#" },
      { name: "App Development", href: "#" },
    ]
  },
  {
    title: "Packages",
    items: [
      { name: "SEO Packages", href: "#" },
      { name: "SMO Packages", href: "#" },
      { name: "PPC Packages", href: "#" },
      { name: "Web Packages", href: "#" },
      { name: "Game Packages", href: "#" },
      { name: "Other Packages", href: "#" },
    ]
  },
  {
    title: "Industry",
    items: [
      { name: "SEO for Lawyers", href: "#" },
      { name: "SEO Service for Hotels", href: "#" },
      { name: "SEO for Manufacturing", href: "#" },
      { name: "SEO for IT Companies", href: "#" },
      { name: "Travel SEO Services", href: "#" },
      { name: "Healthcare SEO Services", href: "#" },
    ]
  },
]

const locations = ["Los Angeles", "New York", "San Antonio", "Houston, TX", "Chicago", "Dubai"]

const contactInfo = [
  { title: "Info mail Id", content: "contact@underpinservices.com" },
  { title: "USA Mobile No.", content: "+1 123456789" },
  { title: "USA Landline No.", content: "+1 123456789" },
]

const socialMedia = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
]

export default function Footer() {
  return (
    <footer className="bg-white px-4 pb-5 pt-12 md:px-6 lg:px-8 w-full lg:w-[90%] mx-auto">
      <div className="grid pl-8 lg:pl-0 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <div className="col-span-full lg:col-span-1 lg:block hidden">
          <Image
            src="/assets/images/logo.png"
            alt="Underpin Services Logo"
            width={160}
            height={160}
            className="h-40 w-40 object-contain"
            priority
          />
        </div>
        {footerSections.map((section) => (
          <div key={section.title} className={'space-y-4 md:block hidden'}>
            <h3 className="text-2xl font-semibold text-orange-500">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-secondary text-lg hover:text-orange-500 transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="space-y-4">
          {contactInfo.map((info) => (
            <div key={info.title} className="space-y-2">
              <h3 className="text-lg lg:text-2xl font-semibold text-orange-500">{info.title}</h3>
              <p className="text-secondary lg:text-lg">{info.content}</p>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <h3 className="text-lg lg:text-2xl font-semibold text-orange-500">Location</h3>
          <ul className="gap-2 flex flex-wrap items-center">
            {locations.map((location, ind) => (
              <li key={location} className="text-base lg:text-lg text-secondary">{location} <span className={`${(ind === locations?.length - 1) && 'hidden'}`}>|</span></li>

            ))}

          </ul>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-between gap-4">
        <div className="flex gap-4">
          {socialMedia.map((item) => (
            <Link key={item.name} href={item.href} className="rounded-full bg-orange-500 p-2 text-white hover:bg-orange-600 transition-colors duration-200">
              <item.icon className="h-5 w-5" />
              <span className="sr-only">{item.name}</span>
            </Link>
          ))}
        </div>
        <p className="text-sm text-secondary lg:pt-5 text-center">&copy; {new Date()?.getFullYear()} Underpin Services. All rights reserved.</p>
      </div>
    </footer>
  )
}

