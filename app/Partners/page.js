'use client'
import React from 'react';
import ".././globals.css";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const partners = [
  { name: 'African Union Development Agency (AUDA-NEPAD)', src: '/logos/auda-nepad.png' },
  { name: 'Bioversity International', src: '/logos/bioversity.png' },
  { name: 'Catholic Relief Services (CRS)', src: '/logos/crs.png' },
  { name: 'CIFOR', src: '/logos/cifor.png' },
  { name: 'CIRAD', src: '/logos/cirad.png' },
  { name: 'Conservation International (CI)', src: '/logos/ci.png' },
  { name: 'Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)', src: '/logos/giz.png' },
  { name: 'Ecoplanet Bamboo', src: '/logos/ecoplanet.png' },
  { name: 'Food and Agriculture Organization of the United Nations (FAO)', src: '/logos/fao.png' },
  { name: 'Global EverGreening Alliance', src: '/logos/gea.png' },
  { name: 'Global Water Partnership Southern Africa', src: '/logos/gwpsa.png' },
  { name: 'Heinz Sielmann Stiftung', src: '/logos/heinz.png' },
  { name: 'International Center for Tropical Agriculture (CIAT)', src: '/logos/ciat.png' },
  { name: 'International Tree Foundation', src: '/logos/itf.png' },
  { name: 'International Union for Conservation of Nature (IUCN)', src: '/logos/iucn.png' },
  { name: 'Jane Goodall Institute (JGI)', src: '/logos/jgi.png' },
  { name: 'Justdiggit', src: '/logos/justdiggit.png' },
  { name: 'Kijani Forests for Change', src: '/logos/kijani.png' },
];

const PARTNERS_PER_PAGE = 10;
export default function Home() {

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(partners.length / PARTNERS_PER_PAGE);
  const startIdx = (currentPage - 1) * PARTNERS_PER_PAGE;
  const selectedPartners = partners.slice(startIdx, startIdx + PARTNERS_PER_PAGE);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };


  return (
    <>
     <div
        className="w-full min-h-screen bg-cover bg-center relative flex items-end"
        style={{ backgroundImage: "url('../bb2.svg')" }}
      >
        <div className="bg-transparent text-white  md:p-10 lg:p-20 absolute -bottom-6 left-0 w-full md:w-3/4 lg:w-3/4 ">
          <h1 className="font-bold  md:text-4xl lg:text-3xl leading-tight mb-4  lg:-mt-16">
          Our Partners
          </h1>
          <p className="text-base md:text-lg lg:text-sm mb-3">
          Our partners play a crucial role in our mission to revolutionize public hygiene and create
          <br className="hidden md:block" />
          cleaner, healthier communities. By collaborating with BuzStopBoys, you join a dedicated
          <br className="hidden md:block" />
          network committed to transforming unclean areas into safe, vibrant spaces. Together, we
          <br className="hidden md:block" />
          provide free cleaning services and promote environmental health awareness, inspiring 
          <br className="hidden md:block" />
          lasting change and fostering a safer world for everyone. Your partnership amplifies our
          <br className="hidden md:block" />
          impact, helping us reach more communities and achieve our vision of a cleaner, healthier     <br className="hidden md:block" />   planet.
          </p>
          


        </div>
      </div>


      <div className="flex flex-col md:flex-row justify-center items-start h-auto md:h-screen bg-white">
  <div className="flex flex-col md:flex-row items-start m-4 md:m-10 lg:m-20">
    <div className="mb-10 md:mr-10 md:mb-0 md:w-1/2">
      <h1 className="text-5xl md:text-4xl font-bold mb-4 lg:text-7xl">
        Partnering For   <br className="hidden md:block" />
        A Cleaner Ghana
      </h1>
      <p className="text-sm md:text-lg ">
        Across Ghana <span className="font-bold">BuzStopBoys</span> and our partners are transforming unclean areas into clean, healthy environments. The initiatives highlighted here showcase our collaborative efforts to improve public hygiene, create safer communities, and promote environmental health. Together, we are making a significant impact by providing free cleaning services and raising awareness about the importance of cleanliness and sustainability.
      </p>
    </div>
    <div className="md:w-1/2 flex flex-col items-center text-center py-8">
      <p className="font-bold lg:text-4xl mt-8 md:mt-0">Do you want to partner with   <br className="hidden md:block" /> us?</p>
      <button className="flex justify-center ">
  <Link href="/contact" passHref>
    <button className="bg-black text-green-500 px-32 py-4 rounded-full border border-white hover:bg-green-700 text-xl flex items-center justify-center mt-4">
      Make A Donation       
      <Image src="/call.png" alt='' width={24} height={24} className='ml-2' />
    </button>     
  </Link>
</button>

    </div>
  </div>
</div>

    <div className="py-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Our Partners</h2>
        <p className="text-lg  mb-12">
          Here are a few of our major partners who help us achieve our mission of creating cleaner,   <br className="hidden md:block" /> healthier communities.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {selectedPartners.map((partner) => (
            <div key={partner.name} className="flex justify-center items-center p-4">
              <Image
                src={partner.src}
                alt={partner.name}
                width={150}
                height={100}
                className="object-contain h-20"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handlePrevious}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            disabled={currentPage === 1}
          >
           Previous
          </button>
          <span className="text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            disabled={currentPage === totalPages}
          >
            Next  
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
