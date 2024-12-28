'use client'


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

function Contact() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
    });
  }, []);


  return (
    <div className='bg-[#1B3835] py-16 text-center px-10 ' data-aos="fade-up">
      <h2 className='text-white text-4xl mb-4 font-secondary'>
        Ready To Protect Your Precious Possessions?{' '}
        <span className='text-[#C4A962] font-secondary'>
          Book A Tour & Experience the Most Sophisticated Security Systems today.
        </span>
      </h2>
      
      <button className='bg-[#C4A962] text-white px-8 py-3 mt-8 hover:bg-[#b39855] transition-colors'>
        CONTACT US
      </button>
    </div>
  )
}

export default Contact
