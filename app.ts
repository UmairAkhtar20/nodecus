let express=require('express');
const app=express()
import bodyParser from "body-parser";
import fs from 'fs'
app.use(express.static(__dirname +'/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
let route=require('./routes')
app.use('/routes',route);

app.listen(3500,()=>{
    console.log("app is running at 3500")
    
})
