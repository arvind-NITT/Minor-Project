const express= require('express');
const router = express.Router();
var bcrypt = require('bcryptjs');
const User= require('../models/User');
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
require('dotenv').config();
const privatekey=process.env.Private_key;
router.get('/',(req,res)=>{
    console.log("Adding")
})
let success= false;
const data_validation = [
    body("name").isLength({ min: 6 }),
    body("email").isEmail(),
    body("password").isLength({min: 6}),
  ];

router.post('/signup',[data_validation],async(req,res)=>{
    success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: "Please Check your data and try again"});
    }
    const {name,email,password}= req.body;
   
    try{
        let found= await User.findOne({email:email});
        if(found){
          return  res.status(400).json({success,message:"User Already Exist"});
        }
        let salt= bcrypt.genSaltSync(10);
    const SeccurePass= await bcrypt.hash(password,salt);
    const newUser=new User({
        name,
        email,
        password:SeccurePass
    });
    const adduser=await newUser.save();
     console.log(adduser);
        const data={
            id:adduser.id
        }
        
        const authtoken=  await jwt.sign(data,privatekey);
        if(authtoken)
        {success=true;}
        console.log(authtoken)
         
    return res.send({success:success,authtoken:authtoken})
    }catch(error){
            res.json(error)
        }
    // res.send(adduser);
})

router.post('/login',[
   
    body("email").isEmail(),
    body("password").isLength({min: 6})
  ],async(req,res)=>{
success=false;
    const {email,password}=req.body;
   try{ const found= await User.findOne({email:email});
    if(!found)
    {
      return res.json({message:"User Doesn't Exists PLease Signup First"});
    }
    const auth_success=await bcrypt.compare(password,found.password);
    if(!auth_success){
        return res.json({message:"Invalid Credentials"});
    }
    const data = {
        found: {
          id: found._id,
        },
      };
      console.log(data);
      console.log(privatekey);
      const authtoken =await jwt.sign(data,privatekey);
      success=true;
    return  res.json({message:"Login SuccessFully",success:success,authtoken});}catch(error){
        console.log(error);
       return res.status(400).json({message:error});
      }

})





module.exports=router