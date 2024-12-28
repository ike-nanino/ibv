"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileNav from "@/components/MovileNav";

function Safety() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section>
      <div className="relative">
        <header className="absolute w-full z-10 flex justify-between items-center p-4 bg-transparent text-white">
          <div className="h-16 lg:h-32">
          <Image
            src="/assets/icons/IBV-Logo.png"
            alt="Logo"
            width={120}
            height={120}
            
          />
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <NavBar />
          </div>

          <div className='lg:hidden'>
            <MobileNav />
          </div>
        </header>
        <div className="relative w-full h-auto overflow-hidden">
          <div className="relative h-[460px] w-full">
            <Image
              src="/assets/images/ibv.jpg"
              alt="Hotel exterior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
              <h1 className="text-3xl lg:text-6xl font-regular mb-4 font-secondary ">
                State of the Art Facilities
              </h1>

              <p className="text-base font-light mt-8 text-white flex flex-col items-center">
                Peace of mind is priceless
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-12">
        {/* Image Section */}
        <div
          className="flex-shrink-0 w-full md:w-1/2 relative h-[600px]"
          data-aos="fade-right"
        >
          <Image
            src="/assets/images/security.jpg"
            alt="Tailored Protection"
            className="object-cover"
            fill
          />
        </div>

        {/* Text Section */}
        <div
          className="w-full md:w-1/2 text-center md:text-left"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-light font-secondary mb-1">
            Safety & Security – Effective,
          </h2>
          <h2 className="text-4xl font-light font-secondary mb-4">
            Defensive, Radical
          </h2>
          <p className="text-gray-700 mb-6">
            IBV prides itself with cutting-edge technology that fortifies and
            protects your most confidential assets and valuable’s. The necessity
            of our electronic designs and high-end systems enables our clientele
            to protect their valuables and have a continuum process of access in
            the most convenient way.
          </p>
          <p className="text-gray-700">
            Our implementations are smooth and disturbance free, yet we ensure
            the most stringent procedures for maximum safety and
            confidentiality.
          </p>
        </div>
      </div>

      <div className="relative bg-blue-50 lg:bg-transparent py-16">
        <div className="absolute inset-0 lg:w-[90%] bg-blue-50 hidden lg:block -z-10"></div>
        <div
          className="container mx-auto px-6 md:flex md:items-center"
          data-aos="fade-up"
        >
          {/* Left Section */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-light font-secondary mb-4">
              Ul-listed Vault Doors
            </h2>
            <p className="text-gray-600 mb-8">
              IBV’s Vault Doors and walls are categorized as an UL 6 compliant
              and has undergone rigorous testing conducted by our highly skilled
              operators. Our specialized “man-trap” doors are designed to
              authenticate each individual’s details and can withstand any
              attack.
            </p>

            <p className="text-gray-700">
              This is where artistry and technology come together for the
              ultimate burglary resistance.
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 md:pl-8 mt-10 md:mt-0" data-aos="fade-left">
            <div className="relative h-[600px] w-full">
              <Image
                src="/assets/images/vaultdoor.jpg"
                alt="Vault Door"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-12">
        {/* Image Section */}
        <div
          className="flex-shrink-0 w-full md:w-1/2 relative h-[600px]"
          data-aos="fade-right"
        >
          <Image
            src="/assets/images/door.jpg"
            alt="Tailored Protection"
            className="object-cover"
            fill
          />
        </div>

        {/* Text Section */}
        <div
          className="w-full md:w-1/2 text-center md:text-left"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-light font-secondary mb-4">
            Bullet Resistant Glass
          </h2>
          <p className="text-gray-700 mb-6">
            These glass doors shall resist any apparatus which includes calibers
            of firearm, rifles and bullets in order to withstand any attack.
          </p>
        </div>
      </div>

      <div className="relative bg-blue-50 lg:bg-transparent py-16">
        <div className="absolute inset-0 lg:w-[90%] bg-blue-50 hidden lg:block -z-10"></div>
        <div
          className="container mx-auto px-6 md:flex md:items-center"
          data-aos="fade-up"
        >
          {/* Left Section */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-light font-secondary mb-4">
              CCTV Cameras
            </h2>
            <p className="text-gray-600 mb-8">
              Closed circuit surveillance systems have an ongoing footage system
              enabling the highest camera capabilities. The CCTV Cameras
              transmits signals to our designated locations in order to employ
              live surveillance
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 md:pl-8 mt-10 md:mt-0" data-aos="fade-left">
            <div className="relative h-[600px] w-full">
              <Image
                src="/assets/images/cctvcam.jpg"
                alt="Vault Door"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-12">
        {/* Image Section */}
        <div
          className="flex-shrink-0 w-full md:w-1/2 relative h-[600px]"
          data-aos="fade-right"
        >
          <Image
            src="/assets/images/dualkey.jpg"
            alt="Tailored Protection"
            className="object-cover"
            fill
          />
        </div>

        {/* Text Section */}
        <div
          className="w-full md:w-1/2 text-center md:text-left"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-light font-secondary mb-4">
            Dual Key Systems
          </h2>
          <p className="text-gray-700 mb-6">
            As an added assurance, we provide a dual key system. A specialized
            key is provided to the client to enable exclusive access as the
            client is accompanied by a designated, highly trained officer.
          </p>
        </div>
      </div>

      <div className="relative bg-blue-50 lg:bg-transparent py-16">
        <div className="absolute inset-0 lg:w-[90%] bg-blue-50 hidden lg:block -z-10"></div>
        <div
          className="container mx-auto px-6 md:flex md:items-center"
          data-aos="fade-up"
        >
          {/* Left Section */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-light font-secondary mb-4">
              Bio-Metric Readers
            </h2>
            <p className="text-gray-600 mb-8">
              Our specialized biometric readers have an integrated system which
              provides a proficient environment for controlled access and
              identity authentication. This revolutionary software captures the
              details of the client with use of the touch screen terminal.
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 md:pl-8 mt-10 md:mt-0" data-aos="fade-left">
            <div className="relative h-[600px] w-full">
              <Image
                src="/assets/images/bio.jpg"
                alt="Vault Door"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-12 mb-10">
        {/* Image Section */}
        <div
          className="flex-shrink-0 w-full md:w-1/2 relative h-[600px]"
          data-aos="fade-right"
        >
          <Image
            src="/assets/images/seismic.jpg"
            alt="Tailored Protection"
            className="object-cover"
            fill
          />
        </div>

        {/* Text Section */}
        <div
          className="w-full md:w-1/2 text-center md:text-left"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-light font-secondary mb-4">
            Seismic Detection
          </h2>
          <p className="text-gray-700 mb-6">
            IBV’s seismic detection provides an added measure of peace of mind
            enhancing our security level. This feature comprises of a detective
            system enabling instantaneous reaction time should there be any
            tampering in or around the vault parameters.
          </p>
        </div>
      </div>

      <div className="relative h-[460px] w-full">
        <Image
          src="/assets/images/vault2.jpg"
          alt="Vault"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
              <h1 className="text-3xl lg:text-6xl font-regular font-secondary mb-4 ">
                Always discreet and professional
              </h1>

              <p className="text-base font-light text-white flex flex-col items-center text-center font-secondary px-4 lg:px-64">
                When dealing with sensitive information, we understand that our prestigious clientele requires the utmost confidentiality when dealing with their assets and valuables. IBV provides and instills the highest level of customer service and respects your privacy, whilst offering you the ultimate protection.
              </p>
            </div>
      </div>
    </section>
  );
}

export default Safety;
