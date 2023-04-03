import React from 'react'

import background from '../assets/header.jpg'

import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='h-[800px] flex bg-header '>
      <div className='bg-overlay py-24' />
      <div className="container mx-auto relative">
        <div className='flex flex-col items-center justify-center h-full'>
          <div className='font-semibold text-white flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3' />
            New Trend
          </div>
          <h1 className='text-[70px] text-white leading-[1.1] font-light mb-4'>
            CLOTHES SALE STYLISH <br />
            <span className='font-semibold'>WOMENS & MENS</span>
          </h1>
          <Link to={'/'}>
            <span className='self-start uppercase font-semibold border-b-2 border-primary'>
              Discover More
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero