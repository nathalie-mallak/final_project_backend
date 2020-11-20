const express = require('express')
const morgan = require('morgan')
var cors = require('cors')
const db = require('./config/keys')
const multer = require('multer')
const path = require('path')

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

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file , cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb) {
        checkFileType(file, cb)
    }
    // name='image'
}).single('image')

// check file type
function checkFileType(file, cb){

    // allowed ext using regex
    const fileTypes = / jpeg|jpg|png|gif /

    //check ext
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase())

    //check mime to prevent renaming ext
    const mimeType = fileTypes.test(file.mimeType)

    if(mimeType && extname) {
        return cb(null, true)
    }
    else {
        cb('Error: images only')
    }
}

// redirects
// app.get('/abou-US', (req, res) => {
// 	res.redirect('/about')
// })