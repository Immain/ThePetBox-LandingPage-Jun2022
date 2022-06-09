import React from 'react'

const Head = () => {
  return (
    <div className='w-full bg-cat bg-center md:bg-cover pl-[35%] py-16 px-4' >
        <div className='max-w-[1240px] mx-auto grid lg:grid-col-2 md:grid-cols-1'>
            <div className='flex flex-col justify-center'>
                <h1 className='md:text-3xl md:text-center lg:text-left text-2xl font-bold py-2 text-black'>The Pet Box</h1>
                <p className='text-slate-900 md:text-center lg:text-left font-medium'>Curated Eco-Friendly boxes packed with treats, toys, and food based on your cat's birthday, size, and dietary restrictions. </p>
                
                <div className='justify-between space-x-3 md:text-center lg:text-left  items-center'>
                <button className='bg-[#0385b0] w-[200px] hover:bg-blue-400 rounded-md font-medium my-6 mx-auto md:mx-0 py-2 px-2 text-black'>
                    Build Your Own Box
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Head