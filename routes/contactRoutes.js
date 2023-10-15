const express = require("express");      
const { getContacts, creteContact, getContactByID, updateContactWithID, deleteContactWithID } = require("../controller/routeController");

const router = express.Router();

router.route("/").get(getContacts);

router.route("/").post(creteContact);

router.route("/:id").get(getContactByID);

router.route("/:id").put(updateContactWithID);

router.route("/:id").delete(deleteContactWithID);



module.exports = router