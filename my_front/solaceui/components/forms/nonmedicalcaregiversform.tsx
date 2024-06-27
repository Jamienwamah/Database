// /components/forms/doctorsform.tsx

import React, { useState } from 'react';
import FormContent from './form-content';
import NewFooter from '../footer';
import {
  TextField, Button, MenuItem, FormControl, InputLabel, Select,
  Container, Grid, Checkbox, FormControlLabel, Typography, Link
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import FrameComponent from '../frame-component';
import { useRouter } from 'next/router';

interface FormValues {
  trainedCaregiver: string;
  specialty: string;
  portraitPhoto: File | null;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  nameWhereYouWereTrained: string;
  jobRole: string;
  placeOfWork: string;
  currentEmploymentStatus: string;
  yearsWithEmployer: string;
  graduationDate: Date | null;
  certificate: File | null;
  nin: string;
  referralNumber: string;
  stateOfResidence: string;
  cityOfResidence: string;
  residentialAddress: string;
  addressProof: File | null;
  agree: boolean;
}

interface ErrorValues {
  trainedCaregiver?: string;
  specialty?: string;
  portraitPhoto?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  nameWhereYouWereTrained?: string;
  jobRole?: string;
  placeOfWork?: string;
  currentEmploymentStatus?: string;
  yearsWithEmployer?: string;
  graduationDate?: string;
  certificate?: string;
  referralNumber?: string;
  nin?: string;
  stateOfResidence?: string;
  cityOfResidence?: string;
  residentialAddress?: string;
  addressProof?: string;
  agree?: string;
}

const NonMedicalCaregiverRegistrationForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    trainedCaregiver: '',
    specialty: '',
    portraitPhoto: null,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    nameWhereYouWereTrained: '',
    jobRole: '',
    placeOfWork: '',
    currentEmploymentStatus: '',
    yearsWithEmployer: '',
    graduationDate: null,
    certificate: null,
    nin: '',
    referralNumber: '',
    stateOfResidence: '',
    cityOfResidence: '',
    residentialAddress: '',
    addressProof: null,
    agree: false,
  });
  const [errors, setErrors] = useState<ErrorValues>({});

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormValues({
      ...formValues,
      [name]: files ? files[0] : value,
    });
  };

  const handleDateChange = (name: keyof FormValues, date: Date | null) => {
    setFormValues({
      ...formValues,
      [name]: date,
    });
  };

  const validate = () => {
    let temp: ErrorValues = {};
    temp.trainedCaregiver = formValues.trainedCaregiver ? '' : 'This field is required.';
    temp.specialty = formValues.specialty ? '' : 'This field is required.';
    temp.portraitPhoto = formValues.portraitPhoto ? '' : 'This field is required.';
    temp.firstName = formValues.firstName ? '' : 'This field is required.';
    temp.lastName = formValues.lastName ? '' : 'This field is required.';
    temp.email = (/$^|.+@.+..+/).test(formValues.email) ? '' : 'Email is not valid.';
    temp.phoneNumber = formValues.phoneNumber ? '' : 'This field is required.';
    temp.nameWhereYouWereTrained = formValues.nameWhereYouWereTrained ? '' : 'This field is required.';
    temp.jobRole = formValues.jobRole ? '' : 'This field is required.';
    temp.placeOfWork = formValues.placeOfWork ? '' : 'This field is required.';
    temp.currentEmploymentStatus = formValues.currentEmploymentStatus ? '' : 'This field is required.';
    temp.yearsWithEmployer = formValues.yearsWithEmployer ? '' : 'This field is required.';
    temp.graduationDate = formValues.graduationDate ? '' : 'This field is required.';
    temp.certificate = formValues.certificate ? '' : 'This field is required.';
    temp.nin = formValues.nin ? '' : 'This field is required.';
    temp.stateOfResidence = formValues.stateOfResidence ? '' : 'This field is required.';
    temp.cityOfResidence = formValues.cityOfResidence ? '' : 'This field is required.';
    temp.residentialAddress = formValues.residentialAddress ? '' : 'This field is required.';
    temp.addressProof = formValues.addressProof ? '' : 'This field is required.';
    temp.agree = formValues.agree ? '' : 'You must agree to the terms.';

    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log(formValues);
      // handle form submission

      //Success page
      router.push('/success');
    }
  };

  const [email, setEmail] = useState('');

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <FormContent/>
      
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>Registration Form for Non-Medical Caregivers</Typography>
        <Typography variant="subtitle1" gutterBottom>For Nigerian Non-Medical Caregivers Only</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" error={Boolean(errors.trainedCaregiver)}>
                <InputLabel>Are you a trained caregiver</InputLabel>
                <Select
                  name="Select an answer"
                  value={formValues.trainedCaregiver}
                  onChange={handleChange}
                  label="Are you a trained caregiver"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="specialty1">Specialty 1</MenuItem>
                  <MenuItem value="specialty2">Specialty 2</MenuItem>
                  <MenuItem value="specialty3">Specialty 3</MenuItem>
                </Select>
                {errors.specialty && <p style={{ color: 'red', fontSize: '12px' }}>{errors.specialty}</p>}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" error={Boolean(errors.specialty)}>
                <InputLabel>Current area of specialty</InputLabel>
                <Select
                  name="specialty"
                  value={formValues.specialty}
                  onChange={handleChange}
                  label="Select Specialty"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="specialty1">Specialty 1</MenuItem>
                  <MenuItem value="specialty2">Specialty 2</MenuItem>
                  <MenuItem value="specialty3">Specialty 3</MenuItem>
                </Select>
                {errors.specialty && <p style={{ color: 'red', fontSize: '12px' }}>{errors.specialty}</p>}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Click to upload your portrait photo 
                <br />
                PDF, PNG or JPG (max. 50MB)
              </Typography>
              <input
                type="file"
                name="portraitPhoto"
                accept="image/*"
                onChange={handleChange}
              />
              {errors.portraitPhoto && <p style={{ color: 'red', fontSize: '12px' }}>{errors.portraitPhoto}</p>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                label="First name"
                variant="outlined"
                fullWidth
                value={formValues.firstName}
                onChange={handleChange}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                label="Last name"
                variant="outlined"
                fullWidth
                value={formValues.lastName}
                onChange={handleChange}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="email"
                label="Email address"
                variant="outlined"
                fullWidth
                value={formValues.email}
                onChange={handleChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="phoneNumber"
                label="Phone number"
                variant="outlined"
                fullWidth
                value={formValues.phoneNumber}
                onChange={handleChange}
                error={Boolean(errors.phoneNumber)}
                helperText={errors.phoneNumber}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                name="Name where you were trained"
                label="Name where you were trained"
                variant="outlined"
                fullWidth
                value={formValues.nameWhereYouWereTrained}
                onChange={handleChange}
                error={Boolean(errors.nameWhereYouWereTrained)}
                helperText={errors.nameWhereYouWereTrained}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                label="Graduation date"
                value={formValues.graduationDate}
                onChange={(date) => handleDateChange('graduationDate', date)}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: 'outlined',
                    error: Boolean(errors.graduationDate),
                    helperText: errors.graduationDate,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" gutterBottom>
                Click to upload your MDCN Certificate
                <br />
                PDF, PNG or JPG (max. 50MB)
              </Typography>
              <input
                type="file"
                name="certificate"
                accept=".pdf, image/*"
                onChange={handleChange}
              />
              {errors.certificate && <p style={{ color: 'red', fontSize: '12px' }}>{errors.certificate}</p>}
            </Grid>

            <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined" error={Boolean(errors.currentEmploymentStatus)}>
                <InputLabel>Select Employment Status</InputLabel>
                <Select
                  name="Current employment status"
                  value={formValues.currentEmploymentStatus}
                  onChange={handleChange}
                  label="Current employment status"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="specialty1">Specialty 1</MenuItem>
                  <MenuItem value="specialty2">Specialty 2</MenuItem>
                  <MenuItem value="specialty3">Specialty 3</MenuItem>
                </Select>
                {errors.currentEmploymentStatus && <p style={{ color: 'red', fontSize: '12px' }}>{errors.currentEmploymentStatus}</p>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="jobRole"
                label="Job role"
                variant="outlined"
                fullWidth
                value={formValues.jobRole}
                onChange={handleChange}
                error={Boolean(errors.jobRole)}
                helperText={errors.jobRole}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="placeOfWork"
                label="Name of current place of work"
                variant="outlined"
                fullWidth
                value={formValues.placeOfWork}
                onChange={handleChange}
                error={Boolean(errors.placeOfWork)}
                helperText={errors.placeOfWork}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="yearsWithEmployer"
                label="Years with current employer?"
                variant="outlined"
                fullWidth
                value={formValues.yearsWithEmployer}
                onChange={handleChange}
                error={Boolean(errors.yearsWithEmployer)}
                helperText={errors.yearsWithEmployer}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="nin"
                label="National Identification Number"
                variant="outlined"
                fullWidth
                value={formValues.nin}
                onChange={handleChange}
                error={Boolean(errors.nin)}
                helperText={errors.nin}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="referralNumber"
                label="Referral Number"
                variant="outlined"
                fullWidth
                value={formValues.referralNumber}
                onChange={handleChange}
                error={Boolean(errors.referralNumber)}
                helperText={errors.referralNumber}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" error={Boolean(errors.stateOfResidence)}>
                <InputLabel>Select State of Residence</InputLabel>
                <Select
                  name="stateOfResidence"
                  value={formValues.stateOfResidence}
                  onChange={handleChange}
                  label="Select State of Residence"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="Lagos">Lagos</MenuItem>
                  <MenuItem value="Abuja">Abuja</MenuItem>
                  <MenuItem value="Rivers">Rivers</MenuItem>
                  {/* Add more states as needed */}
                </Select>
                {errors.stateOfResidence && <p style={{ color: 'red', fontSize: '12px' }}>{errors.stateOfResidence}</p>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined" error={Boolean(errors.cityOfResidence)}>
                <InputLabel>Select city of Residence</InputLabel>
                <Select
                  name="cityOfResidence"
                  value={formValues.cityOfResidence}
                  onChange={handleChange}
                  label="City of Residence"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="Lagos">Lagos</MenuItem>
                  <MenuItem value="Abuja">Abuja</MenuItem>
                  <MenuItem value="Rivers">Rivers</MenuItem>
                  {/* Add more states as needed */}
                </Select>
                {errors.cityOfResidence && <p style={{ color: 'red', fontSize: '12px' }}>{errors.cityOfResidence}</p>}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="residentialAddress"
                label="Current residential address"
                variant="outlined"
                fullWidth
                value={formValues.residentialAddress}
                onChange={handleChange}
                error={Boolean(errors.residentialAddress)}
                helperText={errors.residentialAddress}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
              Click to upload your proof of office address i.e Nepa Bill
                <br />
                PDF, PNG or JPG (max. 50MB)
              </Typography>
              <input
                type="file"
                name="addressProof"
                accept=".pdf, image/*"
                onChange={handleChange}
              />
              {errors.addressProof && <p style={{ color: 'red', fontSize: '12px' }}>{errors.addressProof}</p>}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="agree"
                    checked={formValues.agree}
                    onChange={(e) =>
                      setFormValues({ ...formValues, agree: e.target.checked })
                    }
                  />
                }
                label="I agree to the terms and conditions"
              />
              {errors.agree && <p style={{ color: 'red', fontSize: '12px' }}>{errors.agree}</p>}
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      <FrameComponent
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
      <NewFooter />
    </LocalizationProvider>
  );
};

export default NonMedicalCaregiverRegistrationForm;
