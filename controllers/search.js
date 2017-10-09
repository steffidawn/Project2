var express = require('express');
var router = express.Router();
var db = require('../models');
var bodyParser = require('body-parser');
var passport = require('../config/ppConfig');
var request = require('request');

// console.log("hello");
//
// router.get('/', function(req,res){
//   console.log("trying to render");
//   res.render("<h1>hi</hi>");


router.get('/', function(req, res){
  var orgApi = 'http://projects.propublica.org/nonprofits/api/v2/search.json?q=propublica';

  request(orgApi, function(error, response, body){
    console.log('hello');
    var parsedBody = JSON.parse(body);
    var allOrgs = parsedBody.organizations;
    res.render('search/search', {organizations: allOrgs});
    // res.render('/search', {organizations: orgApi});
  });
});

// router.get("/", function(req, res) {
//     res.render('search/index')
// });
//
// router.post('/search', function(req, res){
//
// })
// router.post("/results", function(req, res) {
//     var orgApi = 'https://projects.propublica.org/nonprofits/api/v2/search.json?q=propublica';
//     console.log('orgApi');
//     var q = req.body.name;
//     request(orgApi + q, function(error, response, body) {
//         if (error) {
//             return res.send(error);
//         }
//         var data = JSON.parse(body);
//         var results = data.data
//         res.render('search/results', { results: results })
//     });
// });

module.exports = router;
