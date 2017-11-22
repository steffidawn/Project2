var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require('../config/ppConfig');

router.get('/signup', function(req, res) {
  res.render('auth/signup');
});

router.post('/signup', function(req, res) {
  console.log('auth is working!');
  db.user.findOrCreate({
    where: {email: req.body.email},
    defaults: {
      name: req.body.name,
      password: req.body.password
    }
  }).spread(function(user, created) {
    console.log("we got user info back from the db");
    console.log(user);
    console.log(created);
    if (created) {
      console.log("We are going to try passport now");
      passport.authenticate('local', {
        successRedirect: '/',
        successFlash: 'Account created and logged in'
      })(req, res);
    } else {
      req.flash('error', 'Email already exists');
      res.redirect('/auth/signup');
    }
  });
});

router.get('/login', function(req, res) {
  res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  failureFlash: 'Invalid username and/or password',
  successFlash: 'You have logged in'
}));

router.get('/logout', function(req, res){
  req.logout();
  req.flash('success', 'You have logged out');
  res.redirect('/');
});

module.exports = router;
