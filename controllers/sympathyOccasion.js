const Bouquet = require('../models/bouquets')

module.exports = (req, res) => {

    Bouquet.find({"type":"sympathy"})
        .then(bouquet => res.status(200).json(bouquet))
}