const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

router.route('/').get(require('../../controllers/allNoteCards'))

router.route('/').post(auth, require('../../controllers/createNewNoteCard'))

module.exports = router