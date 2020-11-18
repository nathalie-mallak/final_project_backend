const express = require('express')
const router = express.Router()

// @route post api/userRegister
router.route('/').post(require('../../controllers/userRegister')) 

module.exports = router