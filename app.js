
// require express
const express = require("express")

//Require cors
const cors = require("cors")

// require path
const path = require("path")

//import config.env folder
require("dotenv").config({ path: "./config.env"})

//import server folder
require("./Server")

// require body parser
const bodyParser = require("body-parser")









// import routes
const eventRoute = require("./Route/eventsRoute")
const userRoute = require("./Route/usersRoute")
const orderRoute = require("./Route/orderRoute");
const reviewRouter = require("./Route/reviewRoute");
const messagesRoute = require("./Route/messagesRoute")


// initialise express
const app = express();

// initialise the express middleware that allow us to get data from the body
app.use(express.json())

// initialise bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

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

