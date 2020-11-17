const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
	title: {
		type: String,
		required: true
	},

	description: {
		type: String
	},

	created: {
		type: Date,
	},

	updated: {
		type: Date
	}
})

module.exports = mongoose.model('Note', noteSchema)