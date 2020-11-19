const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

router.route('/').post(require('../../controllers/userLogin'))

// get api/userLogin/admin
// @address private
router.route('/admin').get(auth, require('../../controllers/admin'))

module.exports = router