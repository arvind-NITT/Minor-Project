const mongoose= require('mongoose');
const mangUri = "mongodb://127.0.0.1:27017/Minor_project";

function Connet_to_mongoose(){
      mongoose.connect(mangUri)

}

module.exports= Connet_to_mongoose;