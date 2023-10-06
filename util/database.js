const db = require("mysql2")

const pool = db.createPool({
    host:"localhost",
    user:"root",
    database:"node-app",
    password:"73588Ram@"
})

module.exports = pool.promise()