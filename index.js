//All dependencies:
var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var rowdy = require('rowdy-logger');

var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'));

//Bringing in volunteer and org controllers:
app.use('/orgs', require('./controllers/orgs'));
app.use('/volunteers', require('./controllers/volunteers'));

var server = app.listen(process.env.PORT || 3000, function(){
  rowdy.print();
});

module.exports = server;
