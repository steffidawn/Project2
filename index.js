//All dependencies:
require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var session = require('express-session');
var flash = require('connect-flash');
var isLoggedIn = require('./middleware/isLoggedIn');
var db = require('./models');


var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

app.use(function(req, res, next) {
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

var passport = require('./config/ppConfig');
app.use(passport.initialize());
app.use(passport.session());



app.get('/', function(req, res) {
  // db.volunteer.findAll({
  //   include: [db.author]
  // }).then(function(posts) {
    res.render('./main/index');
    // , { volunteers: volunteers }
  });
  // catch(function(error) {
  //   res.status(400).render('main/404');
  // });

app.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile');
});

app.use('/auth', require('./controllers/auth'));
app.use('/orgs', require('./controllers/orgs'));
app.use('/profile', require('./controllers/profile'));
app.use('/search', require('./controllers/search'));
app.use('/volunteers', require('./controllers/volunteers'));

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
