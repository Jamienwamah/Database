const express = require('express');
const multer = require('multer');
const { handleFormSubmission, retrieveData } = require('../controllers/undertakerController');
const UndertakerModel = require('../schema/undertakerschema');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post(
    "/undertaker",
    upload.fields([
      { name: "upload_photo", maxCount: 1 },
      { name: "upload_proof_of_office_address", maxCount: 1 },
      { name: "upload_proof_of_residential_address", maxCount: 1 },
    ]),
    async (req, res) => {
        await handleFormSubmission(req, res, UndertakerModel);
      }
  );

router.get('/underrtaker', retrieveData);

module.exports = router;
