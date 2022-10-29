import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
function Navbar() {
  return (
    <div className='flex justify-between w-full my-8 py-2 px-8 h-12 md:px-24 my-6 lg:px-40'>
        <div>
            <h1 className='font-sans text-2xl uppercase font-semibold mt-2'>codibro</h1>
        </div>
        <div className=''>
            <ul className='flex gap-4 pt-2'>
                <li><BsFillMoonStarsFill className='mt-2'/></li>
                <li><button className='bg-gradient-to-r from-cyan-500 text- to-teal-500 px-4 py-1 rounded-md text-white
                '>
                    Resume
                </button></li>     
            </ul>
        </div>
    </div>
  )
}

export default Navbar
