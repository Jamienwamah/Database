const express = require("express");
const multer = require("multer");
const bcrypt = require("bcrypt");
const { handleFormSubmission, retrieveData } = require("../controllers/healthclubController");
const HealthClubModel = require("../schema/healthclubschema");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/healthclub", upload.none(), async (req, res) => {
  try {
    // Check if user already exists
    const existingUser = await HealthClubModel.findOne({
      email: req.body.email,
    });
    if (existingUser) {
      return res.status(400).send("User already registered");
    }

    // Use the password provided or generate a new one
    const password = req.body.password || HealthClubModel.generateRandomPassword();
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new HealthClubModel({
      ...req.body,
      password: hashedPassword,
      shippingAddress: {
        firstName: req.body.receiverFirstName,
        lastName: req.body.receiverLastName,
        address: req.body.receiverAddress,
        state: req.body.receiverState,
        lga: req.body.receiverLGA,
        email: req.body.receiverEmail,
        phoneNumber: req.body.receiverPhoneNumber,
      },
    });

    await newUser.save();
    res.status(201).send("User registration was successful");
  } catch (err) {
    res.status(400).send("An error occurred during registration, please try again: " + err);
  }
});

router.get("/healthclub", retrieveData);

module.exports = router;
