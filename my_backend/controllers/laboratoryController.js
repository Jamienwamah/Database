const LaboratoryModel = require("../schema/laboratoryschema");
const { SendMailClient } = require("zeptomail");
const zeptoClient = new SendMailClient({
  url: "https://api.zeptomail.com/",
  token: process.env.ZEPTOMAIL_TOKEN,
});

const handleFormSubmission = async (req, res, Model) => {
    try {
        const existingUser = await Model.findOne({
          $or: [{ email: req.body.email }, { phonenum: req.body.phonenum }],
        });
    
    if (existingUser) {
      return res.status(400).send("User already registered");
    }


    const newUser = new Model({
      ...req.body,
      cacCertificatePhoto: req.files["cac_certificate_photo"]
        ? req.files["cac_certificate_photo"][0].buffer
        : null,
      laboratoryLicensePhoto: req.files["laboratory_license_photo"]
        ? req.files["laboratory_license_photo"][0].buffer
        : null,
      proofOfLaboratoryAddressPhoto: req.files[
        "proof_of_laboratory_address_photo"
      ]
        ? req.files["proof_of_laboratory_address_photo"][0].buffer
        : null,
    });

    await newUser.save();

    await zeptoClient.sendMail({
      from: { address: "your-email@example.com", name: "Your Name" },
      to: [{ email_address: { address: req.body.email, name: req.body.name } }],
      subject: "Registration Successful",
      textbody: "Your registration was successful.",
      htmlbody: "<strong>Your registration was successful.</strong>",
    });

    res.status(201).send("User registration was successful");
  } catch (err) {
    res
      .status(400)
      .send("An error occurred during registration, please try again: " + err);
  }
};

const retrieveData = async (req, res) => {
  try {
    const data = await LaboratoryModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).send("Error fetching data: " + err);
  }
};

module.exports = {
  handleFormSubmission,
  retrieveData,
};
