
const mongoose = require("mongoose")


const messagesSchema = mongoose.Schema({
    name:String,
    email:String,
    feedback:String
})


const messagesModal = mongoose.model("messages", messagesSchema)


module.exports = messagesModal