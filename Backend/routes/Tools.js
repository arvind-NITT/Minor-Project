const express = require("express");
const AuthenticateUser = require("../Authentication");
const mongoose = require('mongoose');
const User = require("../models/User");
const Form1 = require("../models/Form1");
const Level1 = require("../models/Level1");
const Item = require("../models/Item");
const Timeline = require("../models/Timeline");
const File_Number = require("../models/FileId");
   
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jWT_SECRETE_CODE = "fINALLY WE CALL FROM COLLEGE";
const ObjectId = mongoose.Types.ObjectId;
const File_no="CA2023";
router.post("/submitform",AuthenticateUser,async (req, res) => {
  console.log("In form submittion....")
   let user=req.user.found.id;
  let { Items ,name,department, Approvedby,Date,send_to}= req.body;
  console.log(req.body);
   

  const File_id = await File_Number.find();  
  console.log(File_id);
  let count=File_id[0].File_no + 1;
   let fileno=  "NITTCA2023_" + count ;
  //  console.log(Items);
  let newform= new Form1({
    File_no:fileno,
    user,
    name,
    // Items,
    Date,
    send_to
  })
 await newform.save().then(async (result)=>{
    // console.log(result);
    let newtimeline=new Timeline({
    FormId: result._id,
    Approved0:true,
    Approved1:false,
    Approved2:false
   })
   for(let i =0 ;i<Items.length;i++){
               let newitem= new Item({
                FormId:result._id,
                S_No:i+1,
                Name:Items[i].name,
                Quantity:Items[i].quantity,
                Cost:Items[i].price,
                Total:Items[i].quantity*Items[i].price
                }
               )
              await newitem.save();
   }
   
   await newtimeline.save();
   let newlevel1= new Level1({
    Role:send_to,
    Department:department, 
    FormId:result._id,
    Approved:false,
   })
   let id=File_id[0]._id;
   let data= await File_Number.findOneAndUpdate({_id:id},{$set :{File_no:1+count}},{new:true});
   console.log(data);
   await newlevel1.save();
   console.log("form save ho gaya");
    res.json({success:true})
}).catch((err)=>{
    console.log(err);

let message ="An error occured while saving user account";
res.json({ success:false,  message:message });
});

});

// router.get("/FetchFormsforlevel0", AuthenticateUser, async (req, res) => {
    
//     res.send({AllForms});
//   });

router.get("/FetchFormsforlevel0", AuthenticateUser, async (req, res) => {
    // const username=  await User.find()
    // const{ Role, Department}=req.body;
    const AllForms = await Form1.find({ user: req.user.found.id });    
    const fromapp=[];
    // = await Level1.find({})
    for(let i=0;i<AllForms.length;i++){
        var timeline= await Timeline.find({ FormId: AllForms[i]._id });
        fromapp.push(timeline);
       
    }
    console.log(fromapp);
    console.log(AllForms);
    
    res.send({AllForms,fromapp});
  });
router.get("/FetchFormsforlevel1", AuthenticateUser, async (req, res) => {
    // const username=  await User.find()
    let user=req.user.found.id;
    const usersdetails= await Form1.find({ user:user})
    console.log(usersdetails);
    const{ Role, Department}=usersdetails[0];
    // const AllForms = await Form1.find({ user: req.user.found.id });
    // const
    // const Level1Forms= await Level1.find({Role:Role,Department:Department});
    // // console.log(AllForms);
    // console.log(Level1Forms);

    res.send({usersdetails});
  });
router.put("/approved/level0", AuthenticateUser,async (req,res)=>{
  const {Role,Department,FormId}= req.body;
  let Level0Forms= await Form1.find({Role:Role,Department:Department,FormId:ObjectId(FormId)});
  if(!Level0Forms){
    res.json({"error":"Form not Found"});
  }else{
     let data= await Form1.findOneAndUpdate({FormId:FormId},{$set :{Approvedby:true}},{new:true});
     res.json({data});
  }

})
router.put("/approved/level1", AuthenticateUser,async (req,res)=>{
  const {Role,Department,FormId}= req.body;
  let Level1Forms= await Level1.find({Role:Role,Department:Department});
  if(!Level1Forms){
    res.json({"error":"Form not Found"});
  }else{ 
     let data= await Level1.findOneAndUpdate({FormId:FormId},{$set :{Approvedby:true}},{new:true});
     res.json({data});
  } 
})  
 

module.exports = router;