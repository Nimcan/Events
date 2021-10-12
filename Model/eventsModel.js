
const mongoose = require("mongoose")


const eventModelSchema = mongoose.Schema({
    eventName:{
        type:String,
        enum:true,
        required:true
    },
    topic:{
        type:String,
        enum:true
    },
    time:Number,
    address:{
        type:String,
        required:true
    },
    price:Number
})


const eventModel = mongoose.model("events", eventModelSchema)

module.exports = eventModel