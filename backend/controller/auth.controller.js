const User = require("../models/user.model");
const bcryptjs = require('bcryptjs');
const { errorHandler } = require("../utils/error");


//  create user--------------
exports.signup = async(req,res,next)=>{
    const { username, email, password} = req.body 
    const hashedPassword =await bcryptjs.hash(password,10);

    try {
        const user = await User.create({username, email, password: hashedPassword});
        res.status(201).json({
            message : "user created successfully",
            user : user 
          })
    } catch (err) {
       next(err);
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