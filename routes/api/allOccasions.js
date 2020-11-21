const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

router.route('/happy').get(require('../../controllers/happyOccasion'))

router.route('/love').get(require('../../controllers/loveOccasion'))

router.route('/gratitude').get(require('../../controllers/gratitudeOccasion'))

router.route('/sympathy').get(require('../../controllers/sympathyOccasion'))

router.route('/').post(auth, require('../../controllers/createNewBouquet'))

module.exports = router