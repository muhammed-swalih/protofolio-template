import React from 'react'
import web1 from '../assets/web1.png'
import web2 from '../assets/web2.png'
import web3 from '../assets/web3.png'
import web4 from '../assets/web4.png'
import web5 from '../assets/web5.png'
import web6 from '../assets/web6.png'


function Protofolio() {
  return (
    <div className='font-poppins pl-8 text-left py-8'>
      <div>
        <h1 className='text-4xl sm:pl-14'>Protofolio</h1>
      </div>
      <div className='leading-9 py-8 sm:pl-14 md:max-w-3xl lg:max-w-5xl'>
          <p>Since the beginning of my journey as a freelance designer and developer, I've done remote work for agencies consulted for startups and collaborated with talanted people to create digital products for both business and consumer use.</p>
          <p className='pt-4'>I offer from a wide range of services, including brand design, programming and teaching.</p>
      </div>
      <div className='py-5 grid grid-rows-6 gap-7 md:flex flex-row flex-wrap lg:mx-auto p-14'>
        <div className='text-center w-80 shadow-lg peer-last-of-type:-10 sm:mx-auto basis-1/3 flex-1 '>
          {
            <img src={web1} alt=""  className='rounded-lg object-cover'  />
          }
        </div>
        <div className='text-center w-80 shadow-lg peer-last-of-type:-10 sm:mx-auto basis-1/3 flex-1'>
          {
            <img src={web2} alt="" className='rounded-lg object-cover' />
          }
        </div>
        <div className='text-center w-80 shadow-lg peer-last-of-type:-10 sm:mx-auto basis-1/3 flex-1'>
          {
            <img src={web3} alt="" className='rounded-lg object-cover'/>
          }
        </div>
        <div className='text-center w-80 shadow-lg peer-last-of-type:-10 sm:mx-auto basis-1/3 flex-1'>
          {
            <img src={web4} alt="" className='rounded-lg object-cover'/>
          }
        </div>
        <div className='text-center w-80 shadow-lg peer-last-of-type:-10 sm:mx-auto basis-1/3 flex-1'>
          {
            <img src={web5} alt="" className='rounded-lg object-cover'/>
          }
        </div>
        <div className='text-center w-80 shadow-lg peer-last-of-type:-10 sm:mx-auto basis-1/3 flex-1' >
          {
            <img src={web6} alt="" className='rounded-lg object-cover'/>
          }
        </div>
      </div>
    </div>
  )
}

export default Protofolio
