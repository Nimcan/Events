

const express = require ("express")

const userController = require("../Controller/usersController")


const userRouter = express.Router()

userRouter.route("/users").post(userController.newUser).get(userController.Find)

//update user
userRouter.route("/users/:id").get(userController.findById)
userRouter.route("/:id").put(userController.Edit)



module.exports = userRouter

