import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import { ParticlesBackground } from "@/constants/Particlesbackground";
import TechTransformationSection from "@/components/Home/Transformation";
import WhyUs from "@/components/Home/WhyUs";
import Accomplishments from "@/components/Home/Accompolisment";
import ServicesSection from "@/components/Home/Services";
export default function Home() {
  return (
    <>
      <main className="relative min-h-screen bg-[#070B34]">
        <ParticlesBackground />
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </main>

   
        <TechTransformationSection />
        <WhyUs/>
        <Accomplishments/>
        <ServicesSection/>
    
    </>
  );
}
