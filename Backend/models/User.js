const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  email: { type:String,unique:true},
  password: String,
  verified:Boolean,
  Role:String,
  college_id:String,
  Department:String,
  Mobile_number: String,
});
const User = mongoose.model('user',UserSchema);
  
module.exports= User;