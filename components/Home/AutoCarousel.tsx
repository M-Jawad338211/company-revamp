'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Partner {
  src: string;
  alt: string;
}

const partners: Partner[] = [
  { src: '/assets/oracle.png', alt: 'Oracle' },
  { src: '/assets/microsoft.png', alt: 'Microsoft' },
  { src: '/assets/kasperskey.png', alt: 'Kaspersky' },
  { src: '/assets/dell.png', alt: 'Dell Technologies' },
  { src: '/assets/pasha.png', alt: 'Pasha' },
  // Add more images if needed
];

const AutoCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * currentIndex;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden py-8 px-4">
      <h2 className="text-center text-2xl font-bold text-blue-900 mb-6">OUR PARTNERS</h2>
      <div
        ref={carouselRef}
        className="flex w-full overflow-x-hidden whitespace-nowrap"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={index}
            className="flex-none w-1/4 h-20 flex justify-center items-center"
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              width={150}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;