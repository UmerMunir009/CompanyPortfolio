import React from 'react'

const gradientSection = () => {
    return (
        <div className="bg-gradient-to-r from-[#00FB94] to-[#06B8FF] h-[200px] mb-10 flex justify-around items-center">
            <div className='text-center'>
                <h1 className='text-xl sm:text-3xl font-bold'>300</h1>
                <h3 className='text-xs sm:text-lg'>Happy Customers</h3>
            </div>
            <div className='text-center'>
                <h1 className='text-xl sm:text-3xl font-bold'>623</h1>
                <h3 className='text-xs sm:text-lg'>Innovation</h3>
            </div>
            <div className='text-center'>
                <h1 className='text-xl sm:text-3xl font-bold'>12</h1>
                <h3 className='text-xs sm:text-lg'>Countries</h3>
            </div>
            <div className='text-center'>
                <h1 className='text-xl sm:text-3xl font-bold'>700</h1>
                <h3 className='text-xs sm:text-lg'>Great Projects</h3>
            </div>

        </div>

    )
}

export default gradientSection
