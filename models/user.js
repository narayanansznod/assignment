/* ===================
   Import Node Modules
=================== */
const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose
const moment = require('moment');


// Validate Function to check firstname length
let firstnameLengthChecker = (firstname) => {
  // Check if firstname exists
  if (!firstname) {
    return false; // Return error
  } else {
    // Check the length of firstname string
    if (firstname.length < 2 || firstname.length > 30) {
      return false; // Return error if not within proper length
    } else {
      return true; // Return as valid firstname
    }
  }
};

// Validate Function to check if valid firstname format
let validfirstnameChecker = (firstname) => {
  // Check if firstname exists
  if (!firstname) {
    return false; // Return error
  } else {
    // Regular expression to test for a valid firstname
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    return regExp.test(firstname); // Return regular expression test results (true or false)
  }
};

// Array of firstname Validators
const firstnameValidators = [
  // First firstname Validator
  {
    validator: firstnameLengthChecker,
    message: 'First Name must be at least 5 characters but no more than 30'
  },
  // Second firstname Validator
  {
    validator: validfirstnameChecker,
    message: 'Must be a valid First Name'
  }
];

// Validate Function to check lastname length
let lastnameLengthChecker = (lastname) => {
  // Check if lastname exists
  if (!lastname) {
    return false; // Return error
  } else {
    // Check length of lastname string
    if (lastname.length < 3 || lastname.length > 15) {
      return false; // Return error if does not meet length requirement
    } else {
      return true; // Return as valid lastname
    }
  }
};

// Validate Function to check if valid lastname format
let validlastname = (lastname) => {
  // Check if lastname exists
  if (!lastname) {
    return false; // Return error
  } else {
    // Regular expression to test if lastname format is valid
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    return regExp.test(lastname); // Return regular expression test result (true or false)
  }
};

// Array of lastname validators
const lastnameValidators = [
  // First lastname validator
  {
    validator: lastnameLengthChecker,
    message: 'lastname must be at least 3 characters but no more than 15'
  },
  // Second lastname validator
  {
    validator: validlastname,
    message: 'lastname must not have any special characters'
  }
];

// Validate Function to check dob length
let dobLengthChecker = (dob) => {
  // Check if dob exists
  if (!dob) {
    return false; // Return error
  } else {
    // Check dob length
    if (dob.length < 8 || dob.length > 35) {
      return false; // Return error if passord length requirement is not met
    } else {
      return true; // Return dob as valid
    }
  }
};

// Validate Function to check if valid dob format
let validdob = (dob) => {
  // Check if dob exists
  if (!dob) {
    return false; // Return error
  } else {
    // Regular Expression to test if dob is valid format
    const regExp = new Date.now();
    return regExp.test(dob); // Return regular expression test result (true or false)
  }
};

// Array of dob validators
const dobValidators = [
  // First dob validator
  {
    validator: dobLengthChecker,
    message: 'dob must be at least 8 characters but no more than 35'
  }
];

// User Model Definition
const userSchema = new Schema({
  firstname: { type: String, required: true, unique: true, lowercase: true, validate: firstnameValidators },
  lastname: { type: String, required: true, unique: true, lowercase: true, validate: lastnameValidators },
  dob: { type: Date,  default: Date.now }
});

// Export Module/Schema
module.exports = mongoose.model('User', userSchema);
