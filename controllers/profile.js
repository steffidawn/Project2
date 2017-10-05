//only your user profile(different depending on if user is org or volunteer);
var express = require('express');
var db = require('../models');
var router = express.Router();

// testing text rendering on page:
router.get('/profile', function(req, res) {
  res.send(`
    <h1>This is your profile</h1
    <p>Here is all info you have provided about yourself.</p>
  `);
});

module.exports = router;
