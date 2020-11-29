const Bouquet = require('../models/bouquets')

module.exports = async(req, res) => {

    const { name, price, type, description } = req.body

    Bouquet.create({name, type, price, description})
        .then(bouquet => res.status(200).json(bouquet))
        .catch(err => res.status(500).json({
            message: 'Internal Server Error',
            error: err.message
        }))
}