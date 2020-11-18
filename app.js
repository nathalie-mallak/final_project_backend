const express = require('express')
const morgan = require('morgan')
var cors = require('cors')
const db = require('./config/keys')

db()
const app = express()

// bodyPraser middleware
app.use(express.json())
app.use(cors())

// use routes
app.use('/api/flowers', require('./routes/api/flowers'))
app.use('/api/userRegister', require('./routes/api/userRegister'))
app.use('/api/userLogin', require('./routes/api/userLogin'))
app.use('/api/occasions', require('./routes/api/allOccasions'))

const port = 5000
app.listen(port, () => console.log('server is up'))

// used for app.post to accept form data
app.use(express.urlencoded({ extended: true}))

// dev is a format of what is dictated in the console 
app.use(morgan('dev'))


// redirects
// app.get('/abou-US', (req, res) => {
// 	res.redirect('/about')
// })