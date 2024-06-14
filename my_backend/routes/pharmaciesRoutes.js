const express = require('express');
const multer = require('multer');
const { handleFormSubmission, retrieveData } = require('../controllers/pharmaciesController');

const PharmaciesModel = require('../schema/pharmaciesschema');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.post(
    "/pharmacy",
    upload.fields([
      { name: "cac_certificate_photo", maxCount: 1 },
      { name: "pcn_license_photo", maxCount: 1 },
      { name: "proof_of_pharmacy_address_photo", maxCount: 1 },
    ]),
    async (req, res) => {
        await handleFormSubmission(req, res, PharmaciesModel);
      }
  );

router.get('/pharmacy', retrieveData);

module.exports = router;

