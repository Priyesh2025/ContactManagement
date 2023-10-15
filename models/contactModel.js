const mongoose = require("mongoose")

const contactSchema  = mongoose.Schema({
    name : {
        type : String,
        required : [true , "Please enter the Name"],
    },
    email : {
        type : String,
        required : [true , "Please enter the email"],
    },
    MobileNo : {
        type : String,
        required : [true , "Please enter the Phone Number"],
    },
},
{
timestamps : true,
}
)

module.exports = mongoose.model("Contact",contactSchema);        // <name> , <schema-name>