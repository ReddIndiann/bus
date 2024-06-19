import React from 'react';
import ".././globals.css";
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div
        className="w-full min-h-screen bg-cover bg-center relative flex items-end"
        style={{ backgroundImage: "url('../bb2.svg')" }}
      >
        <div className="bg-transparent text-white  md:p-10 lg:p-20 absolute -bottom-6 left-0 w-full md:w-3/4 lg:w-3/4 ">
          <h1 className="font-bold  md:text-4xl lg:text-3xl leading-tight mb-4  lg:-mt-16">
          About Us
          </h1>
          <p className="text-base md:text-lg lg:text-sm mb-3">
          Welcome to BuzStopBoys, where community meets cleanliness. Our mission  
          <br className="hidden md:block" />
          is to revolutionize public hygiene by transforming unclean areas into clean,
          <br className="hidden md:block" />
          healthy spaces. With a commitment to environmental health and years of
          <br className="hidden md:block" />
          dedicated service, we offer free cleaning services and raise awareness to 
          <br className="hidden md:block" />
          inspire a cleaner, safer world for everyone.
          </p>
          


        </div>
      </div>
     
      <div className="flex justify-center items-center h-screen bg-white">
      <div className="flex flex-col md:flex-row items-center m-10 md:m-20 lg:m-40">
        <div className="mb-10 md:mr-10 md:mb-0">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">BuzStopBoys: Purifying and Restoring Environments Across Ghana</h1>
          <p className="text-sm md:text-lg">
            Welcome to <span className="font-bold">BuzStopBoys</span>, where we're dedicated to restoring Africa's landscapes. Our initiative focuses on cleaning and revitalizing degraded areas, promoting sustainable land management practices for a greener future. Join us in our mission to reclaim and restore Africa's ecosystems.
          </p>
        </div>
        <div className="letter-background">
          B
        </div>
      </div>
    </div>
    <div className="w-full bg-black flex justify-center items-center py-16">
  <div className="text-center w-full px-4">
    <h1 className="text-3xl md:text-4xl lg:text-5xl text-green-500 mt-4">
      BuzStopBoys Goals
    </h1>
    <p className="text-white mt-6 text-lg md:text-xl lg:text-2xl">
      Through its network of dedicated restoration champions and valuable technical and financial     <br className="hidden md:block" />
      partners, BuzStopBoys is committed to revitalizing and cleaning up our continent's land. Our    <br className="hidden md:block" />
      mission is to create cleaner environments where both people and nature can thrive    <br className="hidden md:block" />
      harmoniously.
    </p>
    <div className="flex flex-wrap justify-center items-center mt-16 gap-24">
      <div className="text-center">
        <Image src="/abticon1.png" width={70} height={70} alt="Integration Icon" className="mx-auto mb-4"/>
        <p className="text-white">Integration for Cleaner<br/> Landscapes in Ghana</p>
      </div>
      <div className="text-center">
        <Image src="/abticon2.png" width={70} height={70} alt="Patriotism Icon" className="mx-auto mb-4"/>
        <p className="text-white">Fostering Patriotism <br/>Through Our Actions</p>
      </div>
      <div className="text-center">
        <Image src="/abticon3.png" width={70} height={70} alt="Selflessness Icon" className="mx-auto mb-4"/>
        <p className="text-white">Advocating Selflessness <br/>Through our Initiatives</p>
      </div>
      <div className="text-center">
        <Image src="/abticon4.png" width={70} height={70} alt="Ghana First Icon" className="mx-auto mb-4"/>
        <p className="text-white">Advancing the 'Ghana First'<br/> Agenda Through Our Efforts</p>
      </div>
      {/* New container for bottom row */}
      <div className="flex justify-center w-full md:w-1/2 gap-10 mt-10">
        <div className="text-center">
          <Image src="/abticon5.png" width={50} height={50} alt="Responsible Citizenship Icon" className="mx-auto mb-4"/>
          <p className="text-white">Encouraging Responsible<br/> Citizenship Through Our <br/>Endeavors</p>
        </div>
        <div className="text-center">
          <Image src="/abticon6.png" width={70} height={70} alt="Empowerment Icon" className="mx-auto mb-4"/>
          <p className="text-white">Empowering Ghanaians to<br/> Realize Their Power in Nation <br/>Building</p>
        </div>
      </div>
    </div>
  </div>
