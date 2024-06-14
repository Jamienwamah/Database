const mongoose = require("mongoose");

//Add multiple pharmacy implementation
const PharmacySchema = new mongoose.Schema({
  pharmacy_address: { type: String, required: true },
  proof_of_hospital_address_photo: { type: Buffer, required: true },
});
//Solace for registered hospitals
const HospitalClinicSchema = new mongoose.Schema({
  hospital_or_clinic_name: { type: String, required: true },
  cac_registration_number: { type: String, required: true },
  cac_certificate_photo: { type: Buffer, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phonenum: { type: String, required: true },
  operation_license_number: { type: String, required: true },
  owner_nin: { type: String, required: true },
  hospital_license_photo: { type: Buffer, required: true },
  number_of_hodpital: { type: Number, required: true },
  hospital_location_states_count: { type: Number, required: true },
  state_location: { type: String, required: true },
  city_location: { type: String, required: true },
  hospital_address: { type: String, required: true },
  proof_of_hospital_address_photo: [PharmacySchema],
  pharmacy_addresses: [PharmacySchema],
});

const HospitalClinicModel = mongoose.model(
  "HospitalClinic",
  HospitalClinicSchema
);

module.exports = HospitalClinicModel;
