const Admin = require('../models/users')

module.exports = async(req, res) => {

    Admin.findById(req.user.id)
    // it will discard the password
    .select('-password')
    .then(user => res.json(user))
}