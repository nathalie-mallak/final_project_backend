const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
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
	},
	price: {
		type: Number,
		required: true
	},
	image: {
		// buffer allows us to store imgs in the form of arrays
		data: Buffer,
		contentType: String
	}
})

const item = mongoose.model('items', ItemSchema)
module.exports = item
