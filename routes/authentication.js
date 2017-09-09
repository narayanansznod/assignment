const User = require('../models/user');

module.exports = (router) => {

    router.post('/register', (req, res) => {
       res.send('My first entry');
    });

    return router;
}