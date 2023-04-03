import React, { forwardRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBox, FaHome, FaProductHunt, FaUserCheck } from 'react-icons/fa'

import logo from '../assets/logo.svg'

const Sidebar = forwardRef(({ showNav } , ref) => {
  const [isOpen, setIsOpen] = useState(null)

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-2xl rounded-lg" >
      <div className='flex justify-center mt-6 mb-14'>
        <picture>
          <img src={logo} className='w-32 h-auto' alt="logo" />
        </picture>
      </div>

      <div className='flex flex-col'>
        <Link to="/">
          <div className={`py-3 mx-5 px-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${isOpen === 0 ? "bg-blue-500 text-white" : "bg-none text-black"}`} onClick={() => setIsOpen(0)}>
            <div className='mr-2'>
              <FaHome className='h-5 w-5' />
            </div>
            <div>
              <p>Dashboard</p>
            </div>
          </div>
        </Link>
        <Link to="/orders">
          <div className={`py-3 mx-5 px-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${isOpen === 1 ? "bg-blue-500 text-white" : "bg-none text-black"}`} onClick={() => setIsOpen(1)}>
            <div className='mr-2'>
              <FaBox className='h-5 w-5' />
            </div>
            <div>
              <p>Orders</p>
            </div>
          </div>
        </Link>
        <Link to="/products">
          <div className={`py-3 mx-5 px-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${isOpen === 2 ? "bg-blue-500 text-white" : "bg-none text-black"}`} onClick={() => setIsOpen(2)}>
            <div className='mr-2'>
              <FaProductHunt className='h-5 w-5' />
            </div>
            <div>
              <p>Products</p>
            </div>
          </div>
        </Link>
        <Link to="/customers">
          <div className={`py-3 mx-5 px-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${isOpen === 3 ? "bg-blue-500 text-white" : "bg-none text-black"}`} onClick={() => setIsOpen(3)}>
            <div className='mr-2'>
              <FaUserCheck className='h-5 w-5' />
            </div>
            <div>
              <p>Customers</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
})

Sidebar.displayName = 'Sidebar'

export default Sidebar