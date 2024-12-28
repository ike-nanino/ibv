"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileNav from "@/components/MovileNav";

function HowItWorks() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
    });
  }, []);

  const faqData = [
    {
      question: "Do we have to disclose the contents of the box?",
      answer:
        "No. IBV is strictly private and confidential. IBV and their staff do not know the contents of your box. Our viewing cubicles within the vault are not monitored by CCTV as it is for your private viewing.",
    },
    {
      question: "Who knows what is in the Safe deposit locker?",
      answer:
        "Only the client and the nominated key holders would know what is in the box.",
    },
    {
      question: "Who has access to the box?",
      answer:
        "The client and the nominated key holders have access to the box. All nominated key holders are required to be present with the primary key holder and have their original ID document on hand in order to be added on to our system for access.",
    },
    {
      question: "Does my next of kin have access to the box?",
      answer:
        "No. Should anything happen to the primary and secondary key holders, we will have to contact the nominated next of kin. They will however not have access to the box unless appointed as an executor. The next of kin may assist us in contacting the client.",
    },
    {
      question:
        "Under what circumstances will IBV International Vaults open the box",
      answer:
        "The Safe deposit locker will not be opened unless the client in question is present together with our legal team and proper court documentation is produced by the legal authorities. The client will have to have the keys to open the locker an IBV does not hold any spare locker keys.",
    },
    {
      question: "Can I update my box after a few months?",
      answer:
        "Yes. You can either upgrade or downgrade your box during the interim of the contract; a pro-rata fee will be incurred by the client for an upgrade.",
    },
    {
      question: "What is the procedure when accessing my box",
      answer:
        "Once the registration is complete, identification has to be produced on every visit thereafter (ID, Passport, driver’s license), you will be identified by fingerprint and picture recognition. All clients are escorted into the vault to your box, you will unlock your safe locker with a staff member, remove your inner box and complete your transaction in a private viewing cubicle.",
    },
    {
      question: "What happens when I die?",
      answer:
        "A nominated executor of the clients estate will be allowed access into the vault to either cancel and remove the contents or apply for a new safe deposit locker and store the valuables. Executor to your valuables. The executor will have to provide IBV with the relevant documentation which includes the death certificate & ID book of the primary key holder, Executor certificate issued by the court & their ID book. Power of attorney will be required in special cases.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main>
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

          <div className="lg:hidden">
            <MobileNav />
          </div>
        </header>
        <div className="relative w-full h-auto overflow-hidden">
          <div className="relative h-[460px] w-full">
            <Image
              src="/assets/images/how-it-works.jpg"
              alt="Hotel exterior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-white p-4"
              data-aos="fade-up"
            >
              <h1 className="text-4xl md:text-6xl font-regular mb-4 font-secondary ">
                How It Works?
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-12" data-aos="fade-up">
        <h3 className="text-gold my-6 text-xl">How to apply</h3>
        <h1 className="font-secondary text-6xl mb-8">
          Become an exclusive member
        </h1>
        <p className="text-gray-500 px-10">
          All of our members are checked to ensure we maintain the highest
          standard of client base, so that each member can be reassured that
          their deposits are safe.
        </p>
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
              Identity check
            </h3>
            <p className="text-gray-600">
              We ask you to bring your photo ID (passport or driving licence)
              and proof of address (utility bill or bank statement dated within
              3 months).
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
              Choose size of safe required
            </h3>
            <p className="text-gray-600">
              An open session where you are free to browse, explore and discuss
              your options within our vault. Decide what size safe is going to
              work for you or your family.
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
            <h3 className="text-xl font-semibold text-gray-800">Biometrics</h3>
            <p className="text-gray-600">
              A short, none evasive process where we will take your biometric
              patterns.
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
              Sign contract
            </h3>
            <p className="text-gray-600">
              In your own time and at your discretion we ask you to read and
              then sign our contract of business.
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
              Make payment
            </h3>
            <p className="text-gray-600">Simple, fast and easy card payment.</p>
          </div>

          {/* Step 6 */}
          <div
            className="text-center space-y-4 flex flex-col items-center"
            data-aos="fade-up"
          >
            <h2 className="text-4xl text-gold font-light border-b-2 border-black font-primary">
              6.
            </h2>
            <h3 className="text-xl font-semibold text-gray-800">
              Welcome pack
            </h3>
            <p className="text-gray-600">
              Once completed, we hand you a welcome pack, which includes the key
              to your safe(s). You can store immediately at this point.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h1
          className="text-4xl text-center mb-8 font-secondary"
          data-aos="fade-up"
        >
          Frequently Asked Questions
        </h1>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-gold rounded-sm">
              <button
                className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg">{faq.question}</span>
                <span
                  className="text-base transition-transform duration-200"
                  style={{
                    transform:
                      openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ˅
                </span>
              </button>
              <div
                className="px-4 overflow-hidden transition-all duration-200"
                style={{
                  maxHeight: openIndex === index ? "200px" : "0",
                  opacity: openIndex === index ? 1 : 0,
                  padding: openIndex === index ? "0 1rem 1rem 1rem" : "0 1rem",
                }}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default HowItWorks;
