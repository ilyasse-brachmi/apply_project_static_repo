const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload.js')

router.use(express.json());

router.post('/', upload.array('files[]', 12), (req, res) => {
  try {
    const filePaths = req.files.map(file => `/uploads/${file.filename}`);
    res.json({ success: true, filePaths });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;