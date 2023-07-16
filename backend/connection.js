//for creating connection between postgres and node
const {Client}= require('pg')
const client = new Client(
    {
        host: "localhost",
        user: "postgres",
        port: 5432,
<<<<<<< HEAD
        password: "varan",
        database: "postgres"
    }
)
module.exports = client
=======
        password: "Anushka16@",
        database: "postgres"
    }
)
module.exports = client
>>>>>>> 6d506b5c95c31cff626ed6c8dabfedc1fb8baaa7
