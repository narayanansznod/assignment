const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;


// Validate Function to check username length
let firstnameLengthChecker = (firstname) => {
    // Check if username exists
    if (!firstname) {
      return false; // Return error
    } else {
      // Check length of username string
      if (firstname.length < 3 || firstname.length > 15) {
        return false; // Return error if does not meet length requirement
      } else {
        return true; // Return as valid username
      }
    }
  };
  
  // Validate Function to check if valid username format
  let validFirstname = (firstname) => {
    // Check if username exists
    if (!firstname) {
      return false; // Return error
    } else {
      // Regular expression to test if username format is valid
      const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
      return regExp.test(firstname); // Return regular expression test result (true or false)
    }
  };
  
  // Array of Username validators
  const usernameValidators = [
    // First Username validator
    {
      validator: firstnameLengthChecker,
      message: 'Firstname must be at least 3 characters but no more than 15'
    },
    // Second username validator
    {
      validator: validFirstname,
      message: 'Firstname must not have any special characters'
    }
  ];


const userSchema = new Schema({

    firstname : {type: String, required: true, unique: true, lowercase: true},
    lastname : {type: String, required: true, unique: true, lowercase: true},
    dob : {type: Number, required: true}
});

module.exports = mongoose.model('User', userSchema);