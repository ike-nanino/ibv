"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileNav from "@/components/MovileNav";

function Services() {
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
          <Image
            src="/assets/icons/IBV-Logo.png"
            alt="Logo"
            width={120}
            height={120}
          />
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
              src="/assets/images/our-services.jpg"
              alt="Hotel exterior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
              <h1 className="text-6xl md:text-5xl font-regular mb-4 font-secondary ">
                Our Services
              </h1>
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
            src="/assets/images/safedeposit.jpg"
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
            Safe deposit boxes
          </h2>
          <p className="text-gray-700 mb-6">
            Our safety deposit lockers vary in four convenient sizes to
            customize your storage needs. Every assigned locker is fitted with a
            dual control security system. To further our security, IBV has
            implemented “key-codes” that are specific to an individual’s SDL.
          </p>
        </div>
      </div>

      <div className="relative bg-gray-100 lg:bg-transparent py-16">
        <div className="absolute inset-0 bg-gray-100 hidden lg:block -z-10"></div>
        <div
          className="container mx-auto px-6 md:flex md:items-center"
          data-aos="fade-up"
        >
          {/* Left Section */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-light text-gold font-secondary mb-4">
            Jewellery Storage
            </h2>
            <p className="text-gray-600 mb-8">
              Our clients have embedded trust in our facility to protect family
              heirlooms, precious metals, time pieces and priceless collections
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 md:pl-8 mt-10 md:mt-0" data-aos="fade-left">
            <div className="relative h-[600px] w-full">
              <Image
                src="/assets/images/jewlery.jpg"
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
            src="/assets/images/krugerrands.jpg"
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
          Bullion Storage
          </h2>
          <p className="text-gray-700 mb-6">
            Gold has repeatedly become one of the most fundamentally useful
            resources that exists in human society. IBV specializes in safe
            keeping for your precious gold and silver commodities.
          </p>
        </div>
      </div>

      <div className="relative bg-gray-100 lg:bg-transparent py-16">
        <div className="absolute inset-0  bg-gray-100 hidden lg:block -z-10"></div>
        <div
          className="container mx-auto px-6 md:flex md:items-center"
          data-aos="fade-up"
        >
          {/* Left Section */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold  font-secondary mb-4">
            Document Storage
            </h2>
            <p className="text-gray-600 mb-8">
              Secure document storage services offer a reliable solution for
              safeguarding important records, from personal documents such as
              wills, property agreements; to business-critical files. Stored in
              our specialized, high-security facilities, documents are protected
              from risks such as unauthorized access, fire, and environmental
              damage.
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 md:pl-8 mt-10 md:mt-0" data-aos="fade-left">
            <div className="relative h-[600px] w-full">
              <Image
                src="/assets/images/documentstorage.jpg"
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
            src="/assets/images/currency.jpg"
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
          Currency Storage
          </h2>
          <p className="text-gray-700 mb-6">
            IBV serves as a storage of value and enables you to reliably save,
            store and retrieve.
          </p>
        </div>
      </div>

      <div className="relative bg-gray-100 lg:bg-transparent py-16">
        <div className="absolute inset-0 bg-gray-100 hidden lg:block -z-10"></div>
        <div
          className="container mx-auto px-6 md:flex md:items-center"
          data-aos="fade-up"
        >
          {/* Left Section */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-light font-secondary mb-4">
            Bullion Sales
            </h2>
            <p className="text-gray-600 mb-8">
              IBV Gold is a division of IBV International Vaults which
              specializes in the trade of Gold and silver commodities. Your
              specific purchase of any precious metals can be easily stored into
              your locker.
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 md:pl-8 mt-10 md:mt-0" data-aos="fade-left">
            <div className="relative h-[600px] w-full">
              <Image
                src="/assets/images/kruger.jpg"
                alt="Vault Door"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
