// require mongoose
const mongoose =  require("mongoose")

// Database URL and password
const DB = process.env.DB.replace("<password>", process.env.DB_password)

// initialise mongoose
mongoose.connect(DB).then(()=> console.log("Connected to DB ✅"))