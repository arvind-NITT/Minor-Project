const Connet_to_mongoose= require('./connect_to_db');
const express = require('express');
const auth = require('./routes/auth');
const cors = require('cors');
const tools= require('./routes/Tools')

const port = 5000;



const app= express();
app.use(express.json());
app.use(cors());
app.use('/api/auth',auth);
app.use('/api/tools/',tools);
// app.use('content-type','Json');

app.get('/',(req,res)=>{
    res.send("Hey Welcome ");
});

Connet_to_mongoose();
app.listen(port,()=>{
    console.log("Starting.....")
})

