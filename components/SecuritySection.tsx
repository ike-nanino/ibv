import Image from "next/image";
import React from 'react'

const services = [
  {
    title: "Safe Deposit Boxes",
    icon: "/assets/icons/safe-deposit.png", 
  },
  {
    title: "Jewellery Storage",
    icon: "/assets/icons/jewellery-storage.png",
  },
  {
    title: "Bullion Storage",
    icon: "/assets/icons/bullion-storage.png",
  },
  {
    title: "Document Storage",
    icon: "/assets/icons/document-storage.png",
  },
  {
    title: "Currency Storage",
    icon: "/assets/icons/currency-storage.png",
  },
  {
    title: "Bullion Sales",
    icon: "/assets/icons/bullion-sales.png",
  },
];

const SecuritySection = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20 text-center">
      {/* Heading */}
      <h2 className="text-3xl lg:text-4xl font-medium font-secondary mb-4 text-[#0C363D]">
        Unparalleled Security For 40,000 Members Globally
      </h2>
      <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
        Established in 2004, IBV has experienced remarkable growth, expanding our global footprint
        in just 20 years. Our rapidly growing industry boasts a diverse network of over 40,000
        members worldwide. We are on a mission to become the world’s most exclusive provider of
        private vault services. At IBV, we are committed to upholding the highest global standards
        in security while offering prestigious services that cater to a discerning clientele. Our
        expertise encompasses state-of-the-art security solutions, gold exchange, and exclusive
        offerings designed for high-end clients. Above all, we pride ourselves on delivering
        invaluable service that meets the unique needs of each client, ensuring their assets are
        safeguarded with the utmost care and confidentiality.
      </p>

      {/* Services */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <div className="relative w-16 h-16">
              <Image
                src={service.icon}
                alt={service.title}
                layout="fill"
                objectFit="contain"
                className="mx-auto"
              />
            </div>
            <h3 className="text-lg font-medium">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecuritySection;
