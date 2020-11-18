const Flower = require('../models/flowers')

module.exports = (req, res) => {
       
    if (!name || !color || !description || !price) {
        return res.status(400).json({message: 'Please fill the empty fields'})
    }

    Flower.create({ name: req.body.name, color: req.body.color, description: req.body.description, price: req.body.price })
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