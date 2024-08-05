'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className="text-white bg-[#070B34]">
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
            <div className="relative group">
              <Link href="/services" className="flex items-center">
                Services <FaChevronDown className="ml-1" size={12} />
              </Link>
              {/* Dropdown menu */}
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
          <Link href="/services" onClick={toggleMenu}>Services</Link>
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