const { createCustomError } = require('../errors/custom-error')
const asyncWrapper = require('../middlewares/async')
const shortId = require('../models/shorturl')

const getAllShortUlrs = asyncWrapper( async (req, res, next) => {
    const urls = await shortId.find({})

    res.status(200).json({ urls })
})

const shortenUrl = asyncWrapper( async (req, res, next) => {
    const url = await shortId.create(req.body);

    res.status(200).json({ url })
})

module.exports = {
    getAllShortUlrs, shortenUrl
}