const express = require('express');
const multer = require('multer');
const { handleFormSubmission, retrieveData } = require('../controllers/laboratoryController');
const LaboratoryModel = require('../schema/laboratoryschema');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post(
  '/laboratory',
  upload.fields([
    { name: 'cac_certificate_photo', maxCount: 1 },
    { name: 'laboratory_license_photo', maxCount: 1 },
    { name: 'proof_of_laboratory_address_photo', maxCount: 1 },
  ]),
  async (req, res) => {
    await handleFormSubmission(req, res, LaboratoryModel);
  }
);

router.get('/laboratory', retrieveData);

module.exports = router;
