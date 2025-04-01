
import Navbar from './Navbar'
import { motion } from "framer-motion"

const Header = () => {
  return (
      <div className='h-[90vh] sm:h[100vh]  
                    flex items-center justify-center w-full ' id='header'>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once:true}}
        className='px-6 md:px-20 mx-auto md:py-32'>
              <h2 className='text-center text-5xl sm:text-6xl md:text-[82px] 
              inline-block max-w-3xl font-semibold sm:pt-20 text-blue-500'>Explore Homes that fit your Dreams</h2>
              <div className='space-x-6 text-center mt-16'>
                  <a href="#Projects" className='border text-blue-500 border-blue-500 px-8 py-3 
                  rounded'>Projects</a>
                  <a href="#Contact"className='bg-blue-500 text-blue-50 px-8 py-3 
                  rounded'>Contact Us</a>
              </div>
          </motion.div>
      
    </div>
  )
}

export default Header
