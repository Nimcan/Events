
const express = require("express")

const reviewController = require("../Controller/reviewController")


const reviewRouter = express.Router()

// reviewRouter.route("/review").get(reviewController.allReview)


module.exports = reviewRouter