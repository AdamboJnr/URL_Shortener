const { createCustomError } = require('../errors/custom-error')
const asyncWrapper = require('../middlewares/async')

const getAllShortUlrs = async (req, res, next) => {
    res.status(200).json({ message: "All Urls"})
}

const shortenUrl = async (req, res, next) => {
    res.status(200).json({ message: "Shortened Url"})
}

module.exports = {
    getAllShortUlrs, shortenUrl
}