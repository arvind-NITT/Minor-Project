const express = require("express");
const User = require("./models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jWT_SECRETE_CODE = "fINALLY WE CALL FROM COLLEGE";

const AuthenticateUser=async(req,res,next)=>{
  // const navigate = useNavigate();
  const token= await req.header('auth-token');
  if(!token)
  {
    res.status(401).send({error:"Please Authenticate using a valid token"});
  }
try { const data=await jwt.verify(token,jWT_SECRETE_CODE);
  req.user=data;
  console.log(data);
  next();}
  catch(error){
    
 res.send({error:error});
//  navigate("/");
  }

}
module.exports= AuthenticateUser;