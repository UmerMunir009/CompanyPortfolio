import React from 'react'
import { premiumProjects } from './../assets/assets'

const premiumProSec = () => {
    return (
        <div className='flex flex-col items-center sm:mt-5 mb-20'>
            <h2 className='text-[#06B8FF] text-lg font-bold '>\ Portfolio \</h2>
            <h1 className='text-black text-2xl font-bold '>Our Premium Projects</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 px-4 py-5 mx-auto max-w-5xl">
                {premiumProjects.map((item, index) => (
                    <div key={index} className='relative flex justify-center '>
                        <div className='w-60 h-60 lg:h-70 lg:w-70 rounded-xl'>
                            <img className='w-[100%] h-[100%] rounded-xl' src={item?.image} alt="" />
                        </div>
                        <div className='bg-[#F5F7FA] rounded-2xl  w-40 h-25 lg:w-50 lg:h-30  text-center p-4  absolute -bottom-12 left-10 '>
                            <p className='text-[10px] lg:text-[12px]'>{item?.description}</p>
                            <div className='flex gap-1  justify-center  mt-1 lg:mt-3 cursor-pointer'>
                                <p className='text-[10px] lg:text-[12px] text-blue-700'>Read More</p>
                                <p className='text-[10px] lg:text-[12px] text-blue-700'>--&gt;</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default premiumProSec
