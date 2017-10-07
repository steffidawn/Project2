var express = require('express');
var db = require('../models');
var router = express.Router();

router.get('/', function(req, res) {
    var orgUrl = 'https://projects.propublica.org/nonprofits/api/v2/search.json?q=propublica';
    request(pokemonUrl, function(error, response, body) {
      //what we're getting back from API
    var org = JSON.parse(body).results;
      //first pokemon is a key, the 2nd is the pokemon we are passing in from the JSON
    res.render('index', { organizations: organizations });
    });

});
