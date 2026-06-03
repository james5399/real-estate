import React, { useEffect } from 'react'
import {useState} from 'react'
import {assets, projectsData} from '../assets/assets'
import {motion} from 'framer-motion'

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardsToShow, setCardsToShow] = useState(1)

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1280) {
                setCardsToShow(4)
            } else if (window.innerWidth >= 1024) {
                setCardsToShow(3)
            } else if (window.innerWidth >= 768) {
                setCardsToShow(2)
            } else {
                setCardsToShow(1)
            }
        }

        updateCardsToShow()
        window.addEventListener('resize', updateCardsToShow)
        return () => window.removeEventListener('resize', updateCardsToShow)
    }, [])

    useEffect(() => {
        const maxIndex = Math.max(projectsData.length - cardsToShow, 0)
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex)
        }
    }, [cardsToShow, currentIndex])

    const maxIndex = Math.max(projectsData.length - cardsToShow, 0)

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    }

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
    }

  return (
    <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.8, ease: "easeOut"}} viewport={{once: true}} id='Projects'>
      <h1 className='text-3xl sm:text-4xl font-bold text-center'>Projects <span className='underline underline-offset-4 decoration-gray-600 font-light'>Completed</span></h1>
      <p className='text-center mt-4 text-gray-700 max-w-80 mx-auto mb-8'>Here are some of our recent projects:</p>
      <div className='flex justify-end items-center mb-8'>
        <button onClick={prevProject} className='p-2 rounded bg-gray-300 mr-2'>
            <img src={assets.left_arrow} alt="Previous project"/>
        </button>
        <button onClick={nextProject} className='p-2 rounded bg-gray-300 mr-2'>
            <img src={assets.right_arrow} alt="Next project"/>
        </button>
      </div>
      <div className='overflow-hidden'>
        <div className='flex gap-8 transition-transform duration-300 ease-in-out' style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}>
            {projectsData.map((project, index) =>(
                <div key={index} className='relative flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
                    <img src={project.image} alt={project.title} className='w-full h-auto mb-14'/>
                    <div className='flex justify-center absolute bottom-5 left-0 right-0'>
                        <div className='bg-white inline-block w-3/4 px-4 py-2 rounded-md shadow-lg text-center'>
                            <h3 className='text-xl font-bold text-gray-800'>{project.title}</h3>
                            <p className='text-gray-500 text-sm'>{project.price} <span className='text-lg font-bold'>|</span> {project.location}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
