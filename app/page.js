import React from 'react';
import "./globals.css";
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div
        className="w-full min-h-screen bg-cover bg-center relative flex items-end"
        style={{ backgroundImage: "url('../Hero.svg')" }}
      >
        <div className="bg-transparent text-white  md:p-10 lg:p-20 absolute mt left-0 w-full md:w-3/4 lg:w-3/4 ">
          <h1 className="font-bold  md:text-4xl lg:text-3xl leading-tight mb-4  lg:-mt-16">
            Join Buzstopboys <br className="hidden md:block" />
            Volunteering: Make a <br className="hidden md:block" />
            Difference Today!
          </h1>
          <p className="text-base md:text-lg lg:text-sm mb-3">
            At Buzstopboys, we believe in community and giving back. Join us to transform<br className="hidden md:block" />
            lives and strengthen neighborhoods. Together, we can build a brighter future.
          </p>
          <Link href="/contact" passHref>
  <button className="bg-transparent text-green-500 px-4 py-1 rounded-full border border-white hover:bg-green-700 text-lg flex items-center">
    Make A Donation       
    <Image src="/donationicon.png" alt='' width={20} height={20} className='ml-2' />
  </button>     
</Link>

        </div>
      </div>

      <section className="w-full h-1/2 bg-white flex justify-center items-center py-8 h-screen">
  <div className="text-center bg-white mx-4">
    <p className="font-bold text-xl mt-8">WHO WE ARE</p>
    <h1 className="font-bold text-3xl md:text-4xl lg:text-4xl text-black mt-4">
      We are BuzStopBoys, a non-governmental organization <br className="hidden md:block" /> dedicated to ensuring that unclean places are cleaned.
    </h1>
    <p className="mt-4">
      BuzStopBoys is a dedicated non-governmental organization committed to transforming unclean areas into clean,<br className="hidden md:block" />
      healthy environments. Our mission is to promote public hygiene and community well-being through effective cleaning<br className="hidden md:block" />
      initiatives.
    </p>

    <div className="flex justify-center mt-10"> {/* Wrapping the button in a flex container */}
      <Link href="/contact" passHref>
        <button className="bg-black text-green-500 px-4 py-2 rounded-full border border-white hover:bg-green-700 text-base flex items-center justify-center mt-4">
          More about us      
          <Image src="/rightdownicon.png" alt='' width={15} height={15} className='ml-2' />
        </button>     
      </Link>
    </div>
  </div>
</section>


      <div
        className="w-full bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('../learn.svg')", height: "85vh" }}
      >
        <div className="bg-transparent p-6 md:p-10 lg:p-20 ">
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
          <div className="w-48 h-44  mb-10 lg:mb-0 bg-cover bg-center relative flex flex-col justify-center items-center text-center text-black" style={{ backgroundImage: "url('../hov.png')" }}>
  <div className='font-bold text-3xl lg:text-5xl sm:text-5xl'>500+</div>
  <div className="mt-4 text-base lg:text-lg sm:text-lg">
    public spaces <br /> revitalized
  </div>
</div>

          <div className="mb-10 lg:mb-0">
            <div className='font-bold text-3xl lg:text-5xl  sm:text-5xl' >16</div>
            <div className="mt-4">Regions. <span className="font-bold">BuzStopBoys</span> is<br /> dedicated to making all of Ghana,<br /> not just Accra, clean and healthy.</div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:mx-10 mt-12 w-11/12 lg:w-3/4 text-center lg:text-left">
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
            <Image src='/map.svg' alt='pp' width={300} height={500} />
          </div>
        </div>
      </div>
      <div className="bg-black w-full flex items-center justify-center" style={{ height: "350px" }}>
  <div className="w-11/12 lg:w-5/6 text-center lg:text-left">
    <p className="text-green-500 text-2xl md:text-3xl lg:text-4xl mb-4">What we do</p>
    <p className="text-white text-lg md:text-xl lg:text-3xl">
      We are dedicated to raising community awareness about the importance of environmental health. Our team offers free cleaning services to transform public spaces, and we lead by example to inspire others to join us in creating cleaner, healthier environments.
    </p>
  </div>
