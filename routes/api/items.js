const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

router.route('/flowers').get(require('../../controllers/allFlowers'))

router.route('/newFlower').post(auth, require('../../controllers/createNewFlower'))

router.route('/:id').delete(auth, require('../../controllers/deleteFlowers'))

router.route('/baskets').get(require('../../controllers/allBaskets'))

router.route('/newBasket').post(auth, require('../../controllers/createNewBasket'))

router.route('/noteCards').get(require('../../controllers/allNoteCards'))

router.route('/newNoteCard').post(auth, require('../../controllers/createNewNoteCard'))

module.exports = router