const express = require("express");
const AuthenticateUser = require("../Authentication");
const mongoose = require('mongoose');
const User = require("../models/User");
const Form1 = require("../models/Form1");
const Level1 = require("../models/Level1");


const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jWT_SECRETE_CODE = "fINALLY WE CALL FROM COLLEGE";
const ObjectId = mongoose.Types.ObjectId;

router.get("/FetchFormsforlevel0", AuthenticateUser, async (req, res) => {
    // const username=  await User.find()
    // const{ Role, Department}=req.body;
    const AllForms = await Form1.find({ user: req.user.found.id });
    console.log(AllForms);

    res.send({AllForms});
  });
router.get("/FetchFormsforlevel1", AuthenticateUser, async (req, res) => {
    // const username=  await User.find()
    const{ Role, Department}=req.body;
    // const AllForms = await Form1.find({ user: req.user.found.id });
    // const
    const Level1Forms= await Level1.find({Role:Role,Department:Department});
    // console.log(AllForms);
    console.log(Level1Forms);

    res.send({Level1Forms});
  });