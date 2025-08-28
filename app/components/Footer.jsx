import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image alt='' src={isDarkMode ? assets.logo_dark : assets.logo} className='w-36 mx-auto mb-2' />

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image alt='' src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} className='w-6' />
            sivanandhams006@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Sivanandham. All rights reserved.</p>

        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a href="https://github.com/Sivanandham-k">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/sivanandham-k-795540293/">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/jairus_christ_276/">Instagram</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
