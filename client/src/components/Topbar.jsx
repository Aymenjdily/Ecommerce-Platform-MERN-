import React from 'react'

import User from '../assets/user.jpg'

const Topbar = () => {
  return (
    <header className='py-6 w-full p-5 bg-white'>
      <div className='flex justify-between items-center flex-row'>
        <p>
          03 / 31 / 2023
        </p>
        <h1 className='text-lg font-medium'>
          Order Management
        </h1>
        <div className='flex items-center gap-5'>
          <p className='text-sm font-medium'>
            I'm User
          </p>
          <img src={User} alt="user" className='w-12 h-12 rounded-full object-contain' />
        </div>
      </div>
    </header>
  )
}

export default Topbar