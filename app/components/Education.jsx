import { educationData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='education' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg mt-7'>
        Qualification
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl'>
        Education
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12'>
        Throughout my acadamic journey, I developed strong foundation in web development, complemented by hands on projects and real world-applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-auto gap-6 my-10'>
        {educationData.map(({ icon, title, year, description }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:-translate-y-1 duration-500 hover:bg-lightHover dark:hover:shadow-white dark:hover:bg-darkHover'>
            <Image alt='' src={icon} className='w-14' />
            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
            <h3 className='text-lg my-4 text-gray-700 dark:text-white/80'>{year}</h3>
            <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Education
