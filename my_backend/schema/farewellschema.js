const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

function generateCustomId() {
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `SFP-${randomNum}`;
}

// Define the User Schema
const FarewellSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phonenum: { type: String, required: true },
  referralCode: { type: String },
  password: { type: String, required: true },
  farewellbeneficiaries: [
    {
      id: {
        type: String,
        default: generateCustomId,
        unique: true,
      },
      title: String,
      firstName: String,
      lastName: String,
      gender: String,
      phonenum: String,
      dateOfBirth: Date,
      stateOfResidence: String,
      lgaOfResidence: String,
      residentialAddress: String,
      healthCondition: String,
      relationship: String,
      picture: Buffer,
    },
  ],
  subscriptionPlan: { type: String, required: true },
  serviceWorth: { type: Number, required: true },
  serviceDuration: { type: String, required: true },
  renewalOption: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  paymentStatus: { type: String, default: "pending" },
});

// Pre-save middleware to hash the password before saving
FarewellSchema.pre("save", async function (next) {
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

const FarewellModel = mongoose.model("Farewell", FarewellSchema);
module.exports = FarewellModel;
