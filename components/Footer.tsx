'use client'
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    
      <footer className="bg-[#0e1460] text-white py-8 relative overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">UNIT FACTOR</h2>
              <p className="text-sm">Delivering Intelligent Solutions</p>
            </div>
            <div>
              <p className="mb-2">EMAIL</p>
              <p className="text-sm">sales@unitfactor.com</p>
            </div>
            <div>
              <p className="mb-2">CONTACT/WHATSAPP</p>
              <p className="text-sm flex items-center">
                <Image src="/assets/icon-pak.webp" alt="Pakistan" width={20} height={15} className="mr-2" />
                +92 316 4707988
              </p>
              <p className="text-sm flex items-center">
                <Image src="/assets/icon-united.webp" alt="US" width={20} height={15} className="mr-2" />
                +1 302 613 1866
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2 mb-2">
                <Image src="/assets/global_award_spring_2024.svg" alt="Clutch Badge" width={50} height={50} />
                <Image src="/assets/top_clutch.co_web_developers_education_pakistan.svg" alt="Clutch Badge" width={50} height={50} />
                <Image src="/assets/top_clutch.co_software_developers_education_pakistan.svg" alt="Clutch Badge" width={50} height={50} />
              </div>
              <div className="flex flex-col items-center">
                <div className="flex text-yellow-400">{'★'.repeat(5)}</div>
                <span className="text-xs">5 REVIEWS</span>
              </div>
            </div>
          </div>

          {/* White border line */}
          <div className="border-b border-white opacity-20 my-8"></div>
          
          {/* Footer links and info */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            <div>
              <h3 className="text-lg font-semibold mb-4">USEFUL LINKS</h3>
              <ul className="space-y-2">
                <li><Link href="/about-us" className="hover:text-gray-300">About Us</Link></li>
                <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="text-2xl hover:text-gray-300">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="#" className="text-2xl hover:text-gray-300">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">ADDRESS</h3>
              <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                <div>
                  <h4 className="font-medium flex items-center">
                    <Image src="/assets/icon-pak.webp" alt="Pakistan" width={20} height={15} className="mr-2" />
                    PAKISTAN (HQ)
                  </h4>
                  <p className="text-sm">47-H, Block H, Gulberg III<br />Lahore, Pakistan</p>
                </div>
                <div>
                  <h4 className="font-medium flex items-center">
                    <Image src="/assets/icon-united.webp" alt="US" width={20} height={15} className="mr-2" />
                    UNITED STATES
                  </h4>
                  <p className="text-sm">919 N Market ST, STE 950,<br />Wilmington, DE 19801</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">SUBSCRIBE</h3>
              <p className="text-sm mb-4">Subscribe our newsletter to get updates about our services and offers.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-3 py-2 text-black rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
  
  );
};

export default Footer;