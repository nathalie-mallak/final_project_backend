const img = require('../models/img')
const path = require('path')

module.exports = (req, res) => {

    // console.log(req.file)

    // var path = req.file.path
    // console.log(path)

    // res.json({ message: 'new image added to db'})

    if(req.files === null) {
        return res.status(400).json({message: 'no file uploaded'})
    }

    const file = req.files.image

    file.mv(`${__dirname}/public/uploads/${file.name}`, err => {
        if(err) {
            console.log(err)
            return res.status(500).send(err)
        }

        res.json({ filename: file.name, filePath: `/uploads/${file.name}`})
    })
} 