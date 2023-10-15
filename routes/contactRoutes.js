const express = require("express");      

const router = express.Router();

router.route("/").get((req,res)=>{
    res.status(200).json({"Message" : "Get all contacts"});
});

router.route("/").post((req,res)=>{
    res.status(200).json({"Message" : "Create Contact"});
});

router.route("/:id").get((req,res)=>{
    res.status(200).json({"Message" : `Get contacts with id = ${req.params.id}`});
});

router.route("/:id").put((req,res)=>{
    res.status(200).json({"Message" : `Update contacts with id = ${req.params.id}`});
});


router.route("/:id").delete((req,res)=>{
    res.status(200).json({"Message" : `Delete contacts with id = ${req.params.id}`});
});



module.exports = router