import React, { useContext, useState } from 'react'
import { OrderContext } from '../context/OrderContext'

import { BsStopwatch } from 'react-icons/bs'
import { FaCheckCircle, FaBox } from 'react-icons/fa'

const Order = () => {
    const [action, setAction] = useState(0)

    const { orders } = useContext(OrderContext)

    console.log(orders)

    return (
        <section className='px-10 capitalize'>
            <div className='border-b py-16'>
                <div className='bg-blue-500 text-white flex w-72 h-40 rounded-xl items-center justify-center'>
                    <div>
                        <p className='text-xl'> 
                            Total Orders
                        </p>
                        <span className='text-2xl font-semibold'>
                            {orders.length}
                        </span>
                    </div>
                </div>
            </div>

            <div className='py-16'>
                <table className='w-full'>
                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>No</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>date</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>customer</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>status</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>products</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>total</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        orders && orders.map((item, index) => (
                                <tr className='bg-white border-b'>
                                    <td className='p-3 text-sm text-gray-700'>
                                        <span className='font-bold'>
                                            {index}
                                        </span>
                                    </td>
                                    <td className='p-3 text-sm text-gray-700'>
                                        {item.createdAt}
                                    </td>
                                    <td className='p-3 text-sm text-gray-700'>
                                        {item.name}
                                    </td>
                                    <td className='p-3 text-sm text-gray-700'>
                                        status
                                    </td>
                                    <td className='p-3 text-sm text-gray-700'>
                                        {item.products.length}
                                    </td>
                                    <td className='p-3 text-sm text-gray-700'>
                                        $ {item.totalPrice}
                                    </td>
                                    <td className='p-3 text-sm text-gray-700'>
                                        <div className='flex gap-3'>
                                            <button>
                                                <BsStopwatch />
                                            </button>
                                            <button>
                                                <FaCheckCircle />
                                            </button>
                                            <button>
                                                <FaBox />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Order