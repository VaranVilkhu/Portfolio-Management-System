const router = require("express").Router();
const client = require("../connection");

// To get all the students registered in the database
router.get("/", (req, res) => {
  client.query(`Select * from users`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

//get students by roll no
router.get("/:rollno", (req, res) => {
  client.query(
    `Select * from users where rollno = ${req.params.rollno}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
  client.end;
});

//To add new student into the database

router.post("/", (req, res) => {
  const user = req.body;
  let insertQuery = `insert into users(firstname, lastname, course, phone, branch, semester_training, cgpa, placed, internships, skills) 
                       values('${user.firstname}', '${user.lastname}', '${user.course}', ${user.phone},'${user.branch}', ${user.semester_training}, ${user.cgpa}, '${user.placed}', '${user.internships}', '${user.skills}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Insertion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

//To edit the existing student in the database
router.put("/:rollno", (req, res) => {
  const roll = req.params.rollno;
  let user = req.body;
  console.log(user);

  console.log(roll);
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
                       where rollno = ${roll}`;

  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("Update was successful");
    } else {
      console.log("dguihdciu0", err.message);
    }
  });
  client.end;
});

//To delete a student based on its roll no
router.delete('/:rollno', (req, res)=> {
    let insertQuery = `delete from users where rollno=${req.params.rollno}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log('hudchuuhi0',err.message) }
    })
    client.end;
})

module.exports = router;
