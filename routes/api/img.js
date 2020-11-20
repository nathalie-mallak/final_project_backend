const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

router.route('/').post(auth, require('../../controllers/img'))
