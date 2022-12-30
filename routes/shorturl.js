const express = require('express')
const router = express.Router()
const { getAllShortUlrs, shortenUrl, shortLinks } = require('../controllers/shorturl')
const notFound = require('../middlewares/not-found')

router.route('/').get(getAllShortUlrs).post(shortenUrl)
router.route('/:shortid').get(shortLinks)
router.use(notFound)

module.exports = router;