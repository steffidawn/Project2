var express = require('express');
var router = express.Router();
var db = require('../models');
var bodyParser = require('body-parser');
var passport = require('../config/ppConfig');
var request = require('request');

router.get('/search', function(req, res, next){
  var orgApi = 'https://projects.propublica.org/nonprofits/api/v2/search.json?q=propublica';
  res.render('orgApi', {organizations: organizations});
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
