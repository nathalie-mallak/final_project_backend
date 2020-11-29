const Bouquet = require('../models/bouquets')

module.exports = (req, res) => {

    Bouquet.find({"type":"1"})
        .then(bouquet => res.status(200).json(bouquet))
        .catch(err => console.log(err))
}
