const User = require('../models/user');

module.exports = (router) => {

    router.post('/register', (req, res) => {

    //    req.body.firstname;
    //    req.body.lastname;
    //    req.body.dob;
       if (!req.body.firstname) {
           res.json({success: false, message: 'You must provide the firstname'});
       } else {
            if (!req.body.lastname) {
                res.json({success: false, message: 'You must provide the lastname'});
            } else { 
                if (!req.body.dob) {
                res.json({success: false, message: 'You must provide the dob'});
            } else {
                // Create new user object and apply user input
                let user = new User({
                firstname: req.body.firstname.toLowerCase(),
                lastname: req.body.lastname.toLowerCase(),
                dob: req.body.dob
                });

                user.save((err) => {
                    
                    if (err) {
                      
                      if (err.code === 11000) {
                        res.json({ success: false, message: 'Firstname or Last already exists' }); 
                      } else {
                        if (err.errors) {
                          if (err.errors.firstname) {
                            res.json({ success: false, message: err.errors.firstname.message });
                          } else {
                            if (err.errors.lastname) {
                              res.json({ success: false, message: err.errors.lastname.message });
                            } else {
                              if (err.errors.dob) {
                                res.json({ success: false, message: err.errors.dob.message });
                              } else {
                                res.json({ success: false, message: err });
                              }
                            }
                          }
                        } else {
                          res.json({ success: false, message: 'Could not save user. Error: ', err });
                        }
                      }
                    } else {
                      res.json({ success: true, message: 'Acount registered!' });
                    }
                  }); 
            }    
         }
       }
    });

    return router;
}