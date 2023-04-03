import React, { useState, useContext } from 'react'

import { CartContext } from '../context/CartContext'

import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const [name, setName] = useState('')
  const [nickname, setNickName] = useState('')
  const [country, setCountry] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [phone, setPhone] = useState('')

  const [error, setError] = useState('')
  const [emptyFields, setEmptyFields] = useState([])

  const { cart, total } = useContext(CartContext)

  const products = cart

  const totalPrice = total

  const navigate = useNavigate()

  const addOrder = async (e) => {
    e.preventDefault()

    const Order = {
      name, nickname, email, phone, country, city, street, totalPrice, products
    }

    const res = await fetch('http://localhost:4000/api/orders', {
      method:'POST',
      body: JSON.stringify(Order),
      headers:{
        'Content-Type' : 'application/json',
      }
    })

    const data = await res.json()
    
    if(!res.ok){
      setError(data.error)
      setEmptyFields(data.emptyFields)
    }

    if(res.ok){
      setName('')
      setNickName('')
      setEmail('')
      setPhone('')
      setCountry('')
      setCity('')
      setStreet('')
      setError(null)
      setEmptyFields([])

      return navigate('/')
    }
  } 

  return (
    <section className='h-screen container mx-auto'>
      <div className='flex md:flex-row flex-col py-24 h-full'>
        <form className='flex flex-1 flex-col items-center justify-center' onSubmit={addOrder}>
          <h1 className='self-start mb-14 font-medium text-3xl'>
            Checkout
          </h1>
            <div class="grid gap-6 mb-6 grid-cols-2 w-full">
                <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900">First name</label>
                    <input type="text" id="name" value={name} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label for="nickname" class="block mb-2 text-sm font-medium text-gray-900">Second name</label>
                    <input type="text" id="nickname" value={nickname} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ipsum" required onChange={(e) => setNickName(e.target.value)} />
                </div>
                <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input type="email" id="email" value={email} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="JohnIpsum@email.com" required onChange={(e) => setEmail(e.target.value)} />
                </div>  
                <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Phone</label>
                    <input type="text" id="phone" value={phone} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                <label for="country" class="block mb-2 text-sm font-medium text-gray-900">Country</label>
                    <input type="text" id="country" value={country} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => setCountry(e.target.value)} />
                </div>
                <div>
                <label for="city" class="block mb-2 text-sm font-medium text-gray-900">City</label>
                    <input type="text" id="city" value={city} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => setCity(e.target.value)} />
                </div>
            </div>
            <div class="mb-6 w-full">
            <label for="street" class="block mb-2 text-sm font-medium text-gray-900">Street</label>
                    <input type="text" id="street" value={street} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => setStreet(e.target.value)} />
            </div> 

            <div class="flex items-start mb-6 w-full">
                <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                </div>
                <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <span href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</span>.</label>
            </div>
            <button type="submit" class="text-white bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 md:self-start py-2.5 text-center">
              Order Now
            </button>
            {
              error && 
              <div className='text-red-500'>
                {error}
                {emptyFields}
              </div>
            }
        </form>

        <div className='flex flex-1 flex-col gap-y-4 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b md:pl-10 pl-0 mt-10'>
          {
            cart && cart.map((item) => (
              <div key={item.id} className="flex flex-row items-center">
                <div>
                  <img src={item.image} alt={item.title} className="w-[100px]" />
                </div>
                <div className='pl-5'>
                  <h1 className='font-medium'>
                    {item.title}
                  </h1>
                  <span>
                    {item.price}
                  </span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Checkout