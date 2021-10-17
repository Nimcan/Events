
const Events = require("./../Model/eventsModel")

// create event
exports.Create = async (req, res)=>{
    console.log(req.body)

    try{
        // wuxuu req.file.filename inuugu shubayaa req.body.image 
        req.body.image = req.file.filename
       await Events.create(req.body)
        res.status(201).json({
            message:"Event Created"
        })
    }catch (error){
        res.status(404).json({
            message:error.message
        })
    }
} 

// find all events

exports.Show = async (req, res)=>{
    try{
        const allEvents = await Events.find({ })
        res.status(200).json({
            message:"Finded all events",
            allEvents
        })
    }catch (error){
        res.status(201).json({
            message: error.message
        })
    }
}


// find event by id

exports.Find = async (req, res)=>{
    try{
       const findEvent =  await Events.findById(req.params.id)
        res.status(200).json({
            message:"events is finded",
            findEvent
        })
    }catch (error){
        res.status(201).json({
            message: error.message
        })
    }
}


