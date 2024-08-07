import React from 'react';
import 'animate.css';
function Hero() {
  return (
    <div className='container mx-auto px-5 mt-24' >
       <section className="text-white">
      <h1 className="animate__animated animate__backInLeft  text-[50px] md:text-[70px] font-bold ">
        Delivering<br />Intelligent Solutions
      </h1>
      <p className="mb-8 max-w-2xl">
        We believe in creating enduring value for our stakeholders through
        meaningful and intelligent technological solutions by fostering our
        people to fullest potential.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        SEE DETAIL
      </button>
    </section>
    </div>
   
  );
}

export default Hero;