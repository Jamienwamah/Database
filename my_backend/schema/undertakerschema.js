const mongoose = require("mongoose");

//Solace Registration form for undertakers
const UndertakerSchema = new mongoose.Schema({
  did_you_offer_undertaking_services: { type: Boolean, required: true },
  enter_your_cac_num: { type: Number, required: true },
  upload_photo: { type: Buffer, required: false },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phonenum: { type: String, required: true },
  national_identification_number: { type: String, required: true },
  state_where_office_is_located: { type: String, required: true },
  valid_office_address_in_details: { type: String, required: true },
  upload_proof_of_office_address: { type: Buffer, required: false },
});

const UndertakerModel = mongoose.model("Undertakers", UndertakerSchema);

module.exports = UndertakerModel;
