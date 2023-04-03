import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

const Dashboard = () => {
  const { products } = useContext(ProductContext)

  const filteredProducts = products.filter(product => {
    return product.category === "men's clothing" || product.category === "women's clothing"
  })

  return (
    <section className='px-10'>
      <div className='border-b py-16'>
        <h1 className='text-5xl font-semibold'>Good Day !</h1>
      </div>
      <div className='py-16 flex flex-row'>
        <div className='grid grid-cols-2 gap-5 flex-1'>

          <div className='bg-blue-500 h-56 rounded-xl items-center justify-center flex'>
            <div className='flex flex-col'>
              <h1 className='text-white font-semibold text-xl capitalize'>
                total Revenue
              </h1>
              <span className='text-white font-bold text-2xl'>
                $ 5000
              </span>
            </div>
          </div>

          <div className='bg-blue-500 h-56 rounded-xl items-center justify-center flex'>
            <div className='flex flex-col'>
              <h1 className='text-white font-semibold text-xl capitalize'>
                total Orders
              </h1>
              <span className='text-white font-bold text-2xl'>
                150
              </span>
            </div>
          </div>

          <div className='bg-blue-500 h-56 rounded-xl items-center justify-center flex'>
            <div className='flex flex-col'>
              <h1 className='text-white font-semibold text-xl capitalize'>
                total Products
              </h1>
              <span className='text-white font-bold text-2xl'>
                {filteredProducts.length}
              </span>
            </div>
          </div>

          <div className='bg-blue-500 h-56 rounded-xl items-center justify-center flex'>
            <div className='flex flex-col'>
              <h1 className='text-white font-semibold text-xl capitalize'>
                total Customers
              </h1>
              <span className='text-white font-bold text-2xl'>
                32
              </span>
            </div>
          </div>

        </div>
        <div className='pl-10 flex-1'>
          <h1 className='mb-8 text-2xl font-semibold'>
            Recent Products
          </h1>
          <div className='grid grid-cols-3 gap-y-5'>
            {
              filteredProducts.splice(0, 6).map((item) => (
                <div
                  key={item.id}
                  className="flex"
                >
                  <img src={item.image} className="w-40 object-contain h-40" alt={item.title} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard