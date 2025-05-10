import React from 'react'
import {processes} from './../assets/assets'

const processSection = () => {

  return (
    <div className='flex flex-col items-center sm:mt-18'>
      <h2 className='text-[#06B8FF] text-lg font-bold '>\ Planning \</h2>
      <h1 className='text-black text-2xl font-bold '>Our Process</h1>
     <div className="grid grid-cols-2  md:grid-cols-4 gap-4 px-4 py-5 mx-auto max-w-5xl">
  {processes.map((item, index) => (
    <div key={index} className="bg-[#06B8FF14]  p-5 rounded">
      <div className="flex justify-between items-center">
        <div className="bg-white p-2 rounded w-12 h-12 flex items-center justify-center ">
          <img src={item.image} alt="" className="w-full h-full object-contain" />
        </div>
        <h1 className="text-2xl text-gray-300 font-bold ml-2">{item.number}</h1>
      </div>
      <h1 className="font-semibold mt-2">{item.name}</h1>
      <div className='flex gap-2 mt-2'>
      <hr  className='w-15 border-none h-1 rounded bg-[#06B8FF]'/>
      <hr  className='w-5 border-none h-1 rounded bg-[#06B8FF]'/>
      </div>
           
      <p className="text-xs sm:text-sm text-gray-600 mt-2">{item.description}</p>
    </div>
  ))}
</div>
</div>

  )
}

export default processSection
