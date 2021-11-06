
const express = require("express")

const orderController = require("../Controller/orderController")

const orderRouter = express.Router()


orderRouter.route("/orders").post(orderController.Order).get(orderController.Find)
orderRouter.route("/orders/:id").delete(orderController.Delete)
orderRouter.route("/orders/fullfilled/:id").put(orderController.Fullfilled)


module.exports = orderRouter