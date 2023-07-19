//for creating a client that will connect to the server
//expres is required to make remote api calls


//creating a server listening at port 3300

//add body-parser: used to handle conversions to and from json
const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})

client.connect();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/users', )



