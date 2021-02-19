//import express module
const exp = require("express");

const adminApiObj = exp.Router();

//extract the body of req obj
adminApiObj.use(exp.json());
//get req handler
adminApiObj.get("/getadmins", (req,res,next)=>{
    res.send("I am working from AdminApi")
})


//export
module.exports = adminApiObj;