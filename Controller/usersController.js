
const User = require("./../Model/usersModel")


// create new user

exports.newUser = async (req, res)=>{
    try{
        await User.create(req.body)
        res.status(200).json({
            message:"user created"
        })
    }catch (error){
        res.status(201).json({
            message:error.message
        })
    }
}

// find all users

exports.Find = async (req, res)=> {
    try{
       const allUsers =  await User.find({})
        res.status(200).json({
            message:"all users are finded",
            allUsers
        })
    }catch (error){
        res.status(201).json({
            message: error.message
        })
    }
}

// find by id

exports.findById = async (req, res)=>{
    try{
        const userId = await User.findById(req.params.id)
        res.status(200).json({
            message:"user finded",
            userId
        })
    }catch (error){
        res.status(201).json({
            message: error.message
        })
    }
}


// edit user

exports.Edit = async (req, res)=>{
    try{
        await User.updateOne({_id:req.params.id}, req.body)
        res.status(200).json({
            message:"user is updated"
        })
    }catch (error){
        res.status(201).json({
            message: error.message
        })
    }
}

