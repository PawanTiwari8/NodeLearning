const express = require('express');
const users = require('./mockData.json')
const fs = require('fs')
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:false}));




app.get('/api/user/:id',(req,res)=>{
 const id = Number(req.params.id);
 const user = users.find((u)=>u.id===id);
 res.json(user)
})

app.post("/api/user",(req,res)=>{
 const body = req.body;
 users.push({...body,id:users.length+1})
 fs.writeFile("./mockdata.json",JSON.stringify(users),(err,data)=>{
    return res.json({status:"Success"})
 })

})



app.listen(PORT,()=>{console.log("Server is listening successfully")})