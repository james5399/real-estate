import React from 'react'
import Navbar from './Navbar'
import {assets} from '../assets/assets'
import {motion} from 'framer-motion'

const Header = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-cover bg-center w-full overflow-hidden' style={{backgroundImage: `url(${assets.header_img})`}} id='Header'>
    <Navbar/>
    <motion.div initial={{opacity: 0, y: -50}} transition={{duration: 1.0}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}className='container text-center mx-auto py-4 md:px-6  lg:px-32 text-white'>
      
        <h2 className='text-5xl sm:text-6xl md:text-7xl inline-block max-w-4xl font-semibold pt-20 '>Explore homes that fit your lifestyle</h2>
    
     <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 mt-16 justify-center px-4 sm:px-0'>
        <a href="#Projects" className='border border-white rounded-md px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base hover:bg-white hover:text-gray-800 transition-colors'>Projects</a>
        <a href="#Contact" className='bg-blue-500 text-white rounded-md px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base hover:bg-blue-700 hover:text-white transition-colors'>Contact US</a>
     </div>
    </motion.div> 
    </div>
  )
}

export default Header
