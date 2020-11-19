const User = require('../models/users')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {

    const { email, password } = req.body

    if(!email || !password) {
        return res.status(400).json({message: 'Please enter all fields'})
    }

    User.findOne({email})
        .then(user => {

            if(!user) return res.status(404).json({message: 'User does not exist'})

            //password validation
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(403).json({message: 'Invalid credentials'})

                    jwt.sign(
                        { id: user.id},
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err;
                            res.json({token})
                        }
                    )
                })
        })
}