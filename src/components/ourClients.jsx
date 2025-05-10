import React from 'react'
import {assets, ourClientsData} from '../assets/assets'

const ourClients = () => {
  return (
    <div className=' mb-10'>
         <div className='flex items-center justify-center flex-col'>
            <h2 className='text-[#06B8FF] text-lg font-bold '>\ Our Clients \</h2>   
         <h1 className='text-black text-xl sm:text-2xl font-bold '>We Believe People We Trust</h1>
        </div>

      <div className="flex flex-col sm:px-10 sm:flex-row sm:overflow-x-auto sm:overflow-y-hidden overflow-y-auto space-y-4 sm:space-y-0 sm:space-x-4 p-4 scrollbar-hide [scrollbar-width:none]">
  {ourClientsData.map((item, index) => (
    <div
      key={index}
      className="w-full bg-[#06B8FF0F] sm:w-[35vw]  p-4 shrink-0 rounded-2xl"
    >
      <img className='h-5 mb-2' src={assets?.colon} alt="" />
      <p className="text-gray-500 text-xs  md:text-md">{item?.description}</p>
      <div className='flex gap-5 mt-3 items-center'>
        <img src={item?.image} alt="" className="w-17 h-17 rounded-full" />
        <div>
            <h2 className='font-bold'>{item.name}</h2>
            <p>{item.role}</p>
        </div>
      </div>
    </div>
  ))}
</div>


   
    
      
    </div>
  )
}

export default ourClients
