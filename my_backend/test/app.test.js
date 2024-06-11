const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const bcrypt = require('bcrypt');
const paystack = require('paystack')('mock_secret_key');
const path = require('path');

// Import your schema models here
// const { DoctorModel, NonMedicalModel, NurseModel, ... } = require('./schema');

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
} = require('../schema');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Mock MongoDB connection
const connectAndMigrate = async () => {};
connectAndMigrate();

// Mock form submission handler
const handleFormSubmission = (Model) => async (req, res) => {
  res.status(201).send('Registration was successful');
};

// Mock endpoints
app.post('/register', handleFormSubmission(DoctorModel));
app.post('/nonmedicalform', handleFormSubmission(NonMedicalModel));
app.post('/nurseform', handleFormSubmission(NurseModel));
app.post('/nutritionform', handleFormSubmission(NutritionistModel));
app.post('/therapistform', handleFormSubmission(TherapistModel));
app.post('/undertakerform', handleFormSubmission(UndertakerModel));
app.post('/waitingform', handleFormSubmission(LaceAiModel));
app.post('/laboratoryform', handleFormSubmission(LaboratoryModel));
app.post('/hospitalform', handleFormSubmission(HospitalClinicModel));
app.post('/pharmacyform', handleFormSubmission(PharmaciesModel));
app.post('/userform', handleFormSubmission(FarewellModel,));
app.post('/registerform', async (req, res) => {
  res.status(201).send('User registration was successful');
});

// Mock data retrieval endpoint
const createDataRetrievalEndpoint = (path, Model) => {
  app.get(path, (req, res) => {
    res.json([]);
  });
};

createDataRetrievalEndpoint('/data/doctors', DoctorModel);
createDataRetrievalEndpoint('/data/nonmedical', NonMedicalModel);
createDataRetrievalEndpoint('/data/nurses', NurseModel);
createDataRetrievalEndpoint('/data/nutitionist', NutritionistModel);
createDataRetrievalEndpoint('/data/therapist', TherapistModel);
createDataRetrievalEndpoint('/data/underrtaker', UndertakerModel);
createDataRetrievalEndpoint('/data/laceai', LaceAiModel);
createDataRetrievalEndpoint('/data/laboratory', LaboratoryModel);
createDataRetrievalEndpoint('/data/hospital', HospitalClinicModel);
createDataRetrievalEndpoint('/data/pharmacy', PharmaciesModel);
createDataRetrievalEndpoint('/data/user', FarewellModel,);
createDataRetrievalEndpoint('/data/register', HealthClubModel);

// Mock admin and form endpoints
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});
app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'form.html'));
});

// Mock error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Mock paystack payment endpoints
app.post('/initialize-payment', async (req, res) => {
  res.json({ success: true });
});
app.get('/verify-payment/:reference', async (req, res) => {
  res.json({ success: true });
});

// Mock server start
const port = 5000;
const server = app.listen(port);

// Jest test
describe('Server Tests', () => {
  afterAll(async () => {
    await server.close();
    await mongoose.disconnect();
  });

  it('should respond with 201 for register form submission', async () => {
    const response = await request(app)
      .post('/registerform')
      .send({ /* mock form data */ });
    expect(response.status).toBe(201);
    expect(response.text).toBe('User registration was successful');
  });

});
