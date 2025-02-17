import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
      <div className='pt-10 px-4 md:px-20 lg:px-32 w-ful bg-gray-900 overflow-hidden' id='Footer'>
          <div className='flex container mx-auto flex-col md:flex-row justify-between items-center gap-2'>
              <div className='w-full md:w-1/3 mb-8 md:mb-0'> 
                  <img className='p-5' src={assets.logo_dark} alt="Logo" />
                  <p className='text-gray-400 mt-4'>
                      Lorem ipsum dolor sit 
                      adipisicing elit. Error animi, sapiente impedit
                      natus excepturi qui iure possimus nobis saepe
                      .
                  </p>
              </div>
              <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                  <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                  <ul className='flex flex-col gap-2 text-gray-400'>
                      <a href="#Header" className='hover:text-white'>Home</a>
                      <a href="#About" className='hover:text-white'>About Us</a>
                      <a href="#Contact" className='hover:text-white'>Contact Us</a>
                      <a href="#" className='hover:text-white'>Privacy Policy</a>
                  </ul>
              </div>
              <div className='w-full md:w-1/3'>
                  <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our Newsletter</h3>
                  <p className='text-gray-400 mb-4 max-w-80'>
                      The Latest news, articles and resources,
                      sent to your inbox weekly
                  </p>
                  <div className='flex gap-2'>
                      <input type="email" name="email" placeholder='Enter your Email' id=""
                          className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
                      <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
                  </div>
              </div>
          </div>
          <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
             Copyright 2024. All Right Reserved. 
          </div>
    </div>
  )
}


export default Footer