

const express = require ("express")

const userController = require("../Controller/usersController")


const userRouter = express.Router()

userRouter.route("/users").get(userController.allUsers)


module.exports = userRouter

