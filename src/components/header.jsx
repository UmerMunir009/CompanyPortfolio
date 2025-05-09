import React from 'react'
import { assets } from '../assets/assets'

const header = () => {
  return (
    <div className='flex justify-between  pt-1  px-3  sm:px-8 items-center '>
      <img className=' w-20 sm:w-25' src={assets?.logo} alt="" />
      <div className='flex gap-3 sm:gap-4 '>
        <img className='w-20 sm:w-30 h-7' src={assets?.ourPortfolio} alt="" />
        <img className='w-20 sm:w-30 h-7' src={assets?.contact} alt="" />
      </div>
    </div>
  )
}

export default header
