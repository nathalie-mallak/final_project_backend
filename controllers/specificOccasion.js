const Bouquet = require('../models/bouquetOccasions')

module.exports = (req, res) => {

    // @desc get specific bouquet
    // @params body : type
    Bouquet.find({type: req.body.type})
        .then(bouquet => {
            res.status(200).json(bouquet)
        })
        .catch(err => {
            res.status(404).json({message: 'bouquet not found'})
        })
}