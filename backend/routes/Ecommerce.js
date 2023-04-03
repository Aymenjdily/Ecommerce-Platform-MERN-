const express = require('express')

const router = express.Router()

const {
    postOrder,
    getOrders
} = require('../controllers/EcommerceController')

// Post Order
router.post('/', postOrder)

// Get Orders
router.get('/', getOrders)

module.exports = router