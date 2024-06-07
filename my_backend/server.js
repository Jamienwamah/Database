const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Mongodb connection using a URI
const dbUri = 'mongodb://localhost:27017/';
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// To define your schema
const DataSchema = new mongoose.Schema({
    // Field goes in here
    field1: String,
    field2: Number,
});

// Pass in the schema into the model
const DataModel = mongoose.model('Data', DataSchema);

// Endpoint to receive data from frontend
app.post('/data', (req, res) => {
    const newData = new DataModel(req.body);
    newData.save()
        .then(() => res.status(201).send('Data saved successfully'))
        .catch(err => res.status(400).send('Error saving data: ' + err));
});

// Endpoint to retrieve data for admin dashboard
app.get('/data', (req, res) => {
    DataModel.find()
        .then(data => res.json(data))
        .catch(err => res.status(500).send('Error fetching data: ' + err));
});

// Serve the admin dashboard
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// Serve the frontend form
app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
