import fs from 'fs'
let express = require('express')
let routes=express.Router()
routes.use(express.static(__dirname +'/public'));
routes.get('/calculator',(req:any,res:any)=>{
        const a=fs.readFileSync('index.html')
        res.send(a.toString())
    });
routes.get("/getdata",(req:any,res:any)=>{
    
})
module.exports =routes;
