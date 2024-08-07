'use client'
import React, { useEffect, useRef, useState } from 'react';

const Accomplishments = () => {
  const accomplishments = [
    { number: 4, text: 'Years of Experience' },
    { number: 10, text: 'Projects Completed' },
    { number: 2, text: 'Qualified Professionals' },
    { number: 5, text: 'Industries Catered' },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const CountingNumber = ({ end }: { end: number }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      if (isVisible) {
        let start = 0;
        const duration = 500; // 1 seconds
        const increment = end / (duration / 16); 
  
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            clearInterval(timer);
            setCount(end);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
  
        return () => clearInterval(timer);
      }
    }, [end, isVisible]);
  
    return <span>{count}</span>;
  };

  return (
    <div ref={sectionRef} className="relative overflow-hidden bg-[#0e1460] text-white py-20 px-4 sm:px-6 lg:px-8 h-[50vh]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">OUR ACCOMPLISHMENTS</h2>
        <div className="flex justify-center mb-8">
          <div className="w-16 h-1 bg-white"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {accomplishments.map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold mb-2">
                <CountingNumber end={item.number} />
                {item.number > 1 ? '+' : ''}
              </p>
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accomplishments;