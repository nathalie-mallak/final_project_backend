const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const auth = require('../../middleware/auth')

const User = require('../../models/users')

router.post('/', (req, res) => {

    const { email, password } = req.body
    console.log(req.body)
    if(!email || !password) {
        return res.status(400).json({message: 'Please enter all fields'})
    }

    User.findOne({email})
        .then(user => {
            console.log(user)
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
})

// get api/userLogin/admin
// @address private
router.get('/admin', auth, (req, res) => {

    User.findById(req.user.id)
        // it will discard the password
        .select('-password')
        .then(user => res.json(user))
})

module.exports = router