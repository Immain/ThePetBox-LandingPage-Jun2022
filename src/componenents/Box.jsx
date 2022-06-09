import React from 'react'
import Cat2 from '../assets/Cat2.png'

const Box = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4 mt-[20%]' src={Cat2} alt='/' />
            <div className='flex flex-col justify-center'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black'>Every Monthly Subscription Comes With</h1>
                <h2 className='font-bold text-2xl'>Two Eco-Friendly Toys</h2>
                <p className='text-slate-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam non beatae iure ea molestias dicta, tenetur delectus aut culpa enim omnis corrupti hic. Alias labore consequuntur repellendus voluptas, illum repellat.</p>
                < br />
                <h2 className='font-bold text-2xl'>Two Medium-Sized Bags of Food</h2>
                <p className='text-slate-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam non beatae iure ea molestias dicta, tenetur delectus aut culpa enim omnis corrupti hic. Alias labore consequuntur repellendus voluptas, illum repellat.</p>
                < br />
                <h2 className='font-bold text-2xl'>Two Small-Sized Bags of Treats</h2>
                <p className='text-slate-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam non beatae iure ea molestias dicta, tenetur delectus aut culpa enim omnis corrupti hic. Alias labore consequuntur repellendus voluptas, illum repellat.</p>
                
                <button className='bg-[#0385b0] w-[200px] hover:bg-blue-400 rounded-md font-medium my-6 mx-auto md:mx-0 py-2 px-2 text-black'>
                    Choose Subscription
                </button>
                </div>
            </div>
        </div>
  )
}

export default Box