</div>

      <div className="w-full h-88 flex flex-col justify-center items-center py-16 bg-white">
        <div className="w-11/12 md:w-10/12 lg:w-12/12 text-start mx-auto">
          <p className="text-black font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            The BuzStopBoys: Champions of Best Practices    <br className="hidden md:block" /> for Forest & Landscape Restoration
          </p>
          <p className="text-black text-lg md:text-xl lg:text-2xl">
            <span className="font-bold">BuzStopBoys</span> is a dynamic non-governmental organization dedicated to the transformation of unsanitary spaces into pristine environments. Our unwavering commitment lies in fostering cleanliness and hygiene, ensuring that communities thrive in healthy surroundings.
          </p>
        </div>
      </div>
      <div
  className="w-full pt-10 bg-cover bg-center first-container"
  style={{ 
    backgroundImage: "url('../../statement.svg')", 
    height: "25rem",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
/>
   
      
<div className="w-full bg-white flex justify-center items-center py-16">
  <div className="w-11/12 md:w-10/12 lg:w-12/12 text-start mx-auto">
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
      <div className="mb-8 lg:mb-0 lg:mr-8">
        <div className="font-bold text-4xl mb-4">1. OUR MOTIVATION</div>
        <p className="font-normal text-2xl mb-4">Our motivation comes from a statement    <br className="hidden md:block" /> from Apostle Kwadwo Safo. That states:    <br className="hidden md:block" />Service to mankind, Service to God.</p>
      </div>
      <div className="mb-8 lg:mb-0 lg:mr-8">
        <div className="font-bold text-4xl mb-4">2. MISSION STATEMENT</div>
        <p className="font-normal text-2xl mb-4">Our Mission is to promote clean,   <br className="hidden md:block" /> green Environment (CGEn) through patriotism,    <br className="hidden md:block" />selflessness and volunteerism.</p>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12"> {/* Added flex container */}
      <div className="mb-8 lg:mb-0 lg:mr-8">
        <div className="font-bold text-4xl mb-4">3. OUR VISION</div>
        <p className="font-normal text-2xl mb-4">Our vision extends beyond boundaries,    <br className="hidden md:block" />aspiring to ignite a global movement    <br className="hidden md:block" />towards environmental consciousness and    <br className="hidden md:block" />action, ultimately fostering a sustainable    <br className="hidden md:block" />future for generations to come.</p>
      </div>
      <div className="mb-8 lg:mb-0 lg:mr-8">
        <div className="font-bold text-4xl mb-4">4. ASPIRATIONS</div>
        <p className="font-normal text-2xl mb-4">To become the biggest household name   that <br className="hidden md:block" /> will continually remind people that   <br className="hidden md:block" /> the environment is the only home for the   <br className="hidden md:block" />  of the human race.</p>
      </div>
    </div>
    <div className="flex justify-center ">
  <Link href="/contact" passHref>
    <button className="bg-black text-green-500 px-12 py-2 rounded-full border border-white hover:bg-green-700 text-xl flex items-center justify-center mt-4">
      Make A Donation       
      <Image src="/donationicon.png" alt='' width={24} height={24} className='ml-2' />
    </button>     
  </Link>
</div>

  </div>
</div>

      <div className='bg-black w-full py-16'>
      <div className='text-left ml-14'>
        <p className='text-white text-4xl md:text-5xl lg:text-6xl mb-8 '>Meet Our Board Members</p>
      </div>
      <div className='flex flex-wrap justify-center'>
        <div className='m-4'>
          <Image src='/board1.svg' width={400} height={400} alt="Heneba K. Safo" />
          <p className='text-white font-bold text-xl mt-4'>Heneba K. Safo</p>
          <div className='text-white mt-2'>Executive Director/Founder</div>
        </div>
        <div className='m-4'>
          <Image src='/board2.svg' width={400} height={400} alt="Solomon K. Adjei" />
          <p className='text-white font-bold text-xl mt-4'>Solomon K. Adjei</p>
          <div className='text-white mt-2'>Organizer / IT Support Specialist</div>
        </div>
        <div className='m-4'>
          <Image src='/board3.svg' width={400} height={400} alt="Nelson G. Awere" />
          <p className='text-white font-bold text-xl mt-4'>Nelson G. Awere</p>
          <div className='text-white mt-2'>Fundraising Coordinator</div>
        </div>
        <div className='m-4'>
          <Image src='/board4.svg' width={400} height={400} alt="Samuel Apraku" />
          <p className='text-white font-bold text-xl mt-4'>Samuel Apraku</p>
          <div className='text-white mt-2'>Human Resources Manager</div>
        </div>
        <div className='m-4'>
          <Image src='/board5.svg' width={400} height={400} alt="Kwame Baah" />
          <p className='text-white font-bold text-xl mt-4'>Kwame Baah</p>
          <div className='text-white mt-2'>Volunteer Coordinator</div>
        </div>
        <div className='m-4'>
          <Image src='/board6.svg' width={400} height={400} alt="Elle Custers" />
          <p className='text-white font-bold text-xl mt-4'>Elle Custers</p>
          <div className='text-white mt-2'>Advocacy Specialist</div>
        </div>
      </div>
    </div><div className="w-full bg-white` flex justify-center items-center h-auto py-16">
  <div className="text-center bg-white w-11/12 lg:w-3/4">
    <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-8">
      Community Feedback
    </h1>
    <p className="text-2xl md:text-3xl lg:text-4xl text-black mb-8">
      The impact of BuzStopBoys' work is tangible and inspiring. Their commitment to cleanliness and public health is commendable.
    </p>
    <p className="text-xl md:text-2xl lg:text-3xl text-black font-semibold mt-8">
      Prof. John Doe
    </p>
    <p className="text-lg md:text-xl lg:text-2xl text-black mt-4">
      Environmental Scientist
    </p>
  </div>
</div>

    </>
  )
}
