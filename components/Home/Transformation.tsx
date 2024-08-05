'use client'
import Image from "next/image";
export default function TechTransformationSection() {
  return (
    <>
      <section className="bg-blue-50 min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
        <Image
          src="/assets/pattern.webp"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          className="absolute z-0"
        />
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between z-10">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
              CREATING VALUE &<br />
              ENSURING CUSTOMER
              <br />
              SUCCESS
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
              TECH TRANSFORMATION EXPERTS
            </h2>
            <p className="text-gray-600 mb-6">
              UnitFactor is an avant-garde technology enterprise that
              specializes in the conception and implementation of groundbreaking
              software solutions. With an ardent focus on cutting-edge
              technologies, UnitFactor endeavors to reshape industries and
              empower businesses in attaining their objectives within the
              digital epoch.
            </p>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition duration-300">
              READ MORE
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              unoptimized
              src="/assets/ttl-home-section.gif"
              alt="Tech Illustration"
              width={500}
              height={500}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
