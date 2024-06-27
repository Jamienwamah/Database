import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import NurseRegistrationForm from "../../components/forms/nursesform";

const NurseRegistrationApiForm = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [registering, setRegistering] = useState(false);
  const [userData, setUserData] = useState({
    mdcnNumber: "",
    specialty: "",
    portraitPhoto: null,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    employmentStatus: "",
    jobRole: "",
    placeOfWork: "",
    yearsWithEmployer: "",
    nursingSchool: "",
    graduationDate: null,
    certificate: null,
    nin: "",
    referralNumber: "",
    stateOfResidence: "",
    cityOfResidence: "",
    residentialAddress: "",
    addressProof: null,
    agree: false,
  });

  const handleRegister = async (userData) => {
    setRegistering(true);
    try {
      // Make request to your Express.js REST API endpoint
      const restApiResponse = await axios.post(
        "https://your-express-backend.com/api/register-nurse",
        userData
      );
      console.log("Registration successful (REST)", restApiResponse.data);

      setSuccessMessage("Account created successfully!");
      router.push("/success"); // Redirect to success page
    } catch (error) {
      console.error("Registration error", error);
      handleRegistrationError(error);
    } finally {
      setRegistering(false); // Reset registering state when processing is done
    }
  };

  const handleRegistrationError = (error) => {
    if (error.response && error.response.data) {
      setErrors(error.response.data);
    } else {
      setErrors({
        genericError:
          "An error occurred during registration. Please try again later.",
      });
    }
  };

  const validateFields = () => {
    const requiredFields = [
      "mdcnNumber",
      "specialty",
      "portraitPhoto",
      "firstName",
      "lastName",
      "email",
      "phoneNumber",
      "employmentStatus",
      "jobRole",
      "placeOfWork",
      "yearsWithEmployer",
      "nursingSchool",
      "graduationDate",
      "certificate",
      "nin",
      "referralNumber",
      "stateOfResidence",
      "cityOfResidence",
      "residentialAddress",
      "addressProof",
      "agree",
    ];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!userData[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateFields();

    if (isValid) {
      handleRegister(userData);
    } else {
      setSuccessMessage(""); // Clear success message if there are errors
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-black mb-4">Register</h2>
      <NurseRegistrationForm
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        errors={errors}
        registering={registering}
      />
      {successMessage && (
        <div className="text-green-500 mt-2">{successMessage}</div>
      )}
      {Object.keys(errors).length > 0 && (
        <div className="text-red-500 mt-2">
          {Object.keys(errors).map((key) => (
            <p key={key}>{errors[key]}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default NurseRegistrationApiForm;
