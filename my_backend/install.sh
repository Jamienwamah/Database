# Clone the repo
git clone https://github.com/Gmonietechnologies/solacebackend.git
cd my_backend

# Install dependencies
npm install

#start the server. The server will start on http://localhost:5000.
npm start

# Running Tests
#To run tests, first ensure you have the necessary testing libraries installed (e.g., Jest, Mocha, Chai). 
#Then, you can define your tests in the tests directory and run them using:
npm test


# Development
#For development, you can use nodemon to automatically restart the server on file changes. 
#Install nodemon globally:
npm install -g nodemon

#Then, start the server in development mode:
nodemon app.js
