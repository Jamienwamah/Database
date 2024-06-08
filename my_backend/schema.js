const mongoose = require('mongoose');

// Solace caregiver registeration for doctors
const RegisterSchema = new mongoose.Schema({
    enter_mdcn_licence_num: String,
    current_area_of_specialty: String,
    upload_photo: Buffer,
    firstname: String,
    lastname: String,
    email: String,
    phonenum: String,
    medical_school_attended: String,
    year_graduated: Number,
    current_employment_status: String,
    current_job_role: String,
    name_of_current_place_of_work: String,
    how_long_have_you_been_with_employer: String,
    national_identification_number: String,
    state_of_residence: String,
    current_residential_address: String,
});

const RegisterModel = mongoose.model('Register', RegisterSchema);

module.exports = RegisterModel;

// Solace caregiver registeration for non medical caregivers
const RegisterSchema2 = new mongoose.Schema({
    are_you_a_trained_non_medical_caregiver: Bool,
    current_area_of_specialty: String,
    upload_photo: Buffer,
    firstname: String,
    lastname: String,
    email: String,
    phonenum: String,
    name_of_where_you_were_trained: String,
    year_graduated: Number,
    current_employment_status: String,
    current_job_role: String,
    name_of_current_place_of_work: String,
    how_long_have_you_been_with_employer: String,
    national_identification_number: String,
    state_of_residence: String,
    current_residential_address: String,
})

const NonMedicalModel = mongoose.model('Register', RegisterSchema2);

module.exports =NonMedicalModel

