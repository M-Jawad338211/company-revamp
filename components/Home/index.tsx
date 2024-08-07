
import Navbar from "@/components/Navbar";

import Hero from "@/components/Home/Hero";
import { ParticlesBackground } from "@/constants/Particlesbackground";
const Homeindex = () => {
  return (
    <div className="relative min-h-screen">
            <div className="absolute inset-0 bg-cover bg-center z-1" style={{ backgroundImage: "url('/assets/image.png')" }}></div>
            <div className="absolute inset-0" >
                <ParticlesBackground />
            </div>
            <div className="relative">
                <Navbar />
                <Hero />
            </div>
        </div>
  )
}

export default Homeindex
