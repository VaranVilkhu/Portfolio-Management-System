//for creating a client that will connect to the server
//expres is required to make remote api calls


//creating a server listening at port 3300

//add body-parser: used to handle conversions to and from json
const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3000");
})

client.connect();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// To get all the students registered in the database
app.get('/users', (req, res)=>{
    client.query(`Select * from users`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

//get students by roll no
app.get('/users/:rollno', (req, res)=>
{
    client.query(`Select * from users where rollno = ${req.params.rollno}`, (err,result)=>
    {
        if(!err)
        {
            res.send(result.rows);
        }
    });
   client.end;
})

//To add new student into the database

app.post('/users', (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into users(rollno, firstname, lastname, course, phone, branch, semester_training, cgpa, placed, internships, skills) 
                       values(${user.rollno}, '${user.firstname}', '${user.lastname}', '${user.course}', ${user.phone},'${user.branch}', ${user.semester_training}, ${user.cgpa}, '${user.placed}', '${user.internships}', '${user.skills}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

//To edit the existing student in the database
app.put('/users/:rollno', (req, res)=> {
    let user = req.body;
    let updateQuery = `update users
                       set firstname = '${user.firstname}',
                       lastname = '${user.lastname}',
                       course = '${user.course}',
                       phone = ${user.phone},
                       branch = '${user.branch}',
                       semester_training = ${user.semester_training},
                       cgpa = ${user.cgpa},
                       placed = '${user.placed}',
                       internships = '${user.internships}',
                       skills = '${user.skills}'
                       where rollno = ${user.rollno}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

//To delete a student based on its roll no
app.delete('/users/:rollno', (req, res)=> {
    let insertQuery = `delete from users where rollno=${req.params.rollno}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

//To get all the colleges registered in the database
app.get('/college', (req, res)=>{
    client.query(`Select * from college`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

// To get colleges based on their id
app.get('/college/:cid', (req, res)=>
{
    client.query(`Select * from college where cid = ${req.params.cid}`, (err,result)=>
    {
        if(!err)
        {
            res.send(result.rows);
        }
    });
   client.end;
})

//To add a new college to the database
app.post('/college', (req, res)=> {
    const coll = req.body;
    let insertQuery = `insert into college(cemail, address, phone_no, cid, cname) 
                       values('${coll.cemail}', '${coll.address}', ${coll.phone_no}, ${coll.cid}, '${coll.cname}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

//To edit the existing college in the databae
app.put('/college/:cid', (req, res)=> {
    let coll = req.body;
    let updateQuery = `update college
                       set cemail = '${coll.cemail}',
                       address = '${coll.address}',
                       phone_no = '${coll.phone_no}',
                       cid = ${coll.cid},
                       cname = '${coll.cname}'
                       where cid = ${coll.cid}`
    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

//To delete a college based on its cid

app.delete('/college/:cid', (req, res)=> {
    let insertQuery = `delete from college where cid=${req.params.cid}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})
