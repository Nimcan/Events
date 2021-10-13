
const mongoose = require("mongoose")


const eventModelSchema = mongoose.Schema({
    eventName:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    eventType:String,
    price:String,
    Time:String,
    qty:Number
})


const eventModel = mongoose.model("events", eventModelSchema)

module.exports = eventModel