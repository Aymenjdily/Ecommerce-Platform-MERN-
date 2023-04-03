import React, {createContext, useState, useEffect} from 'react'

export const OrderContext = createContext()

const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const fetchOrders = async ( ) => {
            const res = await fetch('http://localhost:4000/api/orders')
            const data = await res.json()
            setOrders(data)
        }

        fetchOrders()
    }, [])

    return (
        <OrderContext.Provider value={{ orders }}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderProvider