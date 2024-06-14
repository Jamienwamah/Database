const express = require("express");
const multer = require("multer");
const {
  handleFormSubmission,
  retrieveData,
} = require("../controllers/laceaiController");
const LaceAiModel = require("../schema/laceschema");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/waiting", async (req, res) => {
  await handleFormSubmission(req, res, LaceAiModel);
});

router.get("/laceai", retrieveData);

module.exports = router;
