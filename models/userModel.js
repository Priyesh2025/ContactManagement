const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username :{
        type : String,
        required : [true,"Please provide USERNAME"],
    },
    email :{
        type : String,
        required : [true , "Please provide EMAILID"],
        unique : [true , "Email Address already exist."],
    },
    password :{
        type : String,
        required : [true , "Please provide PASSWORD"],

    }
},
{
    timestamps : true,
}
);

module.exports = mongoose.model("User",userSchema);