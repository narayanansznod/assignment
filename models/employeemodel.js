/* ===================
   Import Node Modules
=================== */
const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose

// Validate Function to check blog title length
let firstnameLengthChecker = (firstname) => {
  // Check if body exists
  if (!firstname) {
    return false; // Return error
  } else {
    // Check length of body
    if (firstname.length < 5 || firstname.length > 50) {
      return false; // Return error if does not meet length requirement
    } else {
      return true; // Return as valid body
    }
  }
};

// Array of Title Validators
const firstnameValidators = [
  // First Title Validator
  {
    validator: firstnameLengthChecker,
    message: 'Title must be more than 5 characters but no more than 50'
  }
];

// Validate Function to check body length
let lastnameLengthChecker = (lastname) => {
  // Check if body exists
  if (!lastname) {
    return false; // Return error
  } else {
    // Check length of body
    if (lastname.length < 5 || lastname.length > 50) {
      return false; // Return error if does not meet length requirement
    } else {
      return true; // Return as valid body
    }
  }
};

// Array of Lastname validators
const lastnameValidators = [
  // Last validator
  {
    validator: lastnameLengthChecker,
    message: 'Body must be more than 5 characters but no more than 50'
  }
];

// Validate Function to check Date of Birth length
let dobLengthChecker = (dob) => {
 
    // Check DOB length
    if (dob.length < 1 || dob.length > 200) {
      return false; // Return error if DOB length requirement is not met
    } else {
      return true; // Return DOB as valid
    }
};

// Array of Date of Birth validators
const dobValidators = [
  // Date of Birth validator
  {
    validator: dobLengthChecker,
    message: 'DOB may not exceed 200 characters.'
  }
];

// Blog Model Definition
const employeeSchema = new Schema({
  firstname: { type: String, required: true, validate: firstnameValidators },
  lastname: { type: String, required: true, validate: lastnameValidators },
  dob: { type: Date, default: Date.now }
});

// Export Module/Schema
module.exports = mongoose.model('Employee', employeeSchema);