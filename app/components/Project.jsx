import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react'
import { motion } from "motion/react"

const Project = ({ isDarkMode }) => {

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='flex flex-col justify-center items-center p-4 my-7' id='work'>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg mt-7'>
                My Portfolio
            </motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl'>
                My latest work
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12'>
                Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front end development
            </motion.p>
            <motion.div
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 0.8}}
                onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)} className="flex flex-wrap w-11/12 max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-black my-7">
                <div className={`p-5 top-0 bg-white h-full w-full text-center text-black dark:bg-darkTheme dark:border dark:border-gray-400 block lg:hidden`}>
                    <h4 className='mb-5 text-xl font-bold dark:text-white'>
                        Description
                    </h4>
                    <p className='text-gray-600 mt-2 text-justify dark:text-white/80'>
                        This e-commerce website is a fully functional online store built using HTML, CSS, JavaScript, Bootstrap, and JSON. It offers a seamless shopping experience with a user-friendly interface, making it easy for customers to browse and purchase products.
                    </p>
                </div>
                <div className="relative md:w-3/5">
                    <Image src={assets.justbuy} alt='' className="w-full h-full object-cover" />
                    <div className={`fixed hovers1  backdrop-blur-lg p-5 top-0 bg-black w-3/5 h-full bg-opacity-30 text-center text-white transition-all duration-1000  ${isHovered1 ? "-left-0" : "-left-full"} hiddens`}>
                        <h4 className='mb-5'>
                            Description
                        </h4>
                        <p>
                            This e-commerce website is a fully functional online store built using HTML, CSS, JavaScript, Bootstrap, and JSON. It offers a seamless shopping experience with a user-friendly interface, making it easy for customers to browse and purchase products.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-2/5 p-5 hover:bg-lightHover dark:hover:shadow-white dark:hover:bg-darkHover dark:bg-darkTheme dark:border dark:border-gray-400">
                    <h1 className="text-xl font-bold">JustBuy</h1>
                    <p className="text-gray-600 mt-2 dark:text-white/80">This project describe the basic E-Commerce website.</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="bg-gray-300 px-3 py-2 rounded text-sm dark:text-black/80">HTML</span>
                        <span className="bg-gray-300 px-3 py-2 rounded text-sm dark:text-black/80">CSS</span>
                        <span className="bg-gray-300 px-3 py-2 rounded text-sm dark:text-black/80">JavaScript</span>
                        <span className="bg-gray-300 px-3 py-2 rounded text-sm dark:text-black/80">Bootstrap</span>
                        <span className="bg-gray-300 px-3 py-2 rounded text-sm dark:text-black/80">Json</span>
                    </div>
                    <a href="https://sivanandham-k.github.io/Justbuy/index.html" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded">Check it</a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 0.6, delay: 0.8}}
                onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)} className="flex my-7 flex-wrap w-11/12 max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-black">
                <div className={`p-5 top-0 bg-white h-full w-full text-center text-black dark:bg-darkTheme dark:border dark:border-gray-400 block lg:hidden`}>
                    <h4 className='mb-5 text-xl font-bold dark:text-white'>
                        Description
                    </h4>
                    <p className='text-gray-600 mt-2 text-justify dark:text-white/80'>
                        A modern and responsive portfolio website built with React.js and Tailwind CSS, featuring seamless dark mode and light mode functionality. Designed for an elegant user experience, the website showcases projects, skills, and professional information in a clean, minimalistic layout. With smooth transitions and a fully responsive design, it ensures an engaging experience across all devices.
                    </p>
                </div>
                <div className={`w-full md:w-2/5 p-5 hover:bg-lightHover dark:hover:shadow-white dark:hover:bg-darkHover dark:bg-darkTheme dark:border dark:border-gray-400 hidden lg:block md:block`}>
                    <h1 className="text-xl font-bold">Portfolio</h1>
                    <p className="text-gray-600 mt-2 dark:text-white/80">This project portfolio website showcasing my skills, projects, and expertise.</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="bg-gray-300 px-3 py-2 rounded text-sm dark:text-black/80">HTML</span>
                        <span className="bg-gray-300 px-3 py-2 rounded text-sm dark:text-black/80">CSS</span>
                        <span className="bg-gray-300 px-3 py-2 rounded text-sm dark:text-black/80">JavaScript</span>
                        <span className="bg-gray-300 px-3 py-2 rounded text-sm dark:text-black/80">Tailwind css</span>
                        <span className="bg-gray-300 px-3 py-2 rounded text-sm dark:text-black/80">React Js</span>
                    </div>
                    <a href="https://sivanandham-k.netlify.app/" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded">Check it</a>
                </div>
                <div className="relative md:w-3/5">
                    <Image src={assets.portfolio} alt='' className="w-full h-full object-cover" />
                    <div className={`fixed hovers1 backdrop-blur-lg p-5 top-0 bg-black w-3/5 h-full bg-opacity-30 text-center text-white transition-all duration-1000 ${isHovered2 ? "-right-0" : "-right-full"} hiddens`}>
                        <h4 className='mb-5'>
                            Description
                        </h4>
                        <p>
                            A modern and responsive portfolio website built with React.js and Tailwind CSS, featuring seamless dark mode and light mode functionality. Designed for an elegant user experience, the website showcases projects, skills, and professional information in a clean, minimalistic layout. With smooth transitions and a fully responsive design, it ensures an engaging experience across all devices.
                        </p>
                    </div>
                </div>
                <div className={`w-full md:w-2/5 p-5 hover:bg-lightHover dark:hover:shadow-white dark:hover:bg-darkHover dark:bg-darkTheme dark:border dark:border-gray-400 block lg:hidden md:hidden`}>
                    <h1 className="text-xl font-bold">Portfolio</h1>
                    <p className="text-gray-600 mt-2 dark:text-white/80">This project portfolio website showcasing my skills, projects, and expertise.</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="bg-gray-300 px-3 py-2 rounded text-sm dark:text-black/80">HTML</span>
                        <span className="bg-gray-300 px-3 py-2 rounded text-sm dark:text-black/80">CSS</span>
                        <span className="bg-gray-300 px-3 py-2 rounded text-sm dark:text-black/80">JavaScript</span>
                        <span className="bg-gray-300 px-3 py-2 rounded text-sm dark:text-black/80">Tailwind css</span>
                        <span className="bg-gray-300 px-3 py-2 rounded text-sm dark:text-black/80">React Js</span>
                    </div>
                    <a href="https://sivanandham-k.netlify.app/" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded">Check it</a>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Project
