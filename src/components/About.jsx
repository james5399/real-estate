import React from 'react'
import {assets} from '../assets/assets'
import { motion } from 'framer-motion'


const About = () => {
  return (
    <motion.div initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.8, ease: "easeOut"}} viewport={{once: true}} className='container mx-auto p-14 md:px-20 lg:px-32 flex flex-col items-center justify-center w-full' id='About'>
      <h1 className='text-3xl sm:text-4xl font-bold text-center'>About Us</h1>
      <p className='text-center mt-4 text-gray-700'>We are a real estate company dedicated to providing exceptional service and helping our clients find their dream homes. With years of experience in the industry, we have built a reputation for professionalism, integrity, and customer satisfaction. Our team of knowledgeable agents is committed to guiding you through every step of the buying or selling process, ensuring a smooth and successful transaction. Whether you're looking for a cozy apartment or a spacious family home, we are here to help you find the perfect property that meets your needs and exceeds your expectations.</p>
     <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'/>
        <div className='flex flex-col items-center md:items-start mt-10 md:mt-0 text-gray-700'>
            <div className='grid grid-cols-2 gap-4 mb-6 md:grid-cols-4'>
                <div>
                    <p className='text-2xl font-medium'>10+</p>
                    <p>Years of Excellence</p>
                </div>
                <div>
                    <p className='text-2xl font-medium'>12+</p>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <p className='text-2xl font-medium'>130+</p>
                    <p>Mn.Sq.Ft.Delivered</p>
                </div>
                <div>
                    <p className='text-2xl font-medium'>250+</p>
                    <p>Ongoing Projects</p>
                </div>
            </div>
            <p className='mt-6 text-center md:text-left'>Our mission is to provide exceptional real estate services that exceed our clients' expectations. We strive to create a seamless and enjoyable experience for buyers and sellers alike, while maintaining the highest standards of professionalism and integrity in all our dealings.</p>
            <button className='mt-6 bg-blue-600 text-white px-4 py-2 hover:bg-blue-700'>Learn More</button>
        </div>

     </div>
    </motion.div>
  )
}

export default About
