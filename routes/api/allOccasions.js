const express = require('express')
const router = express.Router()

router.route('/').get(require('../../controllers/specificOccasion'))

router.route('/').post(require('../../controllers/createNewBouquet'))

module.exports = router