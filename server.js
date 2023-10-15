const express = require("express");             

const dotenv = require("dotenv").config();      // for accessing contents from .env files

const app = express();

const contactRoutes = require("./routes/contactRoutes");

const port = process.env.PORT || 5000;



app.use("/api/contacts",contactRoutes);

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});