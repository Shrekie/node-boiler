var mongoose = require('mongoose');

var User = mongoose.model('User', {
	Name:{
		type: String,
		default: 'defaultName'
	}
});

module.exports = {User}