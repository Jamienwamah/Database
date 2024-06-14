const mongoose = require("mongoose");

// Solace caregiver registeration for non medical caregivers
const NonMedicalSchema = new mongoose.Schema({
  are_you_a_trained_non_medical_caregiver: { type: Boolean, required: true },
  current_area_of_specialty: { type: String, required: false },
  upload_photo: { type: Buffer, required: false },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phonenum: { type: String, required: true },
  name_of_where_you_were_trained: { type: String, required: true },
  year_graduated: { type: Number, required: true },
  upload_caregiver_certificate: { type: Buffer, required: false },
  current_employment_status: { type: String, required: true },
  current_job_role: { type: String, required: true },
  name_of_current_place_of_work: { type: String, required: true },
  how_long_with_employer: { type: String, required: true },
  national_identification_number: { type: String, required: true },
  state_of_residence: { type: String, required: true },
  current_residential_address: { type: String, required: true },
  upload_proof_of_residential_address: { type: Buffer, required: false },
});

const NonMedicalModel = mongoose.model("NonMedicalCaregiver", NonMedicalSchema);

module.exports = NonMedicalModel;
