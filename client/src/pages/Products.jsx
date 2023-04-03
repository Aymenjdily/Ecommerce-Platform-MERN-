import React, {useContext} from 'react'
import { ProductContext } from '../context/ProductContext'

const Products = () => {
    const { products } = useContext(ProductContext)

    const filteredProducts = products.filter(product => {
        return product.category === "men's clothing" || product.category === "women's clothing"
    })

    return (
        <section className='px-10'>
            <div className='border-b py-16'>
                <div className='bg-blue-500 text-white flex w-72 h-40 rounded-xl items-center justify-center'>
                    <div>
                        <p className='text-xl'> 
                            Total Products
                        </p>
                        <span className='text-2xl font-semibold'>
                            {filteredProducts.length}
                        </span>
                    </div>
                </div>
            </div>

            <div className='py-16'>
                <table className='w-full'>
                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>No</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>category</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>title</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>price</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredProducts && filteredProducts.map((item) => (
                                <tr className='bg-white border-b'>
                                    <td className='p-3 text-sm text-gray-700'>
                                        <span className='font-bold'>
                                            {item.id}
                                        </span>
                                    </td>
                                    <td className='p-3 text-sm text-gray-700'>
                                        {item.category}
                                    </td>
                                    <td className='p-3 text-sm text-gray-700'>
                                        {item.title}
                                    </td>
                                    <td className='p-3 text-sm text-gray-700'>
                                        $ {item.price}
                                    </td>
                                    <td className='p-3 text-sm text-gray-700'>
                                        {item.rating.rate}
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

export default Products