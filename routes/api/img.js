// const express = require('express')
// const router = express.Router()
// const mongoose = require('mongoose')
// const multer = require('multer')
// const Flower = require('../../models/items')


// //sets up where to store POST img
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, 'uploads')
//     },

//     // By default, multer removes file extensions so let's add them back
//     filename: function(req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
// })

// const upload = multer({ storage: storage})

// router.route('/').post(upload.single('image'), (req, res, next) => {
//         console.log(req.files.image.name)
    
//         let upload = multer({storage: storage}).single('image')
//         upload(req, res, function (err) {
//             if(err)return err
//         })
//         console.log(upload)
    
//         upload(req, res, function (err) {
//             if (err instanceof multer.MulterError) {
//               // A Multer error occurred when uploading.
//               console.log('multer error')
//             } else if (err) {
//               // An unknown error occurred when uploading
//               console.log('unknown error')
//             }
        
//             const file = req.files.image
//             file.mv(`${__dirname}/uploads/${file.name}`, err => {
//                 if (err) {
//                     console.log(err)
//                     return res.status(500).send(err)
//                 }
    
//             res.json({fileName: file.name, filePath: `uploads/${file.name}`})
//         })
//             console.log(req.files.image)
//           })
//     })

// router.route('/').get(require('../../controllers/getImg'))

// module.exports = router
