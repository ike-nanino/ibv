import TimelineTabs from '@/components/TimelineTabs'
import SecuritySection from '@/components/SecuritySection'
import Countries from '@/components/Countries'
import React from 'react'
import Image from 'next/image'
import MobileNav from '@/components/MovileNav'
import NavBar from '@/components/NavBar'

function AboutUs() {
  return (
    <div>

<div className="relative">
    <header className="absolute w-full z-10 flex justify-between items-center p-4 bg-transparent text-white">
      <Image 
        src='/assets/icons/IBV-Logo.png'
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
            src="/assets/images/map.jpg"
            alt="Hotel exterior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-6xl md:text-5xl font-regular mb-4 font-secondary ">About Us</h1>
          </div>
        </div>
      </div>
      </div>


        <SecuritySection />
        <TimelineTabs />

        <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-12">
        {/* Image Section */}
        <div
          className="flex-shrink-0 w-full md:w-1/2 relative h-[600px]"
          data-aos="fade-right"
        >
          <Image    
            src="/assets/images/boss.jpg"
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
      
          <h2 className="text-xl text-gold font-light font-secondary mb-8">
          From the Desk of Managing Director
          </h2>
          <p className="text-gray-700 mb-16 pr-16">
          At IBV London, we understand the importance of securing your valuable possessions. Located at 46 Park Lane, Mayfair in the prestigious Grade II listed Stanhope House in London, we are on a mission to redefine your safekeeping experience. We welcome you to experience our impregnable security and unmatchable customer service that will guarantee peace of mind.
          </p>

          <p> Sean Hoey <br/>
          <span>MD, IBV London</span> </p>
        </div>
      </div>


      <div className="text-center py-12" data-aos="fade-up">
        <h3 className="text-gold my-6 text-xl">Our Core Values</h3>
        <h1 className="font-secondary text-6xl mb-8">
        Inspiring Peace Of Mind Through Innovation.
        </h1>
        
      </div>



      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div
            className="text-center space-y-4 flex flex-col items-center"
            data-aos="fade-up"
          >
            <h2 className="text-4xl text-gold font-regular border-b-2 border-black font-primary ">
              1.
            </h2>
            <h3 className="text-xl font-semibold text-gray-800">
              Trust
            </h3>
            <p className="text-gray-600">
            We believe that the consistent assurance of service delivery develops trust. Trust builds relationships and relationships build our business. Fundamental honesty and integrity is the keystone of our success, and driving customer peace of mind for the long term guides our actions.
            </p>
          </div>

          {/* Step 2 */}
          <div
            className="text-center space-y-4 flex flex-col items-center"
            data-aos="fade-up"
          >
            <h2 className="text-4xl text-gold font-light border-b-2 border-black font-primary">
              2.
            </h2>
            <h3 className="text-xl font-semibold text-gray-800">
              Respect
            </h3>
            <p className="text-gray-600">
            With a customer-focused ethos we respect our customers’ privacy, passions, pursuits and possessions through all of our offerings
            </p>
          </div>

          {/* Step 3 */}
          <div
            className="text-center space-y-4 flex flex-col items-center"
            data-aos="fade-up"
          >
            <h2 className="text-4xl text-gold font-light border-b-2 border-black font-primary">
              3.
            </h2>
            <h3 className="text-xl font-semibold text-gray-800">Customer Focus</h3>
            <p className="text-gray-600">
            Our culture is built upon what is best for our customers. We transfer their risk to ourselves, becoming the custodians of their most precious possessions.
            </p>
          </div>

          {/* Step 4 */}
          <div
            className="text-center space-y-4 flex flex-col items-center"
            data-aos="fade-up"
          >
            <h2 className="text-4xl text-gold font-light border-b-2 border-black font-primary">
              4.
            </h2>
            <h3 className="text-xl font-semibold text-gray-800">
              Innovation
            </h3>
            <p className="text-gray-600">
            Innovation is activation. It is dreaming big dreams and then doing. We are agile and move with the times to ensure our products are always relevant, carry value and leave a legacy.
            </p>
          </div>

          {/* Step 5 */}
          <div
            className="text-center space-y-4 flex flex-col items-center"
            data-aos="fade-up"
          >
            <h2 className="text-4xl text-gold font-light border-b-2 border-black font-primary">
              5.
            </h2>
            <h3 className="text-xl font-semibold text-gray-800">
              Quality
            </h3>
            <p className="text-gray-600">Our business is built upon quality. Quality is never by accident - it is with intelligent effort and focus that we strive to deliver the best. The best of design, resources and people.</p>
          </div>

          
        </div>
      </div>

        <Countries />
      
    </div>
  )
}

export default AboutUs
