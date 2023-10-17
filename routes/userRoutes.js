const express = require("express");
const { 
    registerUser, 
    loginUser, 
    currentUserInfo 
} = require("../controller/userController");

const  router = express.Router();


router.post("/register",registerUser);

router.post("/login",loginUser);

router.get("/current",currentUserInfo);

module.exports = router;

