const User = require("../models/user.model");
const bcryptjs = require('bcryptjs')


//  create user--------------
exports.signup = async(req,res)=>{
    const { username, email, password} = req.body 
    const hashedPassword =await bcryptjs.hash(password,10);

    try {
        const user = await User.create({username, email, password: hashedPassword});
        res.status(201).json({
            message : "user created successfully",
            user : user 
          })
    } catch (err) {
        res.status(404).json({
            message : "user not created",
            error : err
        })
    }
    
    
  }



// get all user------------  
exports.getUser = async (req,res)=>{
    const user = await User.find();
    res.status(200).json({
        message : "user fetched successfully",
        user : user
    })
}