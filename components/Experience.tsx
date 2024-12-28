'use client'

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Experience() {

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: true, // Whether animation should happen only once
    });
  }, []);


  return (
    <div className="text-center py-12" data-aos="fade-up">
      <div className="lg:mx-64 px-5">
        <h1 className="font-secondary text-5xl leading-relaxed my-4">
          Experience State-of-the-art Security
        </h1>

        <p className="text-sm text-[#CCB37D] font-medium my-5">
          with our exclusive private vaults
        </p>

        <p className="text-gray-500 text-base font-light">
          Our cutting-edge security systems and luxurious facilities ensure that
          your assets are not only safeguarded but also housed in an environment
          of sophistication and elegance.
        </p>
      </div>
    </div>
  );
}

export default Experience;
