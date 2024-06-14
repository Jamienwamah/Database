const FarewellModel = require('../schema/undertakerschema');
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

    const defaultPassword = 'defaultPassword123!';
    const hashedPassword = await bcrypt.hash(defaultPassword, 10);

    const formData = req.body;
    formData.password = hashedPassword;

    if (req.files) {
        Object.keys(req.files).forEach(key => {
          formData[key] = req.files[key][0].buffer;
        });
      }

    const newFormData = new FarewellModel(formData);
    await newFormData.save();

    await zeptoClient.sendMail({
      from: { address: 'gmonietechnologies@gmail.com', name: 'Paul Oseghale' },
      to: [{ email_address: { address: req.body.email, name: req.body.name } }],
      subject: 'Registration Successful',
      textbody: 'Your registration was successful.',
      htmlbody: '<strong>Your registration was successful.</strong>',
    });

    res.status(200).send('Registration was successful and email sent');
  } catch (err) {
    res.status(400).send('An error occurred during registration, please try again: ' + err);
  }
};

const retrieveData = async (req, res) => {
  try {
    const data = await FarewellModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).send('Error fetching data: ' + err);
  }
};

module.exports = {
  handleFormSubmission,
  retrieveData
};
