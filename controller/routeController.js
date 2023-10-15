
/* 
description : Get all contact 
request : GET /api/contacts 
*/

const getContacts = (req,res)=>{
    
    res.status(200).json({"Message" : "Get all contacts"});
}



/* 
description : create contact 
request : POST /api/contacts 
*/
const createContact = (req,res)=>{
    console.log(req.body);
    res.status(200).json({"Message" : "Create Contact", "Body" : req.body});
}


/* 
description : Get contact with given ID
request : GET /api/contacts/:id 
*/
const getContactByID = (req,res)=>{
    res.status(200).json({"Message" : `Get contacts with id = ${req.params.id}`});
}


/* 
description : Update contact with given ID
request : PUT /api/contacts/:id 
*/
const updateContactWithID = (req,res)=>{
    res.status(200).json({"Message" : `Update contacts with id = ${req.params.id}`});
}



/* 
description : Delete contact with given ID
request : DELETE /api/contacts/:id 
*/
const deleteContactWithID = (req,res)=>{
    res.status(200).json({"Message" : `Delete contacts with id = ${req.params.id}`});
}



module.exports = {getContacts , createContact , getContactByID , updateContactWithID , deleteContactWithID};