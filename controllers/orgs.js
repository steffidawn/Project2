//all organizations
var express = require('express');
var db = require('../models');
var router = express.Router();

// testing text rendering on page:
router.get('/orgs', function(req, res) {
  res.send(`
    <h1>All organizations currently on Impact!</h1
    <p>These are all organizations that are currently signed up for Impact.</p>
  `);
});

module.exports = router;
