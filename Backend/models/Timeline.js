const mongoose = require('mongoose');

const { Schema } = mongoose;

const timeline = new Schema({
  FormId:{
    type: mongoose.Schema.Types.ObjectId,
     ref:'Form1'
  },
  Approved0:Boolean,
  Approved1:Boolean,
  Approved2:Boolean,
  Rejected1:Boolean,
  Rejected2:Boolean
});
const Timeline = mongoose.model('timeline',timeline);
  
module.exports= Timeline;