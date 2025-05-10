import React from 'react'
import { assets } from '../assets/assets'

const getInTouch = () => {
  return (
    <div className='flex flex-col px-6 gap-3 sm:flex-row  md:px-40 justify-center mb-12 sm:gap-3'>
        <div className='w-full sm:w-[1/2]  sm:h-[400px]'>
        <div>
            <div className='flex gap-2'>
                <h1 className='font-bold text-xl sm:text-3xl'>Get in </h1>
                <h1 className='font-bold text-xl sm:text-3xl text-[#06B8FF]'>Touch</h1>
            </div>
            <p className='text-xs md:text-sm text-gray-500 mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas recusandae a illum esse aliquam nam rerum culpa, ipsam dignissimos earum illo porro! Consequuntur, mollitia soluta.</p>
        </div>
        <form className='flex flex-col gap-3 mt-5'>
              <input className='border text-sm  outline-none p-1 w-full rounded' type="text"  placeholder='Name *'/>
              <input className='border text-sm  outline-none p-1 w-full rounded' type="text"  placeholder='Email *'/>
              <input className='border text-sm  outline-none p-1 w-full rounded' type="text"  placeholder='Phone Number *'/>
              <input className='border  text-sm  outline-none p-1 w-full rounded' type="text"  placeholder='How did you find us ? *'/>
        </form>
        <div className='bg-gradient-to-r to-[#00FB94] from-[#06B8FF] mt-4 text-center p-1 font-bold text-white'>
            SEND
        </div>

        <div className='flex gap-9 mt-10'>
            <div className='flex gap-2 items-center'>
                <img className='sm:w-7 sm:h-7 w-5 h-5' src={assets?.phone} alt="" />
                <div>
                    <h2 className='text-sm'>Phone</h2>
                    <p className='text-xs text-blue-400'>0343-0987654</p>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <img className='sm:w-7 sm:h-7 w-5 h-5' src={assets?.email} alt="" />
                <div>
                    <h2 className='text-sm'>Email</h2>
                    <p className='text-xs text-blue-400'>umer@gmail.com</p>
                </div>
            </div>
        </div>
        </div>
        <div className='w-full sm:w-[1/2] sm:h-[420px]'>
        <img className='w-full h-full ' src={assets?.map} alt="" />
        </div>
        
      
    </div>
  )
}

export default getInTouch
