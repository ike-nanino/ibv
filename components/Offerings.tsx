"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

function Offerings() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
    });
  }, []);

  const services = [
    {
      title: "Safe Deposit Boxes",
      description:
        "Secure your most prized possessions with confidence in our ultra-secure, multi-layered private vaults.",
      image: "/assets/images/box.jpg",
    },
    {
      title: "Private Safes",
      description:
        "Experience tailored protection with personalized private safes designed for discreet, high-value storage.",
      image: "/assets/images/safe.jpg",
    },
    {
      title: "Insurance Cover",
      description:
        "Comprehensive insurance coverage to ensure your valuables are protected against any unforeseen risks.",
      image: "/assets/images/cover.jpg",
    },
    {
      title: "Buy and Store Gold",
      description:
        "Buy, sell, and securely store LBMA-certified gold and precious metals with preferential rates and expert handling.",
      image: "/assets/images/gold.jpg",
    },
  ];

  return (
    <section className="p-6 md:p-12 mx-14">
      <div data-aos="fade-up" className="px-10">
        <h3 className="text-sm text-[#CCB37D] text-center my-8">Offerings</h3>
        <h2 className="text-5xl font-medium text-center my-4 font-secondary">
          Your Wealth, Protected and Empowered
        </h2>
        <p className="text-gray-700 text-center mb-12 text-sm mt-6">
          From safeguarding your treasures in impenetrable vaults to offering
          exclusive access to bullion trading and bespoke insurance, our
          services redefine security and elevate your wealth management
          experience.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        data-aos="fade-right"
      >
        {services.map((service, index) => (
          <div key={index} className="text-center">
            <div className="relative w-full h-56 mb-4">
              <Image
                src={service.image}
                alt={service.title}
                className="object-cover"
                fill
              />
            </div>
            <h3 className="text-xl font-light font-secondary mb-3">{service.title}</h3>
            <p className="text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Offerings;
