const HealthClubModel = require('../schema/healthclubschema');
const bcrypt = require('bcrypt');
const { SendMailClient } = require('zeptomail');

const zeptoClient = new SendMailClient({
  url: 'https://api.zeptomail.com/',
  token: process.env.ZEPTOMAIL_TOKEN,
});

const handleFormSubmission = async (req, res) => {
    try {
        const existingUser = await Model.findOne({
          $or: [{ email: req.body.email }, { phonenum: req.body.phonenum }],
        });
    
    if (existingUser) {
      return res.status(400).send('User already registered');
    }

    if (req.files) {
        Object.keys(req.files).forEach(key => {
          formData[key] = req.files[key][0].buffer;
        });
      }

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

    await zeptoClient.sendMail({
      from: { address: 'your-email@example.com', name: 'Your Name' },
      to: [{ email_address: { address: req.body.email, name: req.body.name } }],
      subject: 'Registration Successful',
      textbody: 'Your registration was successful.',
      htmlbody: '<strong>Your registration was successful.</strong>',
    });

    res.status(201).send('User registration was successful');
  } catch (err) {
    res.status(400).send('An error occurred during registration, please try again: ' + err);
  }
};

const retrieveData = async (req, res) => {
  try {
    const data = await HealthClubModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).send('Error fetching data: ' + err);
  }
};

module.exports = {
  handleFormSubmission,
  retrieveData,
};
