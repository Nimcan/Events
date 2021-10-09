
const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    firstName:String,
    address:String
})


const orderModel = mongoose.model("order", orderSchema)


module.exports = orderModel