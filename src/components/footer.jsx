import { assets } from "../assets/assets"
import {Link} from "react-router-dom"

const Footer=()=> {
  return (
    <footer className="bg-[#0a1626] text-white py-12 px-6 md:px-12">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-5">
            <div className="flex flex-col gap-2 md:gap-4">
                <img className="w-25 h-20" src={assets?.logo} alt="" />
              <p className="text-xs lg:text-sm text-gray-300 mt-2">
                An awesome & powerful tools for your business, increase business revenue with evaluating in depth
                variety of data sets and including the speed of tech adaptation we can build bridges between any
                companies and their customers.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 md:col-start-8">
            <h3 className="text-lg font-semibold mb-4">Home</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Resources
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
            </nav>
          </div>

          <div className="md:col-span-3 md:col-start-11">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Company
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Career
              </Link>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">©2022-2023 Minha Tech.</div>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              <div className='w-8 h-8 rounded-full bg-white justify-center items-center flex'>
                  <img className='w-2' src={assets?.facebook} alt="" />
              </div>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              <div className='w-8 h-8 rounded-full bg-white justify-center items-center flex'>
                  <img className='w-2' src={assets?.instagram} alt="" />
              </div>
            </Link>
             <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              <div className='w-8 h-8 rounded-full bg-white justify-center items-center flex'>
                  <img className='w-2' src={assets?.linkedin} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer