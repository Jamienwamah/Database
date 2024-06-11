Project Documentation
Overview
This project implements a web server using Node.js and Express.js to handle various form submissions and registrations. The project includes functionalities for user registration, file uploads, email notifications, and payment processing using Paystack. MongoDB is used for data storage, and Mongoose is used for schema definitions and data modeling.

Why Use Express.js
Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. Here are some reasons why Express.js is preferred :

Routing: Express.js provides a powerful routing system that allows you to handle different HTTP methods and URL paths easily.
Middleware: Express.js supports middleware, which allows you to add functionalities such as parsing request bodies, handling file uploads, and managing sessions.
Simplified Development: Express.js simplifies many tasks that would otherwise require writing extensive code with vanilla Node.js, speeding up the development process.
Community and Ecosystem: Express.js has a large community and a rich ecosystem of plugins and extensions, making it easier to find solutions and integrate third-party services.

Key Features
User Registration and File Upload
The application handles multiple forms for different user types such as doctors, nurses, non-medical staff, etc. Each form submission includes handling file uploads using multer, saving user data to MongoDB, and sending email notifications using ZeptoMail.

Email Notifications
The application uses ZeptoMail to send email notifications upon successful registration.

Payment Processing
Payment processing is handled using Paystack. The application provides endpoints to initialize and verify payments.

Data Retrieval
Admin endpoints are available to retrieve data for different user types, making it easy to manage and view registrations.

Running the Project
Prerequisites
Node.js
MongoDB
Paystack API Key
ZeptoMail API Key
Environment Variables
Create a .env file in the project root and add the following environment variables:

PORT=5000
.env

API Endpoints
User Registration Endpoints
POST /register: Register a new doctor
POST /nonmedicalform: Register a new non-medical staff
POST /nurseform: Register a new nurse
POST /nutritionform: Register a new nutritionist
POST /therapistform: Register a new therapist
POST /undertakerform: Register a new undertaker
POST /waitingform: Register a new Lace AI user
POST /laboratoryform: Register a new laboratory
POST /hospitalform: Register a new hospital
POST /pharmacyform: Register a new pharmacy
POST /farewellform: Register a new farewell service
POST /healthclubform: Register a new health club user
Data Retrieval Endpoints
GET /data/doctors: Retrieve doctor registrations
GET /data/nonmedical: Retrieve non-medical staff registrations
GET /data/nurses: Retrieve nurse registrations
GET /data/nutritionist: Retrieve nutritionist registrations
GET /data/therapist: Retrieve therapist registrations
GET /data/undertaker: Retrieve undertaker registrations
GET /data/laceai: Retrieve Lace AI registrations
GET /data/laboratory: Retrieve laboratory registrations
GET /data/hospital: Retrieve hospital registrations
GET /data/pharmacy: Retrieve pharmacy registrations
GET /data/farewell: Retrieve farewell service registrations
GET /data/healthclub: Retrieve health club registrations
Payment Processing Endpoints
POST /initialize-payment: Initialize a new payment
GET /verify-payment/
: Verify a payment
Error Handling
The application includes middleware to handle errors globally. Any errors encountered during request processing will be caught and returned with a 500 status code and an error message.

Conclusion
This documentation provides an overview of the functionalities and setup for the web server built with Express.js and Node.js. For any further queries or contributions, please refer to the project repository on GitHub.