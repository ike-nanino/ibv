"use client"

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AutoPlayVideo: React.FC = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: true, // Whether animation should happen only once
    });
  }, []);
  
  return (
    <div className="relative w-full h-auto overflow-hidden">
      <video
        className="w-full h-auto"
        src="/assets/videos/IBV-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      >
        
      </video>

      <div data-aos="fade-up" className="absolute inset-x-0 bottom-24 md:bottom-28 lg:bottom-96 flex justify-center mb-3 lg:mb-10">
        <h1 className='text-[#CCB37D]'>Unmatched Security, Global Trust</h1>
      </div>

      <div data-aos="fade-up" className="absolute inset-x-0 bottom-12 md:bottom-16 lg:bottom-72 flex justify-center">
      <p className='text-xl lg:text-6xl font-medium  lg:mt-10 text-white flex flex-col items-center font-secondary'>
        Your Peace of Mind Is Our
        <span className='font-secondary'>Priority</span>
      </p>
      </div>
    </div>
  );
};

export default AutoPlayVideo;
