const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

const User = require('../models/users')

module.exports = (req, res) => {
    
    const { 
        fname,
        lname,
        age,
        dob,
        email, 
        password,
        gender,
        phone
    } = req.body

    //data validation
    if(!fname || !lname || !age || !dob || !email || !password || !gender || !phone) {
        return res.status(400).json({message: 'Please fill the empty fields'})
    }

    // check for existing email
    User.findOne({ email, phone })
        .then(user => {
            if(user) return res.status(400).json({message: 'User already exists'})

            const newUser = new User({
                fname,
                lname,
                age,
                dob,
                email, 
                password,
                gender,
                phone
            })

            User.create()
                .then(res => {

            // salt: to create a hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            jwt.sign(
                                // to know which user is
                                { id: user.id},
                                config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if(err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            fname: user.fname,
                                            email: user.email
                                        }
                                    })
                                }
                            )
                           
                        })
                })
            })
        })
        })
}