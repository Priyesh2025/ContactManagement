const getContacts = (req,res)=>{
    res.status(200).json({"Message" : "Get all contacts"});
}

const creteContact = (req,res)=>{
    res.status(200).json({"Message" : "Create Contact"});
}

const getContactByID = (req,res)=>{
    res.status(200).json({"Message" : `Get contacts with id = ${req.params.id}`});
}

const updateContactWithID = (req,res)=>{
    res.status(200).json({"Message" : `Update contacts with id = ${req.params.id}`});
}


const deleteContactWithID = (req,res)=>{
    res.status(200).json({"Message" : `Delete contacts with id = ${req.params.id}`});
}



module.exports = {getContacts , creteContact , getContactByID , updateContactWithID , deleteContactWithID};