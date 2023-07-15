const express= require("express");
const dotenv =  require("dotenv");
const client = require("./connection.js");
const app= express();
require("dotenv").config();
const jwt = require("jsonwebtoken");
app.listen(5500,()=>{
    console.log('server is listening on port 5500')
})
//const authenticate = require("./verifyToken.js");
//app.use(authenticate)

//signup 
client.connect((err)=>{
    if(err)
    console.log(err)
    else
    console.log('connected')
});
app.post("/signup",(req,res)=>{
    //const user  = req.body;
    //console.log(user)
    // const user={
    //     stu_email:"abjhudc",
    //     password:"cdebkbbk0",

    // }
    const {stu_email,password}=req.body
    let insertQuery = `insert into users (stu_email, password)
                       values ('${stu_email}','${password}')`
                       console.log('hiuiooi')
    client.query(insertQuery, (err, message)=>{
        if(!err){
            console.log("bdchhk")
         res.status(201).send("insertion successful");
        }
        else{console.log(err.message)}
    })
    client.end;
})

//login 

app.post("/login",(req,res)=>{
    
    const{ email , password } = req.body;
   
    client.query(
        `Select * from users where email = '${email}' and password = '${password}'`,(err, result) => { 
            if (!err) {
                console.log('hello again');
             }
             
        }
    )
}
)