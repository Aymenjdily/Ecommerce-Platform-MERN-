import React,{ useContext } from 'react'

import { Link } from 'react-router-dom'

import { BsPlus, BsEyeFill } from 'react-icons/bs'

import { CartContext } from '../context/CartContext'

const Product = ({ data }) => {
    const { id, image, category, title, price } = data 

    const { addToCart } = useContext(CartContext)
    
    return (
        <div>
            <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='w-[200px] mx-auto flex justify-center items-center cursor-pointer'>
                        <img src={image} alt={title} className="max-h-[160px] group-hover:scale-110 transition duration-300" />
                    </div>
                    <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                        <button onClick={() => addToCart(data, id)}>
                            <div className='flex justify-center items-center text-white bg-red-500 w-12 h-12'>
                                <BsPlus className='text-3xl' />
                            </div>
                        </button>
                        <Link to={`/product/${id}`}>
                            <div className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl">
                                <BsEyeFill />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className=''>
                <span className='text-sm capitalize text-gray-500 mb-1'>{category}</span>
                <Link to={`/product/${id}`}>
                    <h2 className='font-semibold mb-1'>{title}</h2>
                </Link>
                <h2 className='font-semibold'>$ {price}</h2>
            </div>
        </div>
    )
}

export default Product