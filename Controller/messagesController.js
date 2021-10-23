
const Messages = require("./../Model/messagesModal")


exports.Comment = async (req, res)=>{
    try{
        await Messages.create(req.body)
        res.status(200).json({
            message:"Message sent"
        })
    }catch (error){
        res.status(201).json({
            message: error.message
        })
    }
}


exports.Read = async  (req, res)=>{
    try{
      const allMessages =  await Messages.find({})
        res.status(200).json({
            message:"Finded all messages",
            allMessages
        })
        }catch(error){
        res.status(201).json({
            message:error.message
        })
    }

    }
