const express = require('express');
const multer = require('multer');
const { handleFormSubmission, retrieveData } = require('../controllers/therapistController');
const TherapistModel = require('../schema/therapistschema');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post(
    "/therapist",
    upload.fields([
      { name: "upload_photo", maxCount: 1 },
      { name: "upload_certificate", maxCount: 1 },
      { name: "upload_proof_of_residential_address", maxCount: 1 },
    ]),
    async (req, res) => {
        await handleFormSubmission(req, res, TherapistModel);
      }
  );

router.get('/therapist', retrieveData);

module.exports = router;

