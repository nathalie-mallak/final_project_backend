const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ImgSchema = new Schema({
    img: { 
		// buffer allows us to store imgs in the form of arrays
		data: Buffer, 
		contentType: String
	}

	// {
	// //tells the db to automatically save the creation and update timestamp of each entry
    // timestamps: true
	// }
})

const img = mongoose.model('Image', ImgSchema)
module.exports = img