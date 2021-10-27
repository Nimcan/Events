

const express = require ("express")

const userController = require("../Controller/usersController")


const userRouter = express.Router()

userRouter.route("/users").post(userController.newUser).get(userController.Find)
userRouter.route("/login").post(userController.loginUser)

//find user by id
userRouter.route("/users/:id").get(userController.findById)
//update user
userRouter.route("/:id").put(userController.Edit)



module.exports = userRouter

