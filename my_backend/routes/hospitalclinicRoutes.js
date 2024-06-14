const express = require('express');
const multer = require('multer');
const { handleFormSubmission, retrieveData } = require('../controllers/hospitalclinicController');
const HospitalClinicModel = require('../schema/pharmaciesschema');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post(
    "/hospital",
    upload.fields([
      { name: "cac_certificate_photo", maxCount: 1 },
      { name: "hospital_license_photo", maxCount: 1 },
      { name: "proof_of_hospital_address_photo", maxCount: 1 },
    ]),
    async (req, res) => {
        await handleFormSubmission(req, res, PharmaciesModel);
      }
  );

router.get('/hospital', retrieveData);

module.exports = router;