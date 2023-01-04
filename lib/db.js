const mysql = require("mysql2/promise")

const pool = mysql.createPool({
  user: process.env.NEXT_PUBLIC_DB_USER,
  password: process.env.NEXT_PUBLIC_DB_PASSWORD,
  host: process.env.NEXT_PUBLIC_DB_HOST,
  port: process.env.NEXT_PUBLIC_DB_PORT,
  database: process.env.NEXT_PUBLIC_DB,
  multipleStatements: true,
})

module.exports = pool
