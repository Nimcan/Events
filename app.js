
// require express
const express = require("express")





// initialise express

const app = express();


const Port = process.env.PORT || 8000

app.listen(Port, ()=> console.log(`Am listening on port ${Port}`))

