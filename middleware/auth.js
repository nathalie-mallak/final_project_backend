const config = require('config')
const jwt = require('jsonwebtoken')

// to get the token sent from frontend 
function auth(req, res, next) {
    const token = req.header('x-auth-token')

    // unauthorized access
    if (!token) return res.status(401).json({message: 'authorization denied'})

    try {
         // verify token
        const decoded = jwt.verify(token, config.get('jwtSecret'))

        // taking the user id from the token
        req.user = decoded
        next()
    } 
    catch(e) {
        res.status(400).json({message: 'token is not valid'})
    } 
}

module.exports = auth