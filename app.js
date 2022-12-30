const express = require('express')
const app = express()
const shortUrl = require('./routes/shorturl')
const errorHandlerMiddleware = require('./middlewares/error-handler')
const connectDB = require('./db/connect')
const { default: mongoose } = require('mongoose')
require('dotenv').config()

app.use(express.json())

// Routes
app.use('/', shortUrl)

// Middleware
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 3000

const start = async () => {
    try {
       await connectDB(process.env.MONGO_URL)

       const conn = mongoose.connection

       conn.once('error', console.error.bind('error', 'Failed to connect to Database'))

       conn.on('open', () => console.log('Succesfully connected to Database'))

       app.listen(PORT, () => console.log(`App has started at port: ${PORT}`) )
    } catch (error) {
        console.log(error);
    }
}

start();