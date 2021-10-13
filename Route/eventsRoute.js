
const express = require("express")


const eventController = require("../Controller/eventsController")


const eventRouter = express.Router()


eventRouter.route("/events").post(eventController.Create).get(eventController.Show)

eventRouter.route("/events/:id").get(eventController.Find)


module.exports = eventRouter