import React, { useState } from 'react';
import FormContent from './form-content';
import FrameComponent from '../frame-component';
import NewFooter from '../footer';
import {
  TextField, Button, MenuItem, FormControl, InputLabel, Select,
  Container, Grid, Checkbox, FormControlLabel, Typography, SelectChangeEvent
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AddCircle, RemoveCircle } from '@mui/icons-material';
import { useRouter } from 'next/router';

interface Address {
  state: string;
  city: string;
  address: string;
}

interface FormValues {
  nameOfPharmacy: string;
  cacBN: string;
  portraitPhoto: File | null;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  operationLicenceNumber: string;
  laboratories: string;
  certificate: File | null;
  nin: string;
  stateOfResidence: string;
  cityOfResidence: string;
  residentialAddresses: Address[];
  addressProof: File | null;
  agree: boolean;
}

interface ErrorValues {
  nameOfPharmacy?: string;
  cacBN?: string;
  portraitPhoto?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  operationLicenceNumber?: string;
  laboratories?: string;
  certificate?: string;
  nin?: string;
  stateOfResidence?: string;
  cityOfResidence?: string;
  residentialAddresses?: string;
  addressProof?: string;
  agree?: string;
}

const LabRegistrationForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    nameOfPharmacy: '',
    cacBN: '',
    portraitPhoto: null,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    operationLicenceNumber: '',
    laboratories: '',
    certificate: null,
    nin: '',
    stateOfResidence: '',
    cityOfResidence: '',
    residentialAddresses: [{ state: '', city: '', address: '' }],
    addressProof: null,
    agree: false,
  });
  const [errors, setErrors] = useState<ErrorValues>({});

  const router = useRouter();

  const [email, setEmail] = useState('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, index?: number) => {
    const { name, value } = e.target;

    if (name.startsWith('address')) {
      const [field, idx] = name.split('.');
      const updatedAddresses = formValues.residentialAddresses.map((address, i) =>
        parseInt(idx) === i ? { ...address, [field]: value } : address
      );
      setFormValues({ ...formValues, residentialAddresses: updatedAddresses });
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleAddAddress = () => {
    setFormValues({
      ...formValues,
      residentialAddresses: [...formValues.residentialAddresses, { state: '', city: '', address: '' }],
    });
  };

  const handleRemoveAddress = (index: number) => {
    const updatedAddresses = formValues.residentialAddresses.filter((_, i) => i !== index);
    setFormValues({ ...formValues, residentialAddresses: updatedAddresses });
  };

  const validate = () => {
    let temp: ErrorValues = {};
    temp.nameOfPharmacy = formValues.nameOfPharmacy ? '' : 'This field is required.';
    temp.cacBN = formValues.cacBN ? '' : 'This field is required.';
    temp.portraitPhoto = formValues.portraitPhoto ? '' : 'This field is required.';
    temp.firstName = formValues.firstName ? '' : 'This field is required.';
    temp.lastName = formValues.lastName ? '' : 'This field is required.';
    temp.email = (/$^|.+@.+..+/).test(formValues.email) ? '' : 'Email is not valid.';
    temp.phoneNumber = formValues.phoneNumber ? '' : 'This field is required.';
    temp.operationLicenceNumber = formValues.operationLicenceNumber ? '' : 'This field is required.';
    temp.certificate = formValues.certificate ? '' : 'This field is required.';
    temp.nin = formValues.nin ? '' : 'This field is required.';
    temp.laboratories = formValues.laboratories ? '' : 'This field is required';
    temp.stateOfResidence = formValues.stateOfResidence ? '' : 'This field is required.';
    temp.cityOfResidence = formValues.cityOfResidence ? '' : 'This field is required.';
    temp.residentialAddresses = formValues.residentialAddresses.length ? '' : 'At least one address is required.';
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

      //success page
      router.push('/success')
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <FormContent />
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Solace Partnership Form For Laboratories Owners, Nationwide
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          For Laboratories Registered and Operating in Nigeria
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="nameOfPharmacy"
                label="Enter name of laboratories"
                variant="outlined"
                fullWidth
                value={formValues.nameOfPharmacy}
                onChange={handleChange}
                error={Boolean(errors.nameOfPharmacy)}
                helperText={errors.nameOfPharmacy}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="cacBN"
                label="Enter your CAC or BN number"
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
                Click to upload your CAC or BN Certificate
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
              <TextField
                name="firstName"
                label="First name of owner"
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
                label="Last name of owner"
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
                label="Email address of owner"
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
                label="Phone number of owner"
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
                name="operationLicenceNumber"
                label="Enter operation licence number"
                variant="outlined"
                fullWidth
                value={formValues.operationLicenceNumber}
                onChange={handleChange}
                error={Boolean(errors.operationLicenceNumber)}
                helperText={errors.operationLicenceNumber}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="nin"
                label="Enter NIN number of owner"
                variant="outlined"
                fullWidth
                value={formValues.nin}
                onChange={handleChange}
                error={Boolean(errors.nin)}
                helperText={errors.nin}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Click to upload photo of license to operate laboratory
                <br />
                PNG or JPG (max. 50MB)
              </Typography>
              <input
                type="file"
                name="certificate"
                accept="image/*"
                onChange={handleChange}
              />
              {errors.certificate && <p style={{ color: 'red', fontSize: '12px' }}>{errors.certificate}</p>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" error={Boolean(errors.laboratories)}>
                <InputLabel>Number of laboratories</InputLabel>
                <Select
                  name="laboratories"
                  value={formValues.laboratories}
                  onChange={handleSelectChange}
                  label="Number of pharmacy stores nationwide"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  {/* Add more states as needed */}
                </Select>
                {errors.laboratories && <p style={{ color: 'red', fontSize: '12px' }}>{errors.laboratories}</p>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" error={Boolean(errors.laboratories)}>
                <InputLabel>Store location in how many states</InputLabel>
                <Select
                  name="laboratories"
                  value={formValues.laboratories}
                  onChange={handleSelectChange}
                  label="Location in how many states"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  {/* Add more states as needed */}
                </Select>
                {errors.laboratories && <p style={{ color: 'red', fontSize: '12px' }}>{errors.laboratories}</p>}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Address Details
              </Typography>
              {formValues.residentialAddresses.map((address, index) => (
                <Grid container spacing={2} key={index}>
                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined" error={Boolean(errors.stateOfResidence)}>
                      <InputLabel>State of where HQ is located</InputLabel>
                      <Select
                        name="stateOfResidence"
                        value={formValues.stateOfResidence}
                        onChange={handleSelectChange}
                        label="Store location in how many states"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        {/* Add more states as needed */}
                      </Select>
                      {errors.stateOfResidence && <p style={{ color: 'red', fontSize: '12px' }}>{errors.stateOfResidence}</p>}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined" error={Boolean(errors.cityOfResidence)}>
                      <InputLabel>City of where HQ is located</InputLabel>
                      <Select
                        name="cityOfResidence"
                        value={formValues.cityOfResidence}
                        onChange={handleSelectChange}
                        label="City of where HQ is located"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        {/* Add more states as needed */}
                      </Select>
                      {errors.cityOfResidence && <p style={{ color: 'red', fontSize: '12px' }}>{errors.cityOfResidence}</p>}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="residentialAddress"
                      label="Address of laboratory headquarters"
                      variant="outlined"
                      fullWidth
                      value={address.address}
                      onChange={(e) => handleChange(e, index)}
                      error={Boolean(errors.residentialAddresses)}
                      helperText={errors.residentialAddresses}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<RemoveCircle />}
                      onClick={() => handleRemoveAddress(index)}
                      disabled={formValues.residentialAddresses.length === 1}
                    >
                      Remove Address
                    </Button>
                  </Grid>
                </Grid>
              ))}
              <Button
                variant="outlined"
                color="primary"
                startIcon={<AddCircle />}
                onClick={handleAddAddress}
              >
                Add Another Laboratory Address
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Click to upload address proof
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
                    checked={formValues.agree}
                    onChange={(e) => setFormValues({ ...formValues, agree: e.target.checked })}
                    name="agree"
                    color="primary"
                  />
                }
                label="I have read and agree to the terms and conditions"
              />
              {errors.agree && <p style={{ color: 'red', fontSize: '12px' }}>{errors.agree}</p>}
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
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

export default LabRegistrationForm;
