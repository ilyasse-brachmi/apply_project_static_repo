const express = require('express');
const upload = require('../middleware/upload.js');
const router = express.Router();

router.use(express.json());

router.post('/', upload.fields([
  { name: 'picture', maxCount: 1 },
  { name: 'CV', maxCount: 1 },
  { name: 'work_certificate', maxCount: 1 },
  { name: 'CIN_file', maxCount: 1 },
]), (req, res) => {
  const filePaths = {};
  for (const key in req.files) {
    if (req.files[key] && req.files[key][0]) {
      filePaths[key] = `/uploads/${req.files[key][0].filename}`;
    }
  }
  res.json({ success: true, filePaths });
});


module.exports = router;