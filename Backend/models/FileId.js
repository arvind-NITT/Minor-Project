const mongoose = require('mongoose');
const { Schema } = mongoose;

const File_id = new Schema({
  File_no:  Number , // String is shorthand for {type: String}
  Date:String,
});
const Fileid = mongoose.model('Fileid',File_id);
  
module.exports= Fileid;