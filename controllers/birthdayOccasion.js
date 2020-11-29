const Bouquet = require('../models/bouquets')

module.exports = (req, res) => {

    Bouquet.find({"type":"2"})
        .then(bouquet => res.status(200).json(bouquet))
}