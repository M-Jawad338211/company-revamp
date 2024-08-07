import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import { ParticlesBackground } from "@/constants/Particlesbackground";
import TechTransformationSection from "@/components/Home/Transformation";
import WhyUs from "@/components/Home/WhyUs";
import Accomplishments from "@/components/Home/Accompolisment";
import ServicesSection from "@/components/Home/Services";
import Homeindex from "@/components/Home";
import AutoCarousel from "@/components/Home/AutoCarousel";
export default function Home() {
  return (
    <>
      <main>
      <Homeindex/>
      </main>

   
        <TechTransformationSection />
        <WhyUs/>
        <Accomplishments/>
        <ServicesSection/>
        <div className="flex items-center justify-center bg-white">
  <AutoCarousel />
</div>
       
    
    </>
  );
}
