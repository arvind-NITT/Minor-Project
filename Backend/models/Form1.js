const mongoose = require('mongoose');

const { Schema } = mongoose;

const Form1 = new Schema({
  File_no:  String, // String is shorthand for {type: String}
  user:{
    type: mongoose.Schema.Types.ObjectId,
     ref:'user'
  },
  send_to:String,
  Date:String,
  Approvedby:String,
  Items:[Item],
  
});
const Form_1 = mongoose.model('Form1',UserSchema);
  
module.exports= Form_1;