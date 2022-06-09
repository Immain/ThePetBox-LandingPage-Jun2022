import React from 'react'
import Pet from '../assets/ThePetBox2.png'

const Navbar = () => {
  return (
    <div className='text-black flex justify-between items-center h-24 w-full mx-auto px-4 border-b-2 border-black bg-white'>
        <img className='absolute w-[7%]' src={Pet} alt='' />
        {/*<IoIosPaw className='absolute w-15' size={40} />*/}
        <h1 className='w-full text-2xl mx-auto pl-[7%] font-bold'>THE PET BOX</h1>
        <ul className='flex p-4'>
            <li className='p-4 hover:bg-blue-300 rounded-t-lg rounded-b-[80%] font-medium'>
                Home
            </li>
            <li className='p-4 hover:bg-blue-300 rounded-t-lg rounded-b-[80%] font-medium'>
                Cats
            </li>
            <li className='p-4 hover:bg-blue-300 rounded-t-lg rounded-b-[80%] font-medium'>
                Care
            </li>
        </ul>

    </div>
  )
}

export default Navbar