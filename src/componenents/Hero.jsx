import React from 'react'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-white font-bold text-xl p-2'> The Pet Box </p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl text-white  font-bold md:py-6'>Your Online Pet Shop</h1>
            <div className='flex justify-center items-center '>
              <p className='md:text-2xl text-xl font-bold text-white uppercase'>Everything your pet needs in one place.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero