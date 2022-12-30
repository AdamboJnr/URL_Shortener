const express = require('express')
const router = express.Router()
const { getAllShortUlrs, shortenUrl, shortLinks } = require('../controllers/shorturl')
const notFound = require('../middlewares/not-found')
const logger = require('../middlewares/logger')

router.route('/').get(logger, getAllShortUlrs).post(logger, shortenUrl)
router.route('/:shortid').get(logger, shortLinks)
router.use(logger, notFound)

module.exports = router;