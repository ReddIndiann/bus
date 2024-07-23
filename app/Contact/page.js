'use client'
import React, { useState, useEffect } from 'react';
import ".././globals.css";
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <>
    <div className='bg-white w-full py-16'>
      <div className='text-start lg:ml-48 ml-24  font-semibold '>
        <p className='text-black   text-4xl md:text-5xl lg:text-8xl mb-8'>contacts</p>
      </div>
      <div className='flex flex-wrap justify-center'>
    
        <div className='m-4'>
          <img src='/board4.svg' width={400} height={400} alt="Samuel Apraku" />
          <p className='text-black font-bold text-xl mt-4'>Samuel Apraku</p>
          <div className='text-black mt-2 font-thin'>Human Resources Manager</div>
          <div className='text-black mt-7'>Phone Number</div>
          <div className='text-black mt-2'>buzstopboys.org</div>

        </div>
        <div className='m-4'>
          <img src='/board5.svg' width={400} height={400} alt="Kwame Baah" />
          <p className='text-black font-bold text-xl mt-4'>Kwame Baah</p>
          <div className='text-black mt-2 font-thin'>Volunteer Coordinator</div>
          <div className='text-black mt-7'>Phone Number</div>
          <div className='text-black mt-2'>buzstopboys.org</div>
        </div>
        <div className='m-4'>
          <img src='/board6.svg' width={400} height={400} alt="Elle Custers" />
          <p className='text-black font-bold text-xl mt-4 '>Elle Custers</p>
          <div className='text-black mt-2 font-thin'>Advocacy Specialist</div>
          <div className='text-black mt-7'>Phone Number</div>
          <div className='text-black mt-2'>buzstopboys.org</div>
        </div>
      </div>
    </div>
    <section className="bg-black text-white py-12">
      <div className="container mx-auto">
        <h2 className="text-6xl font-bold text-center mb-8">Give Feedback</h2>
        <form onSubmit={handleSubmit} className="max-w-6xl lg:mx-auto space-y-6 m-28">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 text-black rounded-lg"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your e-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 text-black rounded-lg"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 text-black rounded-lg"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 text-black rounded-lg h-32"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              className="text-black mr-2"
              required
            />
            <label className="text-sm">
              I hereby confirm that I have read and agree to the terms of the privacy policy
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-white text-black font-semibold rounded-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
    
    <section className="w-full bg-white flex justify-center py-8">
        <div className="text-center bg-white mx-4">
      
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-black mt-4">
          Join us in the mission to create a cleaner and<br className="hidden md:block" /> healthier environment!
          </h1>
          <p className="mt-4">
 
          Your support can make a significant impact. Together, let’s take meaningful steps towards<br className="hidden md:block" />
          sustainability, reducing waste, and preserving our planet for future generations. Support us today<br className="hidden md:block" />
          and be a part of the positive change our world needs.




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
      </section>
    </>
  )
}
