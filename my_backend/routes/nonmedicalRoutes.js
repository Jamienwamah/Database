const express = require("express");
const multer = require("multer");
const {
  handleFormSubmission,
  retrieveData,
} = require("../controllers/nonmedicalController");
const NonMedicalModel = require("../schema/nonmedicalschema");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post(
  "/nonmedical",
  upload.fields([
    { name: "upload_photo", maxCount: 1 },
    { name: "upload_caregiver_certificate", maxCount: 1 },
    { name: "upload_proof_of_residential_address", maxCount: 1 },
  ]),
  async (req, res) => {
    await handleFormSubmission(req, res, NonMedicalModel);
  }
);

router.get("/nonmedical", retrieveData);

module.exports = router;
