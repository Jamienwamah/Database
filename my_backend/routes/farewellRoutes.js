const express = require('express');
const multer = require('multer');
const { handleFormSubmission, retrieveData } = require('../controllers/farewellController');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post(
    '/farewell',
    upload.single('upload_photo'),
    handleFormSubmission
);

router.get('/farewell', retrieveData);

module.exports = router;
