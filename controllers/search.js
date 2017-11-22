var express = require('express');
var router = express.Router();
var db = require('../models');
var bodyParser = require('body-parser');
var passport = require('../config/ppConfig');
var request = require('request');

router.get('/', function(req, res){
  var orgApi = 'http://projects.propublica.org/nonprofits/api/v2/search.json?q=propublica';

  request(orgApi, function(error, response, body){
    console.log('hello');
    var parsedBody = JSON.parse(body);
    var allOrgs = parsedBody.organizations;
    res.render('search/search', {organizations: allOrgs});
  });
});


module.exports = router;
