const express = require('express')
const router = express.Router()

router.route('/:name').get(require('../../controllers/searchItems'))

module.exports = router