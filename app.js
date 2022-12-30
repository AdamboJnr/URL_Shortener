const express = require('express')
const app = express()
const shortUrl = require('./routes/shorturl')
const errorHandlerMiddleware = require('./middlewares/error-handler')

app.use(express.json())

// Routes
app.use('/', shortUrl)

// Middleware
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App has started at port: ${PORT}`);
})