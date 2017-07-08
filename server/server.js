require('./config/config.js');

// Package imports
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session');

// Custom imports
const {secrets} = require('./config/secrets.js');
const oAuthRoute = require('./routes/google-oauth');
const application = require('./routes/application');

var app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ 
	secret: secrets.sessionSecret,
	resave: true,
  	saveUninitialized: true,
  	cookie: { secure: false }
}));
app.use(express.static(__dirname + '/public/'));
app.use('/bower_components', express.static(path.join(__dirname, '/../bower_components')))

app.get('/error', (req, res) => {
	res.send('Something went wrong.');
});

// OAuth2 authentication
app.use(oAuthRoute);

// isAuthenticated 
app.use('/app/*', function(req, res, next){
	if(req.isAuthenticated()) next();
	else res.sendFile(__dirname + '/public/html/information.html');
});

// register application routes
app.use(application);

app.get('/', (req, res) => {
	if(req.isAuthenticated()) res.sendFile(__dirname + '/public/html/index.html');
	else res.sendFile(__dirname + '/public/html/information.html');
})

app.listen(process.env.PORT, () => {
	console.log('Started on port ', process.env.PORT);
});

//module.exports = {app};