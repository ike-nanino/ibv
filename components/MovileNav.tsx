'use client'

import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import { CiMenuFries } from 'react-icons/ci'
import Link from "next/link";
import { useState } from "react";



const links = [
    {
        name: 'About us',
        path: '/about-us',
    },
    {
        name: 'Services',
        path: '/services',
    },
    {
        name: 'How it works',
        path: '/how-it-works',
    },
    {
        name: 'Safety and Security',
        path: '/safety-security',
    },
    {
        name: 'Press Room',
        path: '/press-room',
    }, 
]

function MobileNav() {

     const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const handleLinkClick = () => {
        setIsOpen(false);
      };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="flex justify-center items-center" asChild>
        <button
          className="flex justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CiMenuFries className="text-2xl font-bold text-gold" />
        </button>
        </SheetTrigger>
        <SheetContent side='left' className='flex flex-col  border-none shadow-none w-screen h-screen'>


            <SheetTitle className="mt-16 mb-16 text-center text-2xl text-black">
            IBV
          </SheetTitle>

            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => {
                    return (
                        <Link 
                        href={link.path}
                        key={index}
                        className={`${link.path === pathname && 'text-gold'} text-xl text-black capitalize hover:text-green-400 ease-in duration-500`}
                        onClick={handleLinkClick}
                        >
                        {link.name}
                        </Link>
                    )
                })}
            </nav>


            <div className="mt-10 text-center">
          <Link
            href="/sign-in"
            className="px-6 py-2 text-lg font-medium text-white bg-gold rounded-md hover:bg-gold hover:text-black transition-all duration-300"
            onClick={handleLinkClick}
          >
            Sign In
          </Link>

          </div>

        </SheetContent>
    </Sheet>
  )
}

export default MobileNav