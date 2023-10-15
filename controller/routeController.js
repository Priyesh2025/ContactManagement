const asyncHandler = require("express-async-handler")      
/* 
as a alternative of try catch block.
we can wrap our functions between asyncHandler and
it will take care of the duty of try catch block
*/ 



/* 
description : Get all contact 
request : GET /api/contacts 
*/

const getContacts = asyncHandler(async (req,res)=>{
    
    res.status(200).json({"Message" : "Get all contacts"});
})



/* 
description : create contact 
request : POST /api/contacts 
*/
const createContact = asyncHandler(async (req,res)=>{
    console.log(req.body);
    const {name , email , MobileNo} = req.body;
    if(!name || !email || !MobileNo){
        res.status(400);
        throw new Error("All fields are mandatory !")
    }
    res.status(200).json({"Message" : "Create Contact", "Body" : req.body});
})


/* 
description : Get contact with given ID
request : GET /api/contacts/:id 
*/
const getContactByID = asyncHandler(async (req,res)=>{
    res.status(200).json({"Message" : `Get contacts with id = ${req.params.id}`});
})


/* 
description : Update contact with given ID
request : PUT /api/contacts/:id 
*/
const updateContactWithID = asyncHandler(async (req,res)=>{
    res.status(200).json({"Message" : `Update contacts with id = ${req.params.id}`});
})



/* 
description : Delete contact with given ID
request : DELETE /api/contacts/:id 
*/
const deleteContactWithID = asyncHandler(async (req,res)=>{
    res.status(200).json({"Message" : `Delete contacts with id = ${req.params.id}`});
})



module.exports = {getContacts , createContact , getContactByID , updateContactWithID , deleteContactWithID};