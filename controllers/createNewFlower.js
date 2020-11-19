const Flower = require('../models/items')

module.exports = (req, res) => {

    const { name, price, description, color } = req.body
       
    if (!name || !color || !description || !price) {
        return res.status(400).json({message: 'Please fill the empty fields'})
    }

    Flower.create({ name, price, description, color })
        .then(flower => {
            res.status(200).json(flower)                   
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal Server Error',
                error: err.message
            })
        })
}