import React from 'react'
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className='container 2xl:px-20 mx-auto my-10'>
      <div className='bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl  '>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4 '> Over 10,000+ jobs to apply</h2>
        <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!</p>
        <div className='flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto '>
            <div className='flex items-center'>
                <img className=' h-4 sm:h-5' src={assets.search_icon} alt="" />
                <input type="text" placeholder='Search for jobs' className='max-sm:text-xs p-2 rounded outline-none w-full ' />
            </div>
            <div className='flex items-center'>
                <img className=' h-4 sm:h-5' src={assets.location_icon} alt="" />
                <input type="text" placeholder='Search for jobs' className='max-sm:text-xs p-2 rounded outline-none w-full ' />
            </div>
            <button className=' bg-blue-600 px-6 py-2 rounded text-white m-1'>Search</button>
        </div>
      </div>
      <div className='border border-gray-300 shadow-md mx-auto mt-5 p-4 sm:p-6 rounded-md max-w-7xl'>
  <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 flex-wrap'>
    <p className='font-medium text-sm sm:text-base md:text-lg mb-2 sm:mb-0'>Trusted by</p>
    <div className='flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12'>
      <img className='h-6 sm:h-8 md:h-10 lg:h-12 transition-all duration-300 hover:scale-105' src={assets.microsoft_logo} alt="Microsoft" />
      <img className='h-6 sm:h-8 md:h-10 lg:h-12 transition-all duration-300 hover:scale-105' src={assets.walmart_logo} alt="Walmart" />
      <img className='h-6 sm:h-8 md:h-10 lg:h-12 transition-all duration-300 hover:scale-105' src={assets.accenture_logo} alt="Accenture" />
      <img className='h-6 sm:h-8 md:h-10 lg:h-12 transition-all duration-300 hover:scale-105' src={assets.samsung_logo} alt="Samsung" />
      <img className='h-6 sm:h-8 md:h-10 lg:h-12 transition-all duration-300 hover:scale-105' src={assets.amazon_logo} alt="Amazon" />
      <img className='h-6 sm:h-8 md:h-10 lg:h-12 transition-all duration-300 hover:scale-105' src={assets.adobe_logo} alt="Adobe" />
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero
