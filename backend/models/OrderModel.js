const mongoose = require('mongoose')

const Schema = mongoose.Schema

const OrderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    products: {
        type: Array,
        required: true
    }
},
{
    timestamps:true
}
)

module.exports = mongoose.model('Order', OrderSchema)