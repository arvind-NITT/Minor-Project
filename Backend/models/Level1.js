const mongoose = require('mongoose');

const { Schema } = mongoose;

const Level_1 = new Schema({
  Role:String,
  Department:String,
  FormId:{
    type: mongoose.Schema.Types.ObjectId,
     ref:'Form1'
  },
  fileid:String,
  Approved:Boolean,
  Reject:Boolean,
  date:String,
});
const Level1 = mongoose.model('Level_1',Level_1);
  
module.exports= Level1;