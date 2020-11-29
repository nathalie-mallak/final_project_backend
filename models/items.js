const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	color: {
		type: String,
	},
	description: {
		type: String,
	},
	price: {
		type: Number,
		required: true
	},
	type: {
		type: String,
		required: true
	},
	imgUrl: {
		type: String
	}
}, {
	//tells the db to automatically save the creation and update timestamp of each entry
    timestamps: true
	}
)

const item = mongoose.model('items', ItemSchema)
module.exports = item
