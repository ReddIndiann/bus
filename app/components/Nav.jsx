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
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => pathname === path;

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/About-us', label: 'About Us' },
    { href: '/Partners', label: 'Partners' },
    { href: '/Donation', label: 'Donation' },
    { href: '/Announcements', label: 'Announcement' },
    { href: '/Gallery', label: 'Gallery' },
  ];

  return (
    <header className={`fixed w-full z-10 transition-colors duration-300 ${scrolled ? 'bg-black' : 'bg-black bg-opacity-50'} text-white`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="text-lg font-bold">Logo</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <nav className={`md:block ${isOpen ? 'block fixed inset-y-0 right-0 w-64 bg-white text-black shadow-lg z-50 transition-transform duration-300 ease-in-out transform' : 'hidden'}`}>
          {isOpen && (
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
          <ul className={`flex flex-col md:flex-row md:items-center md:space-x-10 mt-16 md:mt-0 space-y-2 md:space-y-0 p-2`}>
            {menuItems.map((item) => (
              <li key={item.href} className="border-b border-gray-200 py-2 md:border-none">
                <Link href={item.href} passHref>
                  <div
                    className={`hover:text-green-500 cursor-pointer ${isActive(item.href) ? 'text-green-500 underline' : ''}`}
                    onClick={() => isOpen && setIsOpen(false)}
                  >
                    {item.label}
                  </div>
                </Link>
              </li>
            ))}
            <li className="mt-4 md:mt-0">
              
              <Link href="/Contact" passHref>
                <button
                   className="bg-black text-green-500 px-4 py-2 rounded-full border border-white hover:bg-green-700"
                  onClick={() => isOpen && setIsOpen(false)}
                >
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