'use client'
import React, { useEffect, useRef } from "react";
import 'animate.css';

const cards = [
  {
    icon: "🌐",
    title: "DELIVERING GLOBALLY",
    description:
      "Our software house delivers high-quality solutions across industries, supported by a skilled global team.",
  },
  {
    icon: "✅",
    title: "CLIENT SATISFACTION",
    description:
      "We prioritize clients, developing tailored software solutions through close collaboration, trust, and exceptional service.",
  },
  {
    icon: "💡",
    title: "LEADING INNOVATION",
    description:
      "We deliver innovative, scalable, and future-proof software solutions using cutting-edge technologies.",
  },
  {
    icon: "🚀",
    title: "RAPID DEVELOPMENT",
    description:
      "Our agile methodologies ensure swift project delivery without compromising on quality.",
  },
  {
    icon: "🔒",
    title: "SECURITY FOCUSED",
    description:
      "We implement robust security measures to protect your data and ensure compliance with industry standards.",
  },
  {
    icon: "🤝",
    title: "PARTNERSHIP APPROACH",
    description:
      "We view our clients as long-term partners, providing ongoing support and strategic technology guidance.",
  },
];

const WhyUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animateanimated', 'animatebackInUp');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
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

  return (
    <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          WHY US?
        </h2>
        <div className="w-8 h-1 bg-[#8b8cb9] mx-auto mb-8"></div>
        <p className=" mb-12">
          With unmatched expertise, innovation, and passion, we deliver
          groundbreaking solutions in the dynamic world of technology, ensuring
          client success and satisfaction through exceptional value.
        </p>
      </div>
      <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white flex flex-col justify-center items-center text-center
            h-[350px] p-6 rounded-lg shadow-md transition-colors duration-300 ease-in-out hover:bg-[#0e1460] group hover:text-white"
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold text-navy-blue mb-2">
              {card.title}
            </h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;