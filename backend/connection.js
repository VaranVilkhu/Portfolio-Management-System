//for creating connection between postgres and node
const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "varan",
  database: "postgres",
});

client.connect((err) => {
  if (err) console.log(err);
  else console.log("connected");
});

module.exports = client;
