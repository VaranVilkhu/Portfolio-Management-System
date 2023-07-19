const router = require("express").Router();
const client = require("../connection");

// //To get all the colleges registered in the database
router.get("/", (req, res) => {
  console.log("here");
  client.query(`Select * from college`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

// To get colleges based on their id
router.get('/:cid', (req, res)=>
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

// //To add a new college to the database
// router.post('/', (req, res)=> {
//     const coll = req.body;
//     let insertQuery = `insert into college(cemail, address, phone_no, cid, cname)
//                        values('${coll.cemail}', '${coll.address}', ${coll.phone_no}, ${coll.cid}, '${coll.cname}')`

//     client.query(insertQuery, (err, result)=>{
//         if(!err){
//             res.send('Insertion was successful')
//         }
//         else{ console.log(err.message) }
//     })
//     client.end;
// })

// //To edit the existing college in the databae
// router.put('/:cid', (req, res)=> {
//     let coll = req.body;
//     let updateQuery = `update college
//                        set cemail = '${coll.cemail}',
//                        address = '${coll.address}',
//                        phone_no = '${coll.phone_no}',
//                        cid = ${coll.cid},
//                        cname = '${coll.cname}'
//                        where cid = ${coll.cid}`
//     client.query(updateQuery, (err, result)=>{
//         if(!err){
//             res.send('Update was successful')
//         }
//         else{ console.log(err.message) }
//     })
//     client.end;
// })

// //To delete a college based on its cid

// router.delete('/:cid', (req, res)=> {
//     let insertQuery = `delete from college where cid=${req.params.cid}`

//     client.query(insertQuery, (err, result)=>{
//         if(!err){
//             res.send('Deletion was successful')
//         }
//         else{ console.log(err.message) }
//     })
//     client.end;
// })

module.exports = router;
