const express = require("express");      
const { getContacts, createContact, getContactByID, updateContactWithID, deleteContactWithID } = require("../controller/routeController");

const router = express.Router();

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContactByID).put(updateContactWithID).delete(deleteContactWithID);


module.exports = router