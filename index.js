//All dependencies:
require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
// var rowdy = require('rowdy-logger');
var session = require('express-session');
var flash = require('connect-flash');
var isLoggedIn = require('./middleware/isLoggedIn');


var app = express();

// var rowdyResults = rowdy.begin(app);

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
  // before every route, attach the flash messages and current user to res.locals
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

var passport = require('./config/ppConfig');
// initialize the passport configuration and session as middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function(req,res){
  res.send('<h1>Here is some HTML</h1>');
});
// app.get('/', function(req, res) {
//   res.render('index');
// });

app.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile');
});

app.use('/auth', require('./controllers/auth'));



//Bringing in volunteer and org controllers:
app.use('/orgs', require('./controllers/orgs'));
app.use('/volunteers', require('./controllers/volunteers'));

app.get('/', function(req, res){


})

var server = app.listen(process.env.PORT || 3000);

// , function(){
//   rowdyResults.print();
// }
module.exports = server;
