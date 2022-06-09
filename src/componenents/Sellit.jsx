import React from 'react'
import PetAd from '../assets/PetBoxAd.png'

const Sellit = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black'>Eco-friendly and Affordable Cat Toys Sent To You Every Month</h1>
                <p className='text-slate-900'></p>
                
                <div className='justify-between space-x-3  items-center'>
                <button className='bg-[#0385b0] w-[200px] hover:bg-blue-400 rounded-md font-medium my-6 mx-auto md:mx-0 py-2 px-2 text-black'>
                    View Plans
                </button>
                <button className='border-2 border-[#0385b0] w-[200px] hover:bg-blue-400 rounded-md font-medium my-6 mx-auto md:mx-0 py-2 px-2 text-black'>
                    Claim Offer
                </button>
                </div>
            </div>
            <img src={PetAd} alt='/' />
        </div>
    </div>
  )
}

export default Sellit