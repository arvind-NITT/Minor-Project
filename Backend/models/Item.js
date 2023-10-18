const mongoose = require('mongoose');

const { Schema } = mongoose;

const item = new Schema({
  S_No:Number,
  Name:String,
  Quantity:Number,
  Cost:Number,
  Total:Number
});
const Item = mongoose.model('item',item);
  
module.exports= Item;