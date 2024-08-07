import React from 'react';
import Link from 'next/link';

const AboutHero = () => {
  return (
    <div className="relative text-white bg-transparent">
      <div className="relative z-10 container mx-20 py-24">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <div className="w-16 h-1 bg-white mb-8"></div>
        <p className="max-w-2xl mb-8">
          Tower Tech is a leading provider of cutting-edge technology solutions, empowering businesses worldwide
          with innovation, reliability, and exceptional service. With a customer-centric approach, we deliver tailored
          solutions that drive growth and efficiency, leveraging our extensive industry experience and expertise.
        </p>
        <Link href="/contact" className="text-white px-6 py-3 rounded-full font-semibold border border-white hover:bg-white hover:text-blue-900">
          GET STARTED
        </Link>
      </div>
    </div>
  );
}

export default AboutHero;
