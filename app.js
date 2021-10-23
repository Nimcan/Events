
// require express
const express = require("express")

//Require cors
const cors = require("cors")

//import config.env folder
require("dotenv").config({path: "./config.env"})

//import server folder
require("./Server")

// require body parser
const bodyParser = require("body-parser")





// initialise express
const app = express();


// import routes
const eventRoute = require("./Route/eventsRoute")
const userRoute = require("./Route/usersRoute")
const orderRoute = require("./Route/orderRoute");
const reviewRouter = require("./Route/reviewRoute");
const messagesRoute = require("./Route/messagesRoute")


// initialise bodyParser
app.use(bodyParser());

// initialise cors
app.use(cors())

app.use(express.static("images"))

// use the routes
app.use("/event", eventRoute)
app.use("/user", userRoute)
app.use("/review", reviewRouter)
app.use("/orders", orderRoute)
app.use("/message",messagesRoute)


const Port = process.env.PORT || 8000

app.listen(Port, ()=> console.log(`Am listening on port ${Port}`))

