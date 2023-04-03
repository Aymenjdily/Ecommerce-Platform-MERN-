require("dotenv").config()

const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')

const OrdersRoute = require('./routes/Ecommerce')

const app = express()

// middleware
app.use(express.json())

app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/orders', OrdersRoute)

// Connect to DB & listening On Port
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(process.env.PORT, () => {
       console.log(`Connected to DB & Listening on Port : ${process.env.PORT}`)
    })
}).catch((error) => {console.log(error)})