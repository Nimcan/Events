
const mongoose = require("mongoose")


const reviewSchema = mongoose.Schema({
    name:String,
    rating:{
        type:Number,
        min:1,
        max:5
    },
    comment:{
        type:String,
        enum:true
    }
})


const reviewModel = mongoose.model("review", reviewSchema)

module.exports = reviewModel