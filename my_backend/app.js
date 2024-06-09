const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
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
} = require("./schema");

// Configure multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection using a URI
const dbUri = "mongodb://localhost:27017/";
mongoose
  .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Your MongoDB is connected successfully"))
  .catch((err) =>
    console.log("MongoDB was not connected, please check your URI: " + err)
  );

// Helper function to handle form submission
const handleFormSubmission = (Model) => (req, res) => {
  const formData = req.body;

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
      formData.upload_certificate =
        req.files.upload_certificate[0].buffer;
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
      formData.pcn_license_photo = 
        req.files.pcn_license_photo[0].buffer;
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

  newFormData
    .save()
    .then(() => res.status(201).send("Registration was successful"))
    .catch((err) =>
      res
        .status(400)
        .send("An error occurred during registration, please try again: " + err)
    );
};

// Endpoint to receive data from frontend
app.post(
  "/register",
  upload.fields([
    {name: "upload_photo", maxCount: 1},
    {name: "upload_medical_certificate", maxCount: 1},
    {name: "upload_proof_of_residential_address", maxCount: 1},
  ]),
  handleFormSubmission(DoctorModel)
);
app.post(
  "/nonmedicalform",
  upload.fields([
    {name: "upload_photo", maxCount: 1},
    {name: "upload_caregiver_certificate", maxCount: 1},
    {name: "upload_proof_of_residential_address", maxCount: 1},
  ]),
  handleFormSubmission(NonMedicalModel)
);
app.post(
  "/nurseform",
  upload.fields([
    {name: "upload_photo", maxCount: 1},
    {name: "upload_nursing_certificate", maxCount: 1},
    {name: "upload_proof_of_residential_address", maxCount: 1},
  ]),
  handleFormSubmission(NurseModel)
);

app.post(
  "/nutritionform",
  upload.fields([
    {name: "upload_photo", maxCount: 1},
    {name: "upload_certificate", maxCount: 1},
    {name: "upload_proof_of_residential_address", maxCount: 1},
  ]),
  handleFormSubmission(NutritionistModel)
);

app.post(
  "/therapistform",
  upload.fields([
    {name: "upload_photo", maxCount: 1},
    {name: "upload_certificate", maxCount: 1},
    {name: "upload_proof_of_residential_address", maxCount: 1},
  ]),
  handleFormSubmission(TherapistModel)
);

app.post(
  "/undertakerform",
  upload.fields([
    {name: "upload_photo", maxCount: 1},
    {name: "upload_proof_of_office_address", maxCount: 1},
    {name: "upload_proof_of_residential_address", maxCount: 1},
  ]),
  handleFormSubmission(UndertakerModel)
);

app.post(
  "/waitingform",
  handleFormSubmission(LaceAiModel)
);

app.post(
  "/laboratoryform",
  upload.fields([
    {name: "cac_certificate_photo", maxCount: 1},
    {name: "laboratory_license_photo", maxCount: 1},
    {name: "proof_of_laboratory_address_photo", maxCount: 1},
  ]),
  handleFormSubmission(LaboratoryModel)
);
app.post(
  "/hospitalform",
  upload.fields([
    {name: "cac_certificate_photo", maxCount: 1},
    {name: "hospital_license_photo", maxCount: 1},
    {name: "proof_of_hospital_address_photo", maxCount: 1},
  ]),
  handleFormSubmission(HospitalClinicModel)
);

app.post(
  "/pharmacyform",
  upload.fields([
    {name: "cac_certificate_photo", maxCount: 1},
    {name: "pcn_license_photo", maxCount: 1},
    {name: "proof_of_pharmacy_address_photo", maxCount: 1},
  ]),
  handleFormSubmission(PharmaciesModel)
);

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

// Serve the admin dashboard
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "admin.html"));
});

// Serve the frontend form
app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
