const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const client = require("../connection");
const app = express();
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  //const user  = req.body;
  //console.log(user)
  // const user={
  //     stu_email:"abjhudc",
  //     password:"cdebkbbk0",

  // }
  const body = req.body;
  body.password = await bcrypt.hash(body.password, 10);
  //add role
  let insertQuery = `insert into users (stu_email, password)
                       values ('${body.stu_email}','${body.password}')`;

  client.query(insertQuery, (err, message) => {
    if (!err) {
      console.log("bdchhk");
      res.status(201).send("insertion successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

//login
router.post("/login", async (req, res) => {
  const body = req.body;
  //   const errors = {}
  // console.log(stu_email,password);
  // // stu_email="jas@gmail.com"
  // // password="rdsdsfdfdfg"
  // console.log(stu_email,password);
  if (!body.stu_email || body.stu_email.trim() === "") {
    errors.stu_email = "Email is required"; //it checks if email is empty and sets an error message in the errors object if it is
  }
  if (!body.password || body.password.toString().trim() === "") {
    // it checks if the pswd is empty or not provided and sets an error message in the errors object if it is
    errors.password = "Password is required";
  }
  if (body.role == "student") {
    client.query(
      `Select * from users where stu_email = '${body.stu_email}' `,
      async (err, result) => {
        //sends a query to the database to check if the email matches the provided email
        if (!err) {
          console.log("email matched");
          const isPasswordMatch = await bcrypt.compare(
            body.password,
            result.rows[0].password
          );
          // If the password doesn't match, return an error response
          if (!isPasswordMatch) {
            return res.status(409).send("Invalid password");
          }
          //if the password match, it generated a JSON Web token
          const token = jwt.sign(
            { stu_email: body.stu_email, rollno: body.rollno, role: body.role },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );

          // req.user = {
          //   rollno: result.rows[0].rollno,
          //   role: body.role,
          //   stu_email: result.rows[0].stu_email,
          // };
          res.json({ token });
          //using the users email and role
          //   res.status(201).send(result.rows[0]);
        } else {
          console.log(err);
          //res.send("invalid user or password");
        }
      }
    );
    client.end;
  } else {
    //college login
  }
});

module.exports = router;
