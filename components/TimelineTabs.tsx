"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const timelineData = [
  {
    year: "2002",
    title: "The Vision Takes Root",
    description:
      "While waiting in line at Standard Bank's vault facility in Musgrave, Durban, our founder, Ashok Sewnarain, witnessed a woman being told she’d have to wait three years for a safe deposit box. This pivotal moment inspired him to create a private vault company of his own—thus, IBV International Vaults was born. Later in 2022, IBV acquired this iconic branch too.",
    image: "/assets/images/2002.jpg", // Replace with the correct image path
  },
  {
    year: "2004",
    title: "Expanding Horizons",
    description:
      "IBV opened its first international branch in London, offering cutting-edge vault facilities for high-profile clients globally.",
    image: "/assets/images/2004.jpg",
  },
  {
    year: "2005",
    title: "A Legacy of Trust",
    description:
      "IBV became a household name in South Africa with its expansion to Johannesburg and Cape Town.",
    image: "/assets/images/2005.jpg",
  },
  {
    year: "2006",
    title: "A Legacy of Trust",
    description:
      "IBV became a household name in South Africa with its expansion to Johannesburg and Cape Town.",
    image: "/assets/images/2006.jpg",
  },
  {
    year: "2020",
    title: "A Legacy of Trust",
    description:
      "IBV became a household name in South Africa with its expansion to Johannesburg and Cape Town.",
    image: "/assets/images/2020.jpg",
  },
  {
    year: "2022",
    title: "A Legacy of Trust",
    description:
      "IBV became a household name in South Africa with its expansion to Johannesburg and Cape Town.",
    image: "/assets/images/2022.jpg",
  },
  {
    year: "2023",
    title: "A Legacy of Trust",
    description:
      "IBV became a household name in South Africa with its expansion to Johannesburg and Cape Town.",
    image: "/assets/images/2023.jpg",
  },
  {
    year: "2024",
    title: "A Legacy of Trust",
    description:
      "IBV became a household name in South Africa with its expansion to Johannesburg and Cape Town.",
    image: "/assets/images/2024.jpg",
  },
  
];

const TimelineTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-[#0C363D] text-white px-8 py-16">

        <div className="text-center px-16 py-16">
            <h1 className="text-gold mb-8 font-semibold font-secondary text-4xl">Our History : Global Legacy of Luxury and Security</h1>
            <p className="text-sm">What started as a single vision in Durban has become a global standard for elite security and unparalleled luxury. Under the leadership of Ashok Sewnarain, IBV International Vaults has evolved into more than just vaults—we safeguard legacies while offering a lifestyle few can access. From the heart of Johannesburg to the elegance of Mayfair, each milestone reflects our commitment to protecting what matters most, in the most extraordinary way.</p>
        </div>
      {/* Tabs */}
      <div className="flex justify-center mb-12 space-x-6">
        {timelineData.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`relative text-sm font-semibold py-2 px-4 ${
              activeTab === index ? "text-gold" : "text-gray-300"
            }`}
          >
            <span>{item.year}</span>
            {activeTab === index && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 bottom-0 h-1 bg-gold"
              />
            )}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        {/* Left: Text Content */}
        <div>
          <h1 className="text-6xl font-light mb-24">{timelineData[activeTab].year}</h1>
          <h2 className="text-2xl font-normal font-secondary mb-4">{timelineData[activeTab].title}</h2>
          <p className="text-sm leading-relaxed">{timelineData[activeTab].description}</p>
        </div>

        {/* Right: Image */}
        <div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-64 md:h-96"
          >
            <Image
              src={timelineData[activeTab].image}
              alt={`Image for ${timelineData[activeTab].year}`}
              className="rounded-lg shadow-lg"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineTabs;
