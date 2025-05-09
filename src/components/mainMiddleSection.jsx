import React from 'react'
import { assets } from '../assets/assets'

const mainMiddleSection = () => {
  return (
    <div className='flex flex-col sm:flex-row  px-20 my-10 mb-40 sm:gap-7'>
        <div className='w-full sm:w-[40vw] h-80 flex justify-center'>
        <img className='w-full sm:w-[90%] h-100 rounded-tr-[70px] rounded-bl-[70px]' src={assets?.robot} alt="" />
        </div>
        <div className='w-full sm:w-[60vw] '>
            <h2 className='text-[#06B8FF] text-lg font-bold '>\ About us \</h2>
            <h1 className='text-4xl font-semibold'>We Develope Product That </h1>
            <h1 className='text-4xl font-semibold'>People Love to Use.</h1>
            <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, porro eum! Nam modi, quas unde cumque officia nisi cupiditate. Voluptate nesciunt consequatur, quae libero unde labore hic eligendi vitae corrupti qui, molestiae sunt sed animi cupiditate, quasi quisquam voluptates ut. Officia atque ipsum dolore quo?</p>



        </div>
      
    </div>
  )
}

export default mainMiddleSection
