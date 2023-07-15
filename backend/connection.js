//for creating connection between postgres and node
const {Client}= require('pg')
const client = new Client(
    {
        host: "localhost",
        user: "postgres",
        port: 5432,
        password: "varan",
        database: "postgres"
    }
)
module.exports = client