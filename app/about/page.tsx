import React from 'react';
import Navbar from '@/components/Navbar';
import AboutHero from '@/components/About/AboutHero';
import AboutMissionVision from '@/components/About/AboutVisionMission';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: "url('/assets/about_banner-1.webp')",
        }}
      ></div>
      <div className="absolute inset-0 bg-[#0E1460] opacity-50 z-0"></div>
      <div className="relative z-10">
        <Navbar />
        <AboutHero />
        <AboutMissionVision />
      </div>
    </div>
  );
}

export default AboutPage;
