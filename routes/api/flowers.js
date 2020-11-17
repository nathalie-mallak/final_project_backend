const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

// Item Model
const Flower = require('../../models/Flowers')

// @route GET api/items
// @desc GET All Items
router.get('/', (req, res) => {
	Flower.find()
		.then(flowers => res.json(flowers))
})

// @route POST api/items
// @desc create an item
// private route (needs auth)
router.post('/', auth, (req, res) => {
	const newFlower = new Flower({
		name: req.body.name,
		color: req.body.color
	})

	newFlower.save()
		.then(flower => {
			res.json(flower)
	})
})

router.delete('/:id', auth, (req, res) => {
	Flower.findById(req.params.id)
		.then(flower => {
			flower.remove()
				.then(() => {
					res.status(200).json({success: true})
				})
		})
		.catch((err) => res.status(404).json({success: false}))
})

module.exports = router;