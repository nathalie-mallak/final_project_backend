const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema ({

    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    }
})

module.exports = User = mongoose.model('user', UserSchema)