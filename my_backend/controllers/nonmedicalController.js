const NonMedicalModel = require('../schema/nonmedicalschema');
const { SendMailClient } = require('zeptomail');
const zeptoClient = new SendMailClient({
  url: 'https://api.zeptomail.com/',
  token: process.env.ZEPTOMAIL_TOKEN,
});

const handleFormSubmission = async (req, res, Model) => {
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


    const newFormData = new Model(req.body);
    await newFormData.save();

    await zeptoClient.sendMail({
      from: { address: 'gmonietechnologies@gmail.com', name: 'Paul Oseghale' },
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
    const data = await NonMedicalModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).send('Error fetching data: ' + err);
  }
};

module.exports = {
  handleFormSubmission,
  retrieveData,
};
