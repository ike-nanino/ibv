"use client"

import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation"




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



function NavBar() {
    const pathname = usePathname();
  return (
   <nav className="flex gap-8 text-xl">
    
    {
        links.map((link, index) => {
        return (
            <Link 
            key={index} 
            href={link.path}
            className={`${link.path === pathname && 'text-white'} capitalize text-base font-light ease-in duration-500`}
            >{link.name}</Link>
        )
  
    })
   }</nav>
  )
}

export default NavBar