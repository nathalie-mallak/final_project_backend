const Flower = require('../models/items')

module.exports = (req, res) => {

    Flower.find()
        .then(flower => res.status(200).json(flower))
}