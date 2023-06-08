const mysql = require('mysql2/promise')
require('dotenv').config()
const table = process.env.TABLE_NAME

let connection

const connectDB = async () =>  {
    connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        database: process.env.DATABASE_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    })
    console.log('Connected to database!')
}

const create = async (data) => {
    const [result] = await connection.query(`INSERT INTO ${table} SET ?`, data)
    return result
}

const readAll = async () => {
    const [result] = await connection.query(`SELECT * FROM ${table}`)
    return result
}

const readOne = async (id) => {
    const [result] = await connection.query(`SELECT * FROM ${table} WHERE id = ?`, [id])
    return result.length > 0 ? result[0] : null;
}

const remove = async (id) => {
    const [result] = await connection.query(`DELETE FROM ${table} WHERE id = ?`, [id])
    return result
}


module.exports = { connectDB, create, readAll, readOne, remove }