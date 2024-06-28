const User = require("../models/user.model");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const ErrorHandler = require("../utils/error");


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

// Signin user
exports.signin = async (req,res,next) =>{
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) return next(new ErrorHandler(404,'user not found'));

        const validPassword = await bcryptjs.compare(password,user.password)
        if(!validPassword){
            return next(new ErrorHandler(404,'Invalid password'));
        } 
        const token = jwt.sign({id : user._id},process.env.JWT_SECRET_KEY)

        res.cookie('acces-token',token,{httpOnly:true})
           .status(200)
           .json({
               message : "user logged in successfully",
               user : user
           })

    } catch (error) {
        next(error)
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