import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Example = () => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='flex flex-col justify-center items-center p-4'>
            <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="flex flex-wrap w-11/12 max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-black">
                <div className={`p-5 top-0 bg-white h-full w-full text-center text-black block lg:hidden`}>
                    <h4 className='mb-5 text-xl font-bold'>
                        Description
                    </h4>
                    <p className='text-gray-600 mt-2 text-justify'>
                        This e-commerce website is a fully functional online store built using HTML, CSS, JavaScript, Bootstrap, and JSON. It offers a seamless shopping experience with a user-friendly interface, making it easy for customers to browse and purchase products.
                    </p>
                </div>
                <div className="relative md:w-3/5">
                    <Image src={assets.justbuy} alt="" className="w-full h-full" />
                    <div className={`fixed hovers1 backdrop-blur-lg p-5 top-0 bg-black w-3/5 h-full bg-opacity-30 text-center text-white transition-all duration-1000  ${isHovered ? "-left-0" : "-left-full"} lg:block hidden`}>
                        <h4 className='mb-5'>
                            Description
                        </h4>
                        <p>
                            This e-commerce website is a fully functional online store built using HTML, CSS, JavaScript, Bootstrap, and JSON. It offers a seamless shopping experience with a user-friendly interface, making it easy for customers to browse and purchase products.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-2/5 p-5">
                    <h1 className="text-xl font-bold">JustBuy</h1>
                    <p className="text-gray-600 mt-2">This project describe the basic E-Commerce website.</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="bg-gray-300 px-3 py-2 rounded text-sm">HTML</span>
                        <span className="bg-gray-300 px-3 py-2 rounded text-sm">CSS</span>
                        <span className="bg-gray-300 px-3 py-2 rounded text-sm">JavaScript</span>
                        <span className="bg-gray-300 px-3 py-2 rounded text-sm">Bootstrap</span>
                        <span className="bg-gray-300 px-3 py-2 rounded text-sm">Json</span>
                    </div>
                    <a href="#" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded">Check it</a>
                </div>
            </div>
        </div>
    )
}

export default Example
