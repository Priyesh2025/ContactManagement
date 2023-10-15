const {constants} = require("../constants")

const errorHandler = (err , req, res, next)=>{

    const statusCode = res.statusCode ? res.statusCode : 500;
    console.log("Status Code : ",statusCode);
    switch(statusCode){

        case 404:
            res.json({
                "title" : "Not found",
                "message" : err.message,
                "stackTrace" : err.stackTrace
            });
        break;

        case  400:
            res.json({
                "title" : "Validation Failed",
                "message" : err.message,
                "stackTrace" : err.stackTrace
            });

            break;

        case 401 :
            res.json({
                "title" : "Unauthorized",
                "message" : err.message,
                "stackTrace" : err.stackTrace
            });
            break;

        case 403:
            res.json({
                "title" : "Forbidden",
                "message" : err.message,
                "stackTrace" : err.stackTrace
            });
            break;

        case 405:
            res.json({
                "title" : "server side Error",
                "message" : err.message,
                "stackTrace" : err.stackTrace
            })
            break;

        case 500 :
            res.send("status code 500")
            break;

        default :
        console.log("NO error, All set.");
        break;

        
        
    }
};

module.exports = errorHandler;