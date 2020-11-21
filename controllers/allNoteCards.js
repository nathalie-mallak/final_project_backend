const NoteCard = require('../models/items')

module.exports = (req, res) => {

    NoteCard.find({"type": "noteCard" })
        .then(noteCard => res.status(200).json(noteCard))
}