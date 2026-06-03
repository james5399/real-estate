import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'


const Testimonials = () => {
  return (
    <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.8, ease: "easeOut"}} viewport={{once: true}} className='container mx-auto' id='Testimonials'>
      <h1 className='text-3xl sm:text-4xl font-bold text-center'>Customer <span className='text-blue-500'>Testimonials</span></h1>
      <p className='text-center mt-4 text-gray-700 max-w-80 mx-auto mb-8'>Here's what our customers have to say about us.</p>
      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='max-w-[340px] bg-slate-50 rounded border shadow-lg px-8 py-12 text-center'>
            <img className='w-20 h-20 rounded-full mb-4' src={testimonial.image} alt={testimonial.alt || 'Testimonial'} />
            <p className='text-gray-700 italic mb-4'>"{testimonial.text}"</p>
            <p className='font-bold text-lg'>{testimonial.name}</p>
            <p className='text-gray-500'>{testimonial.title}</p>
            <div className='flex justify-center mt-4 gap-1'>
              {Array.from({length: testimonial.rating},(item, index)=>(
                <img key={index} src={assets.star_icon} alt="star"/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Testimonials
