import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full bg-paw-pattern text-black px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl text-black font-bold py-2'> WHERE BEING A PET IS JUST THE BEST </h1>
                <p className='font-medium'>Sign up for notifications and receive 10% off on your first subscription order.</p>
            </div>
            <div className='my-4'>
              <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                <button className='bg-[#0385b0] w-[200px] hover:bg-blue-400 text-black rounded-md font-medium ml-4 my-6 px-6 py-3'>
                  Notify Me
                </button>
              </div>
              <p> We care about the protection of your data. Read our <span className='text-[#0385b0]'>Privacy Policy.</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter