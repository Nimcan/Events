
const express = require("express")


const eventController = require("../Controller/eventsController")


const eventRouter = express.Router()


eventRouter.route("/events").get(eventController.allEvents)


module.exports = eventRouter