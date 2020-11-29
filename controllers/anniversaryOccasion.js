const Bouquet = require('../models/bouquets')

module.exports = (req, res) => {

    Bouquet.find({"type":"4"})
        .then(bouquet => res.status(200).json(bouquet))
}