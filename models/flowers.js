const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FlowerSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	color: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
})

const flower = mongoose.model('flowers', FlowerSchema)
module.exports = flower
