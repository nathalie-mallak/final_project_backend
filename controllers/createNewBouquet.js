const Bouquet = require('../models/bouquetOccasions')

module.exports = (req, res) => {

    Bouquet.create({name: req.body.name, price: req.body.price, description: req.body.description, type: req.body.type})
        .then(bouquet => res.status(200).json(bouquet))
        .catch(err => res.status(500).json({
            message: 'Internal Server Error',
            error: err.message
        }))
}