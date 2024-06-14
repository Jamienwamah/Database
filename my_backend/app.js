require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection using a URI
const dbUri = "mongodb+srv://gmonietechnologies:gmoniepass@cluster0.esd1xcf.mongodb.net/gmoniedata";
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

const doctorRoutes = require('./routes/doctorRoutes');
const nonmedicalRoutes = require('./routes/nonmedicalRoutes');
const nurseRoutes = require('./routes/nurseRoutes');
const nutritionistRoutes = require('./routes/nutritionistRoutes');
const therapistRoutes = require('./routes/therapistRoutes');
const undertakerRoutes = require('./routes/undertakerRoutes');
const laceaiRoutes = require('./routes/laceaiRoutes');
const laboratoryRoutes = require('./routes/laboratoryRoutes');
const hospitalclinicRoutes = require('./routes/hospitalclinicRoutes');
const pharmaciesRoutes = require('./routes/pharmaciesRoutes');
const farewellRoutes = require('./routes/farewellRoutes');
const healthclubRoutes = require('./routes/healthclubRoutes');

app.use('/doctor', doctorRoutes);
app.use('/nonmedical', nonmedicalRoutes);
app.use('/nurse', nurseRoutes);
app.use('/nutritionist', nutritionistRoutes);
app.use('/therapist', therapistRoutes);
app.use('/undertaker', undertakerRoutes);
app.use('/laceai', laceaiRoutes);
app.use('/laboratory', laboratoryRoutes);
app.use('/hospitalclinic', hospitalclinicRoutes);
app.use('/pharmacies', pharmaciesRoutes);
app.use('/farewell', farewellRoutes);
app.use('/healthclub', healthclubRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
