import React from 'react'
import myImage from '../assets/dev-ed-wave.png'
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
  } from "react-icons/ai";

function Intro() {
  return (
    <div className='mt-32 text-center font-poppins w-full'>
        <div className='text-5xl  text-teal-600 font-medium dark:text-teal-400 md:text-6xl'>
            <h1>Dimitri Marco</h1>
        </div>
        <div className='my-4 text-2xl font-light md:text-3xl'>
            Developer and Designer.
        </div>
        <div className='my-6 px-20 leading-8 font-extralight md:text-xl max-w-2xl mx-auto text-gray-700 pb-5'>
            <h1>Freelancer providing services for programming and design content needs. Join me down below and let's get cracking!</h1>
        </div>
        <div className='flex justify-center gap-16 my-4 text-4xl  text-gray-600 md:text-5xl '>
            <AiFillLinkedin  className='hover:text-blue-500'/>
            <AiFillTwitterCircle className='hover:text-blue-500' />
            <AiFillYoutube className='hover:text-blue-500' />
        </div>
        <div className='rounded-full bg-gradient-to-b from-teal-500 overflow-hidden mt-20 w-80 h-80 mx-auto object-contain '>
           {
            <img src={myImage} layout="fill" objectFit="cover" className='mt-20'/>
            
           }
        </div>
    </div>
  )
}

export default Intro
