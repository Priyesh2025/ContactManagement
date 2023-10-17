const express = require("express");      
const { 
    getContacts, 
    createContact, 
    getContactByID, 
    updateContactWithID, 
    deleteContactWithID 
} = require("../controller/contactController");
const validateToken = require("../Middleware/validateTokenHandler");

const router = express.Router();


// we want all the contact related data and operation to be done only be valid user (owner).
// Therefore we will make all of them as private using validate token
router.use(validateToken);      // applying the middleware to all routes
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContactByID).put(updateContactWithID).delete(deleteContactWithID);

module.exports = router