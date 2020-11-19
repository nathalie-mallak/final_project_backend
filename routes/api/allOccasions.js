const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

router.route('/').get(require('../../controllers/specificOccasion'))

router.route('/').post(auth, require('../../controllers/createNewBouquet'))

module.exports = router