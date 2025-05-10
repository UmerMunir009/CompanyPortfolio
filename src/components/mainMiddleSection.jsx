import React from 'react'
import { assets } from '../assets/assets'

const mainMiddleSection = () => {
  return (
    <div className='flex flex-col sm:flex-row  px-10 sm:px-20 my-10  sm:gap-7 gap-0'>
      <div className='w-full sm:w-[50vw] md:w-[40vw] h-80 flex justify-center'>
        <img className='w-full md:w-[90%] h-70 sm:h-100 rounded-tr-[70px] rounded-bl-[70px]' src={assets?.robot} alt="" />
      </div>
      <div className='w-full sm:w-[50vw] md:w-[60vw] '>
        <h2 className='text-[#06B8FF] text-lg font-bold '>\ About us \</h2>
        <h1 className='text-md sm:text-2xl md:text-3xl font-semibold'>We Develope Product That </h1>
        <h1 className='text-md sm:text-2xl md:text-3xl font-semibold'>People Love to Use.</h1>
        <p className='text-xs md:text-sm mt-2 text-gray-500'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution
          of letters, as opposed, Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
        <div className='flex gap-3 mt-4 flex-col sm:flex-row'>
          <div className='flex bg-[#06B8FF0F] py-3 px-4 lg:pr-10 rounded'>
            <div className='bg-white m-2 p-2  rounded w-20 h-15'>
              <img className='w-full h-full' src={assets?.bulb} alt="" />
            </div>
            <div>
              <h2 className='text-[#06B8FF] text-lg sm:text-sm md:text-md font-bold '>Our Vision</h2>
              <p className='text-wrap text-[10px] lg:text-[14px] text-gray-500'>It is a long established fact that It is </p>
            </div>
          </div>
           <div className='flex bg-[#06B8FF0F] py-3 px-4 lg:pr-10 rounded'>
            <div className='bg-white m-2 p-2  rounded w-20 h-15'>
              <img className='w-full h-full' src={assets?.star} alt="" />
            </div>
            <div>
              <h2 className='text-[#06B8FF] text-lg sm:text-sm md:text-md font-bold '>Our Goal</h2>
              <p className='text-wrap   text-[10px] lg:text-[14px] text-gray-500'>It is a long established fact that It is</p>
            </div>
          </div>
        </div>
            <img className='w-20 sm:w-25 h-7 mt-10' src={assets?.viewmore} alt="" />
      </div>

    </div>
  )
}

export default mainMiddleSection
