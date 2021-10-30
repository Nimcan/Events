
const express = require("express")

const orderController = require("../Controller/orderController")

const orderRouter = express.Router()


orderRouter.route("/orders").post(orderController.Order)


module.exports = orderRouter