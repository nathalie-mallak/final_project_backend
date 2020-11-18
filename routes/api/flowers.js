const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

/* 
@route GET api/items
@desc GET All Items  */
router.route('/').get(require('../../controllers/allFlowers'))

/* @route POST api/items
 @desc create an item
 private route (needs auth) */
router.route('/').post(auth, require('../../controllers/createNewFlower'))

/* @route POST api/items
 @desc delete an item
 private route (needs auth) */
router.route('/:id').delete(auth, require('../../controllers/deleteFlowers'))

module.exports = router;