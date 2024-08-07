import React from 'react';
import Image from 'next/image';

const AboutMissionVision = () => {
  return (
    <div className="flex flex-col md:flex-row relative z-10">
      {/* Left side: Mission and Vision */}
      <div className="bg-[#0e1460] opacity-1 text-white p-8 md:w-1/2">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6">OUR MISSION</h2>
          <div className="w-16 h-1 bg-white mb-6"></div>
          <p className="mb-12">
            "We believe in creating enduring value for our stakeholders through meaningful and intelligent technological solutions by fostering our people to fullest potential."
          </p>
          <h2 className="text-2xl font-bold mb-6">VISION STATEMENT</h2>
          <div className="w-16 h-1 bg-white mb-6"></div>
          <p>
            "We aspire to be the most customer-centric technology company that enables people and businesses to reach their full potential."
          </p>
        </div>
      </div>
      {/* Right side: Image */}
      <div className="md:w-1/2 relative">
        <Image
          src="/assets/vision-img1.webp"
          alt="Office environment"
          layout="fill"
          objectFit="cover"
         
        />
      </div>
    </div>
  );
};

export default AboutMissionVision;
