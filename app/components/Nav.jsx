'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(true);
      const timer = setTimeout(() => {
        setScrolled(false);
      }, 5000);

      return () => clearTimeout(timer);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => pathname === path;

  return (
    <header className={`fixed w-full z-10 transition-colors duration-300 ${scrolled ? 'bg-black' : 'bg-black bg-opacity-50'} text-white`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="text-lg font-bold">Logo</div>
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <nav className={`md:block w-full md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className={`flex flex-col md:flex-row md:items-center md:space-x-10 mt-4 md:mt-0 space-y-4 md:space-y-0`}>
            <li>
              <Link href="/" passHref>
                <div className={`hover:text-green-500 cursor-pointer ${isActive('/') ? 'underline' : ''}`}>Home</div>
              </Link>
            </li>
            <li>
              <Link href="/About-us" passHref>
                <div className={`hover:text-green-500 cursor-pointer ${isActive('/About-us') ? 'underline' : ''}`}>About Us</div>
              </Link>
            </li>
            <li>
              <Link href="/Partners" passHref>
                <div className={`hover:text-green-500 cursor-pointer ${isActive('/Partners') ? 'underline' : ''}`}>Partners</div>
              </Link>
            </li>
            <li>
              <Link href="/Donation" passHref>
                <div className={`hover:text-green-500 cursor-pointer ${isActive('/Donation') ? 'underline' : ''}`}>Donation</div>
              </Link>
            </li>
            <li>
              <Link href="/Announcements" passHref>
                <div className={`hover:text-green-500 cursor-pointer ${isActive('/Announcements') ? 'underline' : ''}`}>Announcement</div>
              </Link>
            </li>
            <li>
              <Link href="/Gallery" passHref>
                <div className={`hover:text-green-500 cursor-pointer ${isActive('/Gallery') ? 'underline' : ''}`}>Gallery</div>
              </Link>
            </li>
            <li>
              <Link href="/Contact" passHref>
                <button className="bg-black text-green-500 px-4 py-2 rounded-full border border-white hover:bg-green-700">
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
