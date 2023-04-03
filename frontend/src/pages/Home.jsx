import React, { useContext, useState } from 'react'

import { Hero, Product } from '../components'

import { ProductContext } from '../context/ProductContext'

const Home = () => {
    const { products } = useContext(ProductContext)

    const [isActive, setIsActive] = useState(0)

    const filteredProducts = products.filter(product => {
        if(isActive === 0){
            return product.category === "men's clothing" || product.category === "women's clothing"
        }
        else if(isActive === 1){
            return product.category === "women's clothing"
        }
        else if(isActive === 2){
            return product.category === "men's clothing"
        }
        return product.category === "men's clothing" || product.category === "women's clothing"
    })

    return (
        <div>
            <Hero />
            <section className='pt-14 mx-auto container'>
                <div className='flex items-center justify-center gap-10'>
                    <button onClick={() => setIsActive(0)} className={`${isActive === 0 ? "bg-primary text-white font-medium transition" : "bg-none text-primary"} px-7 py-3`}>
                        All
                    </button>
                    <button onClick={() => setIsActive(1)} className={`${isActive === 1 ? "bg-primary text-white font-medium transition" : "bg-none text-primary"} px-7 py-3`}>
                        Women
                    </button>
                    <button onClick={() => setIsActive(2)} className={`${isActive === 2 ? "bg-primary text-white font-medium transition" : "bg-none text-primary"} px-7 py-3`}>
                        Men
                    </button>
                </div>
            </section>
            <section className='py-16 px-4'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                        {filteredProducts && filteredProducts.map((product) => (
                            <Product key={product.id} data={product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home