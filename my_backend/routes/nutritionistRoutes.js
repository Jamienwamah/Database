const express = require('express');
const multer = require('multer');
const { handleFormSubmission, retrieveData } = require('../controllers/nutritionistController');
const NutritionistModel = require('../schema/nutritionschema');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.post(
    "/nutrition",
    upload.fields([
      { name: "upload_photo", maxCount: 1 },
      { name: "upload_certificate", maxCount: 1 },
      { name: "upload_proof_of_residential_address", maxCount: 1 },
    ]),
    async (req, res) => {
        await handleFormSubmission(req, res, NutritionistModel);
      }
  );

router.get('/nutitionist', retrieveData);

module.exports = router;

