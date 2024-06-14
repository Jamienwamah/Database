const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

function generateCustomsId() {
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `SFP-${randomNum}`;
}

// Define the User Schema
const HealthClubSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  referralCode: { type: String },
  where_did_you_hear_about_us: { type: String },
  password: { type: String, required: true },
  shippingAddress: {
    id: {
      type: String,
      default: generateCustomsId,
      unique: true,
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    state: { type: String, required: true },
    lga: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
  },
});

// Pre-save middleware to hash the password before saving
HealthClubSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (err) {
      next(err);
    }
  } else {
    next();
  }
});

// Method to generate random password
HealthClubSchema.methods.generateRandomPassword = function () {
  return crypto.randomBytes(8).toString("hex");
};

const HealthClubModel = mongoose.model("HealthClub", HealthClubSchema);
module.exports = HealthClubModel;
