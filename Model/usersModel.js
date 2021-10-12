
const mongoose = require("mongoose")


const userschema = mongoose.Schema({
    userName:{
        type:String,
        trim:true,
        required:true
    },
    email: {
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required: true
    },
    tittle:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:String,
        enum: ["admin", "user"],
        default: "user"
    },
})


const userModel = mongoose.model("user", userschema)

module.exports = userModel