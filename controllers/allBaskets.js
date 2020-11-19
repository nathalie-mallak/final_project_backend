const Basket = require('../models/items')

module.exports = (req, res) => {

    Basket.find()
        .then(basket => res.status(200).json(basket))
}