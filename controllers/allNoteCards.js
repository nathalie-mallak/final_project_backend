const NoteCard = require('../models/items')

module.exports = (req, res) => {

    NoteCard.find({type: req.body.type})
        .then(noteCard => res.status(200).json(noteCard))
}