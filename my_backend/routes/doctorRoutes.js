const express = require("express");
const multer = require("multer");
const { handleFormSubmission, retrieveData } = require('../controllers/doctorController');
const DoctorModel = require("../schema/doctorschema");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post(
  '/doctor',
  upload.fields([
    { name: 'upload_photo', maxCount: 1 },
    { name: 'upload_medical_certificate', maxCount: 1 },
    { name: 'upload_proof_of_residential_address', maxCount: 1 },
  ]),
  async (req, res) => {
    await handleFormSubmission(req, res, DoctorModel);
  }
);

router.get('/doctor', retrieveData);

module.exports = router;
