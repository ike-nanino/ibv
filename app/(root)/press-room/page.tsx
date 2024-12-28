'use client'


import MobileNav from '@/components/MovileNav';
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import React from 'react'


const articles = [
    {
      image: '/assets/images/pr_zawya.jpg',
      source: 'Zawya',
      title: 'IBV International Vaults brings London’s most exclusive private vault to Dubai',
      link: 'https://www.zawya.com/en/press-release/companies-news/ibv-international-vaults-brings-londons-most-exclusive-private-vault-to-dubai-pos0lwts',
    },
    {
      image: '/assets/images/pr_the_guardian.jpg',
      source: 'The Guardian',
      title: 'Billionaires only, please! London vault for the ultra-rich opens',
      link: 'https://www.theguardian.com/news/2019/dec/01/billionaires-only-please-london-vault-for-the-ultra-rich-opens-its-doors',
    },
    {
      image: '/assets/images/pr_robb.jpg',
      source: 'Robb Report',
      title: 'This New Billionaires-Only Bank Vault in London Will Chauffeur Clients Around in a Rolls-Royce',
      link: 'https://robbreport.com/lifestyle/news/international-bank-vaults-london-park-lane-2884717/',
    },
    {
      image: '/assets/images/pr_business_insider.jpg',
      source: 'Business Insider',
      title: 'A new bank vault exclusively for billionaires is opening in a former mansion on one of London’s ritziest streets, and its ultra-wealthy clients will be chauffeured around in a Rolls-Royce',
      link: 'https://africa.businessinsider.com/lifestyle/a-new-bank-vault-exclusively-for-billionaires-is-opening-in-a-former-mansion-on-one/qnvkcxr',
    },
    {
      image: '/assets/images/pr_iol.jpg',
      source: 'IOL',
      title: 'Global vault facilities provider IBV International Vaults takes over Standard Bank’s safe custody business clients',
      link: 'https://www.iol.co.za/business-report/companies/global-vault-facilities-provider-ibv-international-vaults-takes-over-standard-banks-safe-custody-business-clients-b06489e9-0033-4cac-a03c-cc03c053c55a',
    },
    {
      image: '/assets/images/pr_moneyweb.jpg',
      source: 'Money Web',
      title: 'IBV buys Standard Bank’s safe custody business',
      link: 'https://www.moneyweb.co.za/moneyweb-radio/ibv-buys-standard-banks-safe-custody-business/',
    },
    {
      image: '/assets/images/pr_the_guardian.jpg',
      source: 'The Mail & Guardian',
      title: 'People turn to private safe deposit vaults over load-shedding theft fears',
      link: 'https://mg.co.za/news/2023-02-01-people-turn-to-private-safe-deposit-vaults-over-load-shedding-theft-fears/',
    },
    {
      image: '/assets/images/pr_newsanyway.jpg',
      source: 'News Anyway',
      title: 'IBV International Vaults Hosts Christmas Cocktail Evening with Jacob & Co',
      link: 'https://www.newsanyway.com/2022/12/15/ibv-international-vaults-hosts-christmas-cocktail-evening-with-jacob-co/',
    },
    
  ];


function Press() {
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
            src="/assets/images/press.jpg"
            alt="Hotel exterior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-6xl md:text-5xl font-regular mb-4 font-secondary ">Press Room</h1>
          </div>
        </div>
      </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 my-8 ">
      {articles.map((article, index) => (
        <div key={index} className="bg-white overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            className="w-full h-60 object-cover"
            width={400}
            height={240}
          />
          <div className="p-4">
            <p className="text-gray-500 text-sm py-2">Published on {article.source}</p>
            <h3 className="text-lg font-semibold mt-2">{article.title}</h3>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-gold hover:text-black"
            >
              Read More &rarr;
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Press
