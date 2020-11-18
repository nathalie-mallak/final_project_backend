const Flower = require('../models/flowers')

module.exports = (req, res) => {

    Flower.findById(req.params.id)
        .then(flower => {
            flower.remove()
                .then(() => {
                    res.status(200).json({success: true})
                })
        })
        .catch(err => res.status(404).json({success: false}))

}