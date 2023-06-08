const express = require('express')
require('dotenv').config()
const { connectDB } = require('./db/db-model')
const usersRouter = require('./routes/users')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const app = express()
const serverPort = process.env.WEB_SERVER_PORT || 8080

app.use(express.json())

app.use('/v1/users', usersRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async () => {
    try {
        await connectDB()
        app.listen(serverPort, () => {
            console.log(`Server is running on port ${serverPort}...`)
        })
    } catch(error) {
        console.log(error)
    }
}

setTimeout(start, 10000)