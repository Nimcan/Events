
const User = require("./../Model/usersModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");


// create new user

exports.newUser = async (req, res)=>{
    try{
        // encryp password
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        const createUser = await User.create({
            userName:req.body.userName,
            email: req.body.email,
            password:hashPassword,
            role:req.body.role, 
            tittle: req.body.tittle
        })

        const token = jwt.sign(
            { id: createUser._id, role: createUser.role, email: createUser.email },
            "EVENT_WEB",
            {
              expiresIn: "10h",
            }
          );

        res.status(200).json({
            message:"user created",
            token
        })
    }catch (error){
        res.status(201).json({
            message:error.message
        })
    }
}


// Loggin in 
exports.loginUser = async (req, res)=> {
    try{
        const user = await User.findOne({ email: req.body.email });

        if (user === null) {
          return res.status(404).send({ message: "User does not exsists" });
        }

        const compare = await bcrypt.compare(req.body.password, user.password);
        if (compare === false) {
          return res.status(404).send({ message: "Wrong Email or Password" });
        }
        // for security reasons
        user.password = undefined;
    
        const token = jwt.sign(
          { id: user._id, role: user.role, email: user.email },
          "EVENT_WEB",
          {
            expiresIn: "10h",
          }
        );
    
        res.status(200).send({ message: "Logged in", user, token });
    } catch(error){
        res.status(201).json({
            message: error.message
        })
    }
}







// find all users

exports.Find = async (req, res)=> {
    try{
       const allUsers =  await User.find({ })
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
        console.log(req.body)
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




