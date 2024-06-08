const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const RegisterModel = require("./schema")

// Configure multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Mongodb connection using a URI
const dbUri = "mongodb://localhost:27017/";
mongoose
  .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Your MongoDB Is connected Successfully"))
  .catch((err) =>
    console.log("MongoDB was not connected, please check your uri: " + err)
  );




const Form3Schema = new mongoose.Schema({
  // Field goes in here
  field1: String,
  field2: Number,
});

const Form4Schema = new mongoose.Schema({
  // Field goes in here
  field1: String,
  field2: Number,
});

const Form5Schema = new mongoose.Schema({
  // Field goes in here
  field1: String,
  field2: Number,
});


const Form3Model = mongoose.model("Form3", Form3Schema);
const Form4Model = mongoose.model("Form4", Form4Schema);
const Form5Model = mongoose.model("Form5", Form5Schema);

// Endpoint to receive data from frontend
app.post("/register", upload.single("upload_photo"), (req, res) => {
  const formData = req.body;

  if (req.file) {
    formData.upload_photo = req.file.buffer;
  }

  const newFormData = new RegisterModel(formData);

  newFormData
    .save()
    .then(() => res.status(201).send(" Registeration was successful"))
    .catch((err) =>
      res
        .status(400)
        .send("An error occured during registeration, please try again: " + err)
    );
});

app.post("/register", upload.single("upload_photo"), (req, res) => {
    const formData = req.body;
  
    if (req.file) {
      formData.upload_photo = req.file.buffer;
    }
  
    const newFormData = new RegisterModel(formData);
  
    newFormData
      .save()
      .then(() => res.status(201).send(" Registeration was successful"))
      .catch((err) =>
        res
          .status(400)
          .send("An error occured during registeration, please try again: " + err)
      );
  });
  

app.post("/form3", (req, res) => {
  const newFormData = new Form3Model(req.body);
  newFormData
    .save()
    .then(() => res.status(201).send("Form 3 data saved successfully"))
    .catch((err) => res.status(400).send("Error saving Form 3 data: " + err));
});

app.post("/form4", (req, res) => {
  const newFormData = new Form4Model(req.body);
  newFormData
    .save()
    .then(() => res.status(201).send("Form 4 data saved successfully"))
    .catch((err) => res.status(400).send("Error saving Form 4 data: " + err));
});

app.post("/form5", (req, res) => {
  const newFormData = new Form5Model(req.body);
  newFormData
    .save()
    .then(() => res.status(201).send("Form 5 data saved successfully"))
    .catch((err) => res.status(400).send("Error saving Form 5 data: " + err));
});

// Endpoint to retrieve data for admin dashboard
app.get("/data/form1", (req, res) => {
  Form1Model.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).send("Error fetching Form 1 data: " + err));
});

app.get("/data/form2", (req, res) => {
  Form2Model.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).send("Error fetching Form 2 data: " + err));
});

app.get("/data/form3", (req, res) => {
  Form3Model.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).send("Error fetching Form 3 data: " + err));
});

app.get("/data/form4", (req, res) => {
  Form4Model.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).send("Error fetching Form 4 data: " + err));
});

app.get("/data/form5", (req, res) => {
  Form5Model.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).send("Error fetching Form 5 data: " + err));
});

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
