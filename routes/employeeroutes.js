const User = require('../models/user'); // Import User Model Schema
const Employee = require('../models/employeemodel'); // Import employee Model Schema
const config = require('../config/database'); // Import database configuration

module.exports = (router) => {
  /* ==============
     Register Route
  ============== */
  router.post('/empDet', (req, res) => {
    // Check if firstname was provided
    if (!req.body.firstname) {
      res.json({ success: false, message: 'You must provide a firstname' }); // Return error
    } else {
      // Check if lastname was provided
      if (!req.body.lastname) {
        res.json({ success: false, message: 'You must provide a lastname' }); // Return error
      } else {
        // Check if dob was provided
        if (!req.body.dob) {
          res.json({ success: false, message: 'You must provide a dob' }); // Return error
        } else {
          // Create new user object and apply user input
          const employee = new Employee({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            dob: req.body.dob
          });
          // Save user to database
          employee.save((err) => {
            // Check if error occured
            if (err) {
              // Check if error is an error indicating duplicate account
              if (err.code === 11000) {
                res.json({ success: false, message: 'lastname or firstname already exists' }); // Return error
              } else {
                // Check if error is a validation rror
                if (err.errors) {
                  // Check if validation error is in the firstname field
                  if (err.errors.firstname) {
                    res.json({ success: false, message: err.errors.firstname.message }); // Return error
                  } else {
                    // Check if validation error is in the lastname field
                    if (err.errors.lastname) {
                      res.json({ success: false, message: err.errors.lastname.message }); // Return error
                    } else {
                      // Check if validation error is in the dob field
                      if (err.errors.dob) {
                        res.json({ success: false, message: err.errors.dob.message }); // Return error
                      } else {
                        res.json({ success: false, message: err }); // Return any other error not already covered
                      }
                    }
                  }
                } else {
                  res.json({ success: false, message: 'Could not save user. Error: ', err }); // Return error if not related to validation
                }
              }
            } else {
              res.json({ success: true, message: 'Acount Created!' }); // Return success
            }
          });
        }
      }
    }
  });

  router.get('/empGet', (req, res) => {
    Employee.find({}, (err, employeeroutes) => {
      if(err) {
        res.json({ success: false, message: err});
      } else {
        if(!employeeroutes) {
          res.json({success: false, message: "No employee found"});
        } else {
          res.json({ success: true, employeeroutes: employeeroutes });
        }
      }
    }).sort({ '_id': -1 });
  });

  // GET SINGLE BLOG

  router.get('/singleEmp/:id', (req, res) => {
    // Check if id is present in parameters
    if (!req.params.id) {
      res.json({ success: false, message: 'No blog ID was provided.' }); // Return error message
    } else {
      // Check if the blog id is found in database
      Employee.findOne({ _id: req.params.id }, (err, employee) => {
        // Check if the id is a valid ID
        if (err) {
          res.json({ success: false, message: 'Not a valid blog id' }); // Return error message
        } else {
          // Check if blog was found by id
          if (!employee) {
            res.json({ success: false, message: 'Blog not found.' }); // Return error message
          } else {
            res.json({ success: true, employee: employee }); // Return success
          }
        }
      });
    }
  });


  router.put('/updateEmp', (req, res) => {
       // Check if id was provided
       if (!req.body._id) {
        res.json({ success: false, message: 'No employee id provided' }); // Return error message
      } else {
        // Check if id exists in database
        Employee.findOne({ _id: req.body._id }, (err, employee) => {
          // Check if id is a valid ID
          if (err) {
            res.json({ success: false, message: 'Not a valid employee id' }); // Return error message
          } else {
            // Check if id was found in the database
            if (!employee) {
              res.json({ success: false, message: 'Employee id was not found.' }); // Return error message
            } else { res.json({ success: true, message: 'Employee Updated!' }); 
          }
        }
      });
    }
  });

  return router; // Return router object to main index.js
}
