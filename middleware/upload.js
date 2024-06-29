const path = require('path');
const multer = require('multer');
const fs = require('fs');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const filePath = path.join('uploads/', file.originalname);
    // Check if file with the same name already exists
    cb(null, file.originalname);
  }
})

var upload = multer({
  storage: storage,
  fileFilter: function(req, file, callback) {
    if(
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "application/pdf"
    ){
      callback(null, true);
    }
    else{
      console.log("only jpg & png & pdf files supported !");
      callback(new Error('Only .png, .jpg, .jpeg, and .pdf files are supported'), false)
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 2
  }
})

module.exports = upload;