
const express = require("express")


const multer  = require('multer')
// wuxuu soo qaadaya extention-ka sida png sawirada
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })


// require event controller
const eventController = require("../Controller/eventsController")

const eventRouter = express.Router()


eventRouter.route("/events").post(upload.single("image"), eventController.Create).get(eventController.Show)

eventRouter.route("/events/:id").get(eventController.Find)
eventRouter.route("/events/fullfilled/:id").put(eventController.Fullfilled)


module.exports = eventRouter