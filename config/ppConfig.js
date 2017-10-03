var passport = require('passort');
var LocalStrategy = require('passport-local').Strategy;
var db = require('../models');

passport.serializeUser(function(user,cb){
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb){
  db.user.findById(id).then(function(user){
    cb(null, user);
  }).catch(cb);
});

//May need to update this because of different user profiles:
passport.use(new LocalStrategy({
  userNameField: 'email',
  passwordField: 'password'
}, function(email, password, cb){
  db.user.find({
    where: {email: email}
  }).then(function(user){
    if(!user || !user.validPassword(password)) {
      cb(null, false);
    }else{
      cb(null, user);
    }
  }).catch(cb);
}));

module.exports = passport;
