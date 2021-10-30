
const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    order:[{
        eventName:{
            type:String,
            required:true
        },
        Address:{
            type:String,
            required:true
        },
        eventType:{
            type:String,
            enum:["networking", "tech","religeous", "book-fair", "party"]
        },
        price:String,
        Time:String,
        qty:Number,
        image:String
    }]
})


const orderModel = mongoose.model("order", orderSchema)


module.exports = orderModel