'use client'

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import Image from 'next/image';
import { ZA, AE, GB } from 'country-flag-icons/react/3x2'

interface Office {
  city: string;
  country: string;
  address: string;
  email: string;
  tel: string;
  image: string;
}

const offices: Office[] = [
  {
    city: "Sandton",
    country: "South Africa",
    address: "Shop L03-308, Legacy Corner Nelson Mandela Square, Johannesburg, 4320",
    email: "infosandton@ibvglobal.com",
    tel: "+ 27 11 783 6101",
    image: "/assets/images/Sandton.jpg"
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    address: "Gold and Diamond Park, Sheikh Zayed Road, Dubai, UAE",
    email: "infodubai@ibvglobal.com",
    tel: "+ 971 4334 4287",
    image: "/assets/images/Dubai.jpg"
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "46 Park Lane Mayfair, London W1K 1PW, England, UK",
    email: "infolondon@ibvglobal.com",
    tel: "+ 44 20 3988 3680",
    image: "/assets/images/London.jpg"
  }
];

const Countries = () => {
  const [selectedCountry, setSelectedCountry] = React.useState<string>("All");

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
    });
  }, []);


  // Helper function to get the correct flag component
  const getFlagComponent = (country: string) => {
    switch (country) {
      case "South Africa":
        return <ZA className="w-6 h-4" />;
      case "United Arab Emirates":
        return <AE className="w-6 h-4" />;
      case "United Kingdom":
        return <GB className="w-6 h-4" />;
      default:
        return null;
    }
  };

  const filteredOffices = selectedCountry === "All" 
    ? offices 
    : offices.filter(office => office.country === selectedCountry);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">

      <div data-aos="fade-up">
      <h1 className='font-secondary text-4xl mb-4 text-center'>Our Secure Facilities</h1>
      <p className='text-sm text-gray-500 text-center mb-8'>9 Ultra Secure Facilities Across 3 Countries. Trusted by 40,000 members globally.</p>
      </div>

        
      {/* Country Tabs */}
      <div className="flex justify-center gap-8 mb-12">
        <button 
          className={`px-4 py-2  ${selectedCountry === "All" ? "border-b-2 border-primary text-primary" : ""}`}
          onClick={() => setSelectedCountry("All")}
        >
          All
        </button>
        {["South Africa", "United Arab Emirates", "United Kingdom"].map((country) => (
          <button
            key={country}
            className={`flex items-center gap-2 px-4 py-2 ${
              selectedCountry === country ? "border-b-2 border-primary text-primary" : ""
            }`}
            onClick={() => setSelectedCountry(country)}
          >
            {getFlagComponent(country)}
            {country}
          </button>
        ))}
      </div>

      {/* Office Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredOffices.map((office) => (
          <div key={office.city} className="bg-white overflow-hidden shadow-lg">
            <div className="relative h-64">
              <Image
                src={office.image}
                alt={`${office.city} office`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-light text-gray-700 mb-4">
                {office.city}, <span className="text-gray-500">{office.country}</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <strong className="block text-gray-600">Address:</strong>
                  <p className="text-gray-500">{office.address}</p>
                </div>
                <div>
                  <strong className="block text-gray-600">Email:</strong>
                  <a href={`mailto:${office.email}`} className="text-gray-500 hover:text-primary">
                    {office.email}
                  </a>
                </div>
                <div>
                  <strong className="block text-gray-600">Tel:</strong>
                  <a href={`tel:${office.tel}`} className="text-gray-500 hover:text-primary">
                    {office.tel}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
