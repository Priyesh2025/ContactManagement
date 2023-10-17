const asyncHandler = require("express-async-handler")      
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();      // for accessing contents from .env files
/* 
as a alternative of try catch block.
we can wrap our functions between asyncHandler and
it will take care of the duty of try catch block
*/ 




/* 
description : Get all contact 
request : GET /api/user/register
*/
const registerUser = asyncHandler(async (req,res)=>{

    const {username,email,password } = req.body;

    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({email});

    if(userAvailable){
        res.status(400);
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password,10);      // 10 is salt.
    // console.log("password : ",hashedPassword);

    const user = await User.create({
        username,
        email,
        password : hashedPassword,
    });


    
    console.log(`User Has been created : ${user}`);
    if(user){
        res.status(200).send({_id : user.id , email : user.email});
    }else{
        res.status(400);
        throw new Error("User data is not valid");
    }

    res.json({"message" : "User has been crated."});



    
});

/* 
description : Get all contact 
request : GET /api/user/login
*/
const loginUser = asyncHandler(async (req,res)=>{

    const {email , password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All field are mandatory");
    }

    const user = await User.findOne({email});           
    if(!user){
        res.status(400);
        throw new Error("User does not exist");
    }

    const PasswordIsTrue = await bcrypt.compare(password,user.password);
    if(!PasswordIsTrue){
        res.status(400);
        throw new Error("Incorrect Password");
    }

    const accessToken = await jwt.sign(
        {
            user : {
                username : user.username,
                email : user.email,
                id : user.id,
            },    
        },
        process.env.JWT_SECRET_TOKEN,
        {expiresIn : "1m"}
    )
    res.status(200).json({"jwt token" : accessToken});

});



/* 
description : Get all contact 
request : GET /api/user/current
***Private***
*/
const currentUserInfo = asyncHandler(async (req,res)=>{
    res.json({"message" : "Current user Info Page"});
});






module.exports = {registerUser , loginUser , currentUserInfo};