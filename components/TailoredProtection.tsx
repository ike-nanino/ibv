"use client"


import Image from 'next/image'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function TailoredProtection() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
    });
  }, []);


  return (
    <section className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-12">
      {/* Image Section */}
      <div className="flex-shrink-0 w-full md:w-1/2 relative h-[600px]" data-aos="fade-right">
        <Image
          src="/assets/images/tailored-protection.jpg"
          alt="Tailored Protection"
          className="object-cover"
          fill
        />
      </div>
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-up">
        <p className="text-sm text-gold mb-2">Secure. Private. Discreet.</p>
        <h2 className="text-4xl font-light font-secondary mb-4">Tailored Protection For Every Need</h2>
        <p className="text-gray-500 mb-6">
          At IBV, we understand that no two clients are the same. That’s why we
          offer <span className='text-gold'>a wide range of safe deposit box sizes,</span> ensuring you have the
          perfect space to protect what matters most—from jewelry and documents
          to priceless heirlooms.
        </p>
        <p className="text-gray-500">
          For those seeking the <span className='text-gold'>ultimate in privacy and security, our luxurious
          private suites offer discreet, personalized access</span>  to your valuables
          in a secure environment. Designed for your peace of mind, these
          suites provide an unparalleled experience with absolute
          confidentiality and multi-tiered protection.
        </p>
      </div>
    </section>
  )
}

export default TailoredProtection
