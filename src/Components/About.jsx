import { assets } from '../assets/assets'
import {motion} from 'framer-motion'
const About = () => {
  return (
      <motion.div 
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{once:true}}
          className='flex flex-col items-center justify-center 
            container mx-auto p-4 md:px-5 lg:px-32 w-full overflow-hidden'
            id="About">
          <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <></>
                <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span>
          </h1>
          <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
          
          <div className='flex flex-col md:flex-row items-center md:items-start md:px-0
                          md:gap-10'>
              <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-sm md:px-0' />

              <div className='flex flex-col items-center md:items-start mt-10  text-gray-600'>
                  
                  <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 lg:px-12 '>
                      <div>
                          <p className='text-4xl font-medium text-gray-800'>10+</p>
                          <p>Years of Excellence</p>
                      </div>
                   
                      <div>
                          <p className='text-4xl font-medium text-gray-800'>12+</p>
                          <p>Projects Completed</p>
                      </div>
                      <div>
                          <p className='text-4xl font-medium text-gray-800'>20+</p>
                          <p>Mn. Sq. Ft. Delivered</p>
                      </div>
                      <div>
                          <p className='text-4xl font-medium text-gray-800'>25+</p>
                          <p>Ongoing Projects</p>
                      </div>
                  </div>
                  
                  <p className='md:my-2 mx-w-lg md:px-1 lg:px-12 lg:my-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod maxime nesciunt, ab maiores a commodi esse atque
                      provident velit accusantium corrupti dolores!</p>
                  <button className='bg-blue-600 md:mx-1 lg:mx-12 text-white md:px-4 py-2 lg:px-8 rounded lg:my-0'>Learn More</button>
               </div>
          </div> 
      </motion.div> 
  )
}

export default About