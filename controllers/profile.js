//only your user profile(different depending on if user is org or volunteer);
require('dotenv').config();
var express = require('express');
var router = express.Router();
var db = require('../models');
var bodyParser = require('body-parser');
var isLoggedIn = require('../middleware/isLoggedIn');
var passport = require('../config/ppConfig');
var request = require('request');

router.get('/', isLoggedIn, function(req, res) {
	console.log('whasssssup');
	db.user.find({
		where: {
			id: req.user.id
		},
		include: [db.favorite]
	}).then(function(user) {
		res.render('profile/profile', {organizations: user.favorites});
	});
});

router.delete('/:id', isLoggedIn, function(req, res) {
	var removeOrg = req.params.id
	db.favorite.destroy({
		where: {
			id: removeOrg
		}
	}).then(function() {
			res.render('/')
		}).catch(function(error){
			res.send('Whoops, there was an error.');
		});
});

router.post('/', isLoggedIn, function(req, res){
	console.log('get in profile controller: ', req.body); //org name, city, state
	db.user.find({
		where: {
			id: req.user.id
		}
	}).then(function(user){
		console.log("user.dataValues: ", user.dataValues.id); //user Id
		user.createFavorite( {
			name: req.body.name,
			city: req.body.city,
			state: req.body.state
		}).then(function(data) {
			res.redirect("profile/profile", { organizations: organizations });
		});
	});
});

module.exports = router;
