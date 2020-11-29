const express = require('express')
const morgan = require('morgan')
var cors = require('cors')
const db = require('./config/keys')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

db()
const app = express()

// bodyPraser middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

// used for app.post to accept form data
app.use(express.urlencoded({ extended: true}))

// dev is a format of what is dictated in the console 
app.use(morgan('dev'))

//sets up where to store POST img
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads')
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({ storage: storage, fileFilter: fileFilter })

// const upload = multer({ storage: storage})

// app.use(multer().single(''))
app.post('/imgData', upload.single('file'), (req, res, next) => {
    // console.log(req.files.fname.name)
    console.log('1');

    let upload = multer({storage: storage}).single('file')
    upload(req, res, function (err) {
        if(err) {
            console.log('2');
            return err
        }
        console.log('3');

    })
    console.log(upload)

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            console.log('4');
            // A Multer error occurred when uploading.
        } else if (err) {
            console.log('5');
            // An unknown error occurred when uploading
        }
        console.log('natalie');
        // console.log(req.files.file);
        console.log('mallak');

        const file = req.file
        console.log(file);
        console.log(req.files);
        console.log('nat');
        
        console.log(req.files.file.name)
        file.mv(`${__dirname}/uploads/${file.name}`, (err, result) => {

            if (err) {
                console.log('6')
                return res.status(500).send(err)
            }

        res.json({fileName: file.name, filePath: `uploads/${file.name}`})
    })
        console.log(file.name)
    })
})

// use routes
app.use('/api/items', require('./routes/api/items'))
app.use('/api/userRegister', require('./routes/api/userRegister'))
app.use('/api/userLogin', require('./routes/api/userLogin'))
app.use('/api/occasions', require('./routes/api/allOccasions'))
app.use('/api/searchItems', require('./routes/api/search'))

const port = 5000
app.listen(port, () => console.log('server is up'))

// redirects
// app.get('/abou-US', (req, res) => {
// 	res.redirect('/about')
// })


// console.log(__dirname)
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads');
//     },
//     filename: (req, file, cb) => {
//         console.log(file);
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });

// app.use(multer().single(''))

// app.post('/upload', upload.single('image'), (req, res, next) => {
    
//     console.log(req.file);

//     let upload = multer({storage: storage}).single('image')
//     upload(req, res, function (err) {
//         if(err)return err
//     })
//     console.log(upload)

//     upload(req, res, function (err) {
//         if (err instanceof multer.MulterError) {
//             // A Multer error occurred when uploading.
//         } else if (err) {
//             // An unknown error occurred when uploading
//         }
    
//         const file = req.files.image
//         file.mv(`${__dirname}/uploads/${file.name}`, err => {
//             if (err) {
//                 // console.log(err)
//                 // console.log('5');
//                 return res.status(500).send(err)
//             }})
//     })
    
//     try {
//         return res.status(201).json({
//             message: 'File uploded successfully',
//             fileName: file.name, filePath: `uploads/${file.name}`
//         });
//     } catch (error) {
//         console.error(error);
//     }
// })