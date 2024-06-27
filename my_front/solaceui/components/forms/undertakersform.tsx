// /components/forms/doctorsform.tsx

import React, { useState } from 'react';
import FormContent from './form-content';
import {
  TextField, Button, MenuItem, FormControl, InputLabel, Select,
  Container, Grid, Checkbox, FormControlLabel, Typography, Link
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import FrameComponent from '../frame-component';
import NewFooter from '../footer';
import { useRouter } from 'next/router';

interface FormValues {
  underlatingServices: string;
  cacBN: string;
  portraitPhoto: File | null;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  employmentStatus: string;
  jobRole: string;
  placeOfWork: string;
  yearsWithEmployer: string;
  nursingSchool: string;
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
  underlatingServices?: string;
  cacBN?: string;
  portraitPhoto?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  employmentStatus?: string;
  jobRole?: string;
  placeOfWork?: string;
  yearsWithEmployer?: string;
  nursingSchool?: string;
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

const UndertakersRegistrationForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    underlatingServices: '',
    cacBN: '',
    portraitPhoto: null,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    employmentStatus: '',
    jobRole: '',
    placeOfWork: '',
    yearsWithEmployer: '',
    nursingSchool: '',
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
    temp.underlatingServices = formValues.underlatingServices ? '' : 'This field is required.';
    temp.cacBN = formValues.cacBN ? '' : 'This field is required.';
    temp.portraitPhoto = formValues.portraitPhoto ? '' : 'This field is required.';
    temp.firstName = formValues.firstName ? '' : 'This field is required.';
    temp.lastName = formValues.lastName ? '' : 'This field is required.';
    temp.email = (/$^|.+@.+..+/).test(formValues.email) ? '' : 'Email is not valid.';
    temp.phoneNumber = formValues.phoneNumber ? '' : 'This field is required.';
    temp.employmentStatus = formValues.employmentStatus ? '' : 'This field is required.';
    temp.jobRole = formValues.jobRole ? '' : 'This field is required.';
    temp.placeOfWork = formValues.placeOfWork ? '' : 'This field is required.';
    temp.yearsWithEmployer = formValues.yearsWithEmployer ? '' : 'This field is required.';
    temp.nursingSchool = formValues.nursingSchool ? '' : 'This field is required.';
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
      
      // success page
      router.push('/success');
    }
  };

  const [email, setEmail] = useState('');

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <FormContent/>
      
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>Registration Form for Registered Undertakers</Typography>
        <Typography variant="subtitle1" gutterBottom>For Nigerian Undertakers Only</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" error={Boolean(errors.underlatingServices)}>
                <InputLabel>Do you offer underlating services</InputLabel>
                <Select
                  name="underlatingServices"
                  value={formValues.underlatingServices}
                  onChange={handleChange}
                  label="Do you offer underlating services?"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="specialty1">Yes</MenuItem>
                  <MenuItem value="specialty2">No</MenuItem>
                </Select>
                {errors.underlatingServices && <p style={{ color: 'red', fontSize: '12px' }}>{errors.underlatingServices}</p>}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
            <TextField
                name="cac"
                label="First name"
                variant="outlined"
                fullWidth
                value={formValues.cacBN}
                onChange={handleChange}
                error={Boolean(errors.cacBN)}
                helperText={errors.cacBN}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Click to upload your portrait photo or drag and drop
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
                <InputLabel>Select where office is located</InputLabel>
                <Select
                  name="stateOfResidence"
                  value={formValues.stateOfResidence}
                  onChange={handleChange}
                  label="Select where office is located"
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
            <FormControl fullWidth variant="outlined" error={Boolean(errors.stateOfResidence)}>
                <InputLabel>Select City </InputLabel>
                <Select
                  name="cityOfResidence"
                  value={formValues.cityOfResidence}
                  onChange={handleChange}
                  label="Select city"
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
                label="Enter valid office address"
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

export default UndertakersRegistrationForm;
