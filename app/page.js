


'use client'
import React, { useEffect } from 'react';
import "./globals.css";
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {

    const countUpElements = document.querySelectorAll('.count-up');
    countUpElements.forEach(el => {
      const target = parseInt(el.getAttribute('data-target'));
      let count = 0;
      const timer = setInterval(() => {
        el.textContent = count;
        if (count >= target) {
          clearInterval(timer);
        }
        count += 1;
      }, 100000 / target);
    });
  }, []);

  return (
    <>
      <div
        className="w-full min-h-screen bg-cover bg-center relative flex items-end"
        style={{ backgroundImage: "url('../Hero.svg')" }}
      >
        <div className="bg-transparent text-white md:p-10 lg:p-20 absolute mt left-0 w-full md:w-3/4 lg:w-3/4 ">
          <h1 className="hero-text font-bold md:text-4xl lg:text-4xl leading-tight mb-4 lg:-mt-16">
            Join Buzstopboys <br className="hidden md:block" />
            Volunteering: Make a <br className="hidden md:block" />
            Difference Today!
          </h1>
          <p className="hero-text text-base md:text-lg lg:text-sm mb-3">
            At Buzstopboys, we believe in community and giving back. Join us to transform<br className="hidden md:block" />
            lives and strengthen neighborhoods. Together, we can build a brighter future.
          </p>
          <Link href="/contact" passHref>
            <button className="hero-button bg-transparent text-green-500 px-2 py-0 rounded-full border border-white hover:bg-green-700 text-lg flex items-center">
              Make A Donation       
              <img src="/donationicon.png" alt='' width={20} height={20} className='ml-2' />
            </button>     
          </Link>
        </div>
      </div>

      <section className="w-full bg-white flex justify-center items-center py-10 ">
        <div className="text-center bg-white mx-4">
          <p className="font-bold text-xl who-we-are-text">WHO WE ARE</p>
          <h1 className="font-bold text-2xl md:text-4xl lg:text-4xl text-black mt-4 who-we-are-text">
            We are BuzStopBoys, a non-governmental organization <br className="hidden md:block" /> dedicated to ensuring that unclean places are cleaned.
          </h1>
          <p className="mt-4 who-we-are-text">
            BuzStopBoys is a dedicated non-governmental organization committed to transforming unclean areas into clean,<br className="hidden md:block" />
            healthy environments. Our mission is to promote public hygiene and community well-being through effective cleaning<br className="hidden md:block" />
            initiatives.
          </p>

          <div className="flex justify-center mt-10">
            <Link href="/contact" passHref>
              <button className="bg-black text-green-500 px-4 py-2 rounded-full border border-white hover:bg-green-700 text-base flex items-center justify-center mt-4">
                More about us      
                <img src="/rightdownicon.png" alt='' width={15} height={15} className='ml-2' />
              </button>     
            </Link>
          </div>
        </div>
      </section>

      <div className="w-full bg-cover bg-center relative civil-responsibility-bg">
        <img src='../learn.svg' className='w-full' /> 
        <div className="bg-transparent absolute top-0 bottom-0 left-0 right-0 p-6 md:p-10 lg:p-20 ">
          <h1 className="font-semibold text-2xl md:text-4xl lg:text-4xl text-white leading-tight mb-4">
            Encourage individuals to take personal responsibility <br className="hidden md:inline" /> for their environmental impact. Promote a culture of <br className="hidden md:inline" /> environmental stewardship and sustainable living
          </h1>
          <p className="text-white text-base md:text-lg lg:text-xl font-medium mt-10">
            CIVIL RESPONSIBILITY
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center py-1" style={{ minHeight: "700px" }}>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:mx-10 mt-20 w-11/12 lg:w-3/4 text-center lg:text-left">
          <div className="mb-10 lg:mb-0">
            <div className='font-bold text-4xl lg:text-5xl sm:text-5xl'>BuzStopBoys <br />at a Glance</div>
            <div className="mt-4">Explore our efforts to clean and revitalize <br />public spaces across Ghana.</div>
          </div>
          <div className="w-48 h-44 mb-10 lg:mb-0 bg-cover bg-center relative flex flex-col justify-center items-center text-center text-black" style={{ backgroundImage: "url('../hov.png')" }}>
            <div className='font-bold text-3xl lg:text-5xl sm:text-5xl count-up' data-target="500">0</div>
            <div className="mt-4 text-base lg:text-lg sm:text-lg">
              public spaces <br /> revitalized
            </div>
          </div>
          <div className="mb-10 lg:mb-0">
            <div className='font-bold text-3xl lg:text-5xl sm:text-5xl count-up' data-target="16">0</div>
            <div className="mt-4">Regions. <span className="font-bold">BuzStopBoys</span> is<br /> dedicated to making all of Ghana,<br /> not just Accra, clean and healthy.</div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:mx-10 mt-12 w-11/12 lg:w-3/4 text-center lg:text-left">
  <div className="flex-1 mb-10 lg:mb-0 lg:text-lg sm:text-2xl">
    <div className="mb-4 flex items-center">
      <img src="/checkcircle.svg" alt="" width={15} height={15} className="mr-2" />
      <span>Greater Accra Region</span>
    </div>
    <div className="mb-4 flex items-center">
      <img src="/checkcircle.svg" alt="" width={15} height={15} className="mr-2" />
      <span>Ashanti Region</span>
    </div>
    <div className="mb-4 flex items-center">
      <div className="w-5 h-5 mr-2"></div>
      <span>Western Region</span>
    </div>
    <div className="mb-4 flex items-center">
      <div className="w-5 h-5 mr-2"></div>
      <span>Central Region</span>
    </div>
    <div className="mb-4 flex items-center">
      <div className="w-5 h-5 mr-2"></div>
      <span>Eastern Region</span>
    </div>
    <div className="mb-4 flex items-center">
      <div className="w-5 h-5 mr-2"></div>
      <span>Volta Region</span>
    </div>
    <div className="mb-4 flex items-center">
      <div className="w-5 h-5 mr-2"></div>
      <span>Northern Region</span>
    </div>
    <div className="mb-4 flex items-center">
      <div className="w-5 h-5 mr-2"></div>
      <span>Upper East Region</span>
    </div>
  </div>
          <div className="flex-1 mb-10 lg:mb-0  lg:text-lg sm:text-2xl" >
            <div className="mb-4">Greater Accra Region</div>
            <div className="mb-4">Ashanti Region</div>
            <div className="mb-4">Western Region</div>
            <div className="mb-4">Central Region</div>
            <div className="mb-4">Eastern Region</div>
            <div className="mb-4">Volta Region</div>
            <div className="mb-4">Northern Region</div>
            <div className="mb-4">Upper East Region</div>
          </div>
          <div className="flex justify-center">
            <img src='/map.svg' alt='pp' width={300} height={500} />
          </div>
        </div>
      </div>

      <div className="bg-black w-full flex items-center justify-center py-20" >
        <div className="w-full lg:w-5/6 text-center lg:text-left">
          <p className="text-green-500  md:text-3xl lg:text-5xl mb-4 leading-none: 1 ">What we do</p>
          <p className="text-white text-lg md:text-xl lg:text-3xl typing-animation leading-relaxed tracking-wide">
  We are dedicated to raising community awareness about the importance of environmental health. Our team offers free cleaning services to transform<br className="hidden md:block" />public spaces, and we lead by example to inspire others to join us in creating cleaner, healthier environments.
</p>

        </div>
      </div>

 
<div className="w-full bg-white-500 flex justify-center items-center py-5">
  <div className="text-center w-11/12 lg:w-3/4">
    <h1 className="font-bold text-3xl md:text-4xl lg:text-4xl text-black mb-6">
      Join us in the mission to create a cleaner and,<br className="hidden md:inline" /> healthier environment!
    </h1>
    <p className="text-base md:text-lg lg:text-xl text-black mb-3">
      Your support can make a significant impact. Together, let’s take meaningful steps towards  <br/>sustainability, reducing waste, and preserving our planet for future generations. Support us today<br/> and be a part of the positive change our world needs.
    </p>
    <div className="flex justify-center mt-0"> {/* Wrapping the button in a flex container */}
      <Link href="/contact" passHref>
        <button className="bg-black text-green-500 px-4 py-2 rounded-full border border-white hover:bg-green-700 text-base flex items-center justify-center mt-4">
        Make A Donation       
          <img src="/donationicon.png" alt='' width={15} height={15} className='ml-2' />
        </button>     
      </Link>
    </div>
  </div>
</div>
<div className="bg-black py-8 md:py-16">
  <div className="container mx-auto text-start px-4">
    <p className="text-green-500 text-2xl md:text-3xl text-center mb-8 md:mb-12 lg:text-start">
      Updates from the <span className="underline-offset-2 underline">Field</span>
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      <div className="flex flex-col items-start"> {/* Align items vertically */}
        <div className="flex flex-col items-start w-full">
          <div className="relative w-full h-64 md:h-80 mb-4 bg-transparent">
            <img 
              src="/update1.png" 
              alt='' 
              className='object-contain w-full h-full'
            />
          </div>
          <div className="flex flex-col justify-between h-full ml-20"> {/* Make the text container fill the remaining height */}
            <p className="text-white text-sm md:text-base mb-2 ">
              1957 got featured on the street today with <br/>the @buzstopboys Dial:*447*1957# for your tickets.
            </p>
            <div className="text-green-500 cursor-pointer">Learn More</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <div className="flex flex-col items-start w-full">
          <div className="relative w-full h-64 md:h-80 mb-4 bg-transparent">
            <img 
              src="/update2.svg" 
              alt='' 
              className='object-contain w-full h-full'
            />
          </div>
          <div className="flex flex-col justify-between h-full  ml-20">
            <p className="text-white text-sm md:text-base mb-2">
              Roads Minister Asenso-Boakye donates <br/>GHc10,000 to the "Buzstopboys" initiative
            </p>
            <div className="text-green-500 cursor-pointer">Learn More</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <div className="flex flex-col items-start w-full">
          <div className="relative w-full h-64 md:h-80 mb-4 bg-transparent">
            <img 
              src="/update3.svg" 
              alt='' 
              className='object-contain w-full h-full'
            />
          </div>
          <div className="flex flex-col justify-between h-full lg:ml-20  ">
            <p className="text-white text-sm md:text-base mb-2">
              Mallam Junction Clean-Up with BuzStopBoys
            </p>
            <div className="text-green-500 cursor-pointer">Learn More</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      <div className="w-full h-96 flex flex-col justify-center items-center py-16">
        <div className="font-bold w-full max-w-screen-lg lg:w-3/4 lg:max-w-screen-xl flex flex-col lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <div className="font-bold text-xl lg:text-xl">
              Sign up for our bi-monthly newsletter and <br className="hidden md:block" />become an expert on the Buzstopboys and <br className="hidden md:block" />social relations.
            </div>
          </div>
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start w-full" style={{ maxWidth: "30rem" }}>
              <input
                type="search"
                placeholder="Email address*"
                className="px-8 py-4 lg:px-14 w-full lg:py-6 rounded-l-full border-t border-b border-l border-black focus:outline-none text-lg"
              />
              <button className="newsletter-button px-6 py-4 lg:px-10 lg:py-6 bg-white text-black font-normal rounded-r-full border-t border-b border-r border-black focus:outline-none hover:bg-green-500 text-lg">
                Send
              </button>
            </div>
          </div>
        </div>
        <h1 className="font- text-6xl lg:text-10xl mt-16 absolute lg:mt-80 mt-96 text-7xl font-semibold">Newsletter</h1>
      </div>
    </>
  )
}
