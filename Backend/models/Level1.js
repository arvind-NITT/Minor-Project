const mongoose = require('mongoose');

const { Schema } = mongoose;

const Level1 = new Schema({
  Role:String,
  Department:String,
  FormId:{
    type: mongoose.Schema.Types.ObjectId,
     ref:'Form1'
  },
  Approved:Boolean
});
const Level_1 = mongoose.model('Level1',UserSchema);
  
module.exports= Level_1;