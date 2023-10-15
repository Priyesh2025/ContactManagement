const express = require("express");             

const dotenv = require("dotenv").config();      // for accessing contents from .env files

const app = express();

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});