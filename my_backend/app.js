require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const bcrypt = require("bcrypt");
const paystack = require("paystack")(process.env.PAYSTACK_SECRET_KEY);
const migrateMongo = require("migrate-mongo");
const { SendMailClient } = require("zeptomail");
const {
  DoctorModel,
  NonMedicalModel,
  NurseModel,
  NutritionistModel,
  TherapistModel,
  UndertakerModel,
  LaceAiModel,
  LaboratoryModel,
  HospitalClinicModel,
  PharmaciesModel,
  FarewellModel,
  HealthClubModel,
} = require("./schema");

// Configure multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();
app.use(bodyParser.json());
app.use(cors());

const zeptoClient = new SendMailClient({
  url: "https://api.zeptomail.com/",
  token: process.env.ZEPTOMAIL_TOKEN,
});

// MongoDB connection using a URI
const dbUri = "mongodb://localhost:27017/data";
const connectAndMigrate = async () => {
  try {
    await mongoose.connect(dbUri);
    console.log("Your MongoDB is connected successfully");
  } catch (err) {
    console.log("MongoDB was not connected, please check your URI: " + err);
  }
};

// Start the migration process
connectAndMigrate();

// Helper function to handle form submission
const handleFormSubmission = (Model) => async (req, res) => {
  try {
    // Check if user already exists
    const existingUser = await Model.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).send("User already registered");
    }

    // Generate a default password
    const defaultPassword = "defaultPassword123!";
    const hashedPassword = await bcrypt.hash(defaultPassword, 10);

    const formData = req.body;
    formData.password = hashedPassword;

    if (req.files) {
      if (req.files.upload_photo) {
        formData.upload_photo = req.files.upload_photo[0].buffer;
      }
      if (req.files.upload_medical_certificate) {
        formData.upload_medical_certificate =
          req.files.upload_medical_certificate[0].buffer;
      }
      if (req.files.upload_proof_of_residential_address) {
        formData.upload_proof_of_residential_address =
          req.files.upload_proof_of_residential_address[0].buffer;
      }
      if (req.files.upload_caregiver_certificate) {
        formData.upload_caregiver_certificate =
          req.files.upload_caregiver_certificate[0].buffer;
      }
      if (req.files.upload_nursing_certificate) {
        formData.upload_nursing_certificate =
          req.files.upload_nursing_certificate[0].buffer;
      }
      if (req.files.upload_certificate) {
        formData.upload_certificate = req.files.upload_certificate[0].buffer;
      }
      if (req.files.cac_certificate_photo) {
        formData.cac_certificate_photo =
          req.files.cac_certificate_photo[0].buffer;
      }
      if (req.files.upload_proof_of_office_address) {
        formData.upload_proof_of_office_address =
          req.files.upload_proof_of_office_address[0].buffer;
      }
      if (req.files.hospital_license_photo) {
        formData.hospital_license_photo =
          req.files.hospital_license_photo[0].buffer;
      }
      if (req.files.laboratory_license_photo) {
        formData.laboratory_license_photo =
          req.files.laboratory_license_photo[0].buffer;
      }
      if (req.files.pcn_license_photo) {
        formData.pcn_license_photo = req.files.pcn_license_photo[0].buffer;
      }
      if (req.files.proof_of_laboratory_address_photo) {
        formData.proof_of_laboratory_address_photo =
          req.files.proof_of_laboratory_address_photo[0].buffer;
      }
      if (req.files.proof_of_hospital_address_photo) {
        formData.proof_of_hospital_address_photo =
          req.files.proof_of_hospital_address_photo[0].buffer;
      }
      if (req.files.proof_of_pharmacy_address_photo) {
        formData.proof_of_pharmacy_address_photo =
          req.files.proof_of_pharmacy_address_photo[0].buffer;
      }
      if (req.files.upload_proof_of_office_address) {
        formData.upload_proof_of_office_address =
          req.files.upload_proof_of_office_address[0].buffer;
      }
    }

    if (req.body.pharmacy_addresses) {
      formData.pharmacy_addresses = JSON.parse(req.body.pharmacy_addresses);
    }

    const newFormData = new Model(formData);

    await newFormData.save();
    // Send email notification using ZeptoMail
    await zeptoClient.sendMail({
      from: { address: "gmonietechnologies@gmail.com", name: "Paul Oseghale" },
      to: [{ email_address: { address: req.body.email, name: req.body.name } }],
      subject: "Registration Successful",
      textbody: "Your registration was successful.",
      htmlbody: "<strong>Your registration was successful.</strong>",
    });

    res.status(201).send("Registration was successful and email sent");
  } catch (err) {
    res
      .status(400)
      .send("An error occurred during registration, please try again: " + err);
  }
};

// Endpoint to receive data from frontend
app.post(
  "/register",
  upload.fields([
    { name: "upload_photo", maxCount: 1 },
    { name: "upload_medical_certificate", maxCount: 1 },
    { name: "upload_proof_of_residential_address", maxCount: 1 },
  ]),
  handleFormSubmission(DoctorModel)
);
app.post(
  "/nonmedicalform",
  upload.fields([
    { name: "upload_photo", maxCount: 1 },
    { name: "upload_caregiver_certificate", maxCount: 1 },
    { name: "upload_proof_of_residential_address", maxCount: 1 },
  ]),
  handleFormSubmission(NonMedicalModel)
);
app.post(
  "/nurseform",
  upload.fields([
    { name: "upload_photo", maxCount: 1 },
    { name: "upload_nursing_certificate", maxCount: 1 },
    { name: "upload_proof_of_residential_address", maxCount: 1 },
  ]),
  handleFormSubmission(NurseModel)
);