</div>
<div className="w-full bg-white-500 flex justify-center items-center py-16">
  <div className="text-center w-11/12 lg:w-3/4">
    <h1 className="font-bold text-3xl md:text-4xl lg:text-4xl text-black mb-6">
      Join us in the mission to create a cleaner and,<br className="hidden md:inline" /> healthier environment!
    </h1>
    <p className="text-base md:text-lg lg:text-xl text-black mb-8">
      Your support can make a significant impact. Together, let’s take meaningful steps towards  <br/>sustainability, reducing waste, and preserving our planet for future generations. Support us today<br/> and be a part of the positive change our world needs.
    </p>
    <div className="flex justify-center mt-10"> {/* Wrapping the button in a flex container */}
      <Link href="/contact" passHref>
        <button className="bg-black text-green-500 px-4 py-2 rounded-full border border-white hover:bg-green-700 text-base flex items-center justify-center mt-4">
        Make A Donation       
          <Image src="/donationicon.png" alt='' width={15} height={15} className='ml-2' />
        </button>     
      </Link>
    </div>
  </div>
</div>
<div className="bg-black py-8 md:py-16">
  <div>
  <div className="container mx-auto text-start">
    <p className="text-green-500 text-2xl md:text-3xl text-center mb-8 ml-4 md:ml-0 lg:text-start">Updates from the <span className="underline-offset-2 underline">Field</span></p>
  
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-8">
  <div className="mb-8 md:mb-0 text-center md:text-left mx-auto">
    <Image src="/update1.png" alt='' width={350} height={400} className='mx-auto md:mx-0 md:ml-20' />
    <p className="text-white mt-4 text-start lg:ml-20">1957 got featured on the street today with <br/>the @buzstopboys Dial:*447*1957# for your tickets.</p>
    <div className="text-green-500 mt-1 cursor-pointer lg:ml-20">Learn More</div>
  </div>
  <div className="mb-8 md:mb-0 text-center md:text-left mx-auto">
    <Image src="/update2.svg" alt='' width={350} height={400} className='mx-auto md:mx-0 md:ml-20' />
    <p className="text-white mt-4 text-start lg:ml-20">Roads Minister Asenso-Boakye donates <br/>GHc10,000 to the “Buzstopboys” initiative</p>
    <div className="text-green-500 mt-1 cursor-pointer  lg:ml-20">Learn More</div>
  </div>
  <div className="mb-8 md:mb-0 text-center md:text-left mx-auto">
    <Image src="/update3.svg" alt='' width={350} height={400} className='mx-auto md:mx-0 md:ml-20' />
    <p className="text-white mt-4 text-start lg:ml-20">Mallam Junction Clean-Up with BuzStopBoys</p>
    <div className="text-green-500 mt-1 cursor-pointer lg:ml-20">Learn More</div>
  </div>
</div>

    <p className='text-white font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center mt-10 md:mt-20 mb-8'>Upcoming Events</p>

  </div>
</div>
<div
  className="w-full pt-10 bg-cover bg-center first-container"
  style={{ 
    backgroundImage: "url('../upcoming.svg')", 
    height: "15rem",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
/>
<div className="w-11/12 m-7 bg-black px-4 md:px-0 flex flex-col md:flex-row justify-between items-center text-white">
  <div className="mb-8 md:mb-0 md:w-2/3">
    <div className="font-bold text-3xl md:text-4xl mb-4">Launch of the School <br/>Clean-Up Campaign</div>
    <div>
      Join <span className="font-bold">BuzStopBoys</span> for a community clean-up at Mallam Junction.<br/> Volunteers will work together to clean the area and raise awareness <br/>about the importance of environmental health. Cleaning supplies and <br/>refreshments will be provided.
    </div>
  </div>
  <div className="md:w-1/3 lg:text-right">
   
  </div>


  <div className="md:w-1/3 lg:text-right">
  <div className="font-bold text-2xl md:text-3xl mb-4">Location: Mallam <br/>Junction, Accra</div>
  <div>Date: April 26, 2024</div>
  <div className="flex items-center justify-end mt-7">
    Next
    <Image src="/righticon.png" alt='' width={10} height={10} className='ml-2' />
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
      className="px-8 py-4 lg:px-14 w-full lg:py-6 rounded-l-full border-t border-b border-l border-black focus:outline-none  text-lg"
    />
    <button className="px-6 py-4 lg:px-10 lg:py-6 bg-white text-black font-normal rounded-r-full border-t border-b border-r border-black focus:outline-none hover:bg-green-500 text-lg">
      Send
    </button>
  </div>
</div>


  </div>
  <h1 className="font- text-6xl lg:text-10xl mt-16 absolute lg:mt-80  mt-96  text-7xl font-semibold ">Newsletter</h1>
</div>

    </>
  )
}
