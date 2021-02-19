//import jwt module
const jwt = require("jsonwebtoken");

//import dotenv
require("dotenv").config();

const verifyToken = (req,res,next)=>{

    //token verification logic

    //get bearer token from header of req obj
    let tokenWithBearer = req.headers["authorization"]

    //if bearer token is existed
    if(tokenWithBearer){

        //extract token by removing first 7 characters i.e., bearer+whitespace character
        let token = tokenWithBearer.slice(7, tokenWithBearer.length);

        //verify with secret key
        jwt.verify(token,process.env.secret,(err,decoded)=>{
            if(err){
                //token is there but invalid => session expired
                return res.send({message:"Session expired.. plz relogin to continue"})
            }
            else{
                next()
            }
        })
    }
    //if bearer token is not existed
    else{
        return res.send({message:"Unauthorized accesss. Plz login to continue"})
    }
}

//export
module.exports = verifyToken;