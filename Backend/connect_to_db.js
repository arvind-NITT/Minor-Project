const mongoose= require('mongoose');
const mangUri = "mongodb://127.0.0.1:27017/sabjimanagement";

function Connet_to_mongoose(){
      mongoose.connect(mangUri,(error)=>{
        console.log("Connected to db");
        console.log(error);
      })

}

module.exports= Connet_to_mongoose;