app.post(
  "/nutritionform",
  upload.fields([
    { name: "upload_photo", maxCount: 1 },
    { name: "upload_certificate", maxCount: 1 },
    { name: "upload_proof_of_residential_address", maxCount: 1 },
  ]),
  handleFormSubmission(NutritionistModel)
);

app.post(
  "/therapistform",
  upload.fields([
    { name: "upload_photo", maxCount: 1 },
    { name: "upload_certificate", maxCount: 1 },
    { name: "upload_proof_of_residential_address", maxCount: 1 },
  ]),
  handleFormSubmission(TherapistModel)
);

app.post(
  "/undertakerform",
  upload.fields([
    { name: "upload_photo", maxCount: 1 },
    { name: "upload_proof_of_office_address", maxCount: 1 },
    { name: "upload_proof_of_residential_address", maxCount: 1 },
  ]),
  handleFormSubmission(UndertakerModel)
);

app.post("/waitingform", handleFormSubmission(LaceAiModel));

app.post(
  "/laboratoryform",
  upload.fields([
    { name: "cac_certificate_photo", maxCount: 1 },
    { name: "laboratory_license_photo", maxCount: 1 },
    { name: "proof_of_laboratory_address_photo", maxCount: 1 },
  ]),
  handleFormSubmission(LaboratoryModel)
);
app.post(
  "/hospitalform",
  upload.fields([
    { name: "cac_certificate_photo", maxCount: 1 },
    { name: "hospital_license_photo", maxCount: 1 },
    { name: "proof_of_hospital_address_photo", maxCount: 1 },
  ]),
  handleFormSubmission(HospitalClinicModel)
);

app.post(
  "/pharmacyform",
  upload.fields([
    { name: "cac_certificate_photo", maxCount: 1 },
    { name: "pcn_license_photo", maxCount: 1 },
    { name: "proof_of_pharmacy_address_photo", maxCount: 1 },
  ]),
  handleFormSubmission(PharmaciesModel)
);

app.post(
  "/farewellform",
  upload.single("upload_photo"),
  handleFormSubmission(FarewellModel)
);

// Custom user registration with optional password and shipping address
app.post("/healthclubform", upload.none(), async (req, res) => {
  try {
    // Check if user already exists
    const existingUser = await HealthClubModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).send("User already registered");
    }

    // Use the password provided or generate a new one
    const password =
      req.body.password || HealthClubModel.generateRandomPassword();
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
    res
      .status(400)
      .send("An error occurred during registration, please try again: " + err);
  }
});

// Endpoint to retrieve data for admin dashboard
const createDataRetrievalEndpoint = (path, Model) => {
  app.get(path, (req, res) => {
    Model.find()
      .then((data) => res.json(data))
      .catch((err) => res.status(500).send("Error fetching data: " + err));
  });
};

createDataRetrievalEndpoint("/data/doctors", DoctorModel);
createDataRetrievalEndpoint("/data/nonmedical", NonMedicalModel);
createDataRetrievalEndpoint("/data/nurses", NurseModel);
createDataRetrievalEndpoint("/data/nutitionist", NutritionistModel);
createDataRetrievalEndpoint("/data/therapist", TherapistModel);
createDataRetrievalEndpoint("/data/underrtaker", UndertakerModel);
createDataRetrievalEndpoint("/data/laceai", LaceAiModel);
createDataRetrievalEndpoint("/data/laboratory", LaboratoryModel);
createDataRetrievalEndpoint("/data/hospital", HospitalClinicModel);
createDataRetrievalEndpoint("/data/pharmacy", PharmaciesModel);
createDataRetrievalEndpoint("/data/farewell", FarewellModel);
createDataRetrievalEndpoint("/data/healthclub", HealthClubModel);

// Serve the admin dashboard
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "admin.html"));
});

// Serve the frontend form
app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Paystack payment initialization endpoint
app.post("/initialize-payment", async (req, res) => {
  const { email, amount } = req.body;

  try {
    const response = await paystack.transaction.initialize({
      email,
      amount: amount * 100, // Paystack accepts amount in kobo
    });
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: "Payment initialization failed" });
  }
});

// Paystack payment verification endpoint
app.get("/verify-payment/:reference", async (req, res) => {
  const { reference } = req.params;

  try {
    const response = await paystack.transaction.verify(reference);
    if (response.data.status === "success") {
      // Update user's payment status in the database
      const user = await UserModel.findOneAndUpdate(
        { email: response.data.customer.email },
        { paymentStatus: "paid" },
        { new: true }
      );
      res.json(user);
    } else {
      res.status(400).json({ error: "Payment verification failed" });
    }
  } catch (error) {
    res.status(500).json({ error: "Payment verification failed" });
  }
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
