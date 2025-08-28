import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Skills = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='skill' className='mt-7'>

            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg'>
                What are the tools i know
            </motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl mb-5'>
                Skills
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12'>
                I specialize in full-stack development, creating dynamic and responsive web applications. My technical expertise spans across front-end and back-end technologies, ensuring seamless and efficient digital solutions.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-col items-center justify-center bg-transparent p-5">
                <div className="flex flex-wrap justify-center gap-4 max-w-xl mx-auto">
                    <div className="flex skill flex-col items-center justify-center w-20 h-24 rounded-lg border-2 border-gray-400 bg-transparent shadow-md p-2" >
                        <Image alt='' src={isDarkMode ? assets.html_light : assets.html_dark} className="w-12 h-12" />
                        <span className="mt-1 text-xs font-bold text-gray-700 dark:text-white/80">HTML</span>
                    </div>
                    <div className="flex skill flex-col items-center justify-center w-20 h-24 rounded-lg border-2 border-gray-400 bg-transparent shadow-md p-2">
                        <Image alt='' src={isDarkMode ? assets.css_light : assets.css_dark} className="w-12 h-12" />
                        <span className="mt-1 text-xs font-bold text-gray-700 dark:text-white/80">CSS</span>
                    </div>
                    <div className="flex skill flex-col items-center justify-center w-20 h-24 rounded-lg border-2 border-gray-400 bg-transparent shadow-md p-2">
                        <Image alt='' src={isDarkMode ? assets.javascript_light : assets.javascript_dark} className="w-12 h-12" />
                        <span className="mt-1 text-xs font-bold text-gray-700 dark:text-white/80">JavaScript</span>
                    </div>
                    <div className="flex skill flex-col items-center justify-center w-20 h-24 rounded-lg border-2 border-gray-400 bg-transparent shadow-md p-2">
                        <Image alt='' src={isDarkMode ? assets.bootstrap_light : assets.bootstrap_dark} className="w-12 h-12" />
                        <span className="mt-1 text-xs font-bold text-gray-700 dark:text-white/80">Bootstrap</span>
                    </div>
                    <div className="flex flex-col skill items-center justify-center w-20 h-24 rounded-lg border-2 border-gray-400 bg-transparent shadow-md p-2">
                        <Image alt='' src={isDarkMode ? assets.json_light : assets.json_dark} className="w-12 h-12" />
                        <span className="mt-1 text-xs font-bold text-gray-700 dark:text-white/80">JSON</span>
                    </div>
                    <div className="flex flex-col skill items-center justify-center w-20 h-24 rounded-lg border-2 border-gray-400 bg-transparent shadow-md p-2">
                        <Image alt='' src={isDarkMode ? assets.tailwind_light : assets.tailwind_dark} className="w-12 h-12" />
                        <span className="mt-1 text-xs font-bold text-gray-700 dark:text-white/80">Tailwind CSS</span>
                    </div>
                    <div className="flex flex-col skill items-center justify-center w-20 h-24 rounded-lg border-2 border-gray-400 bg-transparent shadow-md p-2">
                        <Image alt='' src={isDarkMode ? assets.react_light : assets.react_dark} className="w-12 h-12" />
                        <span className="mt-1 text-xs font-bold text-gray-700 dark:text-white/80">React JS</span>
                    </div>
                    <div className="flex flex-col skill items-center justify-center w-20 h-24 rounded-lg border-2 border-gray-400 bg-transparent shadow-md p-2">
                        <Image alt='' src={isDarkMode ? assets.java_light : assets.java_dark} className="w-12 h-12" />
                        <span className="mt-1 text-xs font-bold text-gray-700 dark:text-white/80">Java</span>
                    </div>
                    <div className="flex flex-col skill items-center justify-center w-20 h-24 rounded-lg border-2 border-gray-400 bg-transparent shadow-md p-2">
                        <Image alt='' src={isDarkMode ? assets.jdbc_light : assets.jdbc_dark} className="w-12 h-12" />
                        <span className="mt-1 text-xs font-bold text-gray-700 dark:text-white/80">JDBC</span>
                    </div>
                    <div className="flex flex-col skill items-center justify-center w-20 h-24 rounded-lg border-2 border-gray-400 bg-transparent shadow-md p-2">
                        <Image alt='' src={isDarkMode ? assets.jsp_light : assets.jsp_dark} className="w-12 h-12" />
                        <span className="mt-1 text-xs font-bold text-gray-700 dark:text-white/80">JSP</span>
                    </div>
                    <div className="flex flex-col skill items-center justify-center w-20 h-24 rounded-lg border-2 border-gray-400 bg-transparent shadow-md p-2">
                        <Image alt='' src={isDarkMode ? assets.springboot_light : assets.springboot_dark} className="w-12 h-12" />
                        <span className="mt-1 text-xs font-bold text-gray-700 dark:text-white/80">Spring Boot</span>
                    </div>
                    <div className="flex flex-col skill items-center justify-center w-20 h-24 rounded-lg border-2 border-gray-400 bg-transparent shadow-md p-2">
                        <Image alt='' src={isDarkMode ? assets.mysql_light : assets.mysql_dark} className="w-12 h-12" />
                        <span className="mt-1 text-xs font-bold text-gray-700 dark:text-white/80">MySQL</span>
                    </div>
                </div>
            </motion.div>

        </motion.div>
    )
}

export default Skills
