
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
    eventType:{
        type:String,
        enum:["networking", "tech","religeous", "book-fair", "party"]
    },
    price:String,
    date:String,
    Time:String,
    qty:Number,
    image:String,
    fullfilled:{
        type:Boolean,
        default:false
    }
})


const eventModel = mongoose.model("events", eventModelSchema)

module.exports = eventModel