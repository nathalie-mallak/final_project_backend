const Basket = require('../models/items')

module.exports = (req, res) => {

    Basket.find({"type":"basket"})
        .then(basket => res.status(200).json(basket))
}