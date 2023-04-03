const mongoose = require('mongoose')

const Order = require('../models/OrderModel')

// Post Order
const postOrder = async (req, res) => {
    const{
        name, 
        nickname, 
        email, 
        phone, 
        country, 
        city, 
        street, 
        totalPrice,
        products
    } = req.body

    // Validation

    let emptyFields = []

    if(!name){
        emptyFields.push('name')
    }

    if(!nickname){
        emptyFields.push('nickname')
    }

    if(!email){
        emptyFields.push('email')
    }

    if(!phone){
        emptyFields.push('phone')
    }

    if(!country){
        emptyFields.push('country')
    }

    if(!city){
        emptyFields.push('city')
    }

    if(!street){
        emptyFields.push('street')
    }

    if(emptyFields.length > 0){
        return res.status(400).json({
            error: 'Please fill All fields',
            emptyFields
        })
    }

    // Post the Order

    try{
        const order = await Order.create({
            name, nickname, email, phone, country, city, street, totalPrice, products
        })
        res.status(200).json(order)
    }
    catch(error){
        res.status(400).json({
            error: error.message
        })
    }
}

// get Orders
const getOrders = async (req, res) => {
    const order = await Order.find({}).sort({createdAt: -1})

    res.status(200).json(order)
}

module.exports = {
    postOrder,
    getOrders
}