const express = require("express");
const { 
    registerUser, 
    loginUser, 
    currentUserInfo 
} = require("../controller/userController");
const validateToken = require("../Middleware/validateTokenHandler");

const  router = express.Router();


router.post("/register",registerUser);

router.post("/login",loginUser);

router.get("/current",validateToken,currentUserInfo);       // No information without validation

module.exports = router;

