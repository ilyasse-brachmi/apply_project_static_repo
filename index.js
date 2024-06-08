const express = require('express');
const cors = require('cors');
const uploadCandidat = require('./routes/candidat.js');
const uploadCandidature = require('./routes/candidature.js');
require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'))
app.use('/api/upload-candidat', uploadCandidat)
app.use('/api/upload-candidatures', uploadCandidature)



const port = process.env.PORT || 4000;
app.listen(port, () => console.log("Listenning on port" + port));