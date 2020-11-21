const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BouquetSchema = new Schema ({

    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})

const bouquet = mongoose.model('bouquets', BouquetSchema)
module.exports = bouquet