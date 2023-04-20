const express=require('express');
const cors=require('cors');
const path=require('path');
const imageRoutes=require('./routes/imageRoutes')

const app=express();
app.use(cors());

app.use(imageRoutes)
app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/main.html'));
})

app.listen(4000);