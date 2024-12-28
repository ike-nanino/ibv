import React from "react";
import Image from 'next/image';
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo */}
        <div className="col-span-1">
        <Image 
        src='/assets/icons/IBV-Logo.png'
        alt="Logo"
        width={120}
        height={120}
      />
        </div>

        {/* About IBV */}
        <div>
          <h3 className="text-gold font-semibold mb-4">About IBV</h3>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>How it works</li>
            <li>Safety & Security</li>
            <li>Press Room</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-gold font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Safe Deposit Boxes</li>
            <li>Jewellery Storage</li>
            <li>Bullion Storage</li>
            <li>Document Storage</li>
            <li>Currency Storage</li>
            <li>Bullion Sales</li>
          </ul>
        </div>

        {/* Branches */}
        <div>
          <h3 className="text-gold font-semibold mb-4">Branches</h3>
          <ul className="space-y-2 text-sm">
            <li>London, United Kingdom</li>
            <li>Dubai, UAE</li>
            <li>Cape Town, South Africa</li>
            <li>Park Square, South Africa</li>
            <li>Gateway, South Africa</li>
            <li>Musgrave, South Africa</li>
            <li>Sandton, South Africa</li>
            <li>Alice Lane, South Africa</li>
            <li>Rosebank, South Africa</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-gold font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <FaInstagram />
            <FaFacebook />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        <p>
          Terms & Conditions | Privacy Policy | Copyright 2024 © IBV
          International Vaults
        </p>
      </div>
    </footer>
  );
};

export default Footer;
