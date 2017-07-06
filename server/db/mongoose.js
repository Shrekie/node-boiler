var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //set promise library to global
mongoose.createConnection(process.env.dbURI);

module.exports = {mongoose};