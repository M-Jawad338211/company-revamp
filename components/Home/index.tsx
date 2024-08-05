
import Navbar from "@/components/Navbar";

import Hero from "@/components/Home/Hero";
import { ParticlesBackground } from "@/constants/Particlesbackground";
const Homeindex = () => {
  return (
    <div>
       <div className="relative min-h-screen bg-[#070B34]">
        <ParticlesBackground />
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </div>

    </div>
  )
}

export default Homeindex
