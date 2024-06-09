const mongoose = require("mongoose");

// Solace caregiver registeration for doctors
const DoctorSchema = new mongoose.Schema({
  mdcn_license_number: { type: String, required: true },
  current_area_of_specialty: { type: String, required: false },
  upload_photo: { type: Buffer, required: false },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phonenum: { type: String, required: true },
  medical_school_attended: { type: String, required: true },
  year_graduated: { type: Number, required: true },
  upload_medical_certificate: { type: Buffer, required: false },
  current_employment_status: { type: String, required: true },
  current_job_role: { type: String, required: true },
  name_of_current_place_of_work: { type: String, required: true },
  how_long_with_employer: { type: String, required: true },
  national_identification_number: { type: String, required: true },
  state_of_residence: { type: String, required: true },
  current_residential_address: { type: String, required: true },
  upload_proof_of_residential_address: { type: Buffer, required: false },
});

const DoctorModel = mongoose.model("Doctor", DoctorSchema);

module.exports = DoctorModel;

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

// Solace Registration form for nurses
const NurseSchema = new mongoose.Schema({
  nmcn_license_number: { type: String, required: true },
  current_area_of_specialty: { type: String, required: false },
  upload_photo: { type: Buffer, required: false },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phonenum: { type: String, required: true },
  nursing_school_attended: { type: String, required: true },
  year_graduated: { type: Number, required: true },
  upload_nursing_certificate: { type: Buffer, required: false },
  current_employment_status: { type: String, required: true },
  current_job_role: { type: String, required: true },
  name_of_current_place_of_work: { type: String, required: true },
  how_long_with_employer: { type: String, required: true },
  national_identification_number: { type: String, required: true },
  state_of_residence: { type: String, required: true },
  current_residential_address: { type: String, required: true },
  upload_proof_of_residential_address: { type: Buffer, required: false },
});

const NurseModel = mongoose.model("Nurse", NurseSchema);

module.exports = NurseModel;

//Solace Registration form for nutritionist
const NutritionSchema = new mongoose.Schema({
  certificate_number: { type: String, required: true },
  current_area_of_specialty: { type: String, required: false },
  upload_photo: { type: Buffer, required: false },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phonenum: { type: String, required: true },
  highest_level_of_education: { type: String, required: true },
  year_graduated: { type: Number, required: true },
  upload_certificate: { type: Buffer, required: false },
  current_employment_status: { type: String, required: true },
  current_job_role: { type: String, required: true },
  name_of_current_place_of_work: { type: String, required: true },
  how_long_with_employer: { type: String, required: true },
  national_identification_number: { type: String, required: true },
  state_of_residence: { type: String, required: true },
  current_residential_address: { type: String, required: true },
  upload_proof_of_residential_address: { type: Buffer, required: false },
});

const NutritionistModel = mongoose.model("Nutritionist", NutritionSchema);

module.exports = NutritionistModel;

//Solace Registration form for therapist
const TherapistSchema = new mongoose.Schema({
  certificate_number: { type: String, required: true },
  current_area_of_specialty: { type: String, required: false },
  upload_photo: { type: Buffer, required: false },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phonenum: { type: String, required: true },
  highest_level_of_education: { type: String, required: true },
  year_graduated: { type: Number, required: true },
  upload_certificate: { type: Buffer, required: false },
  current_employment_status: { type: String, required: true },
  current_job_role: { type: String, required: true },
  name_of_current_place_of_work: { type: String, required: true },
  how_long_with_employer: { type: String, required: true },
  national_identification_number: { type: String, required: true },
  state_of_residence: { type: String, required: true },
  current_residential_address: { type: String, required: true },
  upload_proof_of_residential_address: { type: Buffer, required: false },
});

const TherapistModel = mongoose.model("Therapist", TherapistSchema);

module.exports = TherapistModel;

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
  owner_email: { type: String, required: true },
  owner_phone: { type: String, required: true },
  operation_license_number: { type: String, required: true },
  owner_nin: { type: String, required: true },
  laboratory_license_photo: { type: Buffer, required: true },
  number_of_laboratory: { type: Number, required: true },
  laboratory_location_states_count: { type: Number, required: true },
  state_location: { type: String, required: true },
  city_location: { type: String, required: true },
  laboratory_address: { type: String, required: true },
  proof_of_laboratory_address_photo: { type: Buffer, required: true },
  pharmacy_addresses: [PharmacyAddressSchema],
});

const LaboratoryModel = mongoose.model("Laboratory", LaboratorySchema);

module.exports = LaboratoryModel;

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
  owner_first_name: { type: String, required: true },
  owner_last_name: { type: String, required: true },
  owner_email: { type: String, required: true },
  owner_phone: { type: String, required: true },
  operation_license_number: { type: String, required: true },
  owner_nin: { type: String, required: true },
  hospital_license_photo: { type: Buffer, required: true },
  number_of_hodpital: { type: Number, required: true },
  hospital_location_states_count: { type: Number, required: true },
  state_location: { type: String, required: true },
  city_location: { type: String, required: true },
  hospital_address: { type: String, required: true },
  proof_of_hospital_address_photo: { type: Buffer, required: true },
  pharmacy_addresses: [PharmacySchema],
});

const HospitalClinicModel = mongoose.model("HospitalClinic", HospitalClinicSchema);

module.exports = HospitalClinicModel;

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
  owner_first_name: { type: String, required: true },
  owner_last_name: { type: String, required: true },
  owner_email: { type: String, required: true },
  owner_phone: { type: String, required: true },
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