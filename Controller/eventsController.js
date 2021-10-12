
const Events = require("./../Model/eventsModel")


exports.allEvents = async (req, res)=>{
    try{
       await Events.create()
        res.status(201).json({
            message: "Hi hello"
        })
    }catch (error){
        res.status(404).json({
            message:error.message
        })
    }
} 


