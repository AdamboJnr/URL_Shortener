const mongoose = require('mongoose')
const shortId = require('shortid')

const shortIdSchema = new mongoose.Schema({
    longUrl: {
        required: [true, "Provide the url"],
        type: String,
    },
    shortUrl: {
        type: String,
        required: true,
        default: shortId.generate,
    }
})

module.exports = mongoose.model('shortid', shortIdSchema);