import React from 'react'
import { assets } from '../assets/assets'

const bar = () => {
  return (
    <div className='flex flex-col mb-4'>
    <div className='flex mt-10 mb-10 justify-around h-5'>
    <img className='w-7 sm:w-10 md:w-12 ' src={assets?.barimg1} alt="" />
    <img className='w-7 sm:w-10 md:w-12 ' src={assets?.barimg2} alt="" />
    <img className='w-7 sm:w-10 md:w-12 ' src={assets?.barimg3} alt="" />
    <img className='w-7 sm:w-10 md:w-12 ' src={assets?.barimg4} alt="" />
    <img className='w-7 sm:w-10 md:w-12 ' src={assets?.barimg5} alt="" />
    <img className='w-7 sm:w-10 md:w-12 ' src={assets?.barimg6} alt="" />
    <img className='w-7 sm:w-10 md:w-12 ' src={assets?.barimg7} alt="" />
    <img className='w-7 sm:w-10 md:w-12 ' src={assets?.barimg8} alt="" />
   
    </div>
    <hr className="w-full h-0.5 bg-gray-300 border-none" />

    </div>
  )
}

export default bar
