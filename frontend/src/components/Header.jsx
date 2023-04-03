import React, { useContext, useState, useEffect } from 'react'

import { SidebarContext } from '../context/SidebarContext'
import { CartContext } from '../context/CartContext'

import { BsBag } from 'react-icons/bs'

import { Link } from 'react-router-dom'

import logo from '../assets/logo.svg'

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext)

  const { itemAmount } = useContext(CartContext)

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  }, [])
  

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className='flex container mx-auto items-start justify-between w-full'>
        <Link to={'/'}>
          <div>
            <img src={logo} className="w-[40px]" alt="logo" />
          </div>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className='text-2xl' />
          <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header