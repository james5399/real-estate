import React, {useState}from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <div className='absolute w-full top-0 left-0 z-10'>
        <div className='container max-w-7xl mx-auto flex items-center justify-between py-4 px-6'>
            <img src={assets.logo} alt="Logo" className='h-10 bg-indigo-500 px-3'/>
            <ul className='hidden md:flex gap-7 text-white'>
                <li><a href="#Header" className='hover:text-gray-500 cursor-pointer'>Home</a></li>
                <li><a href="#About" className='hover:text-gray-500 cursor-pointer'>About</a></li>
                <li><a href="#Projects" className='hover:text-gray-500 cursor-pointer'>Projects</a></li>
                <li><a href="#Testimonials" className='hover:text-gray-500 cursor-pointer'>Testimonials</a></li>
            </ul>
            <a href="#Contact" className='hidden md:block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors'>Sign Up</a>
            <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} alt="Menu" className='md:hidden w-7 cursor-pointer me-4'/>
            <div className={`md:hidden ${showMobileMenu ? 'fixed left-0 w-full h-full z-20' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all duration-300`}>
               <div className='flex justify-end p-6 cursor-pointer'>
                <img onClick={()=> setShowMobileMenu(false)} src={assets.cross_icon} alt="Close" className='w-6'/>
               </div>
                <ul className='flex flex-col items-center justify-center h-[calc(100vh-4.5rem)] gap-4 mt-5 px-5 text-lg font-medium'>
                    <li><a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block hover:bg-gray-100'>Home</a></li>
                    <li><a onClick={()=> setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block hover:bg-gray-100'>About</a></li>
                    <li><a onClick={()=> setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block hover:bg-gray-100'>Projects</a></li>
                    <li><a onClick={()=> setShowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block hover:bg-gray-100'>Testimonials</a></li>
                    <li><a onClick={()=> setShowMobileMenu(false)} href="#Contact" className='bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors'>Sign Up</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar

