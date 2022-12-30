const { createCustomError } = require('../errors/custom-error')
const asyncWrapper = require('../middlewares/async')
const shortId = require('../models/shorturl')

const getAllShortUlrs = asyncWrapper( async (req, res, next) => {
    const urls = await shortId.find()

    res.render('index', { urls: urls })

    // res.status(200).json({ urls }) JSON Format
})

const shortenUrl = asyncWrapper( async (req, res, next) => {
    const url = await shortId.create(req.body);

    res.redirect('/')

    // res.status(200).json({ url }) JSON format
})

const shortLinks = asyncWrapper( async (req,res, next) => {
    const shortUrl = await shortId.findOne({ shortUrl: req.params.shortid })

    if(!shortUrl){
        next(createCustomError('Route Not found', 404))
    }

    res.redirect(shortUrl.longUrl)
})

module.exports = {
    getAllShortUlrs, shortenUrl, shortLinks
}