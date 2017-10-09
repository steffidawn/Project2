//only your user profile(different depending on if user is org or volunteer);
require('dotenv').config();
var express = require('express');
var db = require('../models');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');

router.get('/', isLoggedIn, function(req, res){
	db.user.find({
		where: {
			id: req.user.id
		}
	}).then(function(user){
		user.getRivers().then(function(savedOrgs){
			res.render("profile", { organizations: organizations });
		});
	});
});

module.exports = router;
