const Basket = require('../models/items')

module.exports = (req, res) => {

    const { name, price, description } = req.body

    if(!name || !price || !description)
    {
        return res.status(400).json({message: 'Please fill the empty fields'})
    }

    Basket.create({ name, price, description })
        .then(basket => res.status(200).json(basket))
        .catch(err => res.status(500).json({
            message: 'Internal Server Error',
            error: err.message
        }))
}