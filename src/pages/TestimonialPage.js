import React from 'react'
import reviews from '../TestimonialData'
import Testimonials from '../Teastimonial/Testimonials'

const TestimonialPage = () => {
  return (
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-richblack-900'>
      
      <div className='text-center'>  
      
        <h1 className='text-4xl text-white font-bold'>Our Testimonials</h1>
      
        <div className='bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto'></div>
      
        <Testimonials reviews = {reviews}/>
       
      </div>
    </div>
  )
}

export default TestimonialPage