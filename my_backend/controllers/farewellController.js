const FarewellModel = require('../schema/farewellschema');
const bcrypt = require('bcrypt');
const { SendMailClient } = require('zeptomail');
const paystack = require('paystack')(process.env.PAYSTACK_SECRET_KEY);

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

const initializePayment = async (req, res) => {
  const { email, amount } = req.body;

  try {
    const response = await paystack.transaction.initialize({
      email,
      amount: amount * 100, // Paystack accepts amount in kobo
    });
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Payment initialization failed' });
  }
};

const verifyPayment = async (req, res) => {
  const { reference } = req.params;

  try {
    const response = await paystack.transaction.verify(reference);
    if (response.data.status === 'success') {
      // Update user's payment status in the database
      const user = await FarewellModel.findOneAndUpdate(
        { email: response.data.customer.email },
        { paymentStatus: 'paid' },
        { new: true }
      );
      res.json(user);
    } else {
      res.status(400).json({ error: 'Payment verification failed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Payment verification failed' });
  }
};

module.exports = {
  handleFormSubmission,
  retrieveData,
  initializePayment,
  verifyPayment
};
