const asyncHandler = require("express-async-handler")      
/* 
as a alternative of try catch block.
we can wrap our functions between asyncHandler and
it will take care of the duty of try catch block
*/ 

const Contact = require("../models/contactModel");      // getting the schema for database in mongoDB from model


/* 
description : Get all contact 
request : GET /api/contacts 
*/

const getContacts = asyncHandler(async (req,res)=>{
    
    const contact = await Contact.find();       // finding contact <model>.<method-name>()
    res.status(200).json(contact);
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

    // above tests has been passed

    const contact = await Contact.create({
        name,
        email,
        MobileNo
    })

    res.status(200).json(contact);
})


/* 
description : Get contact with given ID
request : GET /api/contacts/:id 
*/
const getContactByID = asyncHandler(async (req,res)=>{

    const contact = await Contact.findById(req.params.id);
    if(!contact){   
        res.status(404);
        throw new Error("Contact Not found");
    }
    res.status(200).json(contact);
})


/* 
description : Update contact with given ID
request : PUT /api/contacts/:id 
*/
const updateContactWithID = asyncHandler(async (req,res)=>{

    // first find the contact
    const contact = await Contact.findById(req.params.id);
    if(!contact){   
        res.status(404);
        throw new Error("Contact Not found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );

    res.status(200).json(updatedContact);
})



/* 
description : Delete contact with given ID
request : DELETE /api/contacts/:id 
*/
const deleteContactWithID = asyncHandler(async (req,res)=>{
    res.status(200).json({"Message" : `Delete contacts with id = ${req.params.id}`});
})



module.exports = {getContacts , createContact , getContactByID , updateContactWithID , deleteContactWithID};