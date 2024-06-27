import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
  InputAdornment,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import { Visibility, VisibilityOff, CreditCard, AccountBalanceWallet, Payment } from '@mui/icons-material';
import { SelectChangeEvent } from '@mui/material';

interface Beneficiary {
  title: string;
  firstName: string;
  lastName: string;
  phone: string;
  gender: string;
  dob: string;
  residence: string;
  lga: string;
  healthCondition: string;
  relation: string;
}

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  referralCode: string;
  howDidYouHear: string;
  password: string;
  confirmPassword: string;
  farewellPlan: string;
  durationOfService: string;
  totalAmount: string;
  cardNumber: string;
  cardCVV: string;
  cardExpiryDate: string;
  renewalOption: string;
  paymentMethod: string;
  beneficiaries: Beneficiary[];
}

const PersonalSolaceUserForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    referralCode: '',
    howDidYouHear: '',
    password: '',
    confirmPassword: '',
    farewellPlan: '',
    cardNumber: '',
    cardExpiryDate: '',
    cardCVV: '',
    durationOfService: '',
    totalAmount: '',
    renewalOption: '',
    paymentMethod: '',
    beneficiaries: [
      {
        title: '',
        firstName: '',
        lastName: '',
        phone: '',
        gender: '',
        dob: '',
        residence: '',
        lga: '',
        healthCondition: '',
        relation: '',
      },
    ],
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  
    // Clear error message for the field if it is now filled
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };
  
  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  
    // Clear error message for the field if it is now filled
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };
  
  const handleBeneficiaryChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>
  ) => {
    const { name, value } = e.target;
    const updatedBeneficiaries = [...formValues.beneficiaries];
    updatedBeneficiaries[index] = { ...updatedBeneficiaries[index], [name as string]: value };
    setFormValues({
      ...formValues,
      beneficiaries: updatedBeneficiaries,
    });
  
    // Clear error message for the field if it is now filled
    if (errors[`${name}${index}`]) {
      setErrors({
        ...errors,
        [`${name}${index}`]: '',
      });
    }
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateStep = (step: number) => {
    let stepErrors: { [key: string]: string } = {};

    if (step === 0) {
      if (!formValues.firstName) stepErrors.firstName = 'First name is required';
      if (!formValues.lastName) stepErrors.lastName = 'Last name is required';
      if (!formValues.email) stepErrors.email = 'Email is required';
      if (!formValues.phone) stepErrors.phone = 'Phone number is required';
      if (!formValues.password) stepErrors.password = 'Password is required';
      if (formValues.password && formValues.password.length < 8) stepErrors.password = 'Password must be at least 8 characters';
      if (!formValues.confirmPassword) stepErrors.confirmPassword = 'Confirm password is required';
      if (formValues.password !== formValues.confirmPassword) stepErrors.confirmPassword = 'Passwords do not match';
    } else if (step === 1) {
      formValues.beneficiaries.forEach((beneficiary, index) => {
        if (!beneficiary.firstName) stepErrors[`beneficiaryFirstName${index}`] = 'Beneficiary first name is required';
        if (!beneficiary.lastName) stepErrors[`beneficiaryLastName${index}`] = 'Beneficiary last name is required';
        if (!beneficiary.phone) stepErrors[`beneficiaryPhone${index}`] = 'Beneficiary phone number is required';
      });
    } else if (step === 2) {
      if (!formValues.farewellPlan) stepErrors.farewellPlan = 'Farewell plan is required';
      if (!formValues.cardNumber) stepErrors.cardNumber = 'Card number is required';
      if (!formValues.cardExpiryDate) stepErrors.cardExpiryDate = 'Card expiry date is required';
      if (!formValues.cardCVV) stepErrors.cardCVV = 'CVV is required';
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateStep(activeStep)) {
      if (activeStep === 2) {
        // Handle form submission
        console.log('Form submitted', formValues);
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Solace Farewell Cover Subscription Form
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          <Step>
            <StepLabel>Sign Up</StepLabel>
          </Step>
          <Step>
            <StepLabel>Add Beneficiaries</StepLabel>
          </Step>
          <Step>
            <StepLabel>Make Payment</StepLabel>
          </Step>
        </Stepper>

        {activeStep === 0 && (
          <>
            <Typography variant="h6">Personal Details of Solace User</Typography>
            <TextField
              name="firstName"
              label="First name"
              fullWidth
              margin="normal"
              required
              value={formValues.firstName}
              onChange={handleInputChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
            <TextField
              name="lastName"
              label="Last name"
              fullWidth
              margin="normal"
              required
              value={formValues.lastName}
              onChange={handleInputChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
            <TextField
              name="email"
              label="Email address"
              fullWidth
              margin="normal"
              required
              type="email"
              value={formValues.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              name="phone"
              label="Phone number"
              fullWidth
              margin="normal"
              required
              value={formValues.phone}
              onChange={handleInputChange}
              error={!!errors.phone}
              helperText={errors.phone}
            />
            <TextField
              name="referralCode"
              label="Enter referral code"
              fullWidth
              margin="normal"
              value={formValues.referralCode}
              onChange={handleInputChange}
            />
            <FormControl fullWidth margin="normal" required>
              <InputLabel>How did you hear about us?</InputLabel>
              <Select
                name="howDidYouHear"
                value={formValues.howDidYouHear}
                onChange={handleSelectChange}
              >
                <MenuItem value="">
                  <em>Select from list</em>
                </MenuItem>
                <MenuItem value="friend">Friend</MenuItem>
                <MenuItem value="socialMedia">Social Media</MenuItem>
                <MenuItem value="advertisement">Advertisement</MenuItem>
              </Select>
            </FormControl>
            <TextField
              name="password"
              label="Create password"
              fullWidth
              margin="normal"
              required
              type={showPassword ? 'text' : 'password'}
              value={formValues.password}
              onChange={handleInputChange}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name="confirmPassword"
              label="Confirm password"
              fullWidth
              margin="normal"
              required
              type={showConfirmPassword ? 'text' : 'password'}
              value={formValues.confirmPassword}
              onChange={handleInputChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Typography variant="body2" color="textSecondary">
              Must contain at least 8 alphanumeric characters, 1 uppercase character, and 1 special character.
            </Typography>
          </>
        )}

        {activeStep === 1 && (
          <>
            <Typography variant="h6">Add Beneficiaries</Typography>
            {formValues.beneficiaries.map((beneficiary, index) => (
              <Box key={index} sx={{ mt: 2 }}>
                <TextField
                  name="title"
                  label="Salutation/Title"
                  fullWidth
                  margin="normal"
                  required
                  value={beneficiary.title}
                  onChange={(e) => handleBeneficiaryChange(index, e)}
                />
                <TextField
                  name="firstName"
                  label="Beneficiary's first name"
                  fullWidth
                  margin="normal"
                  required
                  value={beneficiary.firstName}
                  onChange={(e) => handleBeneficiaryChange(index, e)}
                  error={!!errors[`beneficiaryFirstName${index}`]}
                  helperText={errors[`beneficiaryFirstName${index}`]}
                />
                <TextField
                  name="lastName"
                  label="Beneficiary's last name"
                  fullWidth
                  margin="normal"
                  required
                  value={beneficiary.lastName}
                  onChange={(e) => handleBeneficiaryChange(index, e)}
                  error={!!errors[`beneficiaryLastName${index}`]}
                  helperText={errors[`beneficiaryLastName${index}`]}
                />
                <TextField
                  name="phone"
                  label="Beneficiary's phone number"
                  fullWidth
                  margin="normal"
                  required
                  value={beneficiary.phone}
                  onChange={(e) => handleBeneficiaryChange(index, e)}
                  error={!!errors[`beneficiaryPhone${index}`]}
                  helperText={errors[`beneficiaryPhone${index}`]}
                />
                <FormControl fullWidth margin="normal" required>
                  <InputLabel>Beneficiary's gender</InputLabel>
                  <Select
                    name="gender"
                    value={beneficiary.gender}
                    onChange={(e: SelectChangeEvent<string>) => handleBeneficiaryChange(index, e)}
                  >
                    <MenuItem value="">
                      <em>Select gender</em>
                    </MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  name="dob"
                  label="Beneficiary's Date of Birth"
                  fullWidth
                  margin="normal"
                  required
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={beneficiary.dob}
                  onChange={(e) => handleBeneficiaryChange(index, e)}
                />
                <TextField
                  name="residence"
                  label="Beneficiary's residence"
                  fullWidth
                  margin="normal"
                  required
                  value={beneficiary.residence}
                  onChange={(e) => handleBeneficiaryChange(index, e)}
                />
                <TextField
                  name="lga"
                  label="Beneficiary's LGA"
                  fullWidth
                  margin="normal"
                  required
                  value={beneficiary.lga}
                  onChange={(e) => handleBeneficiaryChange(index, e)}
                />
                <TextField
                  name="healthCondition"
                  label="Beneficiary's health condition"
                  fullWidth
                  margin="normal"
                  value={beneficiary.healthCondition}
                  onChange={(e) => handleBeneficiaryChange(index, e)}
                />
                <TextField
                  name="relation"
                  label="Relation to beneficiary"
                  fullWidth
                  margin="normal"
                  required
                  value={beneficiary.relation}
                  onChange={(e) => handleBeneficiaryChange(index, e)}
                />
              </Box>
            ))}
          </>
        )}

        {activeStep === 2 && (
          <>
            <Typography variant="h6">Make Payment</Typography>
            <TextField
              name="farewellPlan"
              label="Farewell plan"
              fullWidth
              margin="normal"
              required
              value={formValues.farewellPlan}
              onChange={handleInputChange}
              error={!!errors.farewellPlan}
              helperText={errors.farewellPlan}
            />
            <TextField
              name="durationOfService"
              label="Duration of service"
              fullWidth
              margin="normal"
              required
              value={formValues.durationOfService}
              onChange={handleInputChange}
            />
            <TextField
              name="totalAmount"
              label="Total Amount"
              fullWidth
              margin="normal"
              required
              value={formValues.totalAmount}
              onChange={handleInputChange}
            />
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Renewal option</InputLabel>
              <Select
                name="renewalOption"
                value={formValues.renewalOption}
                onChange={handleSelectChange}
              >
                <MenuItem value="">
                  <em>Select renewal option</em>
                </MenuItem>
                <MenuItem value="renew">Renew</MenuItem>
                <MenuItem value="nonRenew">Non-renew</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Select payment method</InputLabel>
              <Select
                name="paymentMethod"
                value={formValues.paymentMethod}
                onChange={handleSelectChange}
              >
                <MenuItem value="">
                  <em>Select from list</em>
                </MenuItem>
                <MenuItem value="visa">
                  <CreditCard /> Visa
                </MenuItem>
                <MenuItem value="mastercard">
                  <AccountBalanceWallet /> MasterCard
                </MenuItem>
                <MenuItem value="verve">
                  <Payment /> Verve
                </MenuItem>
              </Select>
            </FormControl>
            <TextField
              name="cardNumber"
              label="Card Number"
              fullWidth
              margin="normal"
              required
              value={formValues.cardNumber}
              onChange={handleInputChange}
              error={!!errors.cardNumber}
              helperText={errors.cardNumber}
            />
            <TextField
              name="cardExpiryDate"
              label="Card Expiry Date"
              fullWidth
              margin="normal"
              required
              type="month"
              InputLabelProps={{ shrink: true }}
              value={formValues.cardExpiryDate}
              onChange={handleInputChange}
              error={!!errors.cardExpiryDate}
              helperText={errors.cardExpiryDate}
            />
            <TextField
              name="cardCVV"
              label="CVV"
              fullWidth
              margin="normal"
              required
              value={formValues.cardCVV}
              onChange={handleInputChange}
              error={!!errors.cardCVV}
              helperText={errors.cardCVV}
            />
          </>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          {activeStep > 0 && (
            <Button onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)} sx={{ mr: 1 }}>
              Back
            </Button>
          )}
          <Button type="submit" variant="contained" color="primary">
            {activeStep === 2 ? 'Submit' : 'Next'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PersonalSolaceUserForm;
