const express = require('express');
const multer = require('multer');
const { handleFormSubmission, retrieveData } = require('../controllers/nurseController');
const NurseModel = require('../schema/nursesschema');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post(
    "/nurse",
    upload.fields([
      { name: "upload_photo", maxCount: 1 },
      { name: "upload_nursing_certificate", maxCount: 1 },
      { name: "upload_proof_of_residential_address", maxCount: 1 },
    ]),
    async (req, res) => {
        await handleFormSubmission(req, res, NurseModel);
      }
  );
router.get('/nurse', retrieveData);

module.exports = router;
