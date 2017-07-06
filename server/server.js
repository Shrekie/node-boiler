require('./config/config.js');

// Package imports
const _ = require('lodash');
const express = require('express')
const bodyParser = require('body-parser')

// Custom imports
const {mongoose} = require('./db/mongoose.js');
const {User} = require('./models/user');

var app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/users', (req, res)=>{

	User.find().then((users) =>{
		res.send({users})
	}, (e) => {
		res.status(400).send(e);
	})

});

// Static
app.use(express.static(__dirname + '/public/'));
app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/html/index.html');
})

app.listen(process.env.PORT, () => {
	console.log('Started on port ', process.env.PORT);
});

module.exports = {app};