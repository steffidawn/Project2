var express = require('express');
var router = express.Router();
var db = require('../models');
var bodyParser = require('body-parser');
var passport = require('../config/ppConfig');
var request = require('request');

router.get('/', function(req, res){
  console.log('search root route');
  var orgApi = 'http://projects.propublica.org/nonprofits/api/v2/search.json?q=propublica';

  request(orgApi, function(error, response, body){
    console.log('hello');
    var parsedBody = JSON.parse(body);
    var organizations = parsedBody.organizations;
    res.render('search/search', {organizations: organizations});
  });
});


module.exports = router;
