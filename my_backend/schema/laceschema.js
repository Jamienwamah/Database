const mongoose = require("mongoose");

//Solace Lace Waiting List
const LaceAiSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phonenum: { type: String, required: true },
  state_of_residence: { type: String, required: true },
  city_of_residence: { type: String, required: true },
  why_are_you_interested_in_lace: { type: String, required: true },
  how_did_you_hear_about_us: { type: String, required: true },
});

const LaceAiModel = mongoose.model("LaceAi", LaceAiSchema);

module.exports = LaceAiModel;
