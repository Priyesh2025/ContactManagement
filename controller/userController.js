const asyncHandler = require("express-async-handler")      
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
    res.json({"message" : "Register Page"});
});

/* 
description : Get all contact 
request : GET /api/user/login
*/
const loginUser = asyncHandler(async (req,res)=>{
    res.json({"message" : "Login Page"});
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