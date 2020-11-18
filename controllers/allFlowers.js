const Flower = require('../models/flowers')

module.exports = (req, res) => {

    Flower.find()
        .then(flower => res.status(200).json(flower))
}