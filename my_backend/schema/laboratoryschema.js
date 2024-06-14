const mongoose = require("mongoose");

//Add multiple pharmacy implementation
const PharmacyAddressSchema = new mongoose.Schema({
  pharmacy_address: { type: String, required: true },
  proof_of_laboratory_address_photo: { type: Buffer, required: true },
});
// Solace for registered laboratory
const LaboratorySchema = new mongoose.Schema({
  laboratory_name: { type: String, required: true },
  cac_registration_number: { type: String, required: true },
  cac_certificate_photo: { type: Buffer, required: true },
  owner_first_name: { type: String, required: true },
  owner_last_name: { type: String, required: true },
  email: { type: String, required: true },
  phonenum: { type: String, required: true },
  operation_license_number: { type: String, required: true },
  owner_nin: { type: String, required: true },
  laboratory_license_photo: { type: Buffer, required: true },
  number_of_laboratory: { type: Number, required: true },
  laboratory_location_states_count: { type: Number, required: true },
  state_location: { type: String, required: true },
  city_location: { type: String, required: true },
  laboratory_address: { type: String, required: true },
  proof_of_laboratory_address_photo: [PharmacyAddressSchema],
  pharmacy_addresses: [PharmacyAddressSchema],
});

const LaboratoryModel = mongoose.model("Laboratory", LaboratorySchema);

module.exports = LaboratoryModel;
