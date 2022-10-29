import React from 'react'
import Designing from '../assets/design.png'
import Code from '../assets/code.png'
import Consulting from '../assets/consulting.png'

function Services() {
  return (
    <div className='font-poppins pl-8  mt-24 w-full sm:pl-24 '>
      <div className='mb-5'>
        <h1 className='text-3xl sm:text-4xl text-left'>Services I offer</h1>
      </div>
      <div>
        <h1 className=' max-w-xs leading-8 sm:max-w-2xl md:max-w-3xl text-left lg:max-w-4xl'>
        Since the beginning of my journey as a freelance designer and developer, I've done remote work for <span className='text-teal-600'>agencies</span> consulted for <span className='text-teal-600'>startups</span> and collaborated with talanted people to create digital products for both business and consumer use.
        <p className='pt-4 text-left'>
          I offer from a wide range of services, including brand design, programming and teaching.
        </p> 
        </h1>
      </div>
      <div className='py-8 w-80 sm:mx-auto lg:flex gap-10 md:w-fit lg:w-fit '>

          <div className='py-8 text-center shadow-lg peer-last-of-type:-10 rounded-xl my-10 leading-8 mx-auto flex-1
          '>
          <img src={Designing} width={100} height={100} alt="" className='mx-auto'/>
          <h1>beautifull designs</h1>
          <p className='py-2 max-w-xs sm:mx-auto'>
          Do you have an idea for your next great website? Let's make it a reality.
          </p>
          <h1 className='py-4 text-teal-600'>Tools I used for Designing</h1>
          <p>Photoshop</p>
          <p>Illustrator</p>
          <p>Figma</p>
          <p>Indesign</p>
          </div>

          <div className='py-8 text-center shadow-lg peer-last-of-type:-10 rounded-xl my-10 leading-8 flex-1'>
          <img src={Code} width={100} height={100} alt="" className='mx-auto'/>
          <h1>Development</h1>
          <p className='py-2 max-w-sm sm:mx-auto'>
          Are you interested in feedback for your current project? I can give you tips and tricks to level it up.


          </p>
          <h1 className='py-4 text-teal-600'>Technologys I use for Development</h1>
          <p>React</p>
          <p>Tailwind css</p>
          <p>Redux</p>
          <p>Node js</p>
          <p>Express</p>
          <p>Mongodb</p>
          </div>

          <div className='py-8 text-center shadow-lg peer-last-of-type:-10 rounded-xl my-10  leading-8 flex-1'>
          <img src={Consulting} width={100} height={100} alt="" className='mx-auto'/>
          <h1>Consulting</h1>
          <p className='py-2 max-w-xs sm:mx-auto'>
            Creating elegant designs suited for your needs following core
            design theory.
          </p>
          <h1 className='py-4 text-teal-600'>Types of Consultation</h1>
          <p>IT consulting</p>
          <p>Strategy consulting</p>
          <p>Human Resource consulting</p>
          </div>


      </div>
    </div>
  )
}

export default Services
