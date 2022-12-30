const express = require('express')
const router = express.Router()
const { getAllShortUlrs, shortenUrl } = require('../controllers/shorturl')
const notFound = require('../middlewares/not-found')

router.route('/').get(getAllShortUlrs).post(shortenUrl)
router.use(notFound)

module.exports = router;