const mongoose = require("mongoose");

// Schema for pharmacy addresses
const Pharmacy = new mongoose.Schema({
  pharmacy_address: { type: String, required: true },
  proof_of_pharmacy_address_photo: { type: Buffer, required: true },
});

// Solace for registered pharmacies
const PharmaciesSchema = new mongoose.Schema({
  pharmacy_name: { type: String, required: true },
  cac_registration_number: { type: String, required: true },
  cac_certificate_photo: { type: Buffer, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phonenum: { type: String, required: true },
  pcn_number: { type: String, required: true },
  owner_nin: { type: String, required: true },
  pcn_license_photo: { type: Buffer, required: true },
  number_of_pharmacy_stores: { type: Number, required: true },
  store_location_states_count: { type: Number, required: true },
  state_location: { type: String, required: true },
  city_location: { type: String, required: true },
  pharmacy_address: { type: String, required: true },
  proof_of_pharmacy_address_photo: { type: Buffer, required: true },
  additional_pharmacy_addresses: [Pharmacy],
});

const PharmaciesModel = mongoose.model("Pharmacy", PharmaciesSchema);

module.exports = PharmaciesModel;
