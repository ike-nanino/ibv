
import React from "react";
import NavBar from "./NavBar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import MobileNav from "./MovileNav";


function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-transparent text-white">
      <Image 
        src='/assets/icons/IBV-Logo.png'
        alt="Logo"
        width={120}
        height={120}
      />
      <div className="hidden lg:flex items-center gap-8">
        <NavBar />
      </div>

      <Link
      href='/sign-in'
      
      >

      <Button className="bg-gold hover:bg-gold lg:block hidden">
          Sign In
      </Button>
      
      </Link>

      <div className="lg:hidden">
      <MobileNav />
      </div>

      

     
    </header>
  );
}

export default Header;