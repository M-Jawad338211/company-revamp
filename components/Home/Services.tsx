'use client'
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const services = [
    {
      icon: '⚙️',
      title: 'Custom Software & Web App Development',
      description: 'Unlock unparalleled growth and efficiency with our bespoke software and web application development services. Tailored to your unique business needs, our solutions leverage cutting-edge technology.',
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Supercharge your business with our top-notch mobile app development services. Our expert team crafts customized solutions, ensuring seamless integration and robust security for exceptional innovation.',
    },
    {
      icon: '🔄',
      title: 'DevOps',
      description: 'Maximize efficiency and cost-effectiveness with cutting-edge DevOps practices and services. Our expertise spans agile automation, continuity, and governance for streamlined operations.',
    },
    {
      icon: '🌐',
      title: 'Website Development',
      description: 'Create stunning, responsive websites that captivate your audience. Our web development team combines creativity with technical expertise to deliver user-friendly and performance-optimized sites.',
    },
    {
      icon: '☁️',
      title: 'Cloud Computing',
      description: 'Harness the power of the cloud with our comprehensive cloud computing solutions. We help businesses scale, improve flexibility, and enhance security through tailored cloud strategies.',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Elevate user experiences with our intuitive and visually appealing UI/UX designs. We create interfaces that not only look great but also provide seamless navigation and user satisfaction.',
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      description: 'Boost your online presence and reach your target audience effectively. Our digital marketing strategies encompass SEO, social media, content marketing, and more to drive growth.',
    },
    {
      icon: '🔍',
      title: 'SEO',
      description: 'Improve your websites visibility and ranking on search engines. Our SEO experts employ the latest techniques to optimize your content and structure for maximum online exposure.',
    },
    {
      icon: '🔗',
      title: 'Blockchain Development',
      description: 'Leverage the power of blockchain technology for secure, transparent, and efficient solutions. We develop custom blockchain applications tailored to your business needs and industry requirements.',
    },
  ];

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3 >= services.length) ? 0 : prevIndex + 3);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 < 0) ? Math.max(services.length - 3, 0) : prevIndex - 3);
  };

  return (
    <div className="relative overflow-hidden bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">SERVICES WE OFFER</h2>
        <div className="w-16 h-1 bg-blue-900 mb-8"></div>
        
        <div className="flex flex-col md:flex-row mb-8">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Offering The Latest Software And IT Services To Our Customers!
            </h3>
          </div>
          <div className="md:w-1/2 text-gray-600">
            <p>Improve efficiency, leverage tech, and provide better customer experiences with the modern technology services available all over the world. Our skilled personnel, utilizing the latest processing software, combined with decades of experience.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[...services, ...services].slice(currentIndex, currentIndex + 3).map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md h-[350px]">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="text-blue-600 font-semibold">Read More</button>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <button className="text-blue-900 hover:bg-blue-900 hover:text-white px-6 py-2 rounded-md border border-blue-900">
            GET A FREE QUOTE
          </button>
          <div className="flex space-x-4">
            <button onClick={prevSlide} className="p-2 rounded-full bg-gray-200 hover:bg-blue-900">
              <ChevronLeftIcon className="h-6 w-6 text-black" />
            </button>
            <button onClick={nextSlide} className="p-2 rounded-full bg-gray-200 hover:bg-blue-900">
              <ChevronRightIcon className="h-6 w-6 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;