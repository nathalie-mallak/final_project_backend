const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

router.route('/1').get(require('../../controllers/loveOccasion'))

router.route('/2').get(require('../../controllers/birthdayOccasion'))

router.route('/3').get(require('../../controllers/christmasOccasion'))

router.route('/4').get(require('../../controllers/anniversaryOccasion'))

//needs auth
router.route('/').post(auth, require('../../controllers/createNewBouquet'))

module.exports = router