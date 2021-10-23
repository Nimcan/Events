
const express = require("express")


const messagesController = require("./../Controller/messagesController")


const messagesRoute = express.Router()



messagesRoute.route("/messages").post(messagesController.Comment).get(messagesController.Read)


module.exports = messagesRoute


