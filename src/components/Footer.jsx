import React from 'react'
import {assets} from '../assets/assets'
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";


const Footer = () => {
  const socialLinks = [
    {
      href: 'https://github.com/james5399',
      label: 'GitHub',
      icon: FaGithub,
      className: 'hover:text-gray-400',
    },
    {
      href: 'https://linkedin.com/in/jameskaloky',
      label: 'LinkedIn',
      icon: FaLinkedin,
      className: 'hover:text-blue-400',
    },
    {
      href: 'https://wa.me/254111829718',
      label: 'WhatsApp',
      icon: FaWhatsapp,
      className: 'hover:text-green-400',
    },
    {
      href: 'https://instagram.com/jameskaloky',
      label: 'Instagram',
      icon: FaInstagram,
      className: 'hover:text-pink-400',
    },
  ]

  return (
    <div className='overflow-hidden w-full py-6 pt-10 bg-gray-900 text-white px-6 md:px-20 lg:px-32 text-lg' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row items-start justify-between gap-10'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={assets.logo_dark} alt='logo' />
          <p className='text-gray-400 mt-4'>The best real estate experience</p>
        </div>

        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2'>
            <a href='#Header' className='text-gray-400 hover:text-white transition-colors duration-300'>Home</a>
            <a href='#About' className='text-gray-400 hover:text-white transition-colors duration-300'>About Us</a>
            <a href='#Contact' className='text-gray-400 hover:text-white transition-colors duration-300'>Contact Us</a>
            <a href='#' className='text-gray-400 hover:text-white transition-colors duration-300'>Privacy Policy</a>
          </ul>
        </div>

        <div className='w-full md:w-1/3'>
          <h3 className='text-white text-lg font-bold mb-4'>Follow Us</h3>
          <p className='text-gray-400 mb-6'>Stay connected with us on social media!</p>

          <div className='flex items-center gap-6 text-2xl'>
            {socialLinks.map(({ href, label, icon: Icon, className }) => (
              <a
                key={label}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={label}
                className={`${className} transition duration-300`}
              >
                <Icon />
              </a>
            ))}
          </div>

          <p className='text-gray-400 text-sm mt-8'>© 2026 James Kaloki. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
9