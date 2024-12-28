'use client'

import Image from "next/image";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Vault() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
    });
  }, []);


  return (
    <section className="relative bg-gray-100 lg:bg-transparent py-16">
      <div className="absolute inset-0 lg:w-[90%] bg-gray-100 hidden lg:block -z-10">
        
      </div>
      <div className="container mx-auto px-6 md:flex md:items-center" data-aos="fade-up">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h3 className="text-gold text-sm uppercase font-light mb-2">
            Why Choose Our Vaults?
          </h3>
          <h2 className="text-4xl font-light font-secondary text-gray-800 leading-tight mb-4">
            Unmatched Security, <br />
            Global Trust
          </h2>
          <p className="text-gray-600 mb-8">
            Our vaults are equipped with the highest level of security systems.
            Each branch adheres to stringent safety protocols, ensuring your
            assets are secure from any threat.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex flex-col space-y-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/assets/icons/biometric.png"
                  alt="Biometric Readers"
                  width={48}
                  height={48}
                />
              </div>
              <span className="text-gold text-sm">Biometric Readers</span>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/assets/icons/ballistic.png"
                  alt="Ballistic Glazing"
                  width={48}
                  height={48}
                />
              </div>
              <span className="text-gold text-sm">Ballistic Glazing</span>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/assets/icons/cctv.png"
                  alt="CCTV Cameras"
                  width={48}
                  height={48}
                />
              </div>
              <span className="text-gold text-sm">CCTV Cameras</span>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/assets/icons/intrusion.png"
                  alt="Intrusion Detection"
                  width={48}
                  height={48}
                />
              </div>
              <span className="text-gold text-sm">Intrusion Detection</span>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/assets/icons/certified.png"
                  alt="Certified Vault Doors"
                  width={48}
                  height={48}
                />
              </div>
              <span className="text-gold text-sm">
                Certified Vault Doors
              </span>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/assets/icons/safe-management-1.png"
                  alt="Safe Management"
                  width={48}
                  height={48}
                />
              </div>
              <span className="text-gold text-sm">Safe Management</span>
            </div>
          </div>

          {/* Learn More Button */}
          <button className="bg-gold text-white px-6 py-2  text-sm font-semibold">
            Learn More
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 md:pl-8 mt-10 md:mt-0" data-aos="fade-left">
          <div className="relative h-[600px] w-full">
            <Image
              src="/assets/images/vault.jpg"
              alt="Vault Door"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vault;
