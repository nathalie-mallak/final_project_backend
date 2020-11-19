const NoteCard = require('../models/items')

module.exports = (req, res) => {

    const { name, color, price } = req.body

    if(!name || !price || !color)
    {
        return res.status(400).json({message: 'Please fill the empty fields'})
    }

    NoteCard.create({ name, color, price })
        .then(noteCard => res.status(200).json(noteCard))
        .catch(err => res.status(400).json({
            message: 'Internal Server Error',
            error: err.message
        }))
}