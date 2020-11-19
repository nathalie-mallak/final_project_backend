const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

router.route('/').get(require('../../controllers/allBaskets'))

router.route('/').post(auth, require('../../controllers/createNewBasket'))

module.exports = router