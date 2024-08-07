'use client'
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const services = [
  'Custom Software & Web App Development',
  'Mobile App Development',
  'DevOps',
  'Website Development',
  'Cloud Computing',
  'UI/UX Design',
  'Digital Marketing',
  'SEO',
  'Blockchain Development',
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleClickOutside = (event:any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsServicesOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="text-white bg-transparent relative z-10">
      {/* Top row */}
      <div className="container mx-auto py-1 md:py-3">
        <div className="flex justify-center items-center py-2 gap-x-6">
          <Link href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} />
          </Link>
          <Link href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </Link>
          <Link href="/schedule" className="hidden md:inline-block">
            Schedule Call
          </Link>
          <Link href="/quote" className="hidden md:inline-block">
            Get a free quote
          </Link>
          <Link href="tel:+13026131866" className="">
            +1 302 613 1866
          </Link>
        </div>
      </div>
      <div className="w-[100%] border-b border-gray-700"></div>
      {/* Bottom row */}
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            UnitFactor
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <div className="relative group z-10" ref={dropdownRef}>
              <button onClick={toggleServices} className="flex items-center">
                Services <FaChevronDown className="ml-1" size={12} />
              </button>
              {/* Dropdown menu */}
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white shadow-lg rounded-md overflow-hidden">
                  <div className="relative">
                    <div className="absolute left-2 top-0 w-0.5 h-full bg-gray-200"></div>
                    {services.map((service, index) => (
                      <Link 
                        key={index} 
                        href={`/services/${service.toLowerCase().replace(/ /g, '-')}`}
                        className="block px-4 py-2 text-gray-800 hover:text-blue-600 relative z-10 group"
                      >
                        <span>{service}</span>
                        <div className="absolute left-2 top-0 w-0.5 bg-blue-600 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100" 
                             style={{ height: `${(index + 1) * 100}%` }}></div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>
          <button className="md:hidden z-50" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu drawer */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-[#070B34] z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-start p-8 space-y-4">
          <Link href="/" onClick={toggleMenu}>Home</Link>
          <Link href="/about" onClick={toggleMenu}>About</Link>
          <div>
            <button onClick={toggleServices} className="flex items-center">
              Services <FaChevronDown className="ml-1" size={12} />
            </button>
            {isServicesOpen && (
              <div className="ml-4 mt-2 space-y-2">
                {services.map((service, index) => (
                  <Link 
                    key={index} 
                    href={`/services/${service.toLowerCase().replace(/ /g, '-')}`}
                    className="flex items-center text-gray-300 hover:text-blue-400 hover:underline hover:underline-offset-2 hover:decoration-blue-400"
                    onClick={toggleMenu}
                  >
                    <span>{service}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/careers" onClick={toggleMenu}>Careers</Link>
          <Link href="/contact" onClick={toggleMenu}>Contact Us</Link>
        </nav>
      </div>
      
      {/* Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={toggleMenu}></div>
      )}
    </header>
  );
}

export default Navbar;