import React from 'react'
import Header from './header'
import { assets } from './../assets/assets'

const mainTopSection = () => {
    return (
        <div
            className="w-full  pb-2 sm:h-[80vh] lg:h-[100vh] bg-[#0A1A2C]"
        >
            <Header />
            <div className='flex flex-col sm:flex-row  px-10 sm:px-20 pt-5 items-stretch'>
                <div className='flex flex-col gap-4 w-full sm:w-[50%] ]'>
                    <img className=' sm:h-30 lg:h-50 ' src={assets?.herotxt} alt="" />
                    <p className='text-white wrap text-xs md:text-sm' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem provident unde error fugit amet sunt? Beatae nemo molestias fuga nostrum temporibus in excepturi unde consequatur.</p>
                    <img className='w-20 sm:w-30 h-7' src={assets?.aboutUs} alt="" />
                    <div className='flex gap-3 mt-8 lg:mt-22'>
                        <div className='w-8 h-8 rounded-full bg-white justify-center items-center flex'>
                            <img className='w-2' src={assets?.facebook} alt="" />
                        </div>
                        <div className='w-8 h-8 rounded-full bg-white justify-center items-center flex'>
                            <img className='w-4' src={assets?.instagram} alt="" />
                        </div>
                        <div className='w-8 h-8 rounded-full bg-white justify-center items-center flex'>
                            <img className='w-4' src={assets?.linkedin} alt="" />
                        </div>
                    </div>
                </div>
                <div className=' w-full sm:w-[50%] '>
                     <img className='w-full h-full' src={assets?.hero} alt="" />
                </div>
                
            </div>
        </div>
    )
}

export default mainTopSection
