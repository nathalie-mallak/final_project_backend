const img = require('../models/img')

module.exports = (req, res) => {

    img.findOne({}, 'img createdAt', function(err, img) {
        if(err)
            res.send(err)

        res.contentType('json')
        res.send(img)
    }).sort({ createdAt: 'desc'})
}
