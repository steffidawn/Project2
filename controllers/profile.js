//only your user profile(different depending on if user is org or volunteer);
require('dotenv').config();
var express = require('express');
var db = require('../models');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');

router.get('/', isLoggedIn, function(req, res) {
	db.user.find({
		where: {
			id: req.user.id
		},
		include: [db.favorite]
	}).then(function(user) {
		res.render('/profile', {organizations: user.favorites});
	})

});

router.delete('/:id', function() {

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
			console.log(data);

		})

			res.render("/profile", { organizations: organizations });

	});
});

module.exports = router